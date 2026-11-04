import Link from "next/link";
import { ArrowRight, Mail, Users2, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CAREERS_PREVIEW_DATA } from "@/lib/homepage-data";
import { COMPANY_DETAILS } from "@/lib/constants";

export function CareersPreviewSection() {
  return (
    <section className="border-b border-[#E8E8EB]/60 bg-transparent py-10 sm:py-14">
      <Container size="default">
        <div className="relative overflow-hidden rounded-3xl border border-[#BFDBFE] bg-gradient-to-br from-white/95 via-[#EFF6FF]/30 to-white/95 backdrop-blur-md p-6 sm:p-9 lg:p-10 shadow-2xs reveal-init">
          {/* Subtle Ambient Accent */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#0084FF]/[0.06] blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="space-y-3.5 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
                  {CAREERS_PREVIEW_DATA.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Actively Hiring
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
                {CAREERS_PREVIEW_DATA.title}
              </h2>

              <p className="text-sm leading-relaxed text-[#525252]">
                {CAREERS_PREVIEW_DATA.description}
              </p>

              {/* Current Focus Box with modern pill tags */}
              <div className="rounded-xl border border-[#BFDBFE] bg-white/90 p-3.5 text-xs text-[#525252] shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#0084FF]" />
                  <strong className="text-[#171717] text-xs">Current High-Demand Specializations:</strong>
                </div>
                <p className="text-xs text-[#59616D]">{CAREERS_PREVIEW_DATA.openRolesSummary}</p>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end lg:col-span-5">
              <Link href={CAREERS_PREVIEW_DATA.href} className="w-full sm:w-auto">
                <Button size="lg" className="h-11 w-full px-6 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-[0_8px_20px_rgba(0,132,255,0.25)] active:scale-[0.98]">
                  <span>{CAREERS_PREVIEW_DATA.linkText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href={`mailto:${COMPANY_DETAILS.careersEmail}`}
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#E8E8EB] bg-white px-5 text-xs font-semibold text-[#171717] hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/50 hover:text-[#0084FF] transition-all duration-200 shadow-2xs"
              >
                <Mail className="h-3.5 w-3.5 text-[#0084FF]" />
                <span>Direct Talent Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
