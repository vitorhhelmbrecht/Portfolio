"use client";

/**
 * Small uppercase monospace label — used for section markers,
 * metadata, and key-value labels throughout the dark portfolio theme.
 *
 * Default color is text-brand-fg-mute. Override via className.
 */
export default function MonoLabel({ children, className = "", ...rest }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[1.5px] uppercase text-brand-fg-mute ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
