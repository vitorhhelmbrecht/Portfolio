"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToPortfolio() {
  return (
    <Link
      href="/"
      className="fixed top-4 left-4 z-[100] inline-flex items-center gap-2 bg-black/80 backdrop-blur-md text-white text-sm px-4 py-2.5 rounded-full hover:bg-black transition-colors shadow-lg"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Portfolio
    </Link>
  );
}
