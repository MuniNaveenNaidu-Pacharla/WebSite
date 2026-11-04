"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function FixedBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Trigger blur once scrolled past 60px from the top view
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home page: NO blur on first view (top of page), but blur on scroll to prevent text overlapping.
  // Subpages: always blur to prevent text overlap.
  const shouldBlur = !isHome || isScrolled;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
    >
      {/* Background Graphic Layer */}
      <div
        className={`absolute bg-[url('/images/lorvish-background.png')] bg-cover bg-center no-repeat transition-all duration-500 ease-out ${
          shouldBlur
            ? "-inset-6 blur-[12px] md:blur-[14px] scale-105 opacity-90"
            : "inset-0 blur-none scale-100 opacity-100"
        }`}
      />

      {/* Soft translucent veil when blurred so content never overlaps with background logo */}
      <div
        className={`absolute inset-0 bg-white/40 transition-opacity duration-500 ease-out ${
          shouldBlur ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
}
