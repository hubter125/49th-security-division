import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { officers } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Officers() {
  return (
    <section aria-labelledby="leadership" className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="leadership" eyebrow="Leadership" title="2026–2027 Officers">
          The student leaders responsible for the club&apos;s competition teams, programs, and partnerships.
        </SectionHeading>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {officers.map((o) => (
            <li
              key={o.name}
              className="panel panel-hover flex flex-col items-center p-6 text-center"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full border border-niner/50 bg-gradient-to-br from-niner/30 to-ink-800 text-lg font-semibold tracking-wide text-white"
                aria-hidden="true"
              >
                {initials(o.name)}
              </span>
              <p className="mt-4 font-semibold text-white">{o.name}</p>
              <p className="mt-1 text-[13px] text-slate-400">{o.role}</p>

              {(o.linkedin || o.email) && (
                <div className="mt-4 flex gap-2">
                  {o.linkedin && (
                    <a
                      href={o.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${o.name} on LinkedIn`}
                      className="rounded-md p-1.5 text-slate-500 transition hover:text-white"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  )}
                  {o.email && (
                    <a
                      href={`mailto:${o.email}`}
                      aria-label={`Email ${o.name}`}
                      className="rounded-md p-1.5 text-slate-500 transition hover:text-white"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
