import { ArrowRight, Trophy } from "lucide-react";
import { site } from "@/lib/site";
import { partners } from "@/lib/data";

export default function Hero() {
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-niner/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 md:pt-24">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-niner-bright" />
            {site.university} · Collegiate Cybersecurity
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Defending Networks,
            <br />
            <span className="bg-gradient-to-r from-niner-bright via-emerald-300 to-gold-bright bg-clip-text text-transparent">
              Training Leaders.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            The {site.name} develops UNC Charlotte&apos;s next generation of cybersecurity professionals through
            nationally competitive cyber defense teams, offensive security training, and a six-week bootcamp
            for students new to the field.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Partner with us to invest in the talent your organization will hire.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#sponsors" className="btn-primary group">
              Partner With Us
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a href="#accolades" className="btn-ghost">
              <Trophy size={16} className="text-gold" />
              View Our Record
            </a>
          </div>
        </div>

      </div>

      {/* Supported-by strip */}
      <div className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left">
          {partners.length > 0 ? (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Supported by</p>
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {partners.map((p) => (
                  <li key={p.name} className="text-sm font-semibold text-slate-200">
                    {p.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-slate-300">
              <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Now open</span>
              Founding partnerships for the 2026–2027 competition season
            </p>
          )}
          <a href="#sponsors" className="text-sm font-medium text-niner-bright transition hover:text-emerald-300">
            Become a partner →
          </a>
        </div>
      </div>
    </section>
  );
}
