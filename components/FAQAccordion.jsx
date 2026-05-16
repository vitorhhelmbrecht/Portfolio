"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ accordion with toggle animation.
 *
 * @param {Array<{q: string, a: string}>} items - Questions and answers
 * @param {string} cardBg - Background class for each item
 * @param {string} borderClass - Border class for each item
 */
export default function FAQAccordion({
  items = [],
  cardBg = "bg-white",
  borderClass = "border border-gray-200",
}) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((faq, i) => (
        <div
          key={i}
          className={`${cardBg} rounded-xl ${borderClass} overflow-hidden`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left font-medium"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            {faq.q}
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openIdx === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIdx === i && (
            <div className="px-5 pb-5 text-gray-500 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
