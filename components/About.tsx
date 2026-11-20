import { SITE_CONTENT } from "@/data/content";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  const { about } = SITE_CONTENT;

  return (
    <section
      id="player"
      aria-labelledby="about-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
          {about.eyebrow}
        </p>
        <h2
          id="about-heading"
          className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          {about.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Bio + Guild Cards */}
        <div className="space-y-6 lg:col-span-7">
          <div className="hud-panel p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-text/90 sm:text-lg">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Founding Member Guild Panels */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.highlights.map((guild) => (
              <div
                key={guild.title}
                className="hud-panel hud-panel-interactive p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-magenta">
                    {guild.tag}
                  </span>
                  <span className="border border-cyan/40 bg-cyan/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan">
                    {guild.role}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold uppercase text-text">
                  {guild.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {guild.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {about.counters.map((counter) => (
            <div
              key={counter.label}
              className="hud-panel hud-panel-interactive flex flex-col justify-between p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {counter.code}
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_#00f0ff]"
                  aria-hidden="true"
                />
              </div>
              <div className="my-3 font-display text-4xl font-bold text-cyan sm:text-5xl">
                <AnimatedCounter
                  target={counter.value}
                  suffix={counter.suffix}
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-text">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
