"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cloud, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSlider() {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden bg-[#FCFCFD] text-[#171717] border-b border-[#E8E8EB]"
      aria-label="Lorvish Technologies Hero"
    >
      {/* Background Ambience: Subtle light architectural grid and warm gradients */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:4rem_4rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-[#0084FF]/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#6366F1]/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10 py-12 sm:py-16 lg:py-20">
        {/* Main Hero Grid: Left Content (Col 5) | Right Main Visual (Col 7) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT: Headline & Description (Order 1 on mobile, left on desktop) */}
          <div className="order-1 lg:col-span-5 flex flex-col justify-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0] w-fit mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
              <span>Global Technology Services & Consulting</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-[#171717]">
              <span className="text-[#0084FF]">Technology that </span>
              <span>moves your business forward.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#525252] max-w-xl">
              Lorvish Technologies helps organizations plan, implement, manage, and scale their technology through consulting and technology services.
            </p>

            {/* Core Capability Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
              {[
                { label: "Cloud Offerings", icon: Cloud },
                { label: "ERP Technologies", icon: ShieldCheck },
                { label: "IT Staffing", icon: Users },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E8EB] bg-white px-3 py-1 text-xs font-medium text-[#525252] shadow-2xs"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#0084FF]" />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="/services">
                <Button size="lg" className="h-12 px-7 text-sm font-semibold shadow-xs">
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-12 px-7 text-sm font-semibold">
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Main Visual with Premium Editorial Composition (Order 2 on mobile, right on desktop) */}
          <div className="order-2 lg:col-span-7 w-full">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#E8E8EB] bg-[#FCFCFD] shadow-[0_25px_60px_-15px_rgba(23,23,23,0.08)]">
              {/* Main Visual Image */}
              <Image
                src="/images/lorvish-hero-executive.jpg"
                alt="Lorvish Technologies enterprise consulting leadership meeting in modern corporate boardroom overlooking city skyline"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />

              {/* Seamless Warm-White Edge Blend Gradient */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FCFCFD]/85 via-[#FCFCFD]/25 to-transparent z-10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FCFCFD]/20 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
