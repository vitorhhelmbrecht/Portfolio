"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, Heart, Star, Filter, ChevronDown, Plus, Minus, ArrowRight, Truck, RotateCcw, Shield, Package } from "lucide-react";
import BackToPortfolio from "@/components/BackToPortfolio";
import { ecommerce as img } from "@/lib/images";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import SectionHeader from "@/components/SectionHeader";
import useScrolled from "@/components/useScrolled";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 89, originalPrice: 120, category: "Lighting", badge: "sale", rating: 4.8, reviews: 124, colors: ["#1a1a1a", "#f5f0e8", "#8b7355"], img: img.products[0] },
  { id: 2, name: "Ceramic Pour-Over Set", price: 64, category: "Kitchen", badge: "new", rating: 4.9, reviews: 87, colors: ["#f5f0e8", "#d4c5a9"], img: img.products[1] },
  { id: 3, name: "Linen Throw Blanket", price: 145, category: "Textiles", rating: 4.7, reviews: 203, colors: ["#c8b89a", "#8b8b8b", "#f5f0e8", "#2d3436"], img: img.products[2] },
  { id: 4, name: "Walnut Shelf System", price: 249, category: "Furniture", rating: 4.9, reviews: 56, colors: ["#8b7355", "#1a1a1a"], img: img.products[3] },
  { id: 5, name: "Hand-Blown Vase", price: 78, category: "Decor", badge: "new", rating: 4.6, reviews: 92, colors: ["#b8d4e3", "#f5f0e8", "#c9a96e"], img: img.products[4] },
  { id: 6, name: "Organic Cotton Towels", price: 42, category: "Textiles", rating: 4.8, reviews: 315, colors: ["#f5f0e8", "#c8b89a", "#8b8b8b"], img: img.products[5] },
  { id: 7, name: "Stoneware Mug Set", price: 56, category: "Kitchen", rating: 4.7, reviews: 178, colors: ["#8b7355", "#f5f0e8", "#2d3436"], img: img.products[6] },
  { id: 8, name: "Brass Candle Holder", price: 38, originalPrice: 52, category: "Decor", badge: "sale", rating: 4.5, reviews: 64, colors: ["#c9a96e", "#1a1a1a"], img: img.products[7] },
];

const categories = [
  { name: "Lighting", count: 24 }, { name: "Furniture", count: 38 }, { name: "Kitchen", count: 19 }, { name: "Textiles", count: 31 }, { name: "Decor", count: 27 },
];

function AnnouncementBar() {
  return <div className="bg-black text-white text-center py-2.5 px-4 text-sm">Free shipping on orders over $100 — <a href="#" className="underline font-medium">Shop now</a></div>;
}

function EcommerceNavbar({ cartCount = 0, onCartClick, onSearchClick }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(60);
  const links = ["Shop", "New Arrivals", "Collections", "About"];
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">MODN</span>
        <div className="hidden md:flex items-center gap-8">{links.map(l => <a key={l} href="#" className="text-sm text-gray-600 hover:text-black transition-colors">{l}</a>)}</div>
        <div className="flex items-center gap-4">
          <button onClick={onSearchClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block"><Heart className="w-5 h-5" /></button>
          <button onClick={onCartClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"><ShoppingBag className="w-5 h-5" />{cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">{cartCount}</span>}</button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (<div className="md:hidden bg-white border-t px-6 py-4 space-y-3">{links.map(l => <a key={l} href="#" className="block text-gray-600 py-2" onClick={() => setOpen(false)}>{l}</a>)}</div>)}
    </nav>
  );
}

function HeroBanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f0e8 0%, #e8e0d0 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex items-center">
        <div className="max-w-xl">
          <Badge variant="new" className="mb-6">Summer Collection 2026</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Thoughtfully<br />designed goods.</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">Curated homeware and lifestyle essentials made from natural materials by independent artisans.</p>
          <div className="flex gap-4"><Button size="lg" icon={ArrowRight}>Shop Collection</Button><Button size="lg" variant="outline">Lookbook</Button></div>
        </div>
        <div className="hidden md:block flex-1 ml-16"><div className="rounded-3xl w-full aspect-square max-w-md ml-auto overflow-hidden"><img src={img.hero} alt="Modern homeware" className="w-full h-full object-cover" /></div></div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Shop by Category" align="left" action={<a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 transition-colors">All Categories <ArrowRight className="w-4 h-4" /></a>} className="mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (<div key={cat.name} className="group cursor-pointer"><div className="aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden"><img src={img.categories[i]} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div><h3 className="font-medium text-sm">{cat.name}</h3><p className="text-xs text-gray-400">{cat.count} items</p></div>))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onQuickView, onAddToCart, onToggleWishlist, wishlisted = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        {product.badge && <div className="absolute top-3 left-3"><Badge variant={product.badge}>{product.badge === "sale" ? "Sale" : "New"}</Badge></div>}
        <button onClick={() => onToggleWishlist?.(product.id)} className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"><Heart className={`w-4 h-4 ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} /></button>
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="flex gap-2">
            <button onClick={() => onAddToCart?.(product)} className="flex-1 bg-black text-white py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Add to Cart</button>
            <button onClick={() => onQuickView?.(product)} className="w-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"><Search className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div><h3 className="font-medium text-sm group-hover:text-gray-600 transition-colors">{product.name}</h3><p className="text-xs text-gray-400 mt-0.5">{product.category}</p></div>
        <div className="text-right"><span className="font-semibold text-sm">${product.price}</span>{product.originalPrice && <span className="text-xs text-gray-400 line-through ml-1">${product.originalPrice}</span>}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />))}</div>
        <span className="text-xs text-gray-400">({product.reviews})</span>
      </div>
      <div className="flex gap-1.5 mt-2">{product.colors.map(color => (<div key={color} className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: color }} />))}</div>
    </div>
  );
}

