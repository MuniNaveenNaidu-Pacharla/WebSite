import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud, Headphones, Layers, Users, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services | Lorvish Technologies",
  description:
    "Enterprise technology services across Cloud Offerings, Managed Services, ERP Technologies, IT Staffing, and Project Outsourcing by Lorvish Technologies.",
};

const SERVICE_OFFERINGS = [
  {
    id: "cloud-offerings",
    icon: Cloud,
    title: "Cloud Offerings & Hybrid Solutions",
    category: "Infrastructure & Architecture",
    description:
      "Comprehensive cloud strategy, multi-cloud migrations, and hybrid infrastructure engineering across AWS, Azure, and Google Cloud to maximize agility and infrastructure resilience.",
    capabilities: [
      "Enterprise cloud migration & modernization",
      "Multi-cloud and hybrid infrastructure design",
      "Cloud governance, cost optimization & FinOps",
      "Disaster recovery and business continuity",
    ],
  },
  {
    id: "managed-services",
    icon: Headphones,
    title: "24/7 Managed IT Services",
    category: "Operations & Governance",
    description:
      "Continuous operations, proactive infrastructure management, and dedicated incident response to ensure mission-critical stability, security, and performance.",
    capabilities: [
      "24/7/365 infrastructure monitoring and management",
      "Proactive patch management & vulnerability remediation",
      "SLA-driven technical support & ticketing",
      "Network operations center (NOC) oversight",
    ],
  },
  {
    id: "erp-technologies",
    icon: Layers,
    title: "ERP Technologies & Modernization",
    category: "Enterprise Applications",
    description:
      "Modernize critical enterprise resource planning systems with robust extensions, legacy software migrations, and unified business data synchronization.",
    capabilities: [
      "Full ERP lifecycle implementation & upgrades",
      "Legacy system modernization and migration",
      "Cross-department workflow integration",
      "Continuous functional and technical ERP support",
    ],
  },
  {
    id: "it-staffing",
    icon: Users,
    title: "IT Staffing & Dedicated Talent",
    category: "Workforce & Augmentation",
    description:
      "Access pre-vetted, direct full-time software architects, cloud engineers, and technical consultants to augment your team with specialized expertise.",
    capabilities: [
      "Dedicated full-time engineering resources",
      "Specialized technical domain consultants",
      "Contract-to-hire and long-term project placement",
      "Fast-track onboarding and talent governance",
    ],
  },
  {
    id: "project-outsourcing",
    icon: Briefcase,
    title: "Project Outsourcing & Custom Delivery",
    category: "Turnkey Execution",
    description:
      "End-to-end turnkey software engineering and custom digital platform development with guaranteed accountability, clear milestones, and measurable outcomes.",
    capabilities: [
      "Turnkey software development & architecture",
      "Custom web and enterprise application delivery",
      "Disciplined sprint execution & automated testing",
      "Comprehensive post-deployment handover & SLA",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717]">
      {/* 1. Header Section */}
      <PageSection background="warm" className="pt-20 sm:pt-24 pb-16">
        <Container size="default">
          <SectionHeading
            badge="Full-Service Capabilities"
            badgeVariant="blue"
            title="Enterprise Services & Solutions"
            subtitle="Delivering unmatched consulting and technology services across Cloud Offerings, Managed Services, ERP Technologies, IT Staffing, and Project Outsourcing."
            align="center"
          />
        </Container>
      </PageSection>

      {/* 2. Services Grid */}
      <PageSection background="white" borderTop borderBottom className="py-16 sm:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_OFFERINGS.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white p-8 shadow-xs transition-all hover:border-[#BFDBFE] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] text-[#0084FF]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#0084FF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
                      {service.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-[#171717]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-[#E8E8EB] pt-5">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#171717]">
                        Core Capabilities
                      </span>
                      <ul className="mt-3 space-y-2 text-xs text-[#525252]">
                        {service.capabilities.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#E8E8EB] pt-5">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0084FF] hover:text-[#006ED6] transition-colors"
                    >
                      <span>Inquire about service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </PageSection>

      {/* 3. CTA Section */}
      <PageSection background="subtle" className="py-20">
        <Container size="narrow">
          <div className="rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 sm:p-12 text-center shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
              Connect With Us
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
              Ready to scope your technology initiative?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#525252]">
              Schedule a consultation with our technology architects and consultants in Durham, NC or Hyderabad.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 font-semibold">
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </PageSection>
    </div>
  );
}
