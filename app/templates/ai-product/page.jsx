"use client";

import { useState } from "react";
import {
  ArrowRight, Check, Copy, Play, Globe, Lock, Cpu, Layers, Gauge,
  BarChart3, GitBranch, ChevronRight, Zap, Terminal, Code2, Eye,
  Shield, Database, Activity, RefreshCw, Menu, X, Sparkles,
  Brain, MessageSquare, Image, FileText, Music, Video,
} from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import useScrolled from "@/components/useScrolled";

// ============================================================
// AI / ML PRODUCT LANDING — Premium Template
// ============================================================

// --- NAVBAR ---
function AINavbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const links = ["Models", "Playground", "Pricing", "Docs"];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a12]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">Aurora</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>)}
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Log in</a>
          <Button size="sm" colorScheme="violet">Get API Key</Button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a12] border-t border-white/5 px-6 py-4 space-y-3">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="block text-gray-400 py-2" onClick={() => setOpen(false)}>{l}</a>)}
          <Button className="w-full" colorScheme="violet">Get API Key</Button>
        </div>
      )}
    </nav>
  );
}

// --- HERO ---
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <style>{`
        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-30" style={{ animation: "meshFloat 15s ease-in-out infinite" }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-transparent blur-[120px]" />
      </div>
      <div className="absolute bottom-[-100px] right-[-200px] w-[600px] h-[600px] opacity-20" style={{ animation: "meshFloat 12s ease-in-out 3s infinite" }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-cyan-500 via-blue-600 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center" style={{ animation: "heroUp 0.8s cubic-bezier(0.22,1,0.36,1) both" }}>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-violet-400" />
          Introducing Aurora AI — Now with GPT-5 & Claude 4
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
          AI infrastructure<br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">for every product.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          One API to access the world&apos;s best models. Built-in guardrails, caching, observability, and fallbacks. Ship AI features in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" icon={ArrowRight} colorScheme="violet">Start building free</Button>
          <Button size="lg" variant="outline" colorScheme="violet" icon={Play}>Watch demo</Button>
        </div>

        {/* Logos */}
        <div className="mt-16" style={{ animation: "heroUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}>
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Vercel", "Stripe", "Notion", "Linear", "Figma", "Datadog"].map(name => (
              <span key={name} className="text-white text-lg font-bold">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- API PLAYGROUND ---
function Playground() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("request");

  const requestCode = `import Aurora from 'aurora-ai';

const client = new Aurora({
  apiKey: process.env.AURORA_API_KEY,
});

const response = await client.chat({
  model: "gpt-5",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Explain quantum computing" }
  ],
  temperature: 0.7,
  maxTokens: 1024,
});

console.log(response.choices[0].message);`;

  const responseCode = `{
  "id": "chat_a1b2c3d4e5f6",
  "model": "gpt-5",
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 186,
    "total_tokens": 210,
    "cost": "$0.0042"
  },
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Quantum computing harnesses the principles of quantum mechanics..."
    },
    "finish_reason": "stop"
  }],
  "latency_ms": 842
}`;

  const handleCopy = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="playground" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">API Playground</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">One API, every model</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">Switch models with one line. Same request format, same response shape — no rewrites.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-[#12121e] overflow-hidden">
            {/* Tab bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex gap-1">
                {["request", "response"].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"}`}>
                    {tab === "request" ? "Request" : "Response"}
                  </button>
                ))}
              </div>
              <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300 max-h-[400px]">
              <code>{activeTab === "request" ? requestCode : responseCode}</code>
            </pre>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- MODEL CARDS ---
