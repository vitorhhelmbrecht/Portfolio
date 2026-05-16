"use client";

/**
 * Reusable section title with optional subtitle and overline.
 *
 * @param {string} overline - Small uppercase label above the title
 * @param {string} title - Main heading
 * @param {string} subtitle - Description below the title
 * @param {"center"|"left"} align
 * @param {boolean} light - Use light/dark theme text colors
 * @param {string} overlineColor - Custom overline color class (e.g. "text-indigo-400")
 * @param {string} titleFont - Optional font-family override for the title
 * @param {React.ReactNode} action - Optional action element (e.g. "View all" link)
 */
export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
  light = false,
  overlineColor = "",
  titleFont,
  action,
  className = "",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  // Default overline color based on light/dark
  const defaultOverlineColor = light ? "text-gray-400" : "text-gray-400";
  const resolvedOverlineColor = overlineColor || defaultOverlineColor;

  const titleColor = light ? "text-white" : "text-gray-900";
  const subtitleColor = light ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`mb-16 ${alignment} ${
        action ? "flex items-end justify-between" : ""
      } ${className}`}
    >
      <div>
        {overline && (
          <p
            className={`text-sm font-medium uppercase tracking-widest mb-3 ${resolvedOverlineColor}`}
          >
            {overline}
          </p>
        )}
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${titleColor}`}
          style={titleFont ? { fontFamily: titleFont } : undefined}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-lg mt-4 max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
