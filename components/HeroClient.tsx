"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function RoleTypewriter({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion || roles.length === 0) return;

    const currentRole = roles[roleIndex];
    const delay = deleting ? 42 : charIndex === currentRole.length ? 1600 : 80;

    const timer = window.setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, deleting, reducedMotion, roleIndex, roles]);

  if (reducedMotion) {
    return (
      <span className="font-semibold text-cyan">
        {roles.join(" · ")}
      </span>
    );
  }

  const displayed = roles[roleIndex]?.slice(0, charIndex) || roles[0];

  return (
    <span className="inline-flex items-center font-semibold text-cyan">
      <span>{displayed}</span>
      <span
        className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan"
        aria-hidden="true"
      />
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}

export function CopyEmailButton({
  email,
  label,
}: {
  email: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="hud-btn hud-btn-ghost"
      aria-live="polite"
      aria-label={copied ? `Email ${email} copied to clipboard` : `Copy email address ${email}`}
    >
      {copied ? (
        <span className="text-green">Copied ✓</span>
      ) : (
        <>
          <span>{label}</span>
          <span aria-hidden="true" className="font-mono text-xs">
            ⧉
          </span>
        </>
      )}
    </button>
  );
}

export function PlayerPhoto({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-panel font-display text-4xl font-bold tracking-wider text-cyan">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 640px) 112px, 128px"
      onError={() => setError(true)}
      className="object-cover object-[center_18%]"
    />
  );
}
