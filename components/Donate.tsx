import { ArrowUpRight, HeartHandshake, Receipt, Repeat } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

/**
 * Individual giving, kept separate from corporate partnerships.
 * Facts below come from the club's HCB donation page; update lib/site.ts if they change.
 */
export default function Donate() {
  const { url, fiscalSponsor, ein } = site.donate;

  const facts = [
    { Icon: Receipt, title: "Tax-deductible", body: `Donations are processed through HCB, run by ${fiscalSponsor}, a 501(c)(3) nonprofit.` },
    { Icon: Repeat, title: "One-time or monthly", body: "Give once, or set up a recurring monthly donation." },
  ];

  return (
    <section aria-labelledby="donate" className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading id="donate" eyebrow="Donate" title="Support the Club Directly">
              Not a company? You can still help. Individual donations go straight to the {site.name} and
              support our students.
            </SectionHeading>

            <ul className="-mt-4 grid gap-5 sm:grid-cols-2">
              {facts.map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
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

          <div className="panel relative overflow-hidden border-gold/30 p-6 text-center sm:p-8">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/15 blur-[90px]" aria-hidden="true" />
            <HeartHandshake size={30} className="mx-auto text-gold" aria-hidden="true" />
            <p className="mt-4 text-xl font-semibold text-white">Make a donation</p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-slate-400">
              You&apos;ll be taken to our secure donation page on HCB.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3.5 text-[15px] font-semibold text-ink-950 transition hover:bg-gold-bright hover:shadow-[0_0_28px_-6px_rgb(200_185_138/0.7)]"
            >
              Donate
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs text-slate-500">
              Processed by HCB · {fiscalSponsor} EIN {ein}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
