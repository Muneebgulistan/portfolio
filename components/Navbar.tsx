"use client";

import { useEffect, useState } from "react";
import { SITE_CONTENT } from "@/data/content";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("player");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = SITE_CONTENT.nav.links.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-3 font-mono text-lg font-bold tracking-wider text-text"
          aria-label="Muneeb Gulistan Home"
        >
          <span className="inline-flex items-center justify-center border border-cyan/50 bg-panel px-2.5 py-1 text-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-colors group-hover:bg-cyan group-hover:text-bg">
            {SITE_CONTENT.nav.logo}
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-border bg-panel/90 px-3 py-1 font-mono text-[11px] tracking-widest text-muted sm:inline-flex">
            <span
              className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_#39ff88]"
              aria-hidden="true"
            />
            <span className="text-green">{SITE_CONTENT.nav.statusText}</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 md:flex lg:gap-2"
        >
          {SITE_CONTENT.nav.links.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.sectionId}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-cyan"
                    : "text-text/80 hover:text-cyan"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-cyan shadow-[0_0_8px_#00f0ff]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE_CONTENT.nav.ctaHref} className="hud-btn hud-btn-primary">
            {SITE_CONTENT.nav.ctaLabel}
          </a>
        </div>

        {/* Mobile Status + Hamburger Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-panel px-2.5 py-1 font-mono text-[10px] tracking-widest text-green">
            <span
              className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_6px_#39ff88]"
              aria-hidden="true"
            />
            {SITE_CONTENT.nav.statusText}
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-hud-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-border bg-panel text-cyan transition-colors hover:border-cyan"
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          id="mobile-hud-menu"
          aria-label="Mobile Navigation"
          className="border-t border-border bg-panel/95 px-4 pb-6 pt-4 backdrop-blur-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {SITE_CONTENT.nav.links.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between border-l-2 px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors ${
                      isActive
                        ? "border-cyan bg-cyan/10 text-cyan"
                        : "border-transparent text-text hover:border-border hover:bg-bg/40"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-muted">↗</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-3 border-t border-border">
            <a
              href={SITE_CONTENT.nav.ctaHref}
              onClick={closeMenu}
              className="hud-btn hud-btn-primary w-full"
            >
              {SITE_CONTENT.nav.ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
