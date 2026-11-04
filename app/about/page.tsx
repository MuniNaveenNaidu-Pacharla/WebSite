import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users2,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Lorvish Technologies",
  description:
    "Lorvish Technologies is a global consulting and technology services company headquartered in Durham, NC with over a decade of experience delivering Cloud Services, ERP Applications, IT Staffing, and Managed Services.",
};

const INDUSTRY_VERTICALS = [
  "Telecommunications",
  "Finance & Banking",
  "Retail & Consumer",
  "Insurance",
  "Healthcare & Life Sciences",
  "Gaming & Entertainment",
  "Aerospace & Defense",
  "Federal, State & Local Government Agencies",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717]">
      {/* 1. Hero / Title Section */}
      <PageSection background="warm" className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <Container size="default">
          <SectionHeading
            badge="Corporate Overview"
            badgeVariant="blue"
            title="About Lorvish Technologies"
            subtitle="A global consulting and technology services company with over a decade of experience helping organizations maximize their technology investments."
            align="center"
          />

          {/* Quick Facts Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-[#E8E8EB] bg-white p-5 text-center shadow-xs">
              <MapPin className="mx-auto h-5 w-5 text-[#0084FF]" />
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Headquarters
              </span>
              <span className="mt-1 block text-sm font-bold text-[#171717]">
                Durham, NC &amp; Hyderabad
              </span>
            </div>

            <div className="rounded-xl border border-[#E8E8EB] bg-white p-5 text-center shadow-xs">
              <Calendar className="mx-auto h-5 w-5 text-[#0084FF]" />
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Track Record
              </span>
              <span className="mt-1 block text-sm font-bold text-[#171717]">
                Over a Decade
              </span>
            </div>

            <div className="rounded-xl border border-[#E8E8EB] bg-white p-5 text-center shadow-xs">
              <Users2 className="mx-auto h-5 w-5 text-[#0084FF]" />
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Talent Model
              </span>
              <span className="mt-1 block text-sm font-bold text-[#171717]">
                Full-Time Employees
              </span>
            </div>

            <div className="rounded-xl border border-[#E8E8EB] bg-white p-5 text-center shadow-xs">
              <Building className="mx-auto h-5 w-5 text-[#0084FF]" />
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Client Base
              </span>
              <span className="mt-1 block text-sm font-bold text-[#171717]">
                SMEs to Fortune 1000
              </span>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* 2. Executive Overview Section */}
      <PageSection background="white" borderTop borderBottom className="py-20 sm:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Bold Narrative Title */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
                Company Overview
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:leading-tight">
                Delivering unmatched services and advanced technology solutions.
              </h2>
              <div className="mt-6 h-1 w-16 bg-[#0084FF]" />
            </div>

            {/* Right Column: Confirmed Narrative Paragraphs */}
            <div className="space-y-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-[#171717] font-medium sm:text-lg sm:leading-relaxed">
                Lorvish Technologies is a global consulting and technology services company with over a decade of experience dedicated to helping customers maximize their investment in Technology Services by delivering unmatched services and solutions.
              </p>
              <p className="text-base leading-relaxed text-[#525252]">
                Lorvish Technologies today is a company that has set itself on the fast track, offering advanced solutions in the realms of information technology and consultation, to a host of clients belonging to industry verticals as diverse as telecommunications, finance, retail, insurance, healthcare, gaming, entertainment, and aerospace &amp; defense, besides a number of federal, state, and local government agencies.
              </p>
              <p className="text-base leading-relaxed text-[#525252]">
                Lorvish Technologies&apos;s full-service approach and unparalleled experience in all areas of Cloud Services, ERP Applications, IT Staffing, and Managed Services has helped the Company build one of the strongest reference bases of Technology customers.
              </p>
              <p className="text-base leading-relaxed text-[#525252]">
                With its proven ability to execute, Lorvish Technologies consistently helps clients ranging from small to midsize enterprises and Fortune 1000 companies achieve their goals today and advance beyond them.
              </p>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* 3. Core Pillars: History, Experience & Services */}
      <PageSection background="subtle" borderBottom className="py-20 sm:py-24">
        <Container size="default">
          <SectionHeading
            badge="Corporate Foundations"
            badgeVariant="blue"
            title="History, experience, and service delivery"
            subtitle="The structural principles and capabilities that define Lorvish Technologies."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* History Card */}
            <div className="rounded-2xl border border-[#E8E8EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0084FF] border border-[#BFDBFE]">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#171717]">
                  History
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#0070E0]">
                  Origins &amp; Governance
                </p>
                <ul className="mt-6 space-y-3.5 text-sm text-[#525252]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span><strong className="text-[#171717]">Headquartered in Durham, NC</strong>, serving clients domestically and globally.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span>Founded by a team of experienced professionals with a solid base in <strong className="text-[#171717]">Technology and Management</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span>Over a decade of dedicated expertise helping clients maximize technological ROI.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-[#E8E8EB] pt-4 text-xs font-mono text-[#737373]">
                Est. Over a Decade // Durham, NC &amp; Hyderabad
              </div>
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl border border-[#E8E8EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0084FF] border border-[#BFDBFE]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#171717]">
                  Experience
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#0070E0]">
                  Workforce &amp; Core Disciplines
                </p>
                <ul className="mt-6 space-y-3.5 text-sm text-[#525252]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span><strong className="text-[#171717]">Full-Time Employees</strong>, ensuring consistency, security, and institutional retention.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span>Expertise across <strong className="text-[#171717]">Cloud Services, ERP Solutions, IT Staffing, Managed Services, and Outsourcing</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span>Proven track record supporting <strong className="text-[#171717]">customers across diverse industry verticals</strong>.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-[#E8E8EB] pt-4 text-xs font-mono text-[#737373]">
                Dedicated Direct Talent Model
              </div>
            </div>

            {/* Services Card */}
            <div className="rounded-2xl border border-[#E8E8EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0084FF] border border-[#BFDBFE]">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#171717]">
                  Services
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#0070E0]">
                  Delivery Modalities
                </p>
                <ul className="mt-6 space-y-3.5 text-sm text-[#525252]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span><strong className="text-[#171717]">Consulting:</strong> Implementations, Migrations, Design, and Strategic Advisement.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span><strong className="text-[#171717]">Support:</strong> Functional &amp; Technical Support, Managed Services, and On-Demand assistance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span><strong className="text-[#171717]">Hybrid IT Services:</strong> Comprehensive cloud models spanning SaaS, PaaS, and IaaS.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-[#E8E8EB] pt-4 text-xs font-mono text-[#737373]">
                SaaS // PaaS // IaaS Delivery
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* 4. Industry Verticals Served */}
      <PageSection background="white" borderBottom className="py-20 sm:py-24">
        <Container size="default">
          <SectionHeading
            badge="Industry Sectors"
            badgeVariant="blue"
            title="Customers across all verticals"
            subtitle="Lorvish Technologies provides advanced information technology and consulting across a diverse spectrum of commercial and public sectors."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_VERTICALS.map((vertical, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-[#E8E8EB] bg-white p-4 text-sm font-semibold text-[#171717] transition-colors hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/30 shadow-xs"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#0084FF] shrink-0 border border-[#BFDBFE]">
                  {idx + 1}
                </span>
                <span>{vertical}</span>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* 5. Direct Callout & Contact Section */}
      <PageSection background="warm" className="py-20 sm:py-24">
        <Container size="narrow">
          <div className="rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 text-center sm:p-12 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
              Work With Lorvish
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
              Ready to maximize your technology investments?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#525252]">
              Connect with our team in Durham, NC to discuss how our consulting, cloud services, and full-time engineering talent can advance your organizational goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 font-semibold">
                  <span>Contact Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 px-8 font-semibold">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </PageSection>
    </div>
  );
}
