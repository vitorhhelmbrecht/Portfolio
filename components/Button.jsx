"use client";

/**
 * Generic Button component with variants and color schemes.
 *
 * @param {"primary"|"secondary"|"outline"|"ghost"|"white"|"dark"|"warm"} variant
 * @param {"sm"|"md"|"lg"} size
 * @param {"default"|"indigo"|"violet"|"emerald"|"stone"} colorScheme - Overrides variant colors
 * @param {React.ElementType} icon - Lucide icon component
 * @param {"left"|"right"} iconPosition
 * @param {"full"|"lg"|"xl"|"none"} rounded
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  rounded = "full",
  colorScheme = "default",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 gap-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Color-scheme-aware variant maps
  const variantsByScheme = {
    default: {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border-2 border-gray-200 text-gray-900 hover:border-gray-400",
      ghost: "text-gray-600 hover:text-black hover:bg-gray-50",
      white: "bg-white text-black hover:bg-gray-100",
      dark: "bg-gray-900 text-white hover:bg-gray-800",
      warm: "bg-amber-700 text-white hover:bg-amber-800",
    },
    indigo: {
      primary: "bg-indigo-500 text-white hover:bg-indigo-400",
      outline: "border border-white/20 text-white hover:bg-white/10",
      ghost: "text-gray-400 hover:text-white",
      white: "bg-white text-gray-900 hover:bg-gray-100",
    },
    violet: {
      primary: "bg-violet-500 text-white hover:bg-violet-400",
      outline: "border border-white/20 text-white hover:bg-white/10",
      ghost: "text-gray-400 hover:text-white",
    },
    emerald: {
      primary: "bg-emerald-600 text-white hover:bg-emerald-500",
      outline:
        "border-2 border-gray-200 text-gray-900 hover:border-gray-400",
      dark: "bg-gray-900 text-white hover:bg-gray-800",
      ghost: "text-gray-600 hover:text-gray-900",
    },
    stone: {
      primary: "bg-stone-900 text-white hover:bg-stone-800",
      outline:
        "border-2 border-stone-300 text-stone-900 hover:border-stone-500",
      ghost: "text-stone-600 hover:text-stone-900",
      warm: "bg-amber-700 text-white hover:bg-amber-800",
    },
  };

  const roundedness = {
    full: "rounded-full",
    lg: "rounded-lg",
    xl: "rounded-xl",
    none: "",
  };

  const scheme = variantsByScheme[colorScheme] || variantsByScheme.default;
  const variantClass =
    scheme[variant] || variantsByScheme.default[variant] || "";

  return (
    <button
      className={`${base} ${sizes[size]} ${variantClass} ${roundedness[rounded]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
}