function ProductGridSection({ onQuickView, onAddToCart, wishlist, onToggleWishlist }) {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterCat, setFilterCat] = useState("All");
  const allCats = ["All", ...new Set(products.map(p => p.category))];
  const filtered = filterCat === "All" ? products : products.filter(p => p.category === filterCat);
  return (
    <section id="shop" className="py-20 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured Products" subtitle="Our most-loved pieces, handpicked for you." align="left" className="mb-12" />
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">{allCats.map(cat => (<button key={cat} onClick={() => setFilterCat(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterCat === cat ? "bg-black text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"}`}>{cat}</button>))}</div>
          <div className="relative">
            <button onClick={() => setSortOpen(!sortOpen)} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm bg-white hover:border-gray-400 transition-colors"><Filter className="w-4 h-4" /> Sort <ChevronDown className="w-3 h-3" /></button>
            {sortOpen && (<div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-48 z-10">{["Newest", "Price: Low to High", "Price: High to Low", "Best Rated"].map(opt => (<button key={opt} onClick={() => setSortOpen(false)} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">{opt}</button>))}</div>)}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{filtered.map(product => (<ProductCard key={product.id} product={product} onQuickView={onQuickView} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} wishlisted={wishlist.has(product.id)} />))}</div>
        <div className="text-center mt-12"><Button variant="outline" size="lg">View All Products</Button></div>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2" onClick={e => e.stopPropagation()}>
        <div className="aspect-square bg-gray-100 rounded-l-3xl overflow-hidden"><img src={product.img} alt={product.name} className="w-full h-full object-cover" /></div>
        <div className="p-8 flex flex-col">
          <button onClick={onClose} className="self-end p-2 hover:bg-gray-100 rounded-full transition-colors mb-4"><X className="w-5 h-5" /></button>
          <p className="text-sm text-gray-400 mb-1">{product.category}</p>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />)}</div>
            <span className="text-sm text-gray-400">{product.reviews} reviews</span>
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>}
            {product.originalPrice && <Badge variant="sale">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</Badge>}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">Thoughtfully crafted from sustainable materials. Each piece is unique, made by skilled artisans with attention to every detail.</p>
          <div className="mb-6"><p className="text-sm font-medium mb-2">Color</p><div className="flex gap-2">{product.colors.map((color, i) => (<button key={color} onClick={() => setSelectedColor(i)} className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === i ? "border-black scale-110" : "border-gray-200"}`} style={{ backgroundColor: color }} />))}</div></div>
          <div className="mb-6"><p className="text-sm font-medium mb-2">Quantity</p><div className="flex items-center border border-gray-200 rounded-full w-fit"><button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-l-full transition-colors"><Minus className="w-4 h-4" /></button><span className="w-10 text-center font-medium">{qty}</span><button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-r-full transition-colors"><Plus className="w-4 h-4" /></button></div></div>
          <div className="mt-auto flex gap-3">
            <Button className="flex-1" size="lg" onClick={() => { onAddToCart?.(product, qty); onClose(); }}>Add to Cart — ${product.price * qty}</Button>
            <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"><Heart className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, items, onUpdateQty, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />}
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b"><h2 className="text-lg font-bold">Your Cart ({items.length})</h2><button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5" /></button></div>
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16"><ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">Your cart is empty</p><Button variant="outline" className="mt-4" onClick={onClose}>Continue Shopping</Button></div>
            ) : (
              <div className="space-y-6">{items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden"><img src={item.img} alt={item.name} className="w-full h-full object-cover" /></div>
                  <div className="flex-1">
                    <div className="flex justify-between"><h3 className="font-medium text-sm">{item.name}</h3><button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 transition-colors"><X className="w-4 h-4" /></button></div>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full"><button onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))} className="w-8 h-8 flex items-center justify-center"><Minus className="w-3 h-3" /></button><span className="w-6 text-center text-sm">{item.qty}</span><button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center"><Plus className="w-3 h-3" /></button></div>
                      <span className="font-semibold text-sm">${item.price * item.qty}</span>
                    </div>
                  </div>
                </div>
              ))}</div>
            )}
          </div>
          {items.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span className="font-semibold">${total}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Shipping</span><span className="font-semibold">{total >= 100 ? "Free" : "$9.99"}</span></div>
              <div className="flex justify-between border-t pt-4"><span className="font-bold">Total</span><span className="font-bold text-lg">${total >= 100 ? total : total + 9.99}</span></div>
              <Button className="w-full" size="lg">Checkout</Button>
              <button onClick={onClose} className="w-full text-center text-sm text-gray-500 hover:text-black transition-colors">Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function SearchOverlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 pt-20">
        <div className="flex items-center gap-4 mb-8"><Search className="w-6 h-6 text-gray-400" /><input type="text" placeholder="Search products..." autoFocus className="flex-1 text-2xl font-light outline-none" /><button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-6 h-6" /></button></div>
        <div><p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Popular Searches</p><div className="flex flex-wrap gap-2">{["Desk Lamp", "Ceramics", "Linen", "Walnut", "Gift Sets", "New Arrivals"].map(term => (<button key={term} className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">{term}</button>))}</div></div>
      </div>
    </div>
  );
}

function FeaturesStrip() {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
    { icon: RotateCcw, title: "30-Day Returns", desc: "Hassle-free returns" },
    { icon: Shield, title: "Secure Payment", desc: "SSL encrypted checkout" },
    { icon: Package, title: "Gift Wrapping", desc: "Available at checkout" },
  ];
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (<div key={title} className="flex items-start gap-4"><div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5" /></div><div><h3 className="font-medium text-sm">{title}</h3><p className="text-xs text-gray-400 mt-0.5">{desc}</p></div></div>))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Join the MODN community</h2>
        <p className="text-gray-400 mb-8">Get early access to new collections, exclusive offers, and design inspiration.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}><input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors" /><button className="px-6 py-3 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition-colors">Subscribe</button></form>
        <p className="text-xs text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div><h3 className="text-xl font-bold mb-4">MODN</h3><p className="text-gray-500 text-sm leading-relaxed">Thoughtfully designed goods for modern living. Sustainably sourced, artisan made.</p></div>
          {[
            { title: "Shop", links: ["New Arrivals", "Best Sellers", "Collections", "Sale", "Gift Cards"] },
            { title: "Help", links: ["FAQ", "Shipping & Returns", "Size Guide", "Contact Us", "Track Order"] },
            { title: "Company", links: ["About Us", "Sustainability", "Journal", "Careers", "Press"] },
          ].map(col => (<div key={col.title}><h4 className="font-semibold mb-4 text-sm">{col.title}</h4><ul className="space-y-2">{col.links.map(l => <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">{l}</a></li>)}</ul></div>))}
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2026 MODN. All rights reserved.</p>
          <div className="flex gap-6">{["Privacy", "Terms", "Cookies", "Accessibility"].map(l => (<a key={l} href="#" className="text-gray-400 text-sm hover:text-black transition-colors">{l}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}

export default function EcommercePage() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [wishlist, setWishlist] = useState(new Set());

  const addToCart = (product, qty = 1) => {
    setCart(prev => { const existing = prev.find(i => i.id === product.id); if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i); return [...prev, { ...product, qty }]; });
    setCartOpen(true);
  };
  const updateQty = (id, qty) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const toggleWishlist = (id) => setWishlist(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackToPortfolio />
      <AnnouncementBar />
      <EcommerceNavbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} onCartClick={() => setCartOpen(true)} onSearchClick={() => setSearchOpen(true)} />
      <HeroBanner />
      <CategoryGrid />
      <ProductGridSection onQuickView={setQuickView} onAddToCart={addToCart} wishlist={wishlist} onToggleWishlist={toggleWishlist} />
      <FeaturesStrip />
      <Newsletter />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onUpdateQty={updateQty} onRemove={removeFromCart} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProductModal product={quickView} onClose={() => setQuickView(null)} onAddToCart={addToCart} />
    </div>
  );
}