function Models() {
  const models = [
    { name: "GPT-5", provider: "OpenAI", speed: "Fast", context: "256K", price: "$20/1M tokens", icon: Brain, tag: "Most Popular" },
    { name: "Claude 4 Opus", provider: "Anthropic", speed: "Medium", context: "200K", price: "$15/1M tokens", icon: MessageSquare, tag: "Best Quality" },
    { name: "Gemini Ultra 2", provider: "Google", speed: "Fast", context: "2M", price: "$12/1M tokens", icon: Sparkles, tag: "Largest Context" },
    { name: "Llama 4 405B", provider: "Meta", speed: "Medium", context: "128K", price: "$5/1M tokens", icon: Code2, tag: "Best Value" },
  ];

  return (
    <section id="models" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">Models</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Access every frontier model</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">One integration. Every major model. Automatic fallbacks if a provider goes down.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-4">
            {models.map(m => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{m.name}</h3>
                        <p className="text-xs text-gray-500">{m.provider}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-violet-500/10 text-violet-400 px-2.5 py-1 rounded-lg">{m.tag}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    {[["Speed", m.speed], ["Context", m.context], ["Price", m.price]].map(([label, val]) => (
                      <div key={label}>
                        <p className="text-xs text-gray-500">{label}</p>
                        <p className="text-sm text-white font-medium mt-0.5">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- FEATURES BENTO ---
function Features() {
  const features = [
    { icon: Shield, title: "Guardrails", desc: "Content filtering, PII redaction, and prompt injection detection built in.", span: 1 },
    { icon: Gauge, title: "Smart Caching", desc: "Semantic caching cuts costs by up to 70% on repeated queries.", span: 1 },
    { icon: Activity, title: "Observability", desc: "Every request logged with latency, cost, and token usage dashboards.", span: 1 },
    { icon: RefreshCw, title: "Auto Fallbacks", desc: "If GPT-5 goes down, we route to Claude — zero downtime, same API.", span: 2 },
    { icon: Lock, title: "SOC 2 Type II", desc: "Enterprise-grade security. Your data never trains models.", span: 1 },
    { icon: Zap, title: "Streaming", desc: "Native streaming support with server-sent events.", span: 1 },
    { icon: Globe, title: "Edge Routing", desc: "Requests routed to the nearest provider endpoint for lowest latency.", span: 1 },
    { icon: Database, title: "Vector Store", desc: "Built-in RAG pipeline with managed vector database for context retrieval.", span: 1 },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ship AI, not infrastructure</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">Everything you need to go from prototype to production-grade AI.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={`bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 hover:bg-white/[0.05] transition-all ${f.span === 2 ? "md:col-span-2" : ""}`}>
                  <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- USE CASES ---
function UseCases() {
  const cases = [
    { icon: MessageSquare, title: "Chatbots & Assistants", desc: "Build conversational AI with memory, tools, and multi-turn reasoning." },
    { icon: FileText, title: "Document Analysis", desc: "Extract, summarize, and answer questions over any document format." },
    { icon: Image, title: "Image Generation", desc: "Create and edit images with DALL·E 3, Midjourney, and Stable Diffusion." },
    { icon: Code2, title: "Code Generation", desc: "AI-powered code completion, review, and refactoring at scale." },
    { icon: Globe, title: "Translation", desc: "Real-time multilingual translation across 100+ languages." },
    { icon: Eye, title: "Content Moderation", desc: "Automated content safety checks with customizable policies." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Built for any AI workflow</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cases.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-violet-500/20 transition-all group">
                  <Icon className="w-5 h-5 text-violet-400 mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- PRICING ---
function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    { name: "Free", desc: "For hobby projects and prototyping.", price: 0, features: ["1,000 requests/day", "3 models", "Community support", "Basic analytics", "7-day log retention"], cta: "Get Started" },
    { name: "Pro", desc: "For startups shipping AI products.", price: annual ? 79 : 99, features: ["50,000 requests/day", "All models", "Priority support", "Advanced analytics", "Guardrails & caching", "90-day log retention", "Custom rate limits"], popular: true, cta: "Start Free Trial" },
    { name: "Enterprise", desc: "Custom scale, custom terms.", price: null, features: ["Unlimited requests", "All models + fine-tuned", "Dedicated support engineer", "Real-time analytics", "Custom guardrails", "Unlimited retention", "SSO / SAML / SCIM", "BAA & DPA available", "On-prem deployment"], cta: "Contact Sales" },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Simple, usage-based pricing</h2>
            <p className="text-gray-400 mt-4">Pay for what you use. No hidden fees. Scale up or down anytime.</p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
              <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-violet-500" : "bg-white/20"}`}>
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${annual ? "left-6" : "left-0.5"}`} />
              </button>
              <span className={`text-sm ${annual ? "text-white" : "text-gray-500"}`}>Annual <span className="text-violet-400 text-xs font-medium ml-1">Save 20%</span></span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map(plan => (
              <div key={plan.name} className={`relative rounded-2xl p-6 ${plan.popular ? "bg-violet-500/10 border-2 border-violet-500/40" : "bg-white/5 border border-white/10"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400 mt-1 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  {plan.price === null ? (
                    <span className="text-3xl font-bold text-white">Custom</span>
                  ) : plan.price === 0 ? (
                    <span className="text-3xl font-bold text-white">Free</span>
                  ) : (
                    <><span className="text-3xl font-bold text-white">${plan.price}</span><span className="text-gray-500">/mo</span></>
                  )}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-violet-400 flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "primary" : "outline"} colorScheme="violet" className="w-full" size="sm">{plan.cta}</Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- SDK SECTION ---
function SDKSection() {
  const sdks = ["Python", "Node.js", "Go", "Rust", "Ruby", "Java", "Swift", "Kotlin", ".NET", "Elixir"];
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">SDKs & Libraries</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">First-class SDK for every language</h2>
            <p className="text-gray-400 mt-4">Typed, documented, and tested. Install and ship in under 5 minutes.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {sdks.map(sdk => (
              <span key={sdk} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-violet-500/30 hover:text-white transition-colors cursor-default">
                {sdk}
              </span>
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
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-violet-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start building with AI<br />in 30 seconds.</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Free tier includes 1,000 requests per day. No credit card required.</p>
            <Button size="lg" icon={ArrowRight} colorScheme="violet">Get your API key</Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// --- MAIN ---
export default function AIProductPage() {
  return (
    <div className="min-h-screen text-gray-100" style={{ background: "#0a0a12", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <AINavbar />
      <Hero />
      <Playground />
      <Models />
      <Features />
      <UseCases />
      <SDKSection />
      <Pricing />
      <CTABanner />
      <Footer
        brand="Aurora"
        brandIcon={Sparkles}
        brandIconBg="bg-gradient-to-br from-violet-500 to-fuchsia-500"
        tagline="AI infrastructure for every product."
        bg="custom"
        customBg="border-t border-white/5 text-white"
        columns={[
          { title: "Product", links: ["Models", "Playground", "Pricing", "Changelog", "Status"] },
          { title: "Developers", links: ["Documentation", "API Reference", "SDKs", "Examples", "Community"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Security", "Contact"] },
        ]}
        bottomText="© 2026 Aurora AI. All rights reserved."
      />
    </div>
  );
}
