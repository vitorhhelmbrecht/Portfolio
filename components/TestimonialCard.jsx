"use client";

import { Star } from "lucide-react";

/**
 * Testimonial card with star rating, quote, and avatar.
 *
 * @param {string} name - Person's name
 * @param {string} role - Person's role/company
 * @param {string} text - Testimonial quote
 * @param {string} avatar - Initials (2-3 chars) or image URL
 * @param {number} rating - Number of stars (1-5)
 * @param {string} avatarBg - Background class for avatar (default: "bg-black")
 * @param {string} cardBg - Background class for the card
 * @param {string} borderClass - Border class for the card
 */
export default function TestimonialCard({
  name,
  role,
  text,
  avatar,
  rating = 5,
  avatarBg = "bg-black",
  cardBg = "bg-gray-50",
  borderClass = "border border-gray-100",
}) {
  return (
    <div className={`p-8 rounded-2xl ${cardBg} ${borderClass}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {typeof avatar === "string" && avatar.length <= 3 ? (
          <div
            className={`w-10 h-10 ${avatarBg} text-white rounded-full flex items-center justify-center text-sm font-medium`}
          >
            {avatar}
          </div>
        ) : (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
