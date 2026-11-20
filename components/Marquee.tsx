import { SITE_CONTENT } from "@/data/content";

export default function Marquee() {
  const items = SITE_CONTENT.marquee;

  return (
    <div
      aria-label="Core Technologies"
      className="relative z-10 my-4 overflow-hidden py-3"
    >
      <div className="-mx-2 -rotate-1 border-y border-magenta/40 bg-gradient-to-r from-magenta/20 via-purple/25 to-magenta/20 py-3.5 shadow-[0_0_25px_rgba(255,43,214,0.12)]">
        <div className="marquee-track items-center">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1 ? "true" : undefined}
              className="flex shrink-0 items-center"
            >
              {items.map((tech) => (
                <span
                  key={`${dupIndex}-${tech}`}
                  className="inline-flex items-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-text sm:text-sm"
                >
                  <span className="px-4 sm:px-6">{tech}</span>
                  <span className="text-magenta" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
