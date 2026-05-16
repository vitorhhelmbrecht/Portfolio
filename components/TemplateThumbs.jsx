"use client";

import BrowserChrome from "./BrowserChrome";

// Tiny helper atoms for building miniature website previews
const Bar = ({ w = "60%", h = 6, c = "rgba(236,230,220,0.85)", r = 2, mb = 4, style }) => (
  <div
    style={{
      width: w,
      height: h,
      background: c,
      borderRadius: r,
      marginBottom: mb,
      ...style,
    }}
  />
);

const Pill = ({ children, c = "rgba(236,230,220,0.08)", fg = "#ECE6DC" }) => (
  <span
    style={{
      padding: "3px 7px",
      background: c,
      color: fg,
      borderRadius: 999,
      fontSize: 8,
      letterSpacing: 0.2,
    }}
  >
    {children}
  </span>
);

// ── 1. Velocity — SaaS Landing ──────────────────────────────────────────────
export function VelocityThumb() {
  return (
    <BrowserChrome url="velocity.dev" theme="dark">
      <div style={{ padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, background: "#D4A574", borderRadius: 2 }} />
            <Bar w={36} h={5} mb={0} />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[24, 24, 24].map((w, i) => <Bar key={i} w={w} h={4} mb={0} c="rgba(236,230,220,0.4)" />)}
          </div>
          <div style={{ padding: "4px 10px", background: "#ECE6DC", borderRadius: 999, height: 12 }} />
        </div>
        <Bar w="50%" h={3} c="rgba(212,165,116,0.7)" mb={6} />
        <Bar w="86%" h={12} mb={4} />
        <Bar w="70%" h={12} mb={10} />
        <Bar w="60%" h={5} c="rgba(236,230,220,0.5)" mb={14} />
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <div style={{ flex: 1, height: 36, background: "rgba(236,230,220,0.04)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.04)" }} />
          <div style={{ flex: 1, height: 36, background: "rgba(212,165,116,0.08)", borderRadius: 6, border: "1px solid rgba(212,165,116,0.15)" }} />
          <div style={{ flex: 1, height: 36, background: "rgba(236,230,220,0.04)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.04)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ height: 50, background: "rgba(236,230,220,0.03)", borderRadius: 6, padding: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ width: 14, height: 14, background: "rgba(212,165,116,0.3)", borderRadius: 4, marginBottom: 6 }} />
              <Bar w="80%" h={3} mb={3} />
              <Bar w="50%" h={3} mb={0} c="rgba(236,230,220,0.4)" />
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 2. Embers — Restaurant ──────────────────────────────────────────────────
export function EmbersThumb() {
  return (
    <BrowserChrome url="embers.cafe" theme="dark">
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(at 30% 30%, rgba(212,165,116,0.18), transparent 60%), linear-gradient(180deg, #0E0C0A, #1A1614)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", alignItems: "center" }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", color: "#ECE6DC", fontSize: 18, fontStyle: "italic" }}>Embers</span>
          <div style={{ display: "flex", gap: 10 }}>
            {[20, 16, 20, 20].map((w, i) => <Bar key={i} w={w} h={3} mb={0} c="rgba(236,230,220,0.5)" />)}
          </div>
        </div>
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontFamily: "'Instrument Serif', serif", color: "#ECE6DC", fontSize: 30, lineHeight: 1, letterSpacing: -0.5 }}>
            <span style={{ fontStyle: "italic" }}>fire</span>-cooked,<br />
            slow <span style={{ fontStyle: "italic" }}>seasoned</span>.
          </div>
          <Bar w="60%" h={3} mb={10} style={{ marginTop: 14 }} c="rgba(236,230,220,0.45)" />
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ padding: "5px 10px", background: "#D4A574", borderRadius: 999, fontSize: 8, color: "#0E0C0A", fontWeight: 600 }}>Reserve a table</div>
            <div style={{ padding: "5px 10px", border: "1px solid rgba(236,230,220,0.2)", borderRadius: 999, fontSize: 8, color: "#ECE6DC" }}>Menu</div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 14, bottom: 14, width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, #E8B574, #8A4A20)", boxShadow: "0 8px 24px rgba(212,120,40,0.4)" }} />
      </div>
    </BrowserChrome>
  );
}

