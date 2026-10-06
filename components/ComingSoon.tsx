import { BookOpen, Factory, Globe, Network, ScanSearch, Terminal, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

/** The bootcamp sessions the blog will cover. */
const planned: { Icon: LucideIcon; session: string; title: string }[] = [
  { Icon: Network, session: "Bootcamp", title: "Intro to Networking" },
  { Icon: Terminal, session: "Bootcamp", title: "Intro to Linux" },
  { Icon: Globe, session: "Bootcamp", title: "Web Exploitation" },
  { Icon: Factory, session: "Bootcamp", title: "Intro to Operational Technology" },
  { Icon: ScanSearch, session: "Bootcamp", title: "Intro to OSINT" },
];

export default function ComingSoon() {
  return (
    <section aria-labelledby="blog" className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="blog" eyebrow="Coming Soon" title="The Bootcamp Blog">
            We&apos;re turning our six-week cybersecurity bootcamp into an open blog, with write-ups from each
            session so our training is available to anyone learning the field.
          </SectionHeading>
          <span className="mb-12 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold-bright">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            In development
          </span>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {planned.map(({ Icon, session, title }) => (
            <li key={title} className="panel relative overflow-hidden p-5">
              <div className="flex items-center justify-between">
                <Icon size={19} className="text-niner-bright" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{session}</span>
              </div>
              <p className="mt-5 font-semibold leading-snug text-slate-200">{title}</p>
              {/* Skeleton lines suggest content on the way */}
              <div className="mt-5 space-y-2" aria-hidden="true">
                <div className="h-2 w-full rounded bg-white/[0.05]" />
                <div className="h-2 w-4/5 rounded bg-white/[0.05]" />
                <div className="h-2 w-3/5 rounded bg-white/[0.05]" />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-white/[0.07] bg-ink-900/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-sm text-slate-400">
            <BookOpen size={18} className="shrink-0 text-gold" aria-hidden="true" />
            Want to know when the first posts go live?
          </p>
          <div className="flex shrink-0 gap-3">
            <a href={site.links.discord} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2.5">
              Get Notified on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
