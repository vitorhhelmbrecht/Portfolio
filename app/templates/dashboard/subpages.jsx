"use client";
import { useState } from "react";
import { Plus, Filter, Download, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

// ── ANALYTICS ──
export function AnalyticsPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const barBg = dark ? "bg-white/5" : "bg-gray-100";
  const channels = [
    { name: "Organic Search", pct: 38 }, { name: "Direct", pct: 25 },
    { name: "Social Media", pct: 19 }, { name: "Referral", pct: 11 }, { name: "Email", pct: 7 },
  ];
  const pages = [
    { path: "/pricing", views: 14280, bounce: "32%", dur: "4:12" },
    { path: "/features", views: 11450, bounce: "41%", dur: "3:28" },
    { path: "/blog/ai-trends", views: 8920, bounce: "55%", dur: "5:45" },
    { path: "/docs/quickstart", views: 7680, bounce: "28%", dur: "6:18" },
    { path: "/signup", views: 6540, bounce: "18%", dur: "2:05" },
    { path: "/case-studies", views: 4890, bounce: "45%", dur: "3:52" },
  ];
  const daily = [42,38,55,48,62,58,70,65,78,72,85,80,75,92,88,82,95,78,86,90,84,76,88,94,82,90,86,78,92,95];
  return (
    <>
      <FadeIn><div><h1 className={`text-2xl font-bold ${text}`}>Analytics</h1><p className={`text-sm ${muted} mt-1`}>Traffic and engagement overview</p></div></FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ l: "Total Visitors", v: "33,700", c: "+14.2%" }, { l: "Page Views", v: "124,700", c: "+8.5%" }, { l: "Avg Duration", v: "4m 12s", c: "+1.8%" }, { l: "Bounce Rate", v: "38.2%", c: "-2.1%" }].map(s => (
            <div key={s.l} className={`rounded-2xl border p-5 ${card}`}><p className={`text-sm ${muted}`}>{s.l}</p><p className={`text-2xl font-bold mt-1 ${text}`}>{s.v}</p><p className="text-xs mt-1 text-emerald-400">{s.c} vs last month</p></div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={`rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-lg font-semibold mb-4 ${text}`}>Visitors (Last 30 days)</h3>
          <div className="flex items-end gap-1 h-40">
            {daily.map((v, i) => (<div key={i} className="flex-1"><div className={`w-full rounded-t ${barBg} relative overflow-hidden`} style={{ height: "130px" }}><div className="absolute bottom-0 left-0 right-0 rounded-t bg-indigo-500/50" style={{ height: `${v}%` }} /></div></div>))}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className={`rounded-2xl border p-6 ${card}`}>
            <h3 className={`text-lg font-semibold mb-4 ${text}`}>Traffic Sources</h3>
            <div className="space-y-4">
              {channels.map(ch => (<div key={ch.name}><div className="flex items-center justify-between mb-1.5"><span className={`text-sm ${text}`}>{ch.name}</span><span className={`text-sm ${muted}`}>{ch.pct}%</span></div><div className={`h-2 ${barBg} rounded-full`}><div className="h-full bg-indigo-500 rounded-full" style={{ width: `${ch.pct}%` }} /></div></div>))}
            </div>
          </div>
          <div className={`rounded-2xl border ${card} overflow-hidden`}>
            <div className="p-6 pb-3"><h3 className={`text-lg font-semibold ${text}`}>Top Pages</h3></div>
            <table className="w-full text-sm">
              <thead><tr className={`border-y ${dark ? "border-white/5" : "border-gray-100"}`}><th className={`text-left py-2.5 px-6 font-medium ${muted}`}>Page</th><th className={`text-right py-2.5 px-4 font-medium ${muted}`}>Views</th><th className={`text-right py-2.5 px-4 font-medium ${muted} hidden sm:table-cell`}>Bounce</th><th className={`text-right py-2.5 px-6 font-medium ${muted} hidden sm:table-cell`}>Avg Time</th></tr></thead>
              <tbody>{pages.map(p => (<tr key={p.path} className={`border-b ${dark ? "border-white/5" : "border-gray-50"}`}><td className={`py-2.5 px-6 font-mono text-xs ${dark ? "text-indigo-400" : "text-indigo-600"}`}>{p.path}</td><td className={`py-2.5 px-4 text-right ${text}`}>{p.views.toLocaleString()}</td><td className={`py-2.5 px-4 text-right ${muted} hidden sm:table-cell`}>{p.bounce}</td><td className={`py-2.5 px-6 text-right ${muted} hidden sm:table-cell`}>{p.dur}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

// ── CUSTOMERS ──
export function CustomersPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const rh = dark ? "hover:bg-white/[0.03]" : "hover:bg-gray-50";
  const customers = [
    { n: "Emma Wilson", e: "emma@company.co", plan: "Enterprise", mrr: 2400, joined: "Jan 2025", s: "active", a: "EW", cl: "from-indigo-500 to-purple-500" },
    { n: "James Chen", e: "james@startup.io", plan: "Pro", mrr: 99, joined: "Mar 2025", s: "active", a: "JC", cl: "from-emerald-500 to-teal-500" },
    { n: "Sarah Park", e: "sarah@agency.com", plan: "Enterprise", mrr: 4800, joined: "Nov 2024", s: "active", a: "SP", cl: "from-amber-500 to-orange-500" },
    { n: "Mike Ross", e: "mike@dev.tech", plan: "Starter", mrr: 0, joined: "Jun 2025", s: "trial", a: "MR", cl: "from-pink-500 to-rose-500" },
    { n: "Lisa Zhang", e: "lisa@corp.net", plan: "Pro", mrr: 99, joined: "Feb 2025", s: "active", a: "LZ", cl: "from-blue-500 to-cyan-500" },
    { n: "David Kim", e: "david@saas.app", plan: "Enterprise", mrr: 3200, joined: "Sep 2024", s: "active", a: "DK", cl: "from-violet-500 to-fuchsia-500" },
    { n: "Ana Silva", e: "ana@media.br", plan: "Starter", mrr: 0, joined: "Aug 2025", s: "churned", a: "AS", cl: "from-red-500 to-pink-500" },
    { n: "Tom Baker", e: "tom@finance.uk", plan: "Pro", mrr: 99, joined: "Apr 2025", s: "active", a: "TB", cl: "from-teal-500 to-emerald-500" },
    { n: "Yuki Tanaka", e: "yuki@design.jp", plan: "Enterprise", mrr: 1600, joined: "Dec 2024", s: "active", a: "YT", cl: "from-orange-500 to-amber-500" },
  ];
  const sc = { active: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700", trial: dark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-700", churned: dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600" };
  return (
    <>
      <FadeIn><div className="flex items-center justify-between"><div><h1 className={`text-2xl font-bold ${text}`}>Customers</h1><p className={`text-sm ${muted} mt-1`}>{customers.length} total customers</p></div><button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"><Plus className="w-4 h-4" /> Add Customer</button></div></FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ l: "Total", v: "2,847" }, { l: "Active", v: "2,312" }, { l: "In Trial", v: "284" }, { l: "Churned", v: "251" }].map(s => (<div key={s.l} className={`rounded-2xl border p-5 ${card}`}><p className={`text-sm ${muted}`}>{s.l}</p><p className={`text-2xl font-bold mt-1 ${text}`}>{s.v}</p></div>))}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={`rounded-2xl border ${card} overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className={`border-b ${dark ? "border-white/5" : "border-gray-100"}`}><th className={`text-left py-3 px-6 font-medium ${muted}`}>Customer</th><th className={`text-left py-3 px-4 font-medium ${muted}`}>Plan</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden md:table-cell`}>MRR</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden md:table-cell`}>Joined</th><th className={`text-left py-3 px-4 font-medium ${muted}`}>Status</th><th className={`text-right py-3 px-6 ${muted}`}></th></tr></thead>
              <tbody>{customers.map(c => (<tr key={c.e} className={`border-b ${dark ? "border-white/5" : "border-gray-50"} ${rh} transition-colors`}><td className="py-3 px-6"><div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.cl} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{c.a}</div><div><p className={`font-medium ${text}`}>{c.n}</p><p className={`text-xs ${muted}`}>{c.e}</p></div></div></td><td className={`py-3 px-4 ${text}`}>{c.plan}</td><td className={`py-3 px-4 ${text} hidden md:table-cell`}>{c.mrr > 0 ? `$${c.mrr.toLocaleString()}` : "Free"}</td><td className={`py-3 px-4 ${muted} hidden md:table-cell`}>{c.joined}</td><td className="py-3 px-4"><span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${sc[c.s]}`}>{c.s}</span></td><td className="py-3 px-6 text-right"><button className={muted}><MoreHorizontal className="w-4 h-4" /></button></td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

// ── PRODUCTS ──
export function ProductsPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const products = [
    { name: "Pro Plan", price: "$49/mo", subs: 1284, mrr: "$62,916", status: "active", growth: "+12%" },
    { name: "Enterprise Plan", price: "$199/mo", subs: 342, mrr: "$68,058", status: "active", growth: "+28%" },
    { name: "Starter Plan", price: "Free", subs: 4820, mrr: "$0", status: "active", growth: "+45%" },
    { name: "API Add-on", price: "$29/mo", subs: 856, mrr: "$24,824", status: "active", growth: "+8%" },
    { name: "White Label", price: "$499/mo", subs: 48, mrr: "$23,952", status: "active", growth: "+15%" },
    { name: "Legacy Business", price: "$149/mo", subs: 124, mrr: "$18,476", status: "deprecated", growth: "-6%" },
  ];
  const sc = { active: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700", deprecated: dark ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-700" };
  return (
    <>
      <FadeIn><div className="flex items-center justify-between"><div><h1 className={`text-2xl font-bold ${text}`}>Products</h1><p className={`text-sm ${muted} mt-1`}>Manage plans and add-ons</p></div><button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"><Plus className="w-4 h-4" /> New Product</button></div></FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(p => (<div key={p.name} className={`rounded-2xl border p-6 ${card} hover:border-indigo-500/30 transition-colors`}><div className="flex items-start justify-between mb-4"><div><h3 className={`font-semibold ${text}`}>{p.name}</h3><p className={`text-lg font-bold mt-1 ${text}`}>{p.price}</p></div><span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${sc[p.status]}`}>{p.status}</span></div><div className={`border-t ${dark ? "border-white/5" : "border-gray-100"} pt-4 mt-2 grid grid-cols-2 gap-4`}><div><p className={`text-xs ${muted}`}>Active Subs</p><p className={`text-sm font-medium ${text}`}>{p.subs.toLocaleString()}</p></div><div><p className={`text-xs ${muted}`}>MRR</p><p className={`text-sm font-medium ${text}`}>{p.mrr}</p></div></div><p className={`text-xs mt-3 ${p.growth.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{p.growth} this month</p></div>))}
        </div>
      </FadeIn>
    </>
  );
}

// ── ORDERS ──
export function OrdersPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const rh = dark ? "hover:bg-white/[0.03]" : "hover:bg-gray-50";
  const orders = [
    { id: "#ORD-1284", cust: "Emma Wilson", prod: "Enterprise", amt: 4800, date: "May 10, 2026", s: "completed" },
    { id: "#ORD-1283", cust: "Tom Baker", prod: "Pro Plan", amt: 49, date: "May 10, 2026", s: "completed" },
    { id: "#ORD-1282", cust: "Yuki Tanaka", prod: "API Add-on", amt: 29, date: "May 9, 2026", s: "completed" },
    { id: "#ORD-1281", cust: "Lisa Zhang", prod: "Pro Plan", amt: 49, date: "May 9, 2026", s: "processing" },
    { id: "#ORD-1280", cust: "David Kim", prod: "White Label", amt: 499, date: "May 8, 2026", s: "completed" },
    { id: "#ORD-1279", cust: "James Chen", prod: "Pro Plan", amt: 49, date: "May 8, 2026", s: "completed" },
    { id: "#ORD-1278", cust: "Sarah Park", prod: "Enterprise", amt: 2400, date: "May 7, 2026", s: "refunded" },
    { id: "#ORD-1277", cust: "Nina Petrova", prod: "Pro Plan", amt: 49, date: "May 7, 2026", s: "completed" },
    { id: "#ORD-1276", cust: "Mike Ross", prod: "Pro Plan", amt: 49, date: "May 6, 2026", s: "processing" },
  ];
  const sc = { completed: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700", processing: dark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-700", refunded: dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600" };
  return (
    <>
      <FadeIn><div className="flex items-center justify-between"><div><h1 className={`text-2xl font-bold ${text}`}>Orders</h1><p className={`text-sm ${muted} mt-1`}>Recent subscription orders</p></div><div className="flex gap-2"><button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} transition-colors`}><Filter className="w-4 h-4" /> Filter</button><button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} transition-colors`}><Download className="w-4 h-4" /> Export</button></div></div></FadeIn>
      <FadeIn delay={0.05}>
        <div className={`rounded-2xl border ${card} overflow-hidden`}>
          <div className="overflow-x-auto"><table className="w-full text-sm">
            <thead><tr className={`border-b ${dark ? "border-white/5" : "border-gray-100"}`}><th className={`text-left py-3 px-6 font-medium ${muted}`}>Order</th><th className={`text-left py-3 px-4 font-medium ${muted}`}>Customer</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden md:table-cell`}>Product</th><th className={`text-left py-3 px-4 font-medium ${muted}`}>Amount</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden md:table-cell`}>Date</th><th className={`text-left py-3 px-6 font-medium ${muted}`}>Status</th></tr></thead>
            <tbody>{orders.map(o => (<tr key={o.id} className={`border-b ${dark ? "border-white/5" : "border-gray-50"} ${rh} transition-colors`}><td className={`py-3 px-6 font-mono text-xs ${dark ? "text-indigo-400" : "text-indigo-600"}`}>{o.id}</td><td className={`py-3 px-4 ${text}`}>{o.cust}</td><td className={`py-3 px-4 ${muted} hidden md:table-cell`}>{o.prod}</td><td className={`py-3 px-4 font-medium ${text}`}>{o.amt > 0 ? `$${o.amt.toLocaleString()}` : "Free"}</td><td className={`py-3 px-4 ${muted} hidden md:table-cell`}>{o.date}</td><td className="py-3 px-6"><span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${sc[o.s]}`}>{o.s}</span></td></tr>))}</tbody>
          </table></div>
        </div>
      </FadeIn>
    </>
  );
}

