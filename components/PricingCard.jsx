"use client";

import { Check } from "lucide-react";
import Button from "./Button";

/**
 * Pricing card with feature list and CTA button.
 *
 * @param {string} name - Plan name
 * @param {string|number|null} price - Price value (null for "Custom")
 * @param {string} period - Price period (e.g. "/mo")
 * @param {string[]} features - List of included features
 * @param {boolean} popular - Highlight as "Most Popular"
 * @param {string} ctaLabel - CTA button label
 * @param {"default"|"indigo"|"violet"|"emerald"} colorScheme - Color scheme
 * @param {string} desc - Optional plan description
 */
export default function PricingCard({
  name,
  price,
  period = "/mo",
  features = [],
  popular = false,
  ctaLabel = "Get started",
  colorScheme = "default",
  desc,
}) {
  // Theme-aware styles
  const themes = {
    default: {
      card: popular
        ? "bg-black text-white ring-4 ring-black/5 scale-105"
        : "bg-white border border-gray-200",
      popularBadgeBg: "bg-white text-black",
      checkColor: popular ? "text-green-400" : "text-green-600",
      priceSubColor: popular ? "text-gray-400" : "text-gray-500",
      ctaVariant: popular ? "white" : "primary",
    },
    indigo: {
      card: popular
        ? "bg-indigo-500/10 border-2 border-indigo-500/40"
        : "bg-white/5 border border-white/10",
      popularBadgeBg: "bg-indigo-500 text-white",
      checkColor: "text-indigo-400",
      priceSubColor: "text-gray-500",
      ctaVariant: popular ? "primary" : "outline",
      textColor: "text-white",
      descColor: "text-gray-400",
      featureColor: "text-gray-300",
    },
    violet: {
      card: popular
        ? "bg-violet-500/10 border-2 border-violet-500/40"
        : "bg-white/5 border border-white/10",
      popularBadgeBg: "bg-violet-500 text-white",
      checkColor: "text-violet-400",
      priceSubColor: "text-gray-500",
      ctaVariant: popular ? "primary" : "outline",
      textColor: "text-white",
      descColor: "text-gray-400",
      featureColor: "text-gray-300",
    },
    emerald: {
      card: popular
        ? "bg-white border-2 border-emerald-500 shadow-lg shadow-emerald-500/5"
        : "bg-white border border-gray-200",
      popularBadgeBg: "bg-emerald-600 text-white",
      checkColor: "text-emerald-500",
      priceSubColor: "text-gray-500",
      ctaVariant: popular ? "primary" : "outline",
      textColor: "text-gray-900",
      descColor: "text-gray-500",
      featureColor: "text-gray-600",
    },
  };

  const t = themes[colorScheme] || themes.default;

  return (
    <div
      className={`relative p-8 rounded-2xl transition-transform hover:scale-105 ${t.card}`}
    >
      {popular && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full ${t.popularBadgeBg}`}
        >
          Most Popular
        </div>
      )}

      <h3 className={`text-xl font-semibold mb-1 ${t.textColor || ""}`}>
        {name}
      </h3>
      {desc && (
        <p className={`text-sm mt-1 mb-4 ${t.descColor || ""}`}>{desc}</p>
      )}

      <div className="flex items-baseline gap-1 mb-6">
        {price === null ? (
          <span className={`text-4xl font-bold ${t.textColor || ""}`}>
            Custom
          </span>
        ) : price === 0 ? (
          <span className={`text-4xl font-bold ${t.textColor || ""}`}>
            Free
          </span>
        ) : (
          <>
            <span className={`text-4xl font-bold ${t.textColor || ""}`}>
              ${price}
            </span>
            <span className={t.priceSubColor}>{period}</span>
          </>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-3 text-sm ${
              t.featureColor || ""
            }`}
          >
            <Check
              className={`w-4 h-4 flex-shrink-0 ${t.checkColor}`}
            />
            {f}
          </li>
        ))}
      </ul>

      <Button
        variant={t.ctaVariant}
        colorScheme={colorScheme}
        className="w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
