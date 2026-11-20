"use client";

import { useEffect, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEasterEgg() {
  const [godMode, setGodMode] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let buffer: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buffer.push(key);
      if (buffer.length > KONAMI_SEQUENCE.length) {
        buffer = buffer.slice(buffer.length - KONAMI_SEQUENCE.length);
      }

      const matched = KONAMI_SEQUENCE.every(
        (codeKey, idx) => buffer[idx] === codeKey
      );

      if (matched) {
        buffer = [];
        setGodMode((prev) => {
          const next = !prev;
          document.documentElement.classList.toggle("god-mode", next);
          return next;
        });
        setShowBanner(true);
        window.setTimeout(() => setShowBanner(false), 3800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!showBanner) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 border border-cyan bg-panel/95 px-4 py-3 font-mono text-xs uppercase tracking-widest text-cyan shadow-[0_0_24px_rgba(0,240,255,0.45)]"
    >
      {godMode
        ? "★ KONAMI CODE UNLOCKED // GOD MODE ENABLED"
        : "★ KONAMI CODE // STANDARD HUD RESTORED"}
    </div>
  );
}
