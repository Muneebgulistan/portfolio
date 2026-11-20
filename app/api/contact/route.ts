import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  interestedIn?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory IP rate limit: max 5 requests per 60 seconds
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) {
    return true;
  }
  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "local";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many messages sent recently. Please wait a minute and try again.",
      },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  // Honeypot spam trap: silently pretend success if filled
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({
      ok: true,
      message: "Transmission received.",
    });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const interestedIn = (body.interestedIn || "Not sure").trim();
  const message = (body.message || "").trim();

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters.";
  }
  if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please fix the highlighted fields.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  const recipientEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || "muneegulistan@gmail.com";

  // 1. Try Resend if RESEND_API_KEY is configured
  if (resendKey) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.RESEND_FROM_EMAIL ||
            "Portfolio HUD <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `[Portfolio HUD] ${interestedIn} — from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nInterested In: ${interestedIn}\n\nMessage:\n${message}`,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({
          ok: true,
          provider: "resend",
          message: "Transmission delivered! I will get back to you shortly.",
        });
      }
      const errData = await resendRes.json().catch(() => ({}));
      return NextResponse.json(
        {
          ok: false,
          error:
            (errData as { message?: string }).message ||
            "Resend delivery failed. Please try again or use direct email.",
        },
        { status: 502 }
      );
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not reach email service. Please use the direct email link.",
        },
        { status: 502 }
      );
    }
  }

  // 2. Try Web3Forms if WEB3FORMS_ACCESS_KEY is configured
  if (web3formsKey) {
    try {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `[Portfolio HUD] ${interestedIn} — from ${name}`,
          from_name: name,
          name,
          email,
          interested_in: interestedIn,
          message,
        }),
      });

      const data = (await web3Res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (web3Res.ok && data.success) {
        return NextResponse.json({
          ok: true,
          provider: "web3forms",
          message: "Transmission delivered! I will get back to you shortly.",
        });
      }

      return NextResponse.json(
        {
          ok: false,
          error:
            data.message ||
            "Web3Forms delivery failed. Opening mail client fallback...",
          fallbackMailto: true,
        },
        { status: 502 }
      );
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Network error contacting mail service.",
          fallbackMailto: true,
        },
        { status: 502 }
      );
    }
  }

  // 3. No API key configured -> instruct client to trigger mailto fallback cleanly
  return NextResponse.json({
    ok: true,
    fallbackMailto: true,
    message:
      "Email API key not configured on server — opening your email client with your pre-filled message.",
  });
}
