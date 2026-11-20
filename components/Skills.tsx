"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_CONTENT } from "@/data/content";

export default function Skills() {
  const { skills } = SITE_CONTENT;
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setInView(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="loadout"
      ref={sectionRef}
      aria-labelledby="loadout-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
          {skills.eyebrow}
        </p>
        <h2
          id="loadout-heading"
          className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
        >
          {skills.heading}
        </h2>
        <p className="mt-2 max-w-xl text-base text-muted">
          {skills.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {skills.groups.map((group, groupIdx) => (
          <div
            key={group.id}
            className="hud-panel hud-panel-interactive flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3.5">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                  {group.code}
                </span>
                <span className="font-mono text-xs text-muted">
                  0{groupIdx + 1} / 03
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold uppercase text-text sm:text-2xl">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{group.subtitle}</p>

              <div className="mt-6 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                      <span className="font-semibold text-text">
                        {skill.name}
                      </span>
                      <span className="text-cyan">XP {skill.level}/100</span>
                    </div>
                    <div
                      className="h-2.5 w-full overflow-hidden border border-border bg-bg p-0.5"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-cyan via-purple to-magenta shadow-[0_0_10px_rgba(0,240,255,0.45)] transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
