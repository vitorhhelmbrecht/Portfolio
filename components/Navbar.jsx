"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import useScrolled from "./useScrolled";

/**
 * Responsive navigation bar with scroll effect and mobile drawer.
 *
 * @param {string} brand - Brand name text
 * @param {React.ElementType} brandIcon - Icon component for the brand logo
 * @param {string} brandIconBg - Background class for the icon container (e.g. "bg-black", "bg-indigo-500")
 * @param {string[]} links - Navigation link labels
 * @param {string} ctaLabel - CTA button label
 * @param {Function} onCtaClick - CTA button click handler
 * @param {"default"|"indigo"|"violet"|"emerald"|"stone"} colorScheme - Color scheme for Button
 * @param {string} ctaVariant - Button variant for the CTA
 * @param {object} scrolledStyle - Classes when scrolled: { bg, text, linkColor }
 * @param {object} defaultStyle - Classes when not scrolled: { bg, text, linkColor }
 * @param {string} mobileMenuBg - Background for mobile menu
 * @param {React.ReactNode} extraLinks - Extra links to render before the CTA (e.g. "Log in")
 * @param {string} brandFont - Optional font-family for brand name
 */
export default function Navbar({
  brand,
  brandIcon: BrandIcon,
  brandIconBg = "bg-black",
  links = [],
  ctaLabel = "Get Started",
  onCtaClick,
  colorScheme = "default",
  ctaVariant = "primary",
  scrolledStyle,
  defaultStyle,
  mobileMenuBg = "bg-white",
  mobileMenuBorder = "border-t",
  extraLinks,
  brandFont,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);

  // Default styles
  const defaults = {
    scrolled: {
      bg: "bg-white/90 backdrop-blur-md shadow-sm",
      linkColor: "text-gray-600 hover:text-black",
    },
    default: {
      bg: "bg-transparent",
      linkColor: "text-gray-600 hover:text-black",
    },
  };

  const s = scrolledStyle || defaults.scrolled;
  const d = defaultStyle || defaults.default;
  const currentBg = scrolled ? s.bg : d.bg;
  const currentLinkColor = scrolled
    ? s.linkColor || defaults.scrolled.linkColor
    : d.linkColor || defaults.default.linkColor;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${currentBg} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {BrandIcon && (
            <div
              className={`w-8 h-8 ${brandIconBg} rounded-lg flex items-center justify-center`}
            >
              <BrandIcon className="w-5 h-5 text-white" />
            </div>
          )}
          <span
            className={`text-xl font-bold tracking-tight ${
              d.text || ""
            }`}
            style={brandFont ? { fontFamily: brandFont } : undefined}
          >
            {brand}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm transition-colors ${currentLinkColor}`}
            >
              {l}
            </a>
          ))}
          {extraLinks}
          <Button
            size="sm"
            variant={ctaVariant}
            colorScheme={colorScheme}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        </div>

        <button
          className={`md:hidden ${d.text || ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden ${mobileMenuBg} ${mobileMenuBorder} px-6 py-4 space-y-3`}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block text-gray-600 py-2"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button
            className="w-full"
            colorScheme={colorScheme}
            variant={ctaVariant}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
}
