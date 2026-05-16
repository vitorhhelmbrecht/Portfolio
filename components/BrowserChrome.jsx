"use client";

/**
 * Mini browser chrome frame — renders a macOS-style window around children.
 * Used for template thumbnail previews in the portfolio page.
 *
 * @param {string} url - URL to display in the address bar
 * @param {"dark"|"light"} theme - Color theme
 * @param {number} height - Content area height in px (default 240)
 */
export default function BrowserChrome({
  url,
  children,
  theme = "dark",
  height = 240,
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-[10px] overflow-hidden border font-sans ${
        isDark
          ? "bg-brand-bg border-white/[0.06]"
          : "bg-[#F5EFE6] border-black/[0.06]"
      }`}
      style={{
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 30px rgba(0,0,0,0.35)",
      }}
    >
      {/* Chrome bar */}
      <div
        className={`flex items-center gap-1.5 px-2.5 py-2 border-b border-white/[0.04] ${
          isDark ? "bg-brand-surface-2" : "bg-[#E8E0D2]"
        }`}
      >
        <div className="flex gap-1">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <div
              key={i}
              className="w-[7px] h-[7px] rounded-full opacity-85"
              style={{ background: c }}
            />
          ))}
        </div>
        <div
          className={`flex-1 ml-2 px-2 py-[3px] rounded-[5px] font-mono text-[9px] tracking-wide overflow-hidden text-ellipsis whitespace-nowrap ${
            isDark
              ? "bg-brand-bg text-brand-fg-mute"
              : "bg-[#F5EFE6] text-brand-fg-dim"
          }`}
        >
          {url}
        </div>
      </div>

      {/* Content area */}
      <div
        className="relative overflow-hidden"
        style={{ height, color: isDark ? "#9A8E7A" : "#5A5046" }}
      >
        {children}
      </div>
    </div>
  );
}
