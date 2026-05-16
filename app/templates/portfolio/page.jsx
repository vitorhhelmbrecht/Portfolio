"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Layers, Palette, Code2, Smartphone } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import BackToPortfolio from "@/components/BackToPortfolio";
import { portfolio as images } from "@/lib/images";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)" }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8"><span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" /><span className="text-sm text-gray-500">Available for new projects</span></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">We design &amp; build<br /><span className="text-gray-400">digital experiences.</span></h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">A creative studio specializing in brand identity, web design, and development for startups and growing businesses.</p>
          <div className="flex flex-col sm:flex-row gap-4"><Button size="lg" icon={ArrowRight}>View our work</Button><Button size="lg" variant="outline">Get in touch</Button></div>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-8 border-t border-gray-100 pt-8">
          {[["120+", "Projects Delivered"], ["8", "Years Experience"], ["40+", "Happy Clients"], ["15", "Awards Won"]].map(([val, label]) => (<div key={label}><p className="text-3xl font-bold">{val}</p><p className="text-sm text-gray-400 mt-1">{label}</p></div>))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { title: "Flowbase", category: "Web Design & Dev", tags: ["React", "Figma", "Tailwind"], featured: true, img: images.projects[0] },
  { title: "Nomad Finance", category: "Brand Identity", tags: ["Logo", "Brand Guide", "Print"], featured: true, img: images.projects[1] },
  { title: "Helios App", category: "Mobile App", tags: ["React Native", "UI/UX"], featured: false, img: images.projects[2] },
  { title: "Artisan Coffee", category: "E-commerce", tags: ["Shopify", "Custom Theme"], featured: false, img: images.projects[3] },
  { title: "Meridian Health", category: "Web Design", tags: ["Healthcare", "Accessibility"], featured: false, img: images.projects[4] },
  { title: "Pulse Fitness", category: "Brand & Web", tags: ["Brand", "Webflow", "Motion"], featured: false, img: images.projects[5] },
];

function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Selected Work" title="Projects we're proud of" subtitle="A selection of recent projects across brand, web, and product design." />
        <div className="flex flex-wrap justify-center gap-3 mb-12">{categories.map(cat => (<button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{cat}</button>))}</div>
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map(project => (
            <div key={project.title} className="group cursor-pointer">
              <div className={`bg-gray-100 rounded-2xl overflow-hidden mb-5 ${project.featured ? "aspect-[4/3]" : "aspect-video"} relative`}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"><ArrowUpRight className="w-5 h-5" /></div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div><h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">{project.title}</h3><p className="text-gray-400 text-sm mt-1">{project.category}</p></div>
                <div className="flex gap-2 mt-1">{project.tags.slice(0, 2).map(tag => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{tag}</span>))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Palette, title: "Brand Identity", desc: "Logo design, brand guidelines, visual systems, and everything to make your brand memorable and consistent." },
  { icon: Layers, title: "Web Design", desc: "Custom website design that converts. From wireframes to pixel-perfect mockups and prototypes." },
  { icon: Code2, title: "Development", desc: "Clean, performant code. React, Next.js, Tailwind — modern stack for modern businesses." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile experiences built with React Native. From concept to App Store." },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="What We Do" title="Services" subtitle="We offer end-to-end design and development services for brands that want to stand out." />
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors"><Icon className="w-6 h-6" /></div>
                <div><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-gray-500 leading-relaxed">{desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We start by understanding your goals, audience, and competitive landscape." },
    { num: "02", title: "Strategy", desc: "We define the project scope, timeline, and creative direction." },
    { num: "03", title: "Design", desc: "Iterative design sprints with your feedback baked into every round." },
    { num: "04", title: "Build & Launch", desc: "Development, testing, and a smooth launch with ongoing support." },
  ];
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Our Process" title="How we work" subtitle="A proven process that keeps projects on track and on budget." light />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <span className="text-5xl font-bold text-gray-800">{step.num}</span>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 h-px bg-gray-700" style={{ left: "3.5rem", right: "-2rem" }} />
              )}
              <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: "Alex Rivera", role: "Creative Director", initials: "AR", img: images.team[0] },
    { name: "Jordan Lee", role: "Lead Designer", initials: "JL", img: images.team[1] },
    { name: "Sam Patel", role: "Senior Developer", initials: "SP", img: images.team[2] },
    { name: "Mia Chen", role: "Brand Strategist", initials: "MC", img: images.team[3] },
  ];
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="The Team" title="People behind the pixels" subtitle="A small, senior team that cares deeply about craft and client outcomes." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(member => (<div key={member.name} className="group text-center"><div className="w-full aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden"><img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div><h3 className="font-semibold">{member.name}</h3><p className="text-sm text-gray-400">{member.role}</p></div>))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Lisa Huang", role: "CEO, Flowbase", text: "Studio.co transformed our brand from the ground up. The website they built converts 3x better than our old one.", avatar: "LH" },
    { name: "Tom Bradley", role: "Founder, Nomad", text: "Professional, creative, and incredibly easy to work with. They delivered ahead of schedule and under budget.", avatar: "TB" },
  ];
  return (
    <section className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Testimonials" title="Client love" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map(t => (
            <TestimonialCard key={t.name} {...t} cardBg="bg-white" borderClass="border border-gray-100" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <SectionHeader overline="Get in Touch" title="Let's build something great" align="left" />
          <p className="text-gray-500 leading-relaxed -mt-8 mb-8">Have a project in mind? We&apos;d love to hear about it. Fill out the form and we&apos;ll get back to you within 24 hours.</p>
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors"><Mail className="w-5 h-5" /> hello@studio.co</a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors"><Twitter className="w-5 h-5" /> @studio_co</a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors"><Linkedin className="w-5 h-5" /> Studio.co</a>
          </div>
        </div>
        <form className="space-y-5" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all" /></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label><select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all bg-white">{["$5k – $10k", "$10k – $25k", "$25k – $50k", "$50k+"].map(b => <option key={b}>{b}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label><textarea placeholder="Tell us about your project, goals, and timeline..." rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all resize-none" /></div>
          <Button className="w-full" size="lg" icon={ArrowRight}>Send Message</Button>
        </form>
      </div>
    </section>
  );
}

function PortfolioFooter() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div><h3 className="text-3xl font-bold mb-2">Studio.co</h3><p className="text-gray-400">Design &amp; development for ambitious brands.</p></div>
          <div className="flex gap-4">{[Twitter, Linkedin, Github, Mail].map((Icon, i) => (<a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"><Icon className="w-4 h-4" /></a>))}</div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Studio.co. All rights reserved.</p>
          <div className="flex gap-6">{["Privacy", "Terms", "Cookies"].map(l => (<a key={l} href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <Navbar
        brand="Studio.co"
        links={["Work", "Services", "About", "Contact"]}
        ctaLabel="Start a Project"
      />
      <Hero />
      <ProjectGrid />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <PortfolioFooter />
    </div>
  );
}
