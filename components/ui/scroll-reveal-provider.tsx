"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  React.useEffect(() => {
    const selector = ".reveal-init, .reveal-line";
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
      // Immediately reveal any element within the visible viewport on load or route change
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("revealed");
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
