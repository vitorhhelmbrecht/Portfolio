"use client";

import { useState } from "react";
import { Zap, Shield, BarChart3, Globe, ArrowRight, Star } from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";

const navLinks = ["Features", "Pricing", "Testimonials", "FAQ"];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second load times with optimized delivery across 200+ edge locations worldwide." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant with end-to-end encryption, SSO, and role-based access controls." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time dashboards, custom reports, and AI-powered insights to drive decisions." },
  { icon: Globe, title: "Global Scale", desc: "Auto-scaling infrastructure that handles millions of requests without breaking a sweat." },
];

const plans = [
  { name: "Starter", price: "29", features: ["5 team members", "10 GB storage", "Basic analytics", "Email support", "API access"], popular: false },
  { name: "Pro", price: "79", features: ["25 team members", "100 GB storage", "Advanced analytics", "Priority support", "Custom integrations", "Audit logs"], popular: true },
  { name: "Enterprise", price: "199", features: ["Unlimited members", "1 TB storage", "Custom analytics", "24/7 dedicated support", "SSO & SAML", "SLA guarantee", "On-premise option"], popular: false },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO at Flowbase", text: "We cut our deployment time by 80%. The platform just works — no fuss, no drama, just results.", avatar: "SC", rating: 5 },
  { name: "Marcus Johnson", role: "VP Eng at Datawise", text: "Migrating was painless. Within a week we were running faster than we ever had on our old stack.", avatar: "MJ", rating: 5 },
  { name: "Emily Rodriguez", role: "Founder at Luma", text: "The analytics alone paid for the subscription in the first month. Incredible ROI.", avatar: "ER", rating: 5 },
];

const faqs = [
  { q: "How long does setup take?", a: "Most teams are up and running within 15 minutes. Our onboarding wizard handles the heavy lifting." },
  { q: "Can I switch plans later?", a: "Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a free trial?", a: "Yes — every plan comes with a 14-day free trial, no credit card required." },
  { q: "What kind of support do you offer?", a: "Starter gets email support, Pro gets priority chat, and Enterprise gets a dedicated account manager 24/7." },
];

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Now in public beta — try it free
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Ship faster.<br />
          <span className="text-gray-400">Scale smarter.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The modern platform for teams that move fast. Automate deploys, monitor performance, and scale globally — all from one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" icon={ArrowRight}>Start free trial</Button>
          <Button size="lg" variant="outline">Watch demo</Button>
        </div>
        <p className="text-sm text-gray-400 mt-6">No credit card required · 14-day free trial</p>
        <div className="mt-16 bg-gray-900 rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto">
          <div className="bg-gray-950 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full">
              {[["Deploys", "1,284", "+12%"], ["Uptime", "99.99%", "+0.01%"], ["Avg Response", "42ms", "-18%"]].map(([label, val, change]) => (
                <div key={label} className="text-center">
                  <p className="text-gray-500 text-xs mb-1">{label}</p>
                  <p className="text-white text-2xl font-bold">{val}</p>
                  <p className="text-green-400 text-xs mt-1">{change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Features" title="Everything you need to ship" />
        <div className="grid md:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-black group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Pricing" title="Simple, transparent pricing" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map(plan => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Testimonials" title="Loved by teams everywhere" />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader overline="FAQ" title="Common questions" />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

export default function SaaSPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BackToPortfolio />
      <Navbar
        brand="Velocity"
        brandIcon={Zap}
        links={navLinks}
        ctaLabel="Get Started"
      />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer
        brand="Velocity"
        brandIcon={Zap}
        tagline="The modern platform for teams that move fast."
        columns={[
          { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
        ]}
      />
    </div>
  );
}
