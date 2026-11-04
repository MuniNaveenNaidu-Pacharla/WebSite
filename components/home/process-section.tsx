import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_DATA } from "@/lib/homepage-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="border-b border-[#E8E8EB]/60 bg-transparent py-10 sm:py-14">
      <Container size="default">
        {/* Section Heading */}
        <div className="reveal-init">
          <SectionHeading
            badge="Delivery Methodology"
            badgeVariant="blue"
            title="Plan, Implement, Manage, and Scale"
            subtitle="A disciplined, transparent delivery framework designed to guarantee predictability, accountability, and institutional velocity."
            align="center"
          />
        </div>

        {/* Modern Connected Step Indicator Bar */}
        <div className="relative mt-10">
          {/* Subtle Horizontal Connector Bar (Desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#BFDBFE] via-[#0084FF] to-[#BFDBFE] z-0 opacity-40"
            aria-hidden="true"
          />

          {/* Process Steps */}
          <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_DATA.map((step, index) => (
              <div
                key={step.step}
                className={`group relative flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white/95 backdrop-blur-sm p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084FF] hover:shadow-[0_12px_28px_rgba(0,132,255,0.12)] reveal-init reveal-delay-${index + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF6FF] font-mono text-sm font-extrabold text-[#0084FF] border border-[#BFDBFE] group-hover:bg-[#0084FF] group-hover:text-white transition-colors duration-200">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-[#59616D] bg-[#F8F8FA] px-2 py-0.5 rounded-full border border-[#E8E8EB]">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#171717] group-hover:text-[#0084FF] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#525252]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E8E8EB] pt-3.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0070E0]">
                    <CheckCircle2 className="h-3 w-3 text-[#0084FF]" />
                    <span>Key Deliverable</span>
                  </div>
                  <span className="mt-1 block text-xs font-semibold text-[#171717]">
                    {step.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
