import { ArrowRight, Trophy } from "lucide-react";
import { site } from "@/lib/site";
import { accolades, partners } from "@/lib/data";

export default function Hero() {
  const years = accolades.map((a) => a.year);
  const seasons = Math.max(...years) - Math.min(...years) + 1;

  const stats = [
    { value: "1st", label: "Place, 2025 Army National Guard CTF" },
    { value: String(accolades.length), label: "Top-tier national & regional finishes" },
    { value: String(seasons), label: "Consecutive competitive seasons" },
    { value: "40+", label: "Students in our six-week bootcamp" },
  ];

  return (
    <section id="about" className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-niner/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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

        {/* At a glance */}
        <div className="panel overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
            <p className="text-sm font-semibold text-white">Program at a glance</p>
            <span className="text-xs text-slate-500">
              {Math.min(...years)}–{Math.max(...years)}
            </span>
          </div>
          <dl className="grid grid-cols-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse px-6 py-6 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-white/[0.07]`}
              >
                <dt className="mt-1.5 text-[13px] leading-snug text-slate-400">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
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
