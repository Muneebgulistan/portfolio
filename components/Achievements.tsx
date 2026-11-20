import { SITE_CONTENT } from "@/data/content";

export default function Achievements() {
  const { achievements } = SITE_CONTENT;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
          {achievements.eyebrow}
        </p>
        <h2
          id="achievements-heading"
          className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          {achievements.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Column 1: Certifications */}
        <div>
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-text sm:text-xl">
              Certifications
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-green">
              4 / 4 UNLOCKED
            </span>
          </div>

          <div className="space-y-4">
            {achievements.certifications.map((cert, index) => (
              <article
                key={cert.title}
                className="hud-panel hud-panel-interactive flex items-start justify-between gap-4 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan/50 bg-cyan/10 font-mono text-xs font-bold text-cyan">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold uppercase text-text sm:text-lg">
                      {cert.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 border border-border bg-bg px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-cyan">
                  {cert.date}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Column 2: Education */}
        <div>
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-text sm:text-xl">
              Education
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan">
              ACADEMIC LOG
            </span>
          </div>

          <div className="space-y-4">
            {achievements.education.map((edu) => (
              <article
                key={edu.degree}
                className="hud-panel hud-panel-interactive p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 border px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest ${
                      edu.current
                        ? "border-green/50 bg-green/10 text-green"
                        : "border-border bg-bg text-muted"
                    }`}
                  >
                    {edu.current && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-green"
                        aria-hidden="true"
                      />
                    )}
                    {edu.period}
                  </span>

                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {edu.location}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-bold uppercase text-text sm:text-xl">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-sm font-medium text-cyan">
                  {edu.institution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
