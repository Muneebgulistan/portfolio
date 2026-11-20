import { SITE_CONTENT } from "@/data/content";
import {
  CopyEmailButton,
  PlayerPhoto,
  RoleTypewriter,
} from "@/components/HeroClient";

export default function Hero() {
  const { hero, meta } = SITE_CONTENT;

  return (
    <section
      id="top"
      aria-label="Hero Intro"
      className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2.5 border border-cyan/35 bg-panel/80 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan">
            <span
              className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_#39ff88]"
              aria-hidden="true"
            />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-[0.96] tracking-tight text-text sm:text-6xl md:text-7xl xl:text-[5.25rem]">
            <span className="block">{hero.firstName}</span>
            <span
              className="glitch-word mt-1 block"
              data-text={hero.lastName}
            >
              {hero.lastName}
            </span>
          </h1>

          <div className="mt-6 flex min-h-[2rem] flex-wrap items-center gap-2 font-mono text-base sm:text-lg">
            <span className="text-muted">CLASS //</span>
            <RoleTypewriter roles={hero.typingRoles} />
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-text/90 sm:text-lg">
            {hero.lead}
          </p>

          {/* 3 HUD Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a href="#quests" className="hud-btn hud-btn-primary">
              <span>{hero.ctas.quests}</span>
              <span aria-hidden="true">↘</span>
            </a>

            <a
              href={meta.resumeHref}
              download="Muneeb-Gulistan-Resume.docx"
              className="hud-btn hud-btn-ghost"
            >
              <span>{hero.ctas.resume}</span>
              <span aria-hidden="true">↓</span>
            </a>

            <CopyEmailButton
              email={meta.email}
              label={hero.ctas.copyEmail}
            />
          </div>
        </div>

        {/* Right Column: Player Card HUD */}
        <div className="lg:col-span-5">
          <aside
            aria-label="Player HUD Card"
            className="hud-panel hud-panel-interactive mx-auto max-w-md p-6 sm:p-7"
          >
            {/* Card Header Bar */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {hero.playerCard.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 border border-cyan/50 bg-cyan/10 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-cyan"
                  aria-hidden="true"
                />
                {hero.playerCard.level}
              </span>
            </div>

            {/* Avatar + Identity */}
            <div className="mt-5 flex items-center gap-4 sm:gap-5">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden border-2 border-cyan/60 bg-bg shadow-[0_0_25px_rgba(0,240,255,0.2)] sm:h-32 sm:w-32">
                <PlayerPhoto
                  src={meta.profileImage}
                  alt="Muneeb Gulistan portrait"
                  initials={hero.playerCard.initials}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-green sm:text-[11px]">
                  ● AVAILABLE FOR NEW PROJECTS
                </p>
                <h2 className="mt-1 font-display text-lg font-bold uppercase leading-tight tracking-wide text-text sm:text-2xl">
                  Muneeb Gulistan
                </h2>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  Pak Austria Institute · BS AI
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {hero.playerCard.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-border bg-bg/70 px-3.5 py-2.5"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-text sm:text-base">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* XP Bar */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="mb-2 flex items-center justify-between font-mono text-xs">
                <span className="uppercase tracking-widest text-muted">
                  XP PROGRESS
                </span>
                <span className="font-semibold text-cyan">
                  {hero.playerCard.xp.label}
                </span>
              </div>
              <div
                className="h-2.5 w-full overflow-hidden border border-border bg-bg p-0.5"
                role="progressbar"
                aria-label="BS Artificial Intelligence Semester Progress"
                aria-valuenow={2}
                aria-valuemin={0}
                aria-valuemax={8}
              >
                <div
                  className="h-full bg-gradient-to-r from-cyan via-purple to-magenta shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${hero.playerCard.xp.percent}%` }}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