// ── 3. Folio — Portfolio ────────────────────────────────────────────────────
export function FolioThumb() {
  return (
    <BrowserChrome url="m-sato.studio" theme="light">
      <div style={{ padding: "14px 18px", background: "#F5EFE6", color: "#2A251F", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
          <Bar w={40} h={4} c="#2A251F" mb={0} />
          <Bar w={30} h={4} c="rgba(42,37,31,0.4)" mb={0} />
        </div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, lineHeight: 0.95, color: "#2A251F", letterSpacing: -1, marginBottom: 12 }}>
          Maya<br />Sato<span style={{ color: "#D4A574" }}>.</span>
        </div>
        <Bar w="55%" h={3} c="rgba(42,37,31,0.5)" mb={14} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ height: 60, background: "linear-gradient(135deg,#D4A574,#9A6B3D)", borderRadius: 4 }} />
          <div style={{ height: 60, background: "#2A251F", borderRadius: 4 }} />
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 4. Storefront — E-commerce ──────────────────────────────────────────────
export function StorefrontThumb() {
  return (
    <BrowserChrome url="northshop.co" theme="light">
      <div style={{ padding: "10px 14px", background: "#F5EFE6", color: "#2A251F", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <Bar w={50} h={5} c="#2A251F" mb={0} />
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: "rgba(42,37,31,0.1)" }} />
            <div style={{ width: 14, height: 14, borderRadius: 4, background: "rgba(42,37,31,0.1)" }} />
            <div style={{ padding: "3px 7px", background: "#2A251F", color: "#F5EFE6", borderRadius: 4, fontSize: 7 }}>Cart 2</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
          {[
            { c: "#D4A574" }, { c: "#6B5B45" }, { c: "#2A251F" },
            { c: "#9A8E7A" }, { c: "#E8DDC8" }, { c: "#5A4A35" },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ width: "100%", aspectRatio: "1", background: p.c, borderRadius: 4, marginBottom: 4 }} />
              <Bar w="80%" h={3} c="rgba(42,37,31,0.7)" mb={2} />
              <Bar w="40%" h={3} c="rgba(42,37,31,0.4)" mb={0} />
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 5. Atlas — Analytics Dashboard ──────────────────────────────────────────
export function AtlasThumb() {
  return (
    <BrowserChrome url="pulse.app" theme="dark">
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ width: 36, background: "#15110E", padding: "10px 6px", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ width: 14, height: 14, background: "#D4A574", borderRadius: 4, marginBottom: 12 }} />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ width: 18, height: 4, background: i === 1 ? "rgba(212,165,116,0.5)" : "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 7 }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <Bar w={70} h={5} mb={3} />
              <Bar w={50} h={3} c="rgba(236,230,220,0.4)" mb={0} />
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              <div style={{ padding: "3px 6px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, fontSize: 6, color: "#9A8E7A" }}>7d</div>
              <div style={{ padding: "3px 6px", background: "rgba(212,165,116,0.15)", borderRadius: 4, fontSize: 6, color: "#D4A574" }}>30d</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 10 }}>
            {[["Revenue", "$48.2k", "+12%"], ["Users", "12.4k", "+8%"], ["Churn", "2.1%", "-0.3%"]].map(([l, v, d], i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 5, padding: 6, border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: 6, color: "#9A8E7A", marginBottom: 2 }}>{l}</div>
                <div style={{ fontSize: 11, color: "#ECE6DC", fontWeight: 600, marginBottom: 1 }}>{v}</div>
                <div style={{ fontSize: 6, color: "#D4A574" }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 5, padding: 8, border: "1px solid rgba(255,255,255,0.04)", height: 110, position: "relative", overflow: "hidden" }}>
            <Bar w={40} h={3} mb={6} c="rgba(236,230,220,0.5)" />
            <svg viewBox="0 0 200 70" style={{ width: "100%", height: 80, marginTop: 2 }}>
              <defs>
                <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#D4A574" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#D4A574" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 55 L20 48 L40 50 L60 38 L80 42 L100 28 L120 32 L140 20 L160 24 L180 12 L200 16 L200 70 L0 70 Z" fill="url(#ag)" />
              <path d="M0 55 L20 48 L40 50 L60 38 L80 42 L100 28 L120 32 L140 20 L160 24 L180 12 L200 16" fill="none" stroke="#D4A574" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 6. Nexus — Platform / DevTool ───────────────────────────────────────────
export function NexusThumb() {
  return (
    <BrowserChrome url="nexus.run" theme="dark">
      <div style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 14, height: 14, background: "#6E55D4", borderRadius: 4 }} />
            <Bar w={28} h={4} mb={0} />
          </div>
          <div style={{ padding: "4px 10px", background: "#6E55D4", borderRadius: 6, fontSize: 7, color: "#fff", fontWeight: 600 }}>Get started</div>
        </div>
        <Bar w="50%" h={10} mb={4} />
        <Bar w="35%" h={10} mb={10} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "repeat(2,1fr)", gap: 6, height: 130 }}>
          <div style={{ gridRow: "1 / span 2", background: "linear-gradient(135deg, rgba(110,85,212,0.15), rgba(110,85,212,0.02))", border: "1px solid rgba(110,85,212,0.2)", borderRadius: 6, padding: 8 }}>
            <Bar w="40%" h={3} c="rgba(110,85,212,0.7)" mb={6} />
            <Bar w="80%" h={5} mb={3} />
            <Bar w="60%" h={5} mb={8} />
            <div style={{ height: 50, background: "rgba(255,255,255,0.03)", borderRadius: 4, padding: 4, fontFamily: "'Geist Mono', monospace", fontSize: 6, color: "#9A8E7A", lineHeight: 1.4 }}>
              $ nexus deploy<br />✓ build · 2.1s<br />✓ ship · live
            </div>
          </div>
          {[0, 1].map((i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.04)", padding: 6 }}>
              <div style={{ width: 10, height: 10, background: "rgba(110,85,212,0.4)", borderRadius: 2, marginBottom: 4 }} />
              <Bar w="80%" h={3} mb={2} />
              <Bar w="60%" h={2} c="rgba(236,230,220,0.4)" mb={0} />
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 7. Aria — AI Product ────────────────────────────────────────────────────
export function AriaThumb() {
  return (
    <BrowserChrome url="aurora.ai" theme="dark">
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(at 70% 20%, rgba(110,85,212,0.18), transparent 50%), linear-gradient(180deg, #0E0C0A, #15110E)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "conic-gradient(from 180deg, #6E55D4, #D4A574, #6E55D4)" }} />
            <span style={{ fontSize: 10, color: "#ECE6DC", letterSpacing: 0.5 }}>aria</span>
          </div>
          <div style={{ padding: "4px 10px", background: "#ECE6DC", borderRadius: 999, fontSize: 8, color: "#0E0C0A", fontWeight: 500 }}>Try free</div>
        </div>
        <div style={{ padding: "4px 18px" }}>
          <div style={{ fontSize: 22, lineHeight: 1.05, color: "#ECE6DC", letterSpacing: -0.8, fontWeight: 500, marginBottom: 8 }}>
            Think faster.<br /><span style={{ color: "#9A8E7A" }}>Write better.</span>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 8,
            marginTop: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6, fontSize: 7, color: "#9A8E7A", fontFamily: "'Geist Mono', monospace" }}>
              <div style={{ width: 6, height: 6, background: "#D4A574", borderRadius: "50%" }} /> aria · thinking
            </div>
            <Bar w="92%" h={3} mb={3} c="rgba(236,230,220,0.6)" />
            <Bar w="85%" h={3} mb={3} c="rgba(236,230,220,0.6)" />
            <Bar w="70%" h={3} mb={6} c="rgba(236,230,220,0.6)" />
            <div style={{ display: "flex", gap: 4 }}>
              {["Summarize", "Rewrite", "Translate"].map((t) => (
                <span key={t} style={{ padding: "3px 7px", background: "rgba(110,85,212,0.15)", color: "#A795E8", borderRadius: 999, fontSize: 6 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── 8. Quill — Editorial ────────────────────────────────────────────────────
export function QuillThumb() {
  return (
    <BrowserChrome url="quill.press" theme="light">
      <div style={{ background: "#F5EFE6", color: "#2A251F", height: "100%", padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14, borderBottom: "1px solid rgba(42,37,31,0.15)", paddingBottom: 8 }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, letterSpacing: -0.3, color: "#2A251F" }}>The Quill</span>
          <span style={{ fontSize: 7, color: "rgba(42,37,31,0.5)", fontFamily: "'Geist Mono', monospace" }}>VOL · XXIV</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <div style={{ fontSize: 6, color: "#D4A574", fontFamily: "'Geist Mono', monospace", marginBottom: 4, letterSpacing: 0.5 }}>FEATURE · 12 MIN</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, lineHeight: 1.05, color: "#2A251F", marginBottom: 6, letterSpacing: -0.5 }}>
              On the quiet <span style={{ fontStyle: "italic" }}>return</span> of slow software
            </div>
            <Bar w="100%" h={3} c="rgba(42,37,31,0.5)" mb={3} />
            <Bar w="90%" h={3} c="rgba(42,37,31,0.5)" mb={3} />
            <Bar w="60%" h={3} c="rgba(42,37,31,0.5)" mb={6} />
          </div>
          <div>
            <div style={{ height: 70, background: "linear-gradient(135deg,#D4A574,#6B5B45)", borderRadius: 4, marginBottom: 8 }} />
            <div style={{ fontSize: 6, color: "#9A8E7A", fontFamily: "'Geist Mono', monospace", marginBottom: 3 }}>ESSAY · 6 MIN</div>
            <Bar w="95%" h={4} c="#2A251F" mb={3} />
            <Bar w="65%" h={4} c="#2A251F" mb={6} />
            <Bar w="100%" h={3} c="rgba(42,37,31,0.4)" mb={2} />
            <Bar w="90%" h={3} c="rgba(42,37,31,0.4)" mb={0} />
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ── Template data ───────────────────────────────────────────────────────────
export const TEMPLATES = {
  starter: [
    {
      id: "velocity", slug: "saas", name: "Velocity", cat: "SaaS Landing Page", url: "velocity.dev",
      desc: "Full marketing site for a SaaS product — hero with stats dashboard, feature grid, three-tier pricing, testimonials, FAQ accordion, and multi-column footer.",
      tags: ["Landing", "Pricing", "FAQ", "Testimonials"],
      img: "/templates/velocity.png",
      Thumb: VelocityThumb,
    },
    {
      id: "embers", slug: "restaurant", name: "Embers", cat: "Restaurant & Café", url: "embers.cafe",
      desc: "Elegant restaurant site with tabbed menu, about section, photo gallery, hours & location with map placeholder, and a complete reservation booking form.",
      tags: ["Menu", "Reservation", "Gallery", "Hours & Location"],
      img: "/templates/embers.png",
      Thumb: EmbersThumb,
    },
    {
      id: "studio", slug: "portfolio", name: "Studio.co", cat: "Portfolio & Agency", url: "studio.co",
      desc: "Creative agency portfolio with filterable project grid, services, step-by-step process timeline, team section, and a contact form with budget selector.",
      tags: ["Project Grid", "Services", "Team", "Contact Form"],
      img: "/templates/studio.png",
      Thumb: FolioThumb,
    },
    {
      id: "modn", slug: "ecommerce", name: "MODN", cat: "E-commerce Storefront", url: "modn.shop",
      desc: "Full shop experience — product cards with wishlist & quick-view modal, working cart drawer with quantity controls, search overlay, category grid, and newsletter.",
      tags: ["Product Grid", "Cart", "Quick View", "Search"],
      img: "/templates/modn.png",
      Thumb: StorefrontThumb,
    },
  ],
  premium: [
    {
      id: "pulse", slug: "dashboard", name: "Pulse", cat: "SaaS Dashboard", url: "pulse.app",
      desc: "Full admin panel with collapsible sidebar, stat cards, revenue charts, sparkline mini-charts, sortable data table, activity feed, and a working dark/light mode toggle.",
      tags: ["Admin Panel", "Data Table", "Charts", "Dark/Light Mode", "Sidebar Nav"],
      img: "/templates/pulse.png",
      Thumb: AtlasThumb,
    },
    {
      id: "nexus", slug: "platform", name: "Nexus", cat: "Platform / DevTool", url: "nexus.run",
      desc: "Dark-themed, feature-rich platform landing page — bento grid feature showcase with interactive cards, competitor comparison table, integrations grid, 16-item feature wall, pricing with monthly/annual toggle, and a conversion-focused CTA.",
      tags: ["Bento", "Pricing", "Compare", "CTA"],
      img: "/templates/nexus.png",
      Thumb: NexusThumb,
    },
    {
      id: "aurora", slug: "ai-product", name: "Aurora", cat: "AI / ML Product", url: "aurora.ai",
      desc: "AI infrastructure landing with animated mesh gradients, interactive API playground with request/response tabs, model comparison cards, bento feature grid, use cases, SDK section, and usage-based pricing.",
      tags: ["Animated Gradients", "API Playground", "Model Cards", "Usage Pricing", "SDK Grid"],
      img: "/templates/aurora.png",
      Thumb: AriaThumb,
    },
    {
      id: "vault", slug: "fintech", name: "Vault", cat: "Fintech / Banking", url: "vault.finance",
      desc: "Trust-focused fintech landing (light theme) — compliance badges, feature grid, interactive ROI calculator with sliders, step-by-step onboarding, dark security section, testimonials, and transaction-based pricing.",
      tags: ["Light Theme", "ROI Calculator", "Trust Badges", "Security Section", "Compliance"],
      img: "/templates/vault.png",
      Thumb: QuillThumb,
    },
  ],
};
