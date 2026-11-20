import { SITE_CONTENT } from "@/data/content";

export default function Footer() {
  const { footer, nav } = SITE_CONTENT;

  return (
    <footer className="relative z-10 border-t border-border bg-panel/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="border border-cyan/40 bg-bg px-2 py-0.5 font-mono text-xs font-bold text-cyan">
            {nav.logo}
          </span>
          <span className="font-mono text-xs text-muted">
            {footer.copyright}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 border border-border bg-bg/90 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-text">
          <span
            className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_#39ff88]"
            aria-hidden="true"
          />
          <span>{footer.status}</span>
        </div>

        <a
          href="#top"
          className="font-mono text-xs font-bold uppercase tracking-widest text-cyan transition-colors hover:text-text"
        >
          {footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
