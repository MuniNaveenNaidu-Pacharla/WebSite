import type { Metadata } from "next";
import { Mail, ArrowRight, ShieldCheck, HeartHandshake, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { COMPANY_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers | Lorvish Technologies",
  description:
    "Join Lorvish Technologies and engineer enterprise software, cloud infrastructure, and ERP systems with our dedicated full-time talent model.",
};

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "100% Full-Time Employment",
    description: "We hire full-time employees, not transient contractors, ensuring career stability, depth of domain knowledge, and enduring professional growth.",
  },
  {
    icon: Rocket,
    title: "Enterprise Consulting Projects",
    description: "Deliver production cloud architectures, ERP migrations, and custom systems deployed across Fortune 1000 enterprises, telecommunications, and government agencies.",
  },
  {
    icon: HeartHandshake,
    title: "Global Delivery Footprint",
    description: "Collaborate seamlessly across our US Headquarters in Durham, NC, regional hubs, and our technology delivery center in Hyderabad.",
  },
];

const OPEN_ROLES = [
  {
    title: "Enterprise Cloud Solutions Architect",
    department: "Cloud Offerings",
    location: "Durham, NC / Hybrid",
    type: "Full-Time",
  },
  {
    title: "ERP Technical Consultant (SAP / Oracle)",
    department: "ERP Technologies",
    location: "Durham, NC / Remote",
    type: "Full-Time",
  },
  {
    title: "Senior Managed Services Engineer",
    department: "Managed Services",
    location: "Hyderabad / Full-Time",
    type: "Full-Time",
  },
  {
    title: "Senior Full Stack Software Engineer",
    department: "Project Outsourcing",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717]">
      {/* 1. Header Section */}
      <PageSection background="warm" className="pt-20 sm:pt-24 pb-16">
        <Container size="default">
          <SectionHeading
            badge="Join Our Engineering Team"
            badgeVariant="blue"
            title="Build Technology that Moves Business Forward"
            subtitle="Lorvish Technologies operates on a dedicated full-time talent model. We invest in people who take pride in system reliability, precision engineering, and client success."
            align="center"
          />
        </Container>
      </PageSection>

      {/* 2. Full-Time Model Pillars */}
      <PageSection background="white" borderTop borderBottom className="py-16 sm:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8E8EB] bg-white p-8 shadow-xs"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] text-[#0084FF]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#171717]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#525252]">{b.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </PageSection>

      {/* 3. Open Roles */}
      <PageSection background="subtle" borderBottom className="py-20">
        <Container size="default">
          <SectionHeading
            badge="Open Opportunities"
            badgeVariant="blue"
            title="Featured Positions"
            subtitle="Explore current full-time openings across our North Carolina headquarters and Hyderabad delivery center."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {OPEN_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-[#E8E8EB] bg-white p-6 shadow-xs transition-all hover:border-[#BFDBFE] hover:shadow-sm gap-4"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-md border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 text-xs font-semibold text-[#0070E0]">
                      {role.department}
                    </span>
                    <span className="text-xs font-mono text-[#737373]">{role.type}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-[#171717]">{role.title}</h4>
                  <p className="mt-1 text-xs text-[#525252]">{role.location}</p>
                </div>

                <a
                  href={`mailto:${COMPANY_DETAILS.careersEmail}?subject=${encodeURIComponent(
                    `Application: ${role.title}`
                  )}`}
                >
                  <Button variant="outline" size="sm" className="gap-2 font-semibold">
                    <span>Apply for Role</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* 4. Direct Application Callout */}
      <PageSection background="warm" className="py-20">
        <Container size="narrow">
          <div className="rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 sm:p-12 text-center shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
              General Inquiries
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
              Don&apos;t see your exact role?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#525252]">
              We are constantly seeking experienced software engineers, cloud architects, and ERP consultants. Send your resume directly to our talent team.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href={`mailto:${COMPANY_DETAILS.careersEmail}`}>
                <Button size="lg" className="h-12 px-8 font-semibold gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{COMPANY_DETAILS.careersEmail}</span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </PageSection>
    </div>
  );
}
