"use client";

import { SITE_CONTENT, type ServicePack } from "@/data/content";

export const SELECT_PACK_EVENT = "hud:select-pack";

export default function Services() {
  const { services } = SITE_CONTENT;

  const handleSelectPack = (packName: ServicePack["name"]) => {
    window.dispatchEvent(
      new CustomEvent(SELECT_PACK_EVENT, { detail: { pack: packName } })
    );
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
    const selectEl = document.getElementById(
      "contact-interested-in"
    ) as HTMLSelectElement | null;
    if (selectEl) {
      window.setTimeout(() => selectEl.focus({ preventScroll: true }), 450);
    }
  };

  return (
    <section
      id="packs"
      aria-labelledby="services-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
          {services.eyebrow}
        </p>
        <h2
          id="services-heading"
          className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          {services.heading}
        </h2>
        <p className="mt-2 max-w-xl text-base text-muted">
          {services.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
        {services.packs.map((pack) => {
          const isPopular = Boolean(pack.popular);
          return (
            <article
              key={pack.id}
              className={`hud-panel flex flex-col justify-between p-6 sm:p-8 ${
                isPopular
                  ? "hud-panel-magenta"
                  : "hud-panel-interactive"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-border pb-4">
                  <span
                    className={`font-mono text-xs uppercase tracking-widest ${
                      isPopular ? "text-magenta" : "text-cyan"
                    }`}
                  >
                    {pack.code}
                  </span>
                  {isPopular && (
                    <span className="border border-magenta bg-magenta px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-bg shadow-[0_0_14px_rgba(255,43,214,0.5)]">
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold uppercase text-text sm:text-3xl">
                  {pack.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {pack.tagline}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border/80 pt-6">
                  {pack.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-text/90 sm:text-base"
                    >
                      <span
                        className={`mt-1 font-mono text-xs font-bold ${
                          isPopular ? "text-magenta" : "text-cyan"
                        }`}
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleSelectPack(pack.name)}
                  className={`hud-btn w-full ${
                    isPopular ? "hud-btn-magenta" : "hud-btn-ghost"
                  }`}
                >
                  <span>Get started</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
