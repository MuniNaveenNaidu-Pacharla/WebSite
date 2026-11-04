"use client";

import * as React from "react";
import Link from "next/link";
import {
  Building2,
  BadgeDollarSign,
  HeartPulse,
  ShoppingCart,
  Shield,
  Radio,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { INDUSTRIES_DATA } from "@/lib/homepage-data";

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  Building2,
  BadgeDollarSign,
  HeartPulse,
  ShoppingCart,
  Shield,
  Radio,
};

const CATEGORIES = [
  { id: "All Domains", label: "All Domains", count: 6 },
  { id: "High-Throughput", label: "High-Throughput Networks", count: 1 },
  { id: "Regulated Systems", label: "Regulated Systems", count: 2 },
  { id: "Digital Commerce", label: "Digital Commerce", count: 1 },
  { id: "Public & Defense", label: "Public & Defense", count: 2 },
];

export function IndustriesSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Domains");

  const filteredIndustries = React.useMemo(() => {
    if (selectedCategory === "All Domains") return INDUSTRIES_DATA;
    if (selectedCategory === "High-Throughput") {
      return INDUSTRIES_DATA.filter((i) => i.id === "telecommunications");
    }
    if (selectedCategory === "Regulated Systems") {
      return INDUSTRIES_DATA.filter((i) => i.id === "finance-insurance" || i.id === "healthcare");
    }
    if (selectedCategory === "Digital Commerce") {
      return INDUSTRIES_DATA.filter((i) => i.id === "retail-ecommerce");
    }
    if (selectedCategory === "Public & Defense") {
      return INDUSTRIES_DATA.filter((i) => i.id === "aerospace-defense" || i.id === "government-public");
    }
    return INDUSTRIES_DATA;
  }, [selectedCategory]);

  return (
    <section
      id="industries"
      className="border-b border-[#E8E8EB]/60 bg-transparent py-10 sm:py-16 scroll-mt-20"
      aria-label="Industries We Serve"
    >
      <Container size="default">
        {/* Primary Section Header - Guaranteed 100% visible immediately without any opacity hiding */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070E0] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#0084FF] animate-pulse" />
            <span>Domain Expertise &amp; Specialization</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] leading-tight">
            Industries We <span className="text-[#0084FF]">Serve</span>
          </h1>

          <p className="mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#59616D]">
            Proficiently delivering enterprise technology consulting, digital architectures, and mission-critical software engineering across key global industry verticals.
          </p>
        </div>

        {/* Latest UI: Interactive Filter Tabs with Category Counts */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0084FF] text-white shadow-sm scale-[1.03]"
                    : "border border-[#E8E8EB] bg-white/85 text-[#59616D] hover:border-[#BFDBFE] hover:text-[#0084FF] hover:bg-white shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-[#EFF6FF] text-[#0070E0]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.iconName] || Building2;
              return (
                <motion.div
                  layout
                  key={ind.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white/95 p-6 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084FF] hover:shadow-[0_12px_32px_rgba(0,132,255,0.12)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] text-[#0084FF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0084FF] group-hover:text-white shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-[#0070E0] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                        {ind.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[#171717] group-hover:text-[#0084FF] transition-colors">
                      {ind.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-[#525252]">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#E8E8EB] pt-3.5 flex items-center justify-between text-xs font-semibold text-[#171717]">
                    <span className="flex items-center gap-1.5 text-[11px] text-[#59616D] line-clamp-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0084FF] shrink-0" />
                      {ind.highlight}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#0084FF] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Industry Quick Action Strip - Compact & Screen-Fit */}
        <div className="mt-8 rounded-2xl border border-[#BFDBFE] bg-gradient-to-r from-white via-[#EFF6FF]/60 to-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0084FF] text-white shadow-xs">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#171717]">
                Tailored Technology Architectures for Your Exact Regulatory Sector
              </h4>
              <p className="mt-0.5 text-xs text-[#59616D]">
                Consult our domain enterprise specialists for compliant, high-performing systems.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0084FF] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#006ED6] transition-all duration-200 active:scale-[0.98]"
          >
            <span>Discuss Scope</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
