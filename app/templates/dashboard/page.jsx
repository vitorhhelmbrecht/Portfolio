"use client";

import { useState, useEffect } from "react";
import {
  LayoutDashboard, Users, ShoppingCart, BarChart3, Settings, Bell,
  Search, Moon, Sun, ArrowUp, ArrowDown, Package, TrendingUp,
  DollarSign, CreditCard, Menu, X, LogOut, ChevronDown, Filter,
  Eye, MoreHorizontal, ArrowRight, Layers, ChevronLeft, ChevronRight,
  Plus, Download, Calendar, Clock, Mail, Star,
} from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import FadeIn from "@/components/FadeIn";
import { AnalyticsPage, CustomersPage, ProductsPage, OrdersPage, TransactionsPage, SettingsPage } from "./subpages";

// ============================================================
// SAAS DASHBOARD / ADMIN PANEL — Premium Template
// ============================================================

// --- THEME CONTEXT (light / dark) ---
function useDarkMode() {
  const [dark, setDark] = useState(true);
  return { dark, toggle: () => setDark(d => !d) };
}

// --- SIDEBAR ---
function Sidebar({ dark, active, setActive, collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const nav = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "customers", label: "Customers", icon: Users },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "transactions", label: "Transactions", icon: CreditCard },
  ];
  const bottom = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Log out", icon: LogOut },
  ];

  const bg = dark ? "bg-[#0f0f1a]" : "bg-white";
  const border = dark ? "border-white/5" : "border-gray-200";
  const textMuted = dark ? "text-gray-500" : "text-gray-400";
  const textDefault = dark ? "text-gray-300" : "text-gray-700";
  const activeBg = dark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600";
  const hoverBg = dark ? "hover:bg-white/5" : "hover:bg-gray-50";

  const content = (
    <div className={`flex flex-col h-full ${bg} border-r ${border}`}>
      {/* Logo */}
      <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} px-5 h-16 border-b ${border}`}>
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Layers className="w-5 h-5 text-white" />
        </div>
        {!collapsed && <span className={`text-lg font-bold ${dark ? "text-white" : "text-gray-900"}`}>Pulse</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(item => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setMobileOpen(false); }}
              className={`w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? activeBg : `${textDefault} ${hoverBg}`}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className={`px-3 py-4 border-t ${border} space-y-1`}>
        {bottom.map(item => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={`w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-2.5 rounded-xl text-sm ${textMuted} ${hoverBg} transition-colors`} title={collapsed ? item.label : undefined}>
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`hidden md:flex flex-col h-screen sticky top-0 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-64"}`}>
        {content}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={`absolute -right-3 top-20 w-6 h-6 rounded-full border ${border} ${bg} flex items-center justify-center ${textMuted} hover:text-white transition-colors z-10`}
        >
          {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 h-full">{content}</aside>
        </div>
      )}
    </>
  );
}

