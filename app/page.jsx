"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import useScrolled from "@/components/useScrolled";
import MonoLabel from "@/components/MonoLabel";
import { TEMPLATES } from "@/components/TemplateThumbs";


// ── Browser-chrome thumbnail frame ──────────────────────────────────────────
function ThumbFrame({ template, large }) {
  return (
    <div className="rounded-xl overflow-hidden bg-brand-bg border border-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-brand-surface-2 border-b border-white/[0.04]">
        <div className="flex gap-[5px]">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <span
              key={i}
              className="w-[9px] h-[9px] rounded-full opacity-85"
              style={{ background: c }}
            />
          ))}
        </div>
        <div className="flex-1 ml-1.5 px-2.5 py-1 bg-brand-bg rounded-md font-mono text-[11px] tracking-wide text-brand-fg-mute text-center whitespace-nowrap overflow-hidden text-ellipsis">
          {template.url || `${template.id}.com`}
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-[3px] h-[3px] rounded-full bg-brand-fg-dim" />
          ))}
        </div>
      </div>

      {/* Thumbnail preview */}
      <div className={`w-full bg-brand-surface overflow-hidden ${large ? "h-[440px]" : "h-[220px]"}`}>
        {template.img ? (
          <img
            src={template.img}
            alt={`${template.name} template preview`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          template.Thumb && <template.Thumb />
        )}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// NAV
// ═══════════════════════════════════════════════════════════════════════════
function Nav() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-brand-border backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-brand-bg/85" : "bg-brand-bg/60"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 xl:px-20 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-brand-fg text-brand-bg flex items-center justify-center font-serif italic text-xl font-medium">
            v
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-brand-fg tracking-tight">
              Vitor Helmbrecht
            </span>
            <MonoLabel className="text-[9px] mt-px">
              Independent · est. 2021
            </MonoLabel>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9 text-sm text-brand-fg-mute">
          {["Work", "Process", "Pricing", "Notes"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-brand-fg transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2.5 pl-[18px] pr-4 py-2.5 rounded-full bg-brand-fg text-brand-bg font-medium text-[13px] hover:opacity-90 transition-opacity"
          >
            Start a project
            <span className="inline-flex w-5 h-5 rounded-full bg-brand-bg text-brand-fg items-center justify-center text-[10px]">
              →
            </span>
          </a>
          <button
            className="md:hidden text-brand-fg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border px-6 py-5 space-y-4 bg-brand-bg/95 backdrop-blur-md">
          {["Work", "Process", "Pricing", "Notes"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block text-brand-fg-mute hover:text-brand-fg py-1.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center py-3 rounded-xl bg-brand-fg text-brand-bg font-medium text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Start a project →
          </a>
        </div>
      )}
    </nav>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <header className="relative px-6 md:px-12 lg:px-16 xl:px-20 pt-16 md:pt-20 lg:pt-[88px] pb-20 lg:pb-24">
      {/* Soft accent glow */}
      <div className="absolute -top-[100px] -right-[100px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.10),transparent_65%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-end">
        {/* LEFT — Headline */}
        <FadeIn>
          <div>
            <MonoLabel>
              <span className="text-brand-accent">●</span> &nbsp; Now booking · Q2 / Q3 2026
            </MonoLabel>

            <h1 className="font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] leading-[0.98] tracking-[-2px] md:tracking-[-3px] xl:tracking-[-4px] text-brand-fg mt-6 lg:mt-7 pb-[0.12em]">
              Quietly fast
              <br />
              websites for
              <br />
              <span className="font-serif italic font-normal">
                serious
              </span>{" "}
              people
              <span className="text-brand-accent">.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-brand-fg-mute mt-8 lg:mt-9 max-w-[520px] tracking-tight">
              I&rsquo;m Vitor — a freelance full-stack web developer
              building modern, secure and performant web apps for
              businesses of every size. Clean code, fast delivery, honest
              pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10 lg:mt-11">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-[15px] rounded-xl bg-brand-fg text-brand-bg font-medium text-[15px] hover:opacity-90 transition-opacity"
              >
                See the work
                <span className="text-sm">→</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-6 py-[15px] rounded-xl border border-brand-border text-brand-fg font-medium text-[15px] hover:border-brand-fg-dim transition-colors"
              >
                Read a one-pager
              </a>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — Calling card */}
        <FadeIn delay={0.15}>
          <aside className="bg-brand-surface border border-brand-border rounded-2xl p-6 lg:p-7 relative shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            {/* Corner mark */}
            <div className="absolute top-3.5 right-3.5 flex gap-1">
              {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>
            <MonoLabel>—— Calling card</MonoLabel>

            <div className="mt-5 flex flex-col">
              {[
                ["Name", "Vitor Helmbrecht", null],
                ["Based", "Santa Catarina, Brazil", " (GMT-3)"],
                ["Frontend", "React · Next · TypeScript", null],
                ["Backend", "Node · Postgres · APIs", null],
                ["Reply time", "Within 24 hours", null],
                ["Project from", "$2,400 USD", null],
                ["Next opening", "June 2026", "accent"],
              ].map(([key, value, extra], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-baseline py-3.5 text-sm ${
                    i < 6 ? "border-b border-dashed border-brand-border" : ""
                  }`}
                >
                  <MonoLabel className="text-[10px]">{key}</MonoLabel>
                  <span className="text-brand-fg-mute">
                    <span
                      className={
                        extra === "accent"
                          ? "text-brand-accent"
                          : "text-brand-fg"
                      }
                    >
                      {value}
                    </span>
                    {extra && extra !== "accent" && (
                      <span className="text-brand-fg-dim">{extra}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-6 pt-5 border-t border-brand-border flex justify-between items-end">
              <MonoLabel className="text-[10px]">Signed,</MonoLabel>
              <span className="font-serif italic text-[32px] text-brand-fg leading-none">
                Vitor H.
              </span>
            </div>
          </aside>
        </FadeIn>
      </div>

      {/* Bottom strip — tech stack */}
      <FadeIn delay={0.3}>
        <div className="mt-16 lg:mt-[88px] pt-6 border-t border-brand-border flex flex-col gap-3.5">
          {[
            { label: "Frontend —", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
            { label: "Backend —", items: ["Node.js", "Postgres", "REST & GraphQL", "Stripe", "Resend", "Sanity"] },
          ].map(({ label, items }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
              <MonoLabel className="min-w-[120px]">{label}</MonoLabel>
              <div className="flex flex-wrap gap-x-7 gap-y-1">
                {items.map((t) => (
                  <span key={t} className="text-sm text-brand-fg-mute">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </header>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATE CARD
// ═══════════════════════════════════════════════════════════════════════════
function TemplateCard({ template, large }) {
  return (
    <article
      className={`bg-brand-surface rounded-2xl border border-brand-border overflow-hidden flex flex-col ${
        large ? "col-span-1 md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Thumbnail */}
      <div className={large ? "p-5 lg:p-7 pb-0" : "p-4 lg:p-[18px] pb-0"}>
        <ThumbFrame template={template} large={large} />
      </div>

      {/* Info */}
      <div className={`flex-1 flex flex-col ${large ? "p-5 lg:p-7 pt-5 lg:pt-6" : "p-4 lg:p-[22px] pt-4 lg:pt-5"}`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <MonoLabel className="!text-brand-accent text-[10px]">
              {template.cat}
            </MonoLabel>
            <h3
              className={`font-medium text-brand-fg mt-1.5 tracking-tight ${
                large ? "text-2xl lg:text-[32px]" : "text-lg lg:text-[22px]"
              }`}
            >
              {template.name}
            </h3>
          </div>
          {large && (
            <span className="font-mono text-[9px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full bg-brand-accent-soft text-brand-accent">
              Featured
            </span>
          )}
        </div>

        <p
          className={`leading-relaxed text-brand-fg-mute mt-1 mb-4 flex-1 ${
            large ? "text-sm lg:text-[15px]" : "text-xs lg:text-[13px]"
          }`}
        >
          {template.desc}
        </p>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-[5px]">
            {(large ? template.tags : template.tags.slice(0, 3)).map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md text-[10px] bg-brand-fg/[0.04] text-brand-fg-mute border border-brand-border"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={`/templates/${template.slug}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-brand-border text-brand-fg text-xs hover:bg-brand-fg/[0.06] transition-colors"
          >
            View <span>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATES SECTION
// ═══════════════════════════════════════════════════════════════════════════
function TemplatesSection() {
  const [tab, setTab] = useState("starter");
  const list = TEMPLATES[tab];

  return (
    <section
      id="work"
      className="px-6 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-[120px] border-t border-brand-border"
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-12 mb-10 lg:mb-12">
          <div>
            <MonoLabel>§ 02 — Templates</MonoLabel>
            <h2 className="font-medium text-4xl md:text-5xl lg:text-[64px] tracking-[-1px] lg:tracking-[-2px] leading-[1.04] text-brand-fg mt-3.5 pb-[0.14em]">
              Eight starters,
              <br />
              ready for{" "}
              <span className="font-serif italic font-normal">remixing</span>.
            </h2>
          </div>
          <p className="text-sm lg:text-[15px] leading-relaxed text-brand-fg-mute lg:max-w-[380px] lg:mb-2">
            Visual demos built with React, Next.js & Tailwind to show what your
            site could look like. These are starting points — not fully
            functional apps — designed to help us explore directions before we
            build the real thing.
          </p>
        </div>
      </FadeIn>

      {/* Tab bar */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 lg:mb-10 p-3.5 lg:p-[18px] rounded-[14px] border border-brand-border bg-brand-surface">
          <div className="inline-flex gap-1">
            {[
              ["starter", "Starter", "04"],
              ["premium", "Premium", "04"],
            ].map(([id, label, count]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`inline-flex items-center gap-2.5 px-4 lg:px-[18px] py-2.5 rounded-full border-none text-sm font-medium transition-all cursor-pointer ${
                  tab === id
                    ? "bg-brand-fg text-brand-bg"
                    : "bg-transparent text-brand-fg-mute hover:text-brand-fg"
                }`}
              >
                {id === "premium" && <span className="text-[11px]">✦</span>}
                {label}
                <span
                  className={`px-[7px] py-[2px] rounded-full text-[10px] font-mono ${
                    tab === id
                      ? "bg-brand-bg/15 text-brand-bg"
                      : "bg-brand-fg/[0.06] text-brand-fg-mute"
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
          <MonoLabel className="text-[10px] hidden sm:block">
            {tab === "starter"
              ? "Starter tier · From $1,200"
              : "Premium tier · From $3,600"}
          </MonoLabel>
        </div>
      </FadeIn>

      {/* Bento grid */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18px]">
          <TemplateCard template={list[0]} large />
          <TemplateCard template={list[1]} />
          <TemplateCard template={list[2]} />
          <TemplateCard template={list[3]} />
        </div>
      </FadeIn>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// PROCESS
// ═══════════════════════════════════════════════════════════════════════════
const PROCESS_STEPS = [
  {
    n: "01",
    t: "Brief & quote",
    mono: "~ 2 days · Free",
    body: "A short call to map goals, audience and scope. You leave with a written brief and a fixed quote — no surprise invoices later.",
    meta: ["30-min call", "Written brief", "Fixed quote"],
  },
  {
    n: "02",
    t: "Design & build",
    mono: "~ 2–3 weeks",
    body: "I share a working prototype within days. You comment, I iterate. We polish copy, motion and the small details together.",
    meta: ["Working prototype", "Iterate via Loom", "Final hand-off"],
  },
  {
    n: "03",
    t: "Ship & care",
    mono: "Ongoing",
    body: "I deploy to your domain, hand over a clean codebase, and stay on retainer for fixes, content updates and small improvements.",
    meta: ["Domain setup", "Clean codebase", "Retainer ready"],
  },
];

function ProcessSection() {
  return (
    <section
      id="process"
      className="px-6 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-[120px] border-t border-brand-border"
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12 lg:mb-16">
          <div>
            <MonoLabel>§ 03 — How we work</MonoLabel>
            <h2 className="font-medium text-4xl md:text-5xl lg:text-[64px] tracking-[-1px] lg:tracking-[-2px] leading-[1.04] text-brand-fg mt-3.5 pb-[0.14em]">
              Three steps,
              <br />
              done in the{" "}
              <span className="font-serif italic font-normal">open</span>.
            </h2>
          </div>
          <MonoLabel className="text-[10px]">
            Roughly 4 weeks · From brief to live
          </MonoLabel>
        </div>
      </FadeIn>

      {/* Steps */}
      <div className="flex flex-col">
        {PROCESS_STEPS.map((step, i) => (
          <FadeIn key={step.n} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[120px_1fr_1fr_220px] gap-4 md:gap-6 lg:gap-8 py-8 lg:py-10 border-t border-brand-border items-start">
              {/* Number */}
              <span className="font-serif italic text-6xl lg:text-[80px] text-brand-accent leading-[0.9]">
                {step.n}
              </span>

              {/* Title */}
              <h3 className="text-2xl lg:text-[32px] font-medium tracking-tight text-brand-fg m-0">
                {step.t}
              </h3>

              {/* Body */}
              <p className="text-sm lg:text-[15px] leading-relaxed text-brand-fg-mute m-0">
                {step.body}
              </p>

              {/* Meta */}
              <div className="flex flex-col gap-1.5">
                <MonoLabel>{step.mono}</MonoLabel>
                <ul className="list-none p-0 mt-2.5">
                  {step.meta.map((m) => (
                    <li
                      key={m}
                      className="text-[13px] text-brand-fg-mute py-1 flex gap-2"
                    >
                      <span className="text-brand-accent">›</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════════════════════════
function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-16 xl:px-20 pt-20 lg:pt-[120px] pb-10 lg:pb-12 border-t border-brand-border relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
        {/* LEFT — Heading + contact links */}
        <FadeIn>
          <div>
            <MonoLabel>§ 04 — Let&rsquo;s talk</MonoLabel>
            <h2 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] tracking-[-1px] md:tracking-[-2px] xl:tracking-[-3px] leading-none text-brand-fg mt-5 pb-[0.1em]">
              A good site
              <br />
              starts with a
              <br />
              <span className="font-serif italic font-normal">conversation</span>
              <span className="text-brand-accent">.</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-brand-fg-mute max-w-[480px] mt-8">
              Tell me about your project — goals, audience, rough timeline.
              I read every message and reply within a day.
            </p>

            {/* Contact cards */}
            <div className="mt-10 lg:mt-12 flex flex-col gap-4 lg:gap-[18px]">
              {/* Email — primary */}
              <a
                href="mailto:vitorhhelmbrecht@gmail.com"
                className="flex justify-between items-center p-5 lg:p-6 rounded-[14px] bg-brand-fg text-brand-bg no-underline hover:opacity-[0.92] transition-opacity"
              >
                <span>
                  <MonoLabel className="!text-brand-bg/55 text-[10px]">
                    Email
                  </MonoLabel>
                  <div className="text-lg lg:text-xl font-medium tracking-tight mt-0.5">
                    vitorhhelmbrecht@gmail.com
                  </div>
                </span>
                <span className="w-9 h-9 rounded-full bg-brand-bg text-brand-fg inline-flex items-center justify-center shrink-0">
                  →
                </span>
              </a>

              {/* GitHub / LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  ["GitHub", "@vhelmbrecht"],
                  ["LinkedIn", "/in/vhelmbrecht"],
                ].map(([k, v]) => (
                  <a
                    key={k}
                    href="#"
                    className="flex justify-between items-center p-4 lg:p-5 rounded-xl bg-brand-surface border border-brand-border no-underline hover:border-brand-fg/15 transition-colors"
                  >
                    <span>
                      <MonoLabel className="text-[10px]">{k}</MonoLabel>
                      <div className="text-brand-fg mt-0.5 text-sm">{v}</div>
                    </span>
                    <span className="text-brand-fg-mute">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — Schedule card */}
        <FadeIn delay={0.15}>
          <aside className="bg-gradient-to-b from-brand-accent/[0.06] to-brand-accent/[0.01] border border-brand-border rounded-2xl p-6 lg:p-8">
            <MonoLabel>This year &nbsp;·&nbsp; 2026</MonoLabel>
            <h3 className="text-2xl lg:text-[28px] font-medium tracking-tight text-brand-fg mt-3.5 mb-2">
              Schedule
            </h3>
            <p className="text-sm leading-relaxed text-brand-fg-mute mb-7">
              I take a small number of projects per quarter so each gets
              full attention.
            </p>

            <div className="flex flex-col">
              {[
                ["Q1", "Jan – Mar", "Booked"],
                ["Q2", "Apr – Jun", "1 of 2 booked"],
                ["Q3", "Jul – Sep", "Open"],
                ["Q4", "Oct – Dec", "Open"],
              ].map(([q, range, status], i) => {
                const isOpen = status === "Open" || status.includes("1 of");
                return (
                  <div
                    key={q}
                    className={`flex justify-between items-center py-4 ${
                      i ? "border-t border-dashed border-brand-border" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span
                        className={`font-serif italic text-2xl ${
                          isOpen ? "text-brand-accent" : "text-brand-fg-dim"
                        }`}
                      >
                        {q}
                      </span>
                      <span className="text-[13px] text-brand-fg-mute">
                        {range}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[10px] tracking-[1.2px] uppercase px-2.5 py-1 rounded-full ${
                        isOpen
                          ? "text-brand-fg bg-brand-accent-soft"
                          : "text-brand-fg-dim border border-brand-border"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                );
              })}
            </div>
          </aside>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer className="mt-20 lg:mt-[100px] pt-7 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[10px] tracking-[1.5px] uppercase text-brand-fg-dim">
        <span>© 2026 Vitor Helmbrecht — Independent</span>
        <span>v 2.0 · Last update May 2026</span>
        <span>Built in Santa Catarina · 🇧🇷</span>
      </footer>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// PAGE ROOT
// ═══════════════════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <div className="bg-brand-bg text-brand-fg min-h-screen w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <TemplatesSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
