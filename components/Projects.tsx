"use client";

import { useState } from "react";
import {
  SITE_CONTENT,
  type QuestCategory,
  type QuestDifficulty,
} from "@/data/content";

function DifficultyBadge({ difficulty }: { difficulty: QuestDifficulty }) {
  if (difficulty === "MEDIUM") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-green/50 bg-green/10 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
        MEDIUM
      </span>
    );
  }
  if (difficulty === "HARD") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-magenta/60 bg-magenta/15 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-magenta">
        <span
          className="h-1.5 w-1.5 rounded-full bg-magenta"
          aria-hidden="true"
        />
        HARD
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-amber-400/70 bg-amber-400/15 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.38)]">
      <span
        className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_#fcd34d]"
        aria-hidden="true"
      />
      BOSS
    </span>
  );
}

export default function Projects() {
  const { projects } = SITE_CONTENT;
  const [activeFilter, setActiveFilter] = useState<QuestCategory>("All");

  const filteredQuests =
    activeFilter === "All"
      ? projects.items
      : projects.items.filter((item) =>
          (item.categories as readonly string[]).includes(activeFilter)
        );

  return (
    <section
      id="quests"
      aria-labelledby="quests-heading"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
            {projects.eyebrow}
          </p>
          <h2
            id="quests-heading"
            className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            {projects.heading}
          </h2>
          <p className="mt-2 max-w-xl text-base text-muted">
            {projects.subheading}
          </p>
        </div>

        {/* Filter Chips */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {projects.filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isSelected}
                className={`border px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                  isSelected
                    ? "border-cyan bg-cyan text-bg shadow-[0_0_16px_rgba(0,240,255,0.4)]"
                    : "border-border bg-panel text-text hover:border-cyan/60 hover:text-cyan"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quests Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuests.map((quest) => (
          <article
            key={quest.id}
            className="hud-panel hud-panel-interactive flex flex-col justify-between p-6"
          >
            <div>
              {/* Top Meta Line */}
              <div className="flex items-center justify-between gap-2 border-b border-border pb-3.5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                  {quest.code}
                </span>
                <DifficultyBadge difficulty={quest.difficulty} />
              </div>

              {/* Categories */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {quest.categories.map((cat) => (
                  <span
                    key={cat}
                    className="font-mono text-[10px] uppercase tracking-widest text-muted"
                  >
                    [{cat}]
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-text sm:text-2xl">
                {quest.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text/85 sm:text-base">
                {quest.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/70">
              {/* Tech Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {quest.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-bg/80 px-2.5 py-1 font-mono text-xs text-text/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Repo Link */}
              <a
                href={quest.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan transition-colors hover:text-text"
              >
                <span>View source</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only">for {quest.title} on GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
