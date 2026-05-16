"use client";

import { useState, useEffect } from "react";

/**
 * Hook that returns true when the user has scrolled past the given threshold.
 *
 * @param {number} threshold - Scroll position in pixels (default 20)
 * @returns {boolean}
 */
export default function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}
