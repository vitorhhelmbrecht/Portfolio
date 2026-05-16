"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Fade-in on scroll using IntersectionObserver.
 * Triggers once when the element enters the viewport.
 *
 * @param {number} delay - Additional delay in seconds
 * @param {number} threshold - IntersectionObserver threshold (0-1)
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${
          delay + 0.15
        }s, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay + 0.15}s`,
      }}
    >
      {children}
    </div>
  );
}
