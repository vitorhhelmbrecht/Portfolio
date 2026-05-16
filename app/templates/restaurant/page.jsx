"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, ArrowRight, Star } from "lucide-react";
import { Instagram } from "@/components/BrandIcons";
import BackToPortfolio from "@/components/BackToPortfolio";
import { restaurant as images } from "@/lib/images";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import SectionHeader from "@/components/SectionHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-8 bg-amber-50 text-amber-800">Now Open for Brunch — Sat &amp; Sun</Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-stone-900" style={{ fontFamily: "'Georgia', serif" }}>
          Seasonal flavors,<br />
          <span className="text-amber-700">crafted with soul.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          A modern neighborhood restaurant celebrating local ingredients, bold flavors, and the art of gathering around a table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="warm" colorScheme="stone" icon={ArrowRight}>Reserve a Table</Button>
          <Button size="lg" variant="outline" colorScheme="stone">View Menu</Button>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-stone-400">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 142 Oak Street, Brooklyn</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Tue–Sun, 5pm–11pm</span>
        </div>
      </div>
    </section>
  );
}

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Burrata & Heirloom Tomato", desc: "Basil oil, aged balsamic, sourdough crisp", price: "16" },
      { name: "Crispy Calamari", desc: "Saffron aioli, charred lemon, pickled chili", price: "14" },
      { name: "Seasonal Soup", desc: "Chef's daily selection, house-baked bread", price: "12" },
      { name: "Tuna Tartare", desc: "Sesame, avocado, wonton chips, ponzu", price: "18" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Grilled Branzino", desc: "Roasted fennel, olive tapenade, caper butter", price: "34" },
      { name: "Braised Short Rib", desc: "Creamy polenta, gremolata, root vegetables", price: "38" },
      { name: "Wild Mushroom Risotto", desc: "Truffle oil, parmesan, micro herbs", price: "28" },
      { name: "Pan-Seared Duck Breast", desc: "Cherry reduction, sweet potato purée", price: "36" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", desc: "Classic recipe, house-made ladyfingers", price: "14" },
      { name: "Seasonal Panna Cotta", desc: "Rotating fruit compote, almond brittle", price: "12" },
      { name: "Chocolate Fondant", desc: "Molten center, vanilla bean gelato", price: "16" },
    ],
  },
];

