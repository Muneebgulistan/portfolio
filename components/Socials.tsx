import { SITE_CONTENT } from "@/data/content";

export default function Socials() {
  const { socialsSection } = SITE_CONTENT;

  return (
    <section
      id="social"
      aria-labelledby="social-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
          {socialsSection.eyebrow}
        </p>
        <h2
          id="social-heading"
          className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          {socialsSection.heading}
        </h2>
        <p className="mt-2 max-w-xl text-base text-muted">
          {socialsSection.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {socialsSection.channels.map((channel) => (
          <a
            key={channel.name}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-panel hud-panel-interactive group flex flex-col justify-between p-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                  {channel.code}
                </span>
                <span
                  className="font-mono text-sm text-cyan transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold uppercase text-text group-hover:text-cyan sm:text-xl">
                {channel.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-magenta">
                {channel.handle}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {channel.detail}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
