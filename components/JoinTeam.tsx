import { ArrowUpRight, ChevronDown, ShieldCheck, Swords, Users } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

/**
 * Student recruitment for the competition team.
 * Pure markup (no client JS): the button opens the Google Form in a new tab, and the
 * <details> block embeds it inline — the iframe only loads once someone expands it.
 */
export default function JoinTeam() {
  const { formUrl, embedUrl } = site.competitionTeam;

  const points = [
    { Icon: ShieldCheck, title: "Blue team", body: "Harden and defend live networks at CCDC and CyberForce." },
    { Icon: Swords, title: "Red team & CTFs", body: "Sharpen offensive skills in capture-the-flag events." },
    { Icon: Users, title: "All levels welcome", body: "No competition experience needed. We train you up." },
  ];

  return (
    <section aria-labelledby="join" className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading id="join" eyebrow="Join the Team" title="Compete With Us">
              Interested in representing {site.university} at CCDC, CyberForce, and CTFs? Let us know and
              we&apos;ll reach out about tryouts and practice.
            </SectionHeading>

            <ul className="-mt-4 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {points.map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-niner/40 bg-niner/10 text-niner-bright">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-400">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel relative overflow-hidden border-niner/30 p-6 text-center sm:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-niner/20 blur-[90px]" aria-hidden="true" />
            <Users size={30} className="relative mx-auto text-niner-bright" aria-hidden="true" />
            <p className="relative mt-4 text-xl font-semibold text-white">Express interest</p>
            <p className="relative mx-auto mt-2 max-w-xs text-sm text-slate-400">
              A short Google Form. Takes about two minutes.
            </p>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-primary relative mt-6 w-full py-3.5 text-[15px]">
              Open the form
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <details className="group panel mt-10 overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium text-slate-300 transition hover:text-white [&::-webkit-details-marker]:hidden">
            Or fill it out here
            <ChevronDown size={16} className="transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-white/[0.07] bg-white">
            <iframe
              src={embedUrl}
              title="Competition team interest form"
              loading="lazy"
              className="block h-[1000px] w-full"
            >
              Loading…
            </iframe>
          </div>
        </details>
      </div>
    </section>
  );
}
