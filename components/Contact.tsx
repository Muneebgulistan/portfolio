"use client";

import { useEffect, useState } from "react";
import { SITE_CONTENT, type InterestedOption } from "@/data/content";
import { SELECT_PACK_EVENT } from "@/components/Services";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { contact } = SITE_CONTENT;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState<InterestedOption>("Not sure");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const handlePackSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ pack?: InterestedOption }>;
      const selectedPack = customEvent.detail?.pack;
      if (
        selectedPack &&
        (contact.interestedOptions as readonly string[]).includes(selectedPack)
      ) {
        setInterestedIn(selectedPack);
      }
    };

    window.addEventListener(SELECT_PACK_EVENT, handlePackSelect);
    return () => window.removeEventListener(SELECT_PACK_EVENT, handlePackSelect);
  }, [contact.interestedOptions]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (message.trim().length < 10) {
      nextErrors.message =
        "Please enter a message of at least 10 characters.";
    }
    return nextErrors;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${interestedIn} — from ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nInterested In: ${interestedIn}\n\nMessage:\n${message.trim()}`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback("");

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setFeedback("Please fix the validation errors highlighted below.");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          interestedIn,
          message: message.trim(),
          website,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        fallbackMailto?: boolean;
        fieldErrors?: FormErrors;
      };

      if (data.fieldErrors) {
        setErrors(data.fieldErrors);
      }

      if (data.fallbackMailto) {
        const mailto = buildMailtoUrl();
        window.location.href = mailto;
        setStatus("success");
        setFeedback(
          data.message ||
            "Opening your email client with your pre-filled message..."
        );
        return;
      }

      if (res.ok && data.ok) {
        setStatus("success");
        setFeedback(
          data.message ||
            "Transmission sent! I will reply to your email soon."
        );
        setName("");
        setEmail("");
        setMessage("");
        setWebsite("");
      } else {
        setStatus("error");
        setFeedback(
          data.error ||
            "Could not send message right now. You can also email me directly."
        );
      }
    } catch {
      const mailto = buildMailtoUrl();
      window.location.href = mailto;
      setStatus("error");
      setFeedback(
        "Network unavailable — opened your email client as a fallback."
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
            {contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text/85">
            {contact.lead}
          </p>

          {/* Direct Email Panel */}
          <div className="hud-panel mt-8 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              DIRECT COMM CHANNEL
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1.5 inline-block break-all font-mono text-base font-bold text-cyan hover:underline sm:text-lg"
            >
              {contact.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-4 space-y-3">
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-panel hud-panel-interactive flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan/50 bg-cyan/10 font-mono text-xs font-bold text-cyan">
                    {social.code}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold uppercase text-text">
                      {social.label}
                    </p>
                    <p className="font-mono text-xs text-muted">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-sm text-cyan" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact Form"
            className="hud-panel p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                TRANSMISSION // FORM
              </span>
              <span className="font-mono text-xs text-green">● READY</span>
            </div>

            {/* Honeypot Field (hidden from screen readers and real users) */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="contact-website">
                Website (Leave blank)
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs font-bold uppercase tracking-widest text-text"
                >
                  Name <span className="text-magenta">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  placeholder="Your name"
                  className={`mt-2 w-full border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-cyan focus:outline-none ${
                    errors.name ? "border-magenta" : "border-border"
                  }`}
                />
                {errors.name && (
                  <p
                    id="error-name"
                    role="alert"
                    className="mt-1.5 font-mono text-xs text-magenta"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs font-bold uppercase tracking-widest text-text"
                >
                  Email <span className="text-magenta">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  placeholder="you@example.com"
                  className={`mt-2 w-full border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-cyan focus:outline-none ${
                    errors.email ? "border-magenta" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p
                    id="error-email"
                    role="alert"
                    className="mt-1.5 font-mono text-xs text-magenta"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Interested In Select */}
            <div className="mt-5">
              <label
                htmlFor="contact-interested-in"
                className="block font-mono text-xs font-bold uppercase tracking-widest text-text"
              >
                Interested in
              </label>
              <select
                id="contact-interested-in"
                name="interestedIn"
                value={interestedIn}
                onChange={(e) =>
                  setInterestedIn(e.target.value as InterestedOption)
                }
                className="mt-2 w-full border border-border bg-bg px-4 py-3 text-sm text-text focus:border-cyan focus:outline-none"
              >
                {contact.interestedOptions.map((option) => (
                  <option key={option} value={option} className="bg-panel text-text">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs font-bold uppercase tracking-widest text-text"
              >
                Message <span className="text-magenta">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message)
                    setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "error-message" : undefined}
                placeholder="Tell me about your project, timeline, or collaboration idea (10+ characters)..."
                className={`mt-2 w-full resize-y border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-cyan focus:outline-none ${
                  errors.message ? "border-magenta" : "border-border"
                }`}
              />
              {errors.message && (
                <p
                  id="error-message"
                  role="alert"
                  className="mt-1.5 font-mono text-xs text-magenta"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit + Mailto Fallback Link */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="hud-btn hud-btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {status === "loading"
                    ? "Transmitting..."
                    : "Send transmission"}
                </span>
                <span aria-hidden="true">↗</span>
              </button>

              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-cyan"
              >
                Or email directly ↗
              </a>
            </div>

            {/* Status Feedback Banner */}
            {feedback && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 border px-4 py-3 font-mono text-xs ${
                  status === "success"
                    ? "border-green/50 bg-green/10 text-green"
                    : "border-magenta/60 bg-magenta/10 text-magenta"
                }`}
              >
                {feedback}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
