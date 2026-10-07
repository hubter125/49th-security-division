import { CalendarClock, ExternalLink, MapPin, Scale } from "lucide-react";
import { site } from "@/lib/site";
import { DiscordIcon, Emblem, GithubIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear(); // evaluated at build time in a static export

  return (
    <footer className="border-t border-white/[0.07] bg-ink-900/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Emblem size={30} />
              <span className="font-semibold text-white">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              A student organization at {site.university} training the next generation of cyber defenders.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: site.links.discord, label: "Discord", Icon: DiscordIcon },
                { href: site.links.github, label: "GitHub", Icon: GithubIcon },
                { href: site.links.ninerEngage, label: "Niner Engage", Icon: ExternalLink },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="panel panel-hover flex h-9 w-9 items-center justify-center text-slate-400 hover:text-emerald-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Meeting schedule */}
          <div className="panel p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-niner-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-niner-bright" />
              </span>
              Meetings
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-sm text-slate-200">
              <CalendarClock size={16} className="mt-0.5 shrink-0 text-niner-bright" aria-hidden="true" />
              <span>
                {site.meetings.cadence}
                <span className="block text-xs text-slate-500">{site.meetings.day}</span>
              </span>
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-sm text-slate-200">
              <MapPin size={16} className="mt-0.5 shrink-0 text-niner-bright" aria-hidden="true" />
              {site.meetings.location}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-1">
              {[
                ["#about", "About"],
                ["#accolades", "Results"],
                ["#programs", "Programs"],
                ["#blog", "Blog"],
                ["#leadership", "Leadership"],
                ["#sponsors", "Partner With Us"],
                ["#donate", "Donate"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Ethics & legal */}
        <div className="mt-12 flex gap-3 rounded-lg border border-gold/25 bg-gold/[0.04] p-4">
          <Scale size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-[13px] leading-relaxed text-slate-400">
            <strong className="font-semibold text-slate-200">Ethics &amp; Legal Disclaimer.</strong> All activities,
            labs, and tools are conducted strictly for academic, defensive, and authorized research purposes. Members
            may only test systems they own or have explicit written permission to assess.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. A registered student organization at {site.university}.
          </p>
          <p>Not an official university website.</p>
        </div>
      </div>
    </footer>
  );
}
