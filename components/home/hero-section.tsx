"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

export function HeroSection() {
  const isMounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isStoryModalOpen, setIsStoryModalOpen] = React.useState(false);

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden bg-transparent text-[#171717] border-b border-[#EAECEF]/60"
      aria-label="Lorvish Technologies Hero"
    >
      {/* Background Ambience: Subtle light architectural grid & slowly moving ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:4rem_4rem]"
        aria-hidden="true"
      />

      {isMounted ? (
        <>
          {/* Slowly moving blue ambient highlight */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-36 right-1/4 h-[550px] w-[550px] rounded-full bg-[#0084FF]/[0.06] blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#6366F1]/[0.03] blur-3xl"
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute -top-36 right-1/4 h-[550px] w-[550px] rounded-full bg-[#0084FF]/[0.06] blur-3xl"
          aria-hidden="true"
        />
      )}

      <Container size="default" className="relative z-10 py-6 sm:py-10 lg:py-12">
        {/* Main Hero Content - Compact width & size so background center Lorvish mark is completely clear */}
        <div className="max-w-[420px] lg:max-w-[440px]">
          {/* Small uppercase label with subtle live glow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0070E0] w-fit mb-4 shadow-2xs animate-pulse-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-ping" />
            <span>GLOBAL CONSULTING &amp; TECHNOLOGY SERVICES</span>
          </div>

          {/* Reduced size headline with balanced line-breaks */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#171717]">
            Technology<br />
            that moves your<br />
            <span className="text-[#0084FF]">business forward.</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#59616D] max-w-sm">
            Lorvish Technologies helps organizations plan, implement, manage, and scale their technology through consulting and technology services.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            {/* Primary CTA with hover lift */}
            <Link href="/services">
              <Button size="lg" className="h-11 px-6 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-[0_8px_20px_rgba(0,132,255,0.3)] active:scale-[0.98]">
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Secondary CTA: Watch Our Story */}
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(true)}
              className="group inline-flex h-11 items-center gap-2.5 rounded-lg border border-[#EAECEF] bg-white/90 backdrop-blur-md px-4 text-xs font-semibold text-[#171717] transition-all hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/60 hover:text-[#0084FF] active:scale-[0.98] shadow-2xs"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0084FF] transition-transform group-hover:scale-110">
                <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
              </span>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Modern Floating KPI Chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/90 bg-white/85 backdrop-blur-md px-3 py-1 text-[11px] text-[#59616D] shadow-2xs hover:border-[#BFDBFE] hover:text-[#0084FF] transition-all hover:scale-105">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
              <span>10+ Yrs Proven</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/90 bg-white/85 backdrop-blur-md px-3 py-1 text-[11px] text-[#59616D] shadow-2xs hover:border-[#BFDBFE] hover:text-[#0084FF] transition-all hover:scale-105">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
              <span>100% Direct Squads</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/90 bg-white/85 backdrop-blur-md px-3 py-1 text-[11px] text-[#59616D] shadow-2xs hover:border-[#BFDBFE] hover:text-[#0084FF] transition-all hover:scale-105">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>24/7 Managed SLA</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Watch Our Story Video/Modal Dialog */}
      {isStoryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-[#EAECEF] bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#EAECEF] pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/lorvish-logo-hd.png"
                  alt="Lorvish Technologies"
                  width={196}
                  height={146}
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0084FF]">
                    Lorvish Technologies
                  </span>
                  <h3 className="mt-0.5 text-xl font-bold text-[#171717]">
                    Our Story &amp; Purpose
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(false)}
                className="rounded-lg p-2 text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
                aria-label="Close story modal"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#59616D]">
              <p>
                Lorvish Technologies is a global consulting and technology services company with over a decade of proven execution dedicated to helping organizations plan, implement, manage, and scale their technology investments.
              </p>
              <p>
                From multi-cloud migrations and complex ERP implementations to 24/7 managed support and specialized IT staffing squads, our teams deliver dependable, long-term technical value for clients worldwide.
              </p>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <Link href="/about" onClick={() => setIsStoryModalOpen(false)}>
                <Button size="default">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
