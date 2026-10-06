import { Bug, Mic, ShieldCheck, Terminal, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Track = { title: string; Icon: LucideIcon; blurb: string; topics: string[] };

const tracks: Track[] = [
  {
    title: "CCDC & Defensive Infrastructure",
    Icon: ShieldCheck,
    blurb:
      "Our CCDC team prepares through a dedicated CCDC prep class, practicing how to harden, monitor, and keep business services running under attack.",
    topics: ["Active Directory hardening", "Windows & Linux administration", "Wazuh SIEM", "Splunk", "Incident response"],
  },
  {
    title: "Offensive Operations & CTFs",
    Icon: Bug,
    blurb: "Members learn how systems fail so they can defend them, through jeopardy-style and attack-defense CTF play.",
    topics: ["Web application security", "Reverse engineering", "Binary exploitation", "Memory analysis"],
  },
  {
    title: "Six-Week Bootcamp",
    Icon: Terminal,
    blurb: "A beginner-focused bootcamp that brings 40+ students into cybersecurity over six weeks.",
    topics: [
      "Intro to Networking",
      "Intro to Linux",
      "Web Exploitation",
      "Intro to Operational Technology",
      "Intro to OSINT",
    ],
  },
  {
    title: "Industry Speakers",
    Icon: Mic,
    blurb: "We bring in speakers from industry to share how security work is done in practice.",
    topics: [],
  },
];

export default function TrainingTracks() {
  return (
    <section aria-labelledby="programs" className="border-t border-white/[0.06] bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="programs" eyebrow="Programs" title="How We Train">
          From a dedicated CCDC prep class to a six-week bootcamp for beginners, members get hands-on practice with
          the tools and techniques used in industry.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map(({ title, Icon, blurb, topics }) => (
            <article key={title} className="panel panel-hover group flex flex-col p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-niner/40 bg-niner/10 text-niner-bright">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{blurb}</p>
              {topics.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} topics`}>
                {topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/[0.07] bg-ink-950/60 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
