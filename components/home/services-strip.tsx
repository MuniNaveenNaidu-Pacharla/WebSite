"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Cloud, Headphones, Layers, Users, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";

const CORE_SERVICES = [
  {
    id: "cloud-offerings",
    title: "Cloud Offerings",
    desc: "Multi-cloud migration, cloud-native architecture & scalable infrastructure.",
    icon: Cloud,
    href: "/services#cloud-offerings",
  },
  {
    id: "managed-services",
    title: "Managed Services",
    desc: "24/7 proactive infrastructure operations, incident response & strict SLAs.",
    icon: Headphones,
    href: "/services#managed-services",
  },
  {
    id: "erp-technologies",
    title: "ERP Technologies",
    desc: "Enterprise SAP, Oracle & core systems planning, rollout and optimization.",
    icon: Layers,
    href: "/services#erp-technologies",
  },
  {
    id: "it-staffing",
    title: "IT Staffing",
    desc: "100% full-time specialized engineering squads and technology consultants.",
    icon: Users,
    href: "/services#it-staffing",
  },
  {
    id: "project-outsourcing",
    title: "Project Outsourcing",
    desc: "Turnkey software delivery, architectural roadmaps & dedicated squads.",
    icon: Briefcase,
    href: "/services#project-outsourcing",
  },
];

export function ServicesStrip() {
  return (
    <section
      id="services-strip"
      className="border-b border-[#EAECEF]/60 bg-transparent py-10 sm:py-14"
      aria-label="Core Technology Services"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0084FF]">
              Five Core Domains
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
              End-to-End Technology Capabilities
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0084FF] hover:text-[#006ED6] transition-colors"
          >
            <span>Explore Full Catalog</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Five Equal-Spaced Horizontal Cards Grid */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3.5">
          {CORE_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#EAECEF] bg-white/95 p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0084FF] hover:bg-gradient-to-b hover:from-white hover:to-[#EFF6FF]/40 hover:shadow-[0_12px_28px_rgba(0,132,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]"
              >
                <div>
                  {/* Refined Icon with Subtle Background Treatment */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0084FF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0084FF] group-hover:text-white shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-4 text-base font-bold tracking-tight text-[#171717] group-hover:text-[#0084FF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[#59616D] line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Row with Small Arrow Indicator */}
                <div className="mt-5 flex items-center justify-between border-t border-[#EAECEF] pt-3 text-xs font-semibold text-[#171717]">
                  <span className="font-mono text-[11px] text-[#737373]">
                    0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0084FF] transition-transform duration-200 group-hover:translate-x-1">
                    <span>Learn More</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
