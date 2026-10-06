import { ArrowUpRight, Mail, Plus } from "lucide-react";
import { contactHref, site } from "@/lib/site";
import { partners } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/*
 * Sponsorship benefits and how funds are used are intentionally not listed yet.
 * Add them here once the officer team has finalized them.
 */

export default function Sponsors() {
  const isForm = contactHref.startsWith("http");
  const linkProps = isForm ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section aria-labelledby="sponsors" className="relative isolate border-t border-niner/20 bg-ink-900/50">
      <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <SectionHeading id="sponsors" eyebrow="Partner With Us" title="Invest in the Next Generation of Defenders" center>
          We&apos;re looking for organizations that want to support UNC Charlotte&apos;s cybersecurity students.
          Reach out and let&apos;s talk about what a partnership could look like.
        </SectionHeading>

        {/* Primary conversion card */}
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-niner/40 bg-gradient-to-br from-niner/25 via-ink-900 to-ink-900 p-6 text-center shadow-[0_0_60px_-20px_rgb(0_112_60/0.6)] sm:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-niner/30 blur-[90px]" aria-hidden="true" />
          <p className="eyebrow">Start a Conversation</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">Become a {site.shortName} partner</h3>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-300">
            Email our officer team and we&apos;ll follow up.
          </p>

          {!isForm && (
            <a
              href={contactHref}
              className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-3 rounded-lg border border-white/[0.08] bg-ink-950/60 p-4 transition hover:border-emerald-500/40"
            >
              <Mail size={18} className="shrink-0 text-niner-bright" aria-hidden="true" />
              <span className="break-all text-base font-semibold text-white">{site.contact.email}</span>
            </a>
          )}

          <a href={contactHref} {...linkProps} className="btn-primary mt-5 w-full max-w-sm py-3.5 text-[15px]">
            Get in Touch
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Current partners, or a founding-partner invitation while there are none */}
        <div className="mt-12">
          {partners.length > 0 ? (
            <>
              <p className="eyebrow text-center">Our Partners</p>
              <ul className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
                {partners.map((p) => {
                  const inner = (
                    <>
                      <span className="text-base font-semibold text-white">{p.name}</span>
                      <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold">{p.kind}</span>
                    </>
                  );
                  const cls =
                    "panel panel-hover flex h-full min-h-28 flex-col items-center justify-center border-gold/25 bg-ink-950/60 p-5 text-center";
                  return (
                    <li key={p.name}>
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
                <li>
                  <a
                    href={contactHref}
                    {...linkProps}
                    className="flex h-full min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 p-5 text-center text-sm text-slate-400 transition hover:border-emerald-500/40 hover:text-white"
                  >
                    <Plus size={18} aria-hidden="true" />
                    Your organization here
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <a
              href={contactHref}
              {...linkProps}
              className="group mx-auto flex max-w-2xl flex-col items-center gap-2 rounded-xl border border-dashed border-gold/35 bg-gold/[0.03] px-6 py-8 text-center transition hover:border-gold/60 hover:bg-gold/[0.06]"
            >
              <span className="eyebrow">Founding Partners</span>
              <span className="text-lg font-semibold text-white">Your organization here</span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-niner-bright transition group-hover:text-emerald-300">
                <Plus size={16} aria-hidden="true" />
                Become one of our first partners
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
