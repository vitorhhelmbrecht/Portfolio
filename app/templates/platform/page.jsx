"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight, Check, ChevronDown, Zap, Shield, BarChart3,
  Globe, Terminal, GitBranch, Lock, Cpu, Database, Activity,
  RefreshCw, Eye, Cloud, Layers, Bell, Key, Code2, Webhook,
  Users, Gauge, Server, HardDrive, ChevronRight, Menu, X,
} from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import useScrolled from "@/components/useScrolled";

// --- ANIMATED LOG FEED ---
function AnimatedLogs() {
  const pool = [
    { icon: "✓", c: "text-green-400", text: "api-server deployed", time: "v3.2.1 · 2m ago" },
    { icon: "✓", c: "text-green-400", text: "db-migration complete", time: "5m ago" },
    { icon: "↗", c: "text-indigo-400", text: "auto-scale 2→4 instances", time: "12m ago" },
    { icon: "✓", c: "text-green-400", text: "SSL cert renewed", time: "1h ago" },
    { icon: "✓", c: "text-green-400", text: "cdn-cache purged", time: "1h ago" },
    { icon: "↗", c: "text-indigo-400", text: "webhook: github push", time: "2h ago" },
    { icon: "✓", c: "text-green-400", text: "cron: daily-cleanup", time: "3h ago" },
    { icon: "⚠", c: "text-yellow-400", text: "rate limit at 80%", time: "3h ago" },
    { icon: "✓", c: "text-green-400", text: "backup: db-prod", time: "4h ago" },
    { icon: "↗", c: "text-indigo-400", text: "scale-down 4→2", time: "5h ago" },
  ];
  const VISIBLE = 4;
  const LINE_H = 26;
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    let tid;
    const timer = setInterval(() => {
      setSliding(true);
      tid = setTimeout(() => {
        setOffset(o => (o + 1) % pool.length);
        setSliding(false);
      }, 500);
    }, 2500);
    return () => { clearInterval(timer); clearTimeout(tid); };
  }, []);

  const items = Array.from({ length: VISIBLE + 1 }, (_, i) => pool[(offset + i) % pool.length]);

  return (
    <div style={{ height: LINE_H * VISIBLE, overflow: "hidden" }}>
      <div style={{
        transform: sliding ? `translateY(-${LINE_H}px)` : "translateY(0)",
        transition: sliding ? "transform 0.5s cubic-bezier(0.22,1,0.36,1)" : "none",
      }}>
        {items.map((log, i) => (
          <div key={`${offset}-${i}`} className="flex items-center gap-1.5" style={{ height: LINE_H }}>
            <span className={log.c}>{log.icon}</span>
            <span className="truncate">{log.text}</span>
            <span className="text-gray-600 ml-auto flex-shrink-0">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- NAVBAR ---
function PlatformNavbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const links = ["Features", "Integrations", "Pricing", "Docs"];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a14]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center"><Layers className="w-5 h-5 text-white" /></div>
          <span className="text-lg font-bold text-white">Nexus</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>)}
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Log in</a>
          <Button size="sm" colorScheme="indigo">Get Started</Button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a14] border-t border-white/5 px-6 py-4 space-y-3">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="block text-gray-400 py-2" onClick={() => setOpen(false)}>{l}</a>)}
          <Button className="w-full" colorScheme="indigo">Get Started</Button>
        </div>
      )}
    </nav>
  );
}

