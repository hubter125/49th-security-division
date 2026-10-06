"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { DiscordIcon, Emblem, GithubIcon } from "./icons";

const sections = [
  { href: "#about", label: "About" },
  { href: "#accolades", label: "Results" },
  { href: "#programs", label: "Programs" },
  { href: "#blog", label: "Blog" },
  { href: "#leadership", label: "Leadership" },
];

const external = [
  { href: site.links.discord, label: "Discord", icon: DiscordIcon },
  { href: site.links.ninerEngage, label: "Niner Engage", icon: ExternalLink },
  { href: site.links.github, label: "GitHub", icon: GithubIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when the viewport grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/[0.07] bg-ink-950/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#about" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Emblem size={30} />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-white">{site.name}</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              {site.university}
            </span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="rounded-md px-3 py-2 text-[13.5px] font-medium text-slate-400 transition hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />
          {external.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="rounded-md p-2 text-slate-500 transition hover:bg-white/[0.04] hover:text-slate-200"
            >
              <Icon size={16} />
            </a>
          ))}
          <a href="#sponsors" className="btn-primary group ml-3 px-4 py-2">
            Partner With Us
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href="#sponsors" className="btn-primary px-3.5 py-2 text-[13px]" onClick={() => setOpen(false)}>
            Partner
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-slate-300 hover:bg-white/[0.05]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/[0.07] lg:hidden">
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
          {[...sections, { href: "#sponsors", label: "Partner With Us" }].map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-[15px] font-medium text-slate-300 hover:bg-white/[0.04] hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <div className="grid grid-cols-3 gap-2 pt-3">
            {external.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover flex flex-col items-center gap-1.5 py-3 text-xs text-slate-300"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
