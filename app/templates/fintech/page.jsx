"use client";

import { useState } from "react";
import {
  ArrowRight, Check, Shield, Lock, Globe, Zap, BarChart3,
  TrendingUp, DollarSign, Building2, CreditCard, Users,
  ChevronRight, Menu, X, Eye, Clock, CheckCircle2,
  PieChart, Wallet, Landmark, BadgeCheck, ArrowUpRight,
  ShieldCheck, FileCheck, Server, Fingerprint, KeyRound, Code2,
} from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// FINTECH / BANKING LANDING — Premium Template (Light Theme)
// ============================================================

// --- HERO ---
function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 px-6 relative overflow-hidden">
      <style>{`
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="max-w-3xl" style={{ animation: "heroUp 0.8s cubic-bezier(0.22,1,0.36,1) both" }}>
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4" />
            SOC 2 Type II Certified · 256-bit Encryption
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-gray-900">
            Banking infrastructure<br />
            <span className="text-emerald-600">built on trust.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            The modern payments platform for fintech companies. Process transactions, manage accounts, and stay compliant — all through one API.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" icon={ArrowRight} colorScheme="emerald">Start integration</Button>
            <Button size="lg" variant="outline" colorScheme="emerald">Talk to sales</Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14" style={{ animation: "heroUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}>
            {[
              { val: "$12B+", label: "Processed annually" },
              { val: "99.999%", label: "Uptime SLA" },
              { val: "200+", label: "Financial institutions" },
              { val: "<50ms", label: "Avg API latency" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-gray-900">{s.val}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- TRUST BADGES ---
function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, label: "SOC 2 Type II" },
    { icon: FileCheck, label: "PCI DSS Level 1" },
    { icon: BadgeCheck, label: "ISO 27001" },
    { icon: Lock, label: "GDPR Compliant" },
    { icon: Fingerprint, label: "KYC / AML Ready" },
    { icon: KeyRound, label: "256-bit AES" },
  ];

  return (
    <section className="py-16 px-6 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-8">Regulatory compliance & certifications</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {badges.map(b => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{b.label}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- FEATURES ---
function Features() {
  const features = [
    { icon: CreditCard, title: "Payment Processing", desc: "Accept card payments, bank transfers, and digital wallets in 135+ currencies with automatic FX conversion." },
    { icon: Users, title: "Account Management", desc: "Create and manage customer accounts with KYC verification, tiered access controls, and real-time balance tracking." },
    { icon: TrendingUp, title: "Real-time Analytics", desc: "Transaction monitoring, revenue forecasting, and fraud detection dashboards updated in real-time." },
    { icon: Globe, title: "Global Coverage", desc: "Process payments in 45+ countries with local acquiring, reducing costs and improving authorization rates." },
    { icon: Shield, title: "Fraud Prevention", desc: "Machine learning-powered fraud detection with customizable rules, 3D Secure, and velocity checks." },
    { icon: Zap, title: "Instant Payouts", desc: "Send money anywhere in seconds with real-time rails, push-to-card, and automated disbursements." },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Everything your fintech needs</h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">From payment processing to compliance, we handle the hard parts so you can focus on your product.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- ROI CALCULATOR ---
function ROICalculator() {
  const [volume, setVolume] = useState(500000);
  const [avgTicket, setAvgTicket] = useState(85);

  const currentRate = 2.9;
  const vaultRate = 1.8;
  const monthlySavings = Math.round((volume * avgTicket * (currentRate - vaultRate)) / 100);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest mb-3">ROI Calculator</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">See how much you could save</h2>
            <p className="text-gray-500 mt-4">Adjust the sliders to match your business. Real savings, no guesswork.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700">Monthly Transactions</label>
                    <span className="text-sm font-bold text-gray-900">{volume.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={5000000}
                    step={10000}
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>10K</span><span>5M</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700">Average Transaction Value</label>
                    <span className="text-sm font-bold text-gray-900">${avgTicket}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={avgTicket}
                    onChange={e => setAvgTicket(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$5</span><span>$500</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Typical processor rate</span>
                    <span className="text-sm text-gray-400">{currentRate}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Vault rate</span>
                    <span className="text-sm font-medium text-emerald-600">{vaultRate}%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-2">Estimated annual savings</p>
                  <p className="text-5xl md:text-6xl font-bold text-emerald-600 tracking-tight">
                    ${annualSavings.toLocaleString()}
                  </p>
                  <p className="text-gray-400 mt-2">${monthlySavings.toLocaleString()} per month</p>

                  <div className="mt-8 space-y-3">
                    {[
                      "No hidden fees or markups",
                      "Volume discounts available",
                      "Savings guaranteed or we match",
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="mt-8" icon={ArrowRight} colorScheme="emerald">Get custom quote</Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- HOW IT WORKS ---
function HowItWorks() {
  const steps = [
    { num: "01", title: "Integrate the API", desc: "Add our SDK to your app. RESTful endpoints with client libraries for every major language. Most teams go live in under a week.", icon: Code2 },
    { num: "02", title: "Configure compliance", desc: "Set up KYC/AML flows, fraud rules, and risk thresholds through our dashboard. We handle the regulatory complexity.", icon: Shield },
    { num: "03", title: "Go live & scale", desc: "Start processing real transactions. Our infrastructure scales automatically — from 100 to 100 million transactions.", icon: Zap },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Live in days, not months</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative">
                  {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_48px)] border-t-2 border-dashed border-gray-200" />}
                  <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{s.num}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- SECURITY SECTION ---
function Security() {
  const items = [
    { icon: Server, title: "Isolated Infrastructure", desc: "Dedicated VPC with no shared resources. Your data is physically separated." },
    { icon: Fingerprint, title: "Biometric Auth", desc: "Support for fingerprint and face ID in mobile SDK. Hardware key support for admin." },
    { icon: Eye, title: "Real-time Monitoring", desc: "24/7 SOC team monitoring for anomalies, intrusions, and suspicious activity." },
    { icon: KeyRound, title: "Key Management", desc: "HSM-backed key management with automatic rotation and zero-knowledge architecture." },
    { icon: Lock, title: "End-to-End Encryption", desc: "TLS 1.3 in transit, AES-256 at rest. PCI DSS Level 1 certified vault." },
    { icon: FileCheck, title: "Audit Trails", desc: "Immutable logs of every action. SOX-ready reporting and compliance exports." },
  ];

  return (
    <section id="security" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-3">Security</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Bank-grade security,<br />built from day one</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">We don&apos;t bolt on security. It&apos;s the foundation of every line of code.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4">
            {items.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
function Testimonials() {
  const quotes = [
    { text: "Vault cut our payment integration timeline from 6 months to 2 weeks. The compliance tooling alone saved us hundreds of hours.", name: "Sarah Chen", role: "CTO, NeoBank", avatar: "SC" },
    { text: "We moved $2B in volume to Vault last year. Their fraud detection caught 40% more suspicious transactions than our previous provider.", name: "Marcus Rodriguez", role: "VP Payments, PayStream", avatar: "MR" },
    { text: "The API documentation is the best I've seen in fintech. Our developers were productive from day one.", name: "Lisa Park", role: "Engineering Lead, CashFlow", avatar: "LP" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Trusted by leading fintechs</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map(q => (
              <div key={q.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 text-amber-400">★</div>)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{q.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{q.name}</p>
                    <p className="text-xs text-gray-500">{q.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- PRICING ---
function Pricing() {
  const plans = [
    { name: "Startup", desc: "For early-stage companies.", price: "0.5%", unit: "per transaction", features: ["Up to $1M/mo volume", "Payment processing", "Basic fraud rules", "Standard KYC", "Email support", "API access"], cta: "Get Started" },
    { name: "Growth", desc: "For scaling fintechs.", price: "0.3%", unit: "per transaction", features: ["Up to $50M/mo volume", "All payment methods", "ML fraud detection", "Enhanced KYC/AML", "Priority support", "Webhooks & SDK", "Custom rules engine", "Analytics dashboard"], popular: true, cta: "Get Started" },
    { name: "Enterprise", desc: "Custom infrastructure.", price: "Custom", unit: "", features: ["Unlimited volume", "Dedicated infrastructure", "Custom fraud models", "White-label solution", "24/7 dedicated support", "On-prem deployment", "SLA guarantee", "Dedicated CSM", "Regulatory consulting"], cta: "Contact Sales" },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Transparent, volume-based pricing</h2>
            <p className="text-gray-500 mt-4">No setup fees. No monthly minimums. Pay only for what you process.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name} className={`relative rounded-2xl p-6 ${plan.popular ? "bg-white border-2 border-emerald-500 shadow-lg shadow-emerald-500/5" : "bg-white border border-gray-200"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.unit && <span className="text-gray-500 text-sm ml-1">{plan.unit}</span>}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "primary" : "outline"} colorScheme="emerald" className="w-full" size="sm">{plan.cta}</Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- CTA ---
function CTABanner() {
  return (
    <section className="py-24 px-6">
      <FadeIn>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to modernize<br />your payments?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join 200+ financial institutions already using Vault. Go live in under a week.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" icon={ArrowRight} colorScheme="emerald">Start integration</Button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium border border-white/20 text-white hover:bg-white/10 transition-all">
                  Talk to an expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// --- MAIN ---
export default function FintechPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <Navbar
        brand="Vault"
        brandIcon={Landmark}
        brandIconBg="bg-emerald-600"
        links={["Features", "Security", "Pricing", "About"]}
        ctaLabel="Get Started"
        colorScheme="emerald"
        extraLinks={<a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sign in</a>}
      />
      <Hero />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <ROICalculator />
      <Security />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer
        brand="Vault"
        brandIcon={Landmark}
        brandIconBg="bg-emerald-600"
        tagline="Banking infrastructure built on trust."
        bg="light"
        columns={[
          { title: "Product", links: ["Features", "Pricing", "Security", "API Docs", "Status"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"] },
        ]}
        bottomText="© 2026 Vault Financial Technologies. All rights reserved."
      />
    </div>
  );
}
