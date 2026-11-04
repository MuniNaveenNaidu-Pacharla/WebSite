"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function FixedBackground() {
  const pathname = usePathname();
  // Remove blur on the home page ONLY ('/').
  // All other pages (/services, /industries, /about, /careers, /contact) keep the blur effect.
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
    >
      {/* Background Graphic Layer */}
      <div
        className={`absolute bg-[url('/images/lorvish-background.png')] bg-cover bg-center no-repeat transition-all duration-300 ${
          isHome
            ? "inset-0 blur-none scale-100 opacity-100"
            : "-inset-6 blur-[10px] md:blur-[12px] scale-105 opacity-90"
        }`}
      />

      {/* Soft translucent veil on subpages only to prevent text overlapping */}
      {!isHome && (
        <div className="absolute inset-0 bg-white/35 transition-opacity duration-300" />
      )}
    </div>
  );
}