// --- HERO ---
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a3e_0%,_#0a0a14_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto text-center" style={{ animation: "heroFadeIn 0.8s cubic-bezier(0.22,1,0.36,1) both" }}>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Now in public beta — v2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
          Ship infrastructure,<br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">not configurations.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one platform for modern dev teams. Deploy, observe, scale, and secure your stack — from one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" icon={ArrowRight} colorScheme="indigo">Start for free</Button>
          <Button size="lg" variant="outline" colorScheme="indigo">View documentation</Button>
        </div>
        <p className="text-sm text-gray-500 mt-5">No credit card required. Free tier included.</p>

        {/* Product mockup */}
        <div className="mt-16 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#12121e] p-1.5 shadow-2xl shadow-indigo-500/5" style={{ animation: "heroFadeIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}>
          <div className="rounded-xl bg-[#0d0d18] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-4 text-xs text-gray-500">nexus — dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-4 gap-4">
              {[
                { label: "Deployments", val: "1,847", change: "+23%", color: "text-green-400" },
                { label: "Avg Latency", val: "12ms", change: "-31%", color: "text-green-400" },
                { label: "Uptime", val: "99.99%", change: "+0.01%", color: "text-green-400" },
                { label: "Active Services", val: "24", change: "+3", color: "text-indigo-400" },
              ].map(s => (
                <div key={s.label} className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                  <p className="text-xl font-bold text-white">{s.val}</p>
                  <p className={`text-xs mt-1 ${s.color}`}>{s.change}</p>
                </div>
              ))}
              <div className="col-span-2 bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-3">Request Volume (24h)</p>
                <div className="flex items-end gap-1 h-20">
                  {[35,42,38,55,70,65,80,92,85,78,95,88,72,68,82,90,76,84,91,70,65,78,85,92].map((v, i) => (
                    <div key={i} className="flex-1 bg-indigo-500/40 rounded-t" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="col-span-2 bg-white/5 rounded-xl p-4 font-mono text-xs">
                <p className="text-gray-500 mb-2">Recent Activity</p>
                <div className="text-gray-400">
                  <AnimatedLogs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- BENTO GRID ---
function BentoGrid() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Your infra, working for you</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">Every piece of your stack, provisioned, monitored, and managed in one place.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Git Deploy</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">Push to main and your app is live. Zero-config builds with automatic detection.</p>
            <div className="bg-[#0d0d18] rounded-xl p-4 font-mono text-sm">
              <p className="text-gray-500">$ git push origin main<span className="inline-block w-2 h-4 bg-gray-400 ml-0.5 align-middle" style={{ animation: "termBlink 1s step-end infinite" }} /></p>
              <p className="text-gray-400 mt-2">↗ Build started...</p>
              <p className="text-gray-400">↗ Building from Dockerfile...</p>
              <p className="text-green-400">✓ Deployed in 18s — <span className="underline">https://app.nexus.dev</span></p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Live Metrics</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">CPU, memory, latency — all real-time.</p>
            <div className="space-y-3">
              {[["CPU", "12%", 12], ["RAM", "234 MB", 45], ["Latency", "38ms", 8]].map(([label, val, pct]) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">{label}</span><span className="text-white font-medium">{val}</span></div>
                  <div className="h-1.5 bg-white/5 rounded-full"><div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Gauge className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Autoscaling</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">Scales up with traffic, scales down with savings.</p>
            <div className="flex items-center justify-between bg-[#0d0d18] rounded-xl p-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${i <= 2 ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" : "bg-indigo-500/10 text-indigo-400/50 border border-white/5"}`}>{i}</div>
                ))}
              </div>
              <span className="text-xs text-gray-500">2 → 4 instances</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Managed Databases</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">Postgres, Redis, and more — one click away.</p>
            <div className="space-y-2">
              {[["PostgreSQL 16", "db-prod", "green"], ["Redis 7.2", "cache-prod", "yellow"]].map(([name, host, color]) => (
                <div key={name} className="bg-[#0d0d18] rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{name}</p>
                    <p className="text-gray-500 text-xs font-mono">{host}.internal</p>
                  </div>
                  <span className={`w-2 h-2 rounded-full bg-${color === "green" ? "green" : "yellow"}-400`} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Distributed Tracing</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">Follow requests across every service.</p>
            <div className="space-y-2 font-mono text-xs">
              {[
                ["POST /api/deploy", "234ms", "w-full"],
                ["↳ auth.validate", "18ms", "w-[20%]"],
                ["↳ svc.orchestrate", "98ms", "w-[60%]"],
                ["↳ db.query", "45ms", "w-[35%]"],
                ["↳ cache.set", "8ms", "w-[8%]"],
              ].map(([name, time, width]) => (
                <div key={name}>
                  <div className="flex justify-between mb-0.5"><span className="text-gray-400">{name}</span><span className="text-gray-500">{time}</span></div>
                  <div className="h-1 bg-white/5 rounded-full"><div className={`h-full bg-indigo-500/60 rounded-full ${width}`} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- COMPARISON TABLE ---
function ComparisonTable() {
  const competitors = ["Nexus", "Competitor A", "Competitor B", "Competitor C"];
  const rows = [
    { label: "Avg Deploy Time", values: ["~18s", "~45s", "~60s", "~30s"] },
    { label: "Built-in Observability", values: [true, false, false, "Limited"] },
    { label: "Autoscaling", values: ["Horizontal + Vertical", "Serverless only", "Manual", "Limited"] },
    { label: "Managed Databases", values: [true, false, true, true] },
    { label: "Distributed Tracing", values: [true, false, false, false] },
    { label: "Team RBAC", values: [true, "Enterprise only", false, true] },
    { label: "Free Tier", values: ["Generous", "Limited", "$7/mo min", "Limited"] },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">Compare</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Why teams choose Nexus</h2>
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-500 font-medium" />
                {competitors.map((c, i) => (
                  <th key={c} className={`py-4 px-4 text-center font-semibold ${i === 0 ? "text-indigo-400" : "text-gray-400"}`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.label} className="border-b border-white/5">
                  <td className="py-4 px-4 text-gray-300">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} className="py-4 px-4 text-center">
                      {val === true ? <Check className="w-5 h-5 text-green-400 mx-auto" /> :
                       val === false ? <span className="text-gray-600">—</span> :
                       <span className={i === 0 ? "text-white font-medium" : "text-gray-400"}>{val}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-4">
          {rows.map(row => (
            <div key={row.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white font-medium mb-3">{row.label}</p>
              <div className="grid grid-cols-2 gap-2">
                {competitors.map((c, i) => (
                  <div key={c} className={`text-center p-2 rounded-lg ${i === 0 ? "bg-indigo-500/10 border border-indigo-500/20" : "bg-white/5"}`}>
                    <p className="text-xs text-gray-500 mb-1">{c}</p>
                    {row.values[i] === true ? <Check className="w-4 h-4 text-green-400 mx-auto" /> :
                     row.values[i] === false ? <span className="text-gray-600">—</span> :
                     <span className={`text-sm ${i === 0 ? "text-white font-medium" : "text-gray-400"}`}>{row.values[i]}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- INTEGRATIONS ---
function Integrations() {
  const groups = [
    { title: "Languages", items: ["Node.js", "Python", "Go", "Rust", "Java", "Ruby", "PHP", ".NET"] },
    { title: "Frameworks", items: ["Next.js", "Nuxt", "Django", "Rails", "Spring", "Laravel", "FastAPI", "Express"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch", "ClickHouse"] },
  ];
  return (
    <section id="integrations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">Integrations</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Works with your stack</h2>
          <p className="text-gray-400 mt-4">If it runs in a container, it runs on Nexus.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map(group => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-indigo-500/30 hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FEATURE WALL ---
function FeatureWall() {
  const features = [
    { icon: Terminal, title: "CLI Tool", desc: "Deploy and manage from your terminal." },
    { icon: GitBranch, title: "Git Deploy", desc: "Auto-build on every push to main." },
    { icon: Lock, title: "Auto HTTPS", desc: "Managed TLS certs, zero config." },
    { icon: Globe, title: "Custom Domains", desc: "Point your domain, HTTPS included." },
    { icon: Gauge, title: "Autoscaling", desc: "Scale with demand, save when idle." },
    { icon: Activity, title: "Real-time Logs", desc: "Stream logs live from your dashboard." },
    { icon: BarChart3, title: "APM & Metrics", desc: "p50/p95/p99 latency, error rates." },
    { icon: RefreshCw, title: "Instant Rollback", desc: "Revert to any version in one click." },
    { icon: Database, title: "Managed DBs", desc: "Postgres, Redis, more — one click." },
    { icon: Shield, title: "RBAC & Teams", desc: "Granular roles: Owner, Admin, Viewer." },
    { icon: Key, title: "Env Variables", desc: "Encrypted secrets, no redeploy needed." },
    { icon: Eye, title: "Tracing", desc: "Follow requests across every service." },
    { icon: Bell, title: "Alerting", desc: "Slack, email, webhook — your choice." },
    { icon: HardDrive, title: "Persistent Storage", desc: "Volumes with custom mount paths." },
    { icon: Webhook, title: "Webhooks & API", desc: "Full API access with scoped keys." },
    { icon: Cloud, title: "Edge Caching", desc: "CDN-level speed at the edge." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">Everything You Need</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Built for developers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all">
              <Icon className="w-5 h-5 text-indigo-400 mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PRICING ---
function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    { name: "Hobby", desc: "For personal projects.", price: 0, annualPrice: 0, features: ["1 service", "0.5 vCPU · 512 MB", "500 build min/mo", "Community support"], cta: "Start Free" },
    { name: "Pro", desc: "For startups and growing teams.", price: 49, annualPrice: 39, features: ["12 services", "4 vCPU · 4 GB", "2,000 build min/mo", "Priority support", "Custom domains", "Autoscaling"], popular: true, cta: "Start Free" },
    { name: "Business", desc: "For production workloads.", price: 199, annualPrice: 159, features: ["50 services", "25 vCPU · 50 GB", "Unlimited builds", "24/7 dedicated support", "RBAC & audit logs", "SLA guarantee", "SSO / SAML"], cta: "Start Free" },
    { name: "Enterprise", desc: "Custom infrastructure.", price: null, features: ["Unlimited services", "Custom resources", "Dedicated account manager", "On-prem option", "Custom SLA", "Invoice billing"], cta: "Talk to Sales" },
  ];
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Infrastructure that scales with you</h2>
          <p className="text-gray-400 mt-4">Start free, upgrade when you need to.</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-indigo-500" : "bg-white/20"}`}>
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${annual ? "left-6" : "left-0.5"}`} />
            </button>
            <span className={`text-sm ${annual ? "text-white" : "text-gray-500"}`}>Annual <span className="text-indigo-400 text-xs font-medium ml-1">Save 20%</span></span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {plans.map(plan => (
            <div key={plan.name} className={`relative rounded-2xl p-6 ${plan.popular ? "bg-indigo-500/10 border-2 border-indigo-500/40" : "bg-white/5 border border-white/10"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-sm text-gray-400 mt-1 mb-4">{plan.desc}</p>
              <div className="mb-6">
                {plan.price === null ? (
                  <span className="text-3xl font-bold text-white">Custom</span>
                ) : plan.price === 0 ? (
                  <span className="text-3xl font-bold text-white">Free</span>
                ) : (
                  <><span className="text-3xl font-bold text-white">${annual ? plan.annualPrice : plan.price}</span><span className="text-gray-500">/mo</span></>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button variant={plan.popular ? "primary" : "outline"} colorScheme="indigo" className="w-full" size="sm">{plan.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA ---
function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-3xl" />
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Your next project deserves<br />real infrastructure.</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Deploy in seconds. Database with one command. Domain, HTTPS, and scale — no configuration needed.</p>
          <Button size="lg" icon={ArrowRight} colorScheme="indigo">Get started free</Button>
          <p className="text-sm text-gray-500 mt-4">Free tier, forever. Upgrade whenever you want.</p>
        </div>
      </div>
    </section>
  );
}

// --- MAIN ---
export default function PlatformPage() {
  return (
    <div className="min-h-screen text-gray-100" style={{ background: "#0a0a14", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <BackToPortfolio />
      <PlatformNavbar />
      <Hero />
      <FadeIn><BentoGrid /></FadeIn>
      <FadeIn><ComparisonTable /></FadeIn>
      <FadeIn><Integrations /></FadeIn>
      <FadeIn><FeatureWall /></FadeIn>
      <FadeIn><Pricing /></FadeIn>
      <FadeIn><CTABanner /></FadeIn>
      <Footer
        brand="Nexus"
        brandIcon={Layers}
        brandIconBg="bg-indigo-500"
        tagline="The all-in-one platform for modern dev teams."
        bg="custom"
        customBg="border-t border-white/5 text-white"
        columns={[
          { title: "Product", links: ["Features", "Pricing", "Docs", "Changelog", "Status"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact", "Partners"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR", "SLA"] },
        ]}
        bottomText="© 2026 Nexus. All rights reserved."
      />
    </div>
  );
}
