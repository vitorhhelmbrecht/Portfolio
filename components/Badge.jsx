"use client";

/**
 * Small pill for labels, statuses, tags.
 *
 * @param {"default"|"success"|"warning"|"info"|"dark"|"sale"|"new"|"soldout"} variant
 * @param {boolean} dot - Show animated pulse dot
 */
export default function Badge({
  children,
  variant = "default",
  dot = false,
  className = "",
}) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-yellow-50 text-yellow-700",
    info: "bg-blue-50 text-blue-700",
    dark: "bg-gray-900 text-white",
    sale: "bg-red-500 text-white",
    new: "bg-black text-white",
    soldout: "bg-gray-300 text-gray-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </span>
  );
}
