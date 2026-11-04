"use client";

import * as React from "react";
import { Users2, ShieldCheck, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { INTRODUCTION_DATA } from "@/lib/homepage-data";

const PILLAR_ICONS = [Users2, ShieldCheck, Layers];

export function IntroSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="border-b border-[#E8E8EB]/60 bg-transparent py-8 sm:py-12">
      <Container size="default">
        {/* Top Header Eyebrow & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
            <span>{INTRODUCTION_DATA.eyebrow}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#EAECEF] bg-white/90 px-3 py-1 text-[11px] font-medium text-[#59616D] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Direct Delivery &bull; Dedicated Talent Pool</span>
          </div>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Purpose & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] leading-[1.2]">
                {INTRODUCTION_DATA.statement}
              </h2>
              <div className="mt-4 h-1 w-16 bg-[#0084FF] rounded-full" />

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#525252]">
                Lorvish Technologies is a global consulting and technology services firm dedicated to helping organizations plan, implement, manage, and scale their investments with proven execution across Cloud, ERP, Staffing, and Managed Services.
              </p>
            </div>

            {/* Quick KPI Stat Chips */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#EAECEF] pt-5">
              <div className="rounded-xl border border-[#EAECEF] bg-white/70 p-3 text-center shadow-2xs">
                <span className="block text-xl font-extrabold text-[#0084FF]">10+</span>
                <span className="block text-[11px] text-[#59616D] font-medium">Years Proven</span>
              </div>
              <div className="rounded-xl border border-[#EAECEF] bg-white/70 p-3 text-center shadow-2xs">
                <span className="block text-xl font-extrabold text-[#0084FF]">100%</span>
                <span className="block text-[11px] text-[#59616D] font-medium">Direct Talent</span>
              </div>
              <div className="rounded-xl border border-[#EAECEF] bg-white/70 p-3 text-center shadow-2xs">
                <span className="block text-xl font-extrabold text-[#0084FF]">24/7</span>
                <span className="block text-[11px] text-[#59616D] font-medium">Support SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Bento Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Interactive Pillar Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-[#EAECEF] bg-[#F8F8FA]/90 p-1.5 shadow-2xs">
              {INTRODUCTION_DATA.pillars.map((pillar, idx) => (
                <button
                  key={pillar.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    activeTab === idx
                      ? "bg-white text-[#0084FF] shadow-xs"
                      : "text-[#59616D] hover:text-[#171717] hover:bg-white/50"
                  }`}
                >
                  <span className="font-mono text-[11px]">0{idx + 1}</span>
                  <span className="truncate">{pillar.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Pillar Spotlight Card */}
            <AnimatePresence mode="wait">
              {INTRODUCTION_DATA.pillars.map((pillar, idx) => {
                if (idx !== activeTab) return null;
                const Icon = PILLAR_ICONS[idx] || Sparkles;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="relative overflow-hidden rounded-2xl border border-[#BFDBFE] bg-gradient-to-br from-white via-[#EFF6FF]/40 to-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0084FF] text-white shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg font-bold text-[#171717]">
                            {pillar.title}
                          </h3>
                          <span className="font-mono text-xs font-bold text-[#0084FF] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
                            Pillar 0{idx + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[#525252]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-[#BFDBFE]/60 pt-4 flex items-center justify-between text-xs text-[#0084FF] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" />
                        Guaranteed institutional governance &amp; agility
                      </span>
                      <span className="text-[11px] text-[#59616D]">Click tabs to explore</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* 3 Pillar Summary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {INTRODUCTION_DATA.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx] || Sparkles;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-[#0084FF] bg-[#EFF6FF]/60 shadow-xs scale-[1.01]"
                        : "border-[#E8E8EB] bg-white/70 hover:border-[#BFDBFE] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? "bg-[#0084FF] text-white" : "bg-[#EFF6FF] text-[#0084FF]"}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#59616D]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-3 text-xs font-bold text-[#171717] line-clamp-1">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-[#59616D] line-clamp-2 leading-tight">
                      {pillar.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