function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader overline="The Menu" title="Seasonal & inspired" subtitle="Our menu changes with the seasons, sourcing the best from local farms and purveyors." overlineColor="text-amber-700" titleFont="'Georgia', 'Times New Roman', serif" />
        <div className="flex justify-center gap-4 mb-12">
          {menuCategories.map((cat, i) => (
            <button key={cat.name} onClick={() => setActiveTab(i)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === i ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}>
              {cat.name}
            </button>
          ))}
        </div>
        <div className="space-y-0">
          {menuCategories[activeTab].items.map((item, i) => (
            <div key={item.name} className={`flex items-start justify-between py-6 ${i > 0 ? "border-t border-stone-100" : ""}`}>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                <p className="text-stone-400 text-sm mt-1">{item.desc}</p>
              </div>
              <span className="text-lg font-semibold text-amber-700 ml-4 whitespace-nowrap">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#faf8f5" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader overline="Our Story" title="A table for everyone" align="left" overlineColor="text-amber-700" titleFont="'Georgia', 'Times New Roman', serif" />
          <div className="space-y-4 text-stone-500 leading-relaxed -mt-8">
            <p>Founded in 2019, Embers started as a simple idea: bring people together over honest food. Our kitchen celebrates the beauty of seasonal ingredients, prepared with care and served without pretense.</p>
            <p>Chef Maria Torres leads our team with 15 years of experience across kitchens in Barcelona, New York, and Tokyo. Every dish reflects her belief that great food is an act of generosity.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[["6+", "Years Open"], ["50k+", "Guests Served"], ["4.8", "Avg Rating"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold text-stone-900">{val}</p>
                <p className="text-sm text-stone-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.about.map((src, i) => (
            <div key={i} className={`bg-stone-200 rounded-2xl overflow-hidden ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Gallery" title="Moments at Embers" overlineColor="text-amber-700" titleFont="'Georgia', 'Times New Roman', serif" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.gallery.map((src, i) => (
            <div key={i} className={`bg-stone-100 rounded-2xl overflow-hidden ${i <= 1 ? "md:col-span-2 aspect-video" : "aspect-square"} hover:opacity-90 transition-opacity cursor-pointer`}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "David L.", text: "The braised short rib was the best I've ever had. Warm atmosphere, impeccable service.", rating: 5 },
    { name: "Sophie M.", text: "Our go-to date night spot. The seasonal menu keeps us coming back every month.", rating: 5 },
    { name: "Alex R.", text: "Brunch here is an experience. The truffle eggs are worth waking up for.", rating: 5 },
  ];
  return (
    <section className="py-24 px-6" style={{ background: "#faf8f5" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader overline="Reviews" title="What our guests say" overlineColor="text-amber-700" titleFont="'Georgia', 'Times New Roman', serif" />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.name} className="p-8 rounded-2xl bg-white border border-stone-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="font-semibold text-sm text-stone-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section id="hours" className="py-24 px-6 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <SectionHeader overline="Visit Us" title="Hours & Location" align="left" light overlineColor="text-amber-300" titleFont="'Georgia', 'Times New Roman', serif" />
          <div className="space-y-4 -mt-8">
            {[["Tuesday – Thursday", "5:00 PM – 10:00 PM"], ["Friday – Saturday", "5:00 PM – 11:00 PM"], ["Sunday Brunch", "10:00 AM – 3:00 PM"], ["Monday", "Closed"]].map(([day, hours]) => (
              <div key={day} className="flex justify-between py-3 border-b border-stone-800">
                <span className="text-stone-300">{day}</span>
                <span className="font-medium">{hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-stone-800 rounded-2xl p-8 h-full flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4"><MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" /><div><p className="font-medium">142 Oak Street</p><p className="text-stone-400 text-sm">Brooklyn, NY 11201</p></div></div>
              <div className="flex items-start gap-4"><Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" /><div><p className="font-medium">(718) 555-0142</p><p className="text-stone-400 text-sm">Reservations recommended</p></div></div>
              <div className="flex items-start gap-4"><Instagram className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" /><div><p className="font-medium">@embers_bk</p><p className="text-stone-400 text-sm">Follow for daily specials</p></div></div>
            </div>
            <div className="mt-8 bg-stone-700 rounded-xl h-48 flex items-center justify-center text-stone-500 text-sm">Map Embed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservationCTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader overline="Reservations" title="Book your table" subtitle="For parties of 6 or more, please call us directly." overlineColor="text-amber-700" titleFont="'Georgia', 'Times New Roman', serif" />
        <form className="space-y-5 text-left" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all" /></div>
            <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all" /></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Date</label><input type="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all" /></div>
            <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Time</label><select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all bg-white">{["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM"].map(t=><option key={t}>{t}</option>)}</select></div>
            <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Guests</label><select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all bg-white">{[1,2,3,4,5].map(n=><option key={n}>{n} {n===1?"guest":"guests"}</option>)}</select></div>
          </div>
          <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Special Requests</label><textarea placeholder="Allergies, celebrations, seating preferences..." rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all resize-none" /></div>
          <Button variant="warm" colorScheme="stone" className="w-full" size="lg">Request Reservation</Button>
        </form>
      </div>
    </section>
  );
}

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <Navbar
        brand="Embers"
        brandFont="'Georgia', serif"
        links={["Menu", "About", "Gallery", "Hours", "Contact"]}
        ctaLabel="Reserve a Table"
        colorScheme="stone"
        ctaVariant="warm"
      />
      <Hero />
      <MenuSection />
      <About />
      <Gallery />
      <Testimonials />
      <HoursLocation />
      <ReservationCTA />
      <Footer
        brand="Embers"
        brandFont="'Georgia', serif"
        tagline="Seasonal flavors, crafted with soul. A modern neighborhood restaurant in the heart of Brooklyn."
        bg="dark"
        columns={[
          { title: "Quick Links", links: ["Menu", "About", "Gallery", "Reservations", "Private Events", "Gift Cards"] },
          { title: "Contact", links: [
            { label: "142 Oak Street, Brooklyn, NY 11201", href: "#" },
            { label: "(718) 555-0142", href: "#" },
            { label: "hello@embers-restaurant.com", href: "#" },
          ] },
        ]}
        bottomText="© 2026 Embers Restaurant. All rights reserved."
      />
    </div>
  );
}
