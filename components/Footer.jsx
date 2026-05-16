"use client";

/**
 * Multi-column footer component.
 *
 * @param {string} brand - Brand name
 * @param {React.ElementType} brandIcon - Icon component for the brand logo
 * @param {string} tagline - Short description under the brand
 * @param {Array<{title: string, links: (string|{label: string, href: string})[]}>} columns
 * @param {string} bottomText - Copyright text (defaults to auto-generated)
 * @param {"black"|"dark"|"light"|"custom"} bg - Footer background style
 * @param {string} customBg - Custom background class when bg="custom"
 * @param {string} brandIconBg - Background class for the icon container
 * @param {string} brandFont - Optional font-family for brand name
 * @param {React.ReactNode} children - Extra content (e.g. social links row)
 */
export default function Footer({
  brand,
  brandIcon: BrandIcon,
  tagline,
  columns = [],
  bottomText,
  bg = "black",
  customBg = "",
  brandIconBg,
  brandFont,
  children,
}) {
  const isDark = bg === "black" || bg === "dark";

  const bgClass =
    bg === "custom"
      ? customBg
      : bg === "black"
      ? "bg-black text-white"
      : bg === "dark"
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-gray-900";

  const iconBg =
    brandIconBg || (isDark ? "bg-white" : "bg-black");
  const iconText = isDark ? "text-black" : "text-white";
  const brandColor = isDark ? "text-white" : "text-gray-900";
  const taglineColor = isDark ? "text-gray-400" : "text-gray-500";
  const headingColor = isDark ? "text-gray-300" : "text-gray-900";
  const linkColor = isDark
    ? "text-gray-400 hover:text-white"
    : "text-gray-500 hover:text-black";
  const borderColor = isDark ? "border-gray-800" : "border-gray-200";
  const bottomColor = isDark ? "text-gray-500" : "text-gray-400";

  return (
    <footer className={`${bgClass} py-16 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {BrandIcon && (
                <div
                  className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center`}
                >
                  <BrandIcon className={`w-5 h-5 ${iconText}`} />
                </div>
              )}
              <span
                className={`text-xl font-bold ${brandColor}`}
                style={brandFont ? { fontFamily: brandFont } : undefined}
              >
                {brand}
              </span>
            </div>
            {tagline && (
              <p className={`text-sm ${taglineColor}`}>{tagline}</p>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className={`font-semibold mb-4 text-sm ${headingColor}`}>
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => {
                  const label = typeof l === "string" ? l : l.label;
                  const href = typeof l === "string" ? "#" : l.href || "#";
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className={`text-sm transition-colors ${linkColor}`}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {children}

        <div
          className={`border-t ${borderColor} pt-8 text-center text-sm ${bottomColor}`}
        >
          {bottomText ||
            `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
