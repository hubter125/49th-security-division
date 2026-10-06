import { ArrowRight } from "lucide-react";

type Props = { title?: string; body?: string };

/** Mid-page prompt that routes readers to the partnership section. */
export default function CtaBand({
  title = "Help us compete at the next level.",
  body = "We're looking for our first partners. Let's talk about what a partnership could look like.",
}: Props) {
  return (
    <div className="relative mt-16 overflow-hidden rounded-xl border border-niner/30 bg-gradient-to-r from-niner/15 via-ink-900/80 to-ink-900/80 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="mt-1 max-w-xl text-sm text-slate-400">{body}</p>
        </div>
        <a href="#sponsors" className="btn-primary group shrink-0">
          Partner With Us
          <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
