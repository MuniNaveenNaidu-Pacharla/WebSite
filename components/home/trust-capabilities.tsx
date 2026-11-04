"use client";

import * as React from "react";
import { Globe2, Users2, ShieldCheck, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";

const TRUST_PILLARS = [
  {
    title: "Global Delivery",
    desc: "Seamless technology execution and strategic consulting across global delivery centers.",
    icon: Globe2,
  },
  {
    title: "Experienced Teams",
    desc: "Dedicated senior software architects, cloud consultants, and enterprise ERP specialists.",
    icon: Users2,
  },
  {
    title: "Reliable Support",
    desc: "Proactive 24/7 managed infrastructure support, systematic monitoring, and operational continuity.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Solutions",
    desc: "Architectures engineered for long-term institutional agility, performance, and corporate scale.",
    icon: Layers,
  },
];

export function TrustCapabilitiesSection() {
  return (
    <section
      className="border-b border-[#EAECEF]/60 bg-transparent py-8 sm:py-10"
      aria-label="Enterprise Trust & Capabilities"
    >
      <Container size="default">
        {/* Horizontal Enterprise Trust Strip */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLast = idx === TRUST_PILLARS.length - 1;
            return (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 lg:px-6 ${
                  idx === 0 ? "lg:pl-0" : ""
                } ${!isLast ? "lg:border-r lg:border-[#EAECEF]" : ""}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0084FF] shadow-2xs">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171717]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#59616D]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
