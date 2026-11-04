import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Headphones,
  Layers,
  Users,
  Briefcase,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES_DATA } from "@/lib/homepage-data";

const ICON_MAP: Record<string, React.ElementType> = {
  Cloud,
  Headphones,
  Layers,
  Users,
  Briefcase,
  Code2,
  ShieldCheck,
};

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center border-b border-[#E8E8EB] bg-[#F8F8FA] py-14 sm:py-20 scroll-mt-20">
      <Container size="default">
        {/* Section Heading */}
        <div className="reveal-init">
          <SectionHeading
            badge="Core Capabilities"
            badgeVariant="blue"
            title="End-to-End Enterprise Technology Services"
            subtitle="We deliver unmatched consulting and technology services across five core enterprise domains to help organizations modernize, execute, and scale."
            align="center"
          />
        </div>

        {/* Services Grid (5 Core Domains) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Layers;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-[#BFDBFE] hover:shadow-md reveal-init reveal-delay-${(index % 3) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] text-[#0084FF]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#0070E0] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#BFDBFE]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#171717]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 border-t border-[#E8E8EB] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]">
                      Core Capabilities
                    </span>
                    <ul className="mt-3 space-y-2 text-xs text-[#525252]">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#0084FF] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Blue Accent Link */}
                <div className="mt-8 border-t border-[#E8E8EB] pt-5">
                  <Link
                    href={`/services#${service.id}`}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0084FF] transition-colors hover:text-[#006ED6]"
                  >
                    <span>Learn more about service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