// --- TOP BAR ---
function TopBar({ dark, toggle, setMobileOpen }) {
  const bg = dark ? "bg-[#0a0a14]/80 backdrop-blur-xl border-white/5" : "bg-white/80 backdrop-blur-xl border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-400" : "text-gray-500";
  const inputBg = dark ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500" : "bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-400";

  return (
    <header className={`sticky top-0 z-30 h-16 border-b ${bg} flex items-center justify-between px-6`}>
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={() => setMobileOpen(true)}>
          <Menu className={`w-5 h-5 ${text}`} />
        </button>
        <div className="relative hidden sm:block">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${muted}`} />
          <input type="text" placeholder="Search..." className={`pl-10 pr-4 py-2 rounded-xl border text-sm w-64 ${inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-500/30`} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className={`w-9 h-9 rounded-xl ${dark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
          {dark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
        </button>
        <button className={`relative w-9 h-9 rounded-xl ${dark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
          <Bell className={`w-4 h-4 ${muted}`} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 ml-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
          <div className="hidden sm:block">
            <p className={`text-sm font-medium ${text}`}>John Doe</p>
            <p className={`text-xs ${muted}`}>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

// --- STAT CARDS ---
function StatCards({ dark }) {
  const stats = [
    { label: "Total Revenue", value: "$48,920", change: "+12.5%", up: true, icon: DollarSign, color: "indigo" },
    { label: "Active Users", value: "2,847", change: "+8.2%", up: true, icon: Users, color: "emerald" },
    { label: "Conversion Rate", value: "3.24%", change: "-0.4%", up: false, icon: TrendingUp, color: "amber" },
    { label: "Total Orders", value: "1,203", change: "+18.7%", up: true, icon: ShoppingCart, color: "purple" },
  ];
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(s => {
        const Icon = s.icon;
        const colors = {
          indigo: dark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600",
          emerald: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600",
          amber: dark ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-600",
          purple: dark ? "bg-purple-500/10 text-purple-400" : "bg-purple-50 text-purple-600",
        };
        return (
          <div key={s.label} className={`rounded-2xl border p-5 ${card}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors[s.color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`inline-flex items-center gap-1 text-xs font-medium ${s.up ? "text-emerald-400" : "text-red-400"}`}>
                {s.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <p className={`text-2xl font-bold ${text}`}>{s.value}</p>
            <p className={`text-sm mt-1 ${muted}`}>{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}

// --- REVENUE CHART ---
function RevenueChart({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const barBg = dark ? "bg-white/5" : "bg-gray-100";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const values = [65, 45, 78, 52, 90, 68, 82, 95, 70, 88, 76, 92];

  return (
    <div className={`rounded-2xl border p-6 ${card}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={`text-lg font-semibold ${text}`}>Revenue Overview</h3>
          <p className={`text-sm ${muted}`}>Monthly revenue for 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className={`px-3 py-1.5 rounded-lg text-xs font-medium ${dark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}>Monthly</button>
          <button className={`px-3 py-1.5 rounded-lg text-xs font-medium ${muted} ${dark ? "hover:bg-white/5" : "hover:bg-gray-50"}`}>Weekly</button>
        </div>
      </div>
      <div className="flex items-end gap-2 h-48">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className={`w-full rounded-lg ${barBg} relative overflow-hidden`} style={{ height: "160px" }}>
              <div
                className={`absolute bottom-0 left-0 right-0 rounded-lg transition-all duration-700 ${i === values.length - 1 ? "bg-indigo-500" : dark ? "bg-indigo-500/40" : "bg-indigo-400/50"}`}
                style={{ height: `${v}%` }}
              />
            </div>
            <span className={`text-[10px] ${muted}`}>{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MINI CHART CARDS ---
function MiniCharts({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";

  const charts = [
    { label: "Page Views", value: "124.7K", data: [30, 45, 35, 55, 48, 62, 58, 70, 65, 78, 72, 85], color: "stroke-indigo-500" },
    { label: "Bounce Rate", value: "42.3%", data: [70, 62, 68, 55, 60, 52, 58, 48, 55, 45, 50, 42], color: "stroke-amber-500" },
    { label: "Session Duration", value: "4m 32s", data: [20, 35, 28, 40, 45, 38, 50, 55, 48, 60, 58, 65], color: "stroke-emerald-500" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {charts.map(c => {
        const points = c.data.map((v, i) => `${(i / (c.data.length - 1)) * 160},${50 - (v / 100) * 45}`).join(" ");
        return (
          <div key={c.label} className={`rounded-2xl border p-5 ${card}`}>
            <p className={`text-sm ${muted}`}>{c.label}</p>
            <p className={`text-xl font-bold ${text} mt-1`}>{c.value}</p>
            <svg viewBox="0 0 160 50" className="w-full h-12 mt-3">
              <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c.color} points={points} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

// --- DATA TABLE ---
function DataTable({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const rowHover = dark ? "hover:bg-white/[0.03]" : "hover:bg-gray-50";
  const borderRow = dark ? "border-white/5" : "border-gray-100";

  const [sortCol, setSortCol] = useState("revenue");
  const [sortDir, setSortDir] = useState("desc");

  const rawData = [
    { name: "Emma Wilson", email: "emma@company.co", role: "Enterprise", revenue: 12400, status: "active", avatar: "EW" },
    { name: "James Chen", email: "james@startup.io", role: "Pro", revenue: 8900, status: "active", avatar: "JC" },
    { name: "Sarah Park", email: "sarah@agency.com", role: "Enterprise", revenue: 15200, status: "active", avatar: "SP" },
    { name: "Mike Ross", email: "mike@dev.tech", role: "Starter", revenue: 2400, status: "inactive", avatar: "MR" },
    { name: "Lisa Zhang", email: "lisa@corp.net", role: "Pro", revenue: 6800, status: "active", avatar: "LZ" },
    { name: "David Kim", email: "david@saas.app", role: "Enterprise", revenue: 18900, status: "active", avatar: "DK" },
    { name: "Ana Silva", email: "ana@media.br", role: "Starter", revenue: 1200, status: "churned", avatar: "AS" },
  ];

  const data = [...rawData].sort((a, b) => {
    const mul = sortDir === "asc" ? 1 : -1;
    if (sortCol === "name") return mul * a.name.localeCompare(b.name);
    if (sortCol === "revenue") return mul * (a.revenue - b.revenue);
    return 0;
  });

  const toggleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("desc"); }
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) return <ChevronDown className="w-3 h-3 opacity-30" />;
    return sortDir === "asc" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />;
  };

  const statusColors = {
    active: dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700",
    inactive: dark ? "bg-gray-500/10 text-gray-400" : "bg-gray-100 text-gray-500",
    churned: dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600",
  };

  const avatarColors = ["from-indigo-500 to-purple-500", "from-emerald-500 to-teal-500", "from-amber-500 to-orange-500", "from-pink-500 to-rose-500", "from-blue-500 to-cyan-500", "from-violet-500 to-fuchsia-500", "from-red-500 to-pink-500"];

  return (
    <div className={`rounded-2xl border ${card} overflow-hidden`}>
      <div className="flex items-center justify-between p-6 pb-4">
        <div>
          <h3 className={`text-lg font-semibold ${text}`}>Top Customers</h3>
          <p className={`text-sm ${muted}`}>{data.length} customers total</p>
        </div>
        <div className="flex gap-2">
          <button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300 hover:bg-white/10" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} transition-colors`}>
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300 hover:bg-white/10" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} transition-colors`}>
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-y ${borderRow}`}>
              <th className={`text-left py-3 px-6 font-medium ${muted}`}>Customer</th>
              <th className={`text-left py-3 px-4 font-medium ${muted}`}>Plan</th>
              <th className={`text-left py-3 px-4 font-medium ${muted} cursor-pointer select-none`} onClick={() => toggleSort("revenue")}>
                <span className="inline-flex items-center gap-1">Revenue <SortIcon col="revenue" /></span>
              </th>
              <th className={`text-left py-3 px-4 font-medium ${muted}`}>Status</th>
              <th className={`text-right py-3 px-6 font-medium ${muted}`}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={row.email} className={`border-b ${borderRow} ${rowHover} transition-colors`}>
                <td className="py-3 px-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{row.avatar}</div>
                    <div>
                      <p className={`font-medium ${text}`}>{row.name}</p>
                      <p className={`text-xs ${muted}`}>{row.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-sm ${text}`}>{row.role}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`font-medium ${text}`}>${row.revenue.toLocaleString()}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${statusColors[row.status]}`}>{row.status}</span>
                </td>
                <td className="py-3 px-6 text-right">
                  <button className={muted}><MoreHorizontal className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- RECENT ACTIVITY ---
function RecentActivity({ dark }) {
  const card = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  const borderRow = dark ? "border-white/5" : "border-gray-100";

  const activities = [
    { icon: ShoppingCart, color: "text-indigo-400", bg: dark ? "bg-indigo-500/10" : "bg-indigo-50", text: "New order #1248", detail: "Emma Wilson — $2,400", time: "2m ago" },
    { icon: Users, color: "text-emerald-400", bg: dark ? "bg-emerald-500/10" : "bg-emerald-50", text: "New signup", detail: "alex@startup.io", time: "15m ago" },
    { icon: Star, color: "text-amber-400", bg: dark ? "bg-amber-500/10" : "bg-amber-50", text: "5-star review received", detail: "\"Amazing platform!\"", time: "1h ago" },
    { icon: CreditCard, color: "text-purple-400", bg: dark ? "bg-purple-500/10" : "bg-purple-50", text: "Payment processed", detail: "Invoice #4821 — $8,900", time: "2h ago" },
    { icon: Mail, color: "text-blue-400", bg: dark ? "bg-blue-500/10" : "bg-blue-50", text: "Support ticket resolved", detail: "Ticket #892 closed", time: "3h ago" },
    { icon: TrendingUp, color: "text-emerald-400", bg: dark ? "bg-emerald-500/10" : "bg-emerald-50", text: "MRR milestone reached", detail: "$50K monthly recurring", time: "5h ago" },
  ];

  return (
    <div className={`rounded-2xl border ${card}`}>
      <div className="flex items-center justify-between p-6 pb-4">
        <h3 className={`text-lg font-semibold ${text}`}>Recent Activity</h3>
        <button className={`text-sm ${muted} hover:text-indigo-400 transition-colors`}>View all</button>
      </div>
      <div className="px-6 pb-4">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className={`flex items-center gap-4 py-3 ${i < activities.length - 1 ? `border-b ${borderRow}` : ""}`}>
              <div className={`w-9 h-9 rounded-xl ${a.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${a.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${text}`}>{a.text}</p>
                <p className={`text-xs ${muted} truncate`}>{a.detail}</p>
              </div>
              <span className={`text-xs ${muted} flex-shrink-0`}>{a.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- DASHBOARD OVERVIEW ---
function DashboardOverview({ dark }) {
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-500" : "text-gray-500";
  return (
    <>
      <FadeIn>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold ${text}`}>Dashboard</h1>
            <p className={`text-sm ${muted} mt-1`}>Welcome back, John. Here&apos;s what&apos;s happening.</p>
          </div>
          <div className="flex gap-2">
            <button className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm ${dark ? "bg-white/5 text-gray-300 hover:bg-white/10" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"} transition-colors`}>
              <Calendar className="w-4 h-4" /> Last 30 days <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-indigo-500 text-white hover:bg-indigo-400 transition-colors">
              <Plus className="w-4 h-4" /> New Report
            </button>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.05}><StatCards dark={dark} /></FadeIn>
      <FadeIn delay={0.1}>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2"><RevenueChart dark={dark} /></div>
          <RecentActivity dark={dark} />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}><MiniCharts dark={dark} /></FadeIn>
      <FadeIn delay={0.1}><DataTable dark={dark} /></FadeIn>
    </>
  );
}

// --- MAIN PAGE ---
export default function DashboardPage() {
  const { dark, toggle } = useDarkMode();
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const bg = dark ? "bg-[#0a0a14]" : "bg-gray-50";

  const pages = {
    dashboard: DashboardOverview,
    analytics: AnalyticsPage,
    customers: CustomersPage,
    products: ProductsPage,
    orders: OrdersPage,
    transactions: TransactionsPage,
    settings: SettingsPage,
  };

  const ActivePage = pages[active] || DashboardOverview;

  return (
    <div className={`min-h-screen ${bg} flex`} style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <Sidebar dark={dark} active={active} setActive={setActive} collapsed={collapsed} setCollapsed={setCollapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar dark={dark} toggle={toggle} setMobileOpen={setMobileOpen} />

        <main key={active} className="flex-1 p-6 space-y-6 overflow-y-auto">
          <ActivePage dark={dark} />
        </main>
      </div>
    </div>
  );
}
