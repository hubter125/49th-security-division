import { Award, Crown, Medal } from "lucide-react";
import { accolades, type Accolade } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import CtaBand from "./CtaBand";

function badgeStyle(tier: Accolade["tier"]) {
  switch (tier) {
    case "champion":
      return { Icon: Crown, chip: "border-gold/50 bg-gold/15 text-gold-bright", ring: "border-gold/40" };
    case "podium":
      return { Icon: Medal, chip: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300", ring: "border-emerald-500/30" };
    default:
      return { Icon: Award, chip: "border-white/10 bg-white/[0.04] text-slate-300", ring: "border-white/[0.07]" };
  }
}

export default function Accomplishments() {
  const byYear = Object.entries(
    accolades.reduce<Record<number, Accolade[]>>((acc, a) => {
      (acc[a.year] ??= []).push(a);
      return acc;
    }, {}),
  ).sort(([a], [b]) => Number(b) - Number(a));

  return (
    <section aria-labelledby="accolades" className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="accolades" eyebrow="Competition Record" title="Proven Under Pressure">
          Our teams compete against top collegiate programs nationwide, from capture-the-flag events to CCDC, where
          students defend live enterprise networks against professional red teams.
        </SectionHeading>

        <ol className="relative space-y-12 border-l border-white/[0.08] pl-6 sm:pl-10">
          {byYear.map(([year, items]) => (
            <li key={year} className="relative">
              <span
                className="absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full border border-niner-bright bg-ink-950 sm:-left-[47px]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-niner-bright" />
              </span>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-gold">{year}</h3>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => {
                  const { Icon, chip, ring } = badgeStyle(a.tier);
                  return (
                    <li key={`${a.year}-${a.event}`} className={`panel panel-hover ${ring} p-5`}>
                      <div className="flex items-start justify-between gap-3">
                        <Icon
                          size={20}
                          className={a.tier === "champion" ? "text-gold" : "text-niner-bright"}
                          aria-hidden="true"
                        />
                        <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${chip}`}>
                          {a.placement}
                        </span>
                      </div>
                      <p className="mt-4 font-semibold text-white">{a.event}</p>
                      <p className="mt-1 text-xs text-slate-500">{a.year} season</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>

        <CtaBand />
      </div>
    </section>
  );
}