// ── TRANSACTIONS ──
export function TransactionsPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const rh = dark ? "hover:bg-white/[0.03]" : "hover:bg-gray-50";
  const txns = [
    { id: "txn_a1b2c3", desc: "Enterprise — Emma Wilson", amt: "+$4,800.00", date: "May 10, 14:32", s: "succeeded", m: "Visa ••4242" },
    { id: "txn_d4e5f6", desc: "Pro Plan — Tom Baker", amt: "+$49.00", date: "May 10, 11:18", s: "succeeded", m: "MC ••8821" },
    { id: "txn_g7h8i9", desc: "Refund — Sarah Park", amt: "-$2,400.00", date: "May 9, 16:45", s: "refunded", m: "Visa ••1234" },
    { id: "txn_j0k1l2", desc: "API Add-on — Yuki Tanaka", amt: "+$29.00", date: "May 9, 09:12", s: "succeeded", m: "Amex ••3782" },
    { id: "txn_m3n4o5", desc: "White Label — David Kim", amt: "+$499.00", date: "May 8, 15:22", s: "succeeded", m: "Visa ••9088" },
    { id: "txn_p6q7r8", desc: "Pro Plan — James Chen", amt: "+$49.00", date: "May 8, 12:01", s: "succeeded", m: "MC ••5544" },
    { id: "txn_s9t0u1", desc: "Weekly payout to bank", amt: "-$12,480.00", date: "May 7, 00:00", s: "paid", m: "ACH ••7890" },
    { id: "txn_v2w3x4", desc: "Pro Plan — Nina Petrova", amt: "+$49.00", date: "May 7, 08:44", s: "failed", m: "Visa ••6611" },
  ];
  const sc = { succeeded: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700", refunded: dark ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-700", paid: dark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-700", failed: dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600" };
  return (
    <>
      <FadeIn><div className="flex items-center justify-between"><div><h1 className={`text-2xl font-bold ${text}`}>Transactions</h1><p className={`text-sm ${muted} mt-1`}>All charges, refunds, and payouts</p></div><button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} transition-colors`}><Download className="w-4 h-4" /> Export CSV</button></div></FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ l: "Gross Volume", v: "$48,920", s: "This month" }, { l: "Net Revenue", v: "$42,180", s: "After refunds" }, { l: "Success Rate", v: "98.2%", s: "Last 30 days" }, { l: "Next Payout", v: "$8,640", s: "May 14, 2026" }].map(s => (<div key={s.l} className={`rounded-2xl border p-5 ${card}`}><p className={`text-sm ${muted}`}>{s.l}</p><p className={`text-2xl font-bold mt-1 ${text}`}>{s.v}</p><p className={`text-xs mt-1 ${muted}`}>{s.s}</p></div>))}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={`rounded-2xl border ${card} overflow-hidden`}>
          <div className="overflow-x-auto"><table className="w-full text-sm">
            <thead><tr className={`border-b ${dark ? "border-white/5" : "border-gray-100"}`}><th className={`text-left py-3 px-6 font-medium ${muted}`}>ID</th><th className={`text-left py-3 px-4 font-medium ${muted}`}>Description</th><th className={`text-right py-3 px-4 font-medium ${muted}`}>Amount</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden lg:table-cell`}>Method</th><th className={`text-left py-3 px-4 font-medium ${muted} hidden md:table-cell`}>Date</th><th className={`text-left py-3 px-6 font-medium ${muted}`}>Status</th></tr></thead>
            <tbody>{txns.map(t => (<tr key={t.id} className={`border-b ${dark ? "border-white/5" : "border-gray-50"} ${rh} transition-colors`}><td className={`py-3 px-6 font-mono text-xs ${muted}`}>{t.id}</td><td className={`py-3 px-4 ${text}`}>{t.desc}</td><td className={`py-3 px-4 text-right font-medium ${t.amt.startsWith("+") ? (dark ? "text-emerald-400" : "text-emerald-600") : text}`}>{t.amt}</td><td className={`py-3 px-4 ${muted} hidden lg:table-cell`}>{t.m}</td><td className={`py-3 px-4 ${muted} hidden md:table-cell text-xs`}>{t.date}</td><td className="py-3 px-6"><span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${sc[t.s]}`}>{t.s}</span></td></tr>))}</tbody>
          </table></div>
        </div>
      </FadeIn>
    </>
  );
}

// ── SETTINGS ──
export function SettingsPage({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const inputBg = dark ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-900";
  return (
    <>
      <FadeIn><h1 className={`text-2xl font-bold ${text}`}>Settings</h1><p className={`text-sm ${muted} mt-1`}>Manage your account and preferences</p></FadeIn>
      <FadeIn delay={0.05}>
        <div className={`rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-lg font-semibold mb-6 ${text}`}>Profile</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[{ l: "Full Name", v: "John Doe" }, { l: "Email", v: "john@pulse-app.com" }, { l: "Company", v: "Pulse Inc." }, { l: "Role", v: "Admin" }].map(f => (<div key={f.l}><label className={`block text-sm font-medium ${muted} mb-2`}>{f.l}</label><input type="text" defaultValue={f.v} className={`w-full px-4 py-2.5 rounded-xl border text-sm ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-500/30`} /></div>))}
          </div>
          <button className="mt-6 px-6 py-2.5 rounded-xl text-sm bg-indigo-500 text-white hover:bg-indigo-400 transition-colors">Save Changes</button>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={`rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-lg font-semibold mb-6 ${text}`}>Notifications</h3>
          <div className="space-y-4">
            {[{ l: "Email notifications", d: "Order and signup alerts", on: true }, { l: "Weekly digest", d: "Key metrics every Monday", on: true }, { l: "Slack integration", d: "Alerts to Slack channel", on: false }, { l: "SMS alerts", d: "Critical alerts via SMS", on: false }].map(n => (<div key={n.l} className={`flex items-center justify-between py-3 border-b ${dark ? "border-white/5" : "border-gray-100"} last:border-0`}><div><p className={`text-sm font-medium ${text}`}>{n.l}</p><p className={`text-xs ${muted}`}>{n.d}</p></div><div className={`w-11 h-6 rounded-full ${n.on ? "bg-indigo-500" : dark ? "bg-white/10" : "bg-gray-200"} relative cursor-pointer`}><span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${n.on ? "left-5" : "left-0.5"}`} /></div></div>))}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={`rounded-2xl border p-6 border-red-500/20 ${dark ? "bg-red-500/5" : "bg-red-50/50"}`}>
          <h3 className="text-lg font-semibold mb-2 text-red-400">Danger Zone</h3>
          <p className={`text-sm ${muted} mb-4`}>Permanently delete your account and all data.</p>
          <button className="px-4 py-2 rounded-xl text-sm border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">Delete Account</button>
        </div>
      </FadeIn>
    </>
  );
}
