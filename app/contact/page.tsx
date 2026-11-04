import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "@/components/contact/quote-form";

export const metadata: Metadata = {
  title: "Contact Us | Lorvish Technologies",
  description:
    "Contact Lorvish Technologies US Headquarters in Durham NC, Regional Office in Parlin NJ, and India Headquarters in Hyderabad for Cloud Offerings, Managed Services, ERP, and IT Staffing.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717]">
      {/* 1. Header Section */}
      <PageSection background="warm" className="pt-20 sm:pt-24 pb-16">
        <Container size="default">
          <SectionHeading
            badge="Global Presence & Inquiries"
            badgeVariant="blue"
            title="Contact Lorvish Technologies"
            subtitle="Connect directly with our headquarters in Durham, NC and Hyderabad, or submit an inquiry for your enterprise technology initiative."
            align="center"
          />
        </Container>
      </PageSection>

      {/* 2. Confirmed Corporate Office Cards */}
      <PageSection background="white" borderTop borderBottom className="py-16 sm:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* US Headquarters Card */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#0084FF] bg-white p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0070E0] border border-[#BFDBFE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
                    US Headquarters
                  </span>
                  <Building2 className="h-5 w-5 text-[#0084FF]" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#171717]">
                  Durham, North Carolina
                </h3>

                <div className="mt-4 flex items-start gap-3 text-sm text-[#525252]">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">4819 Emperor Boulevard, Suite 400,</p>
                    <p>Durham, NC 27703.</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm text-[#525252] border-t border-[#E8E8EB] pt-4">
                  <Phone className="h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#737373]">Telephone</span>
                    <a
                      href="tel:+19199990626"
                      className="font-semibold text-[#171717] hover:text-[#0084FF]"
                    >
                      +1 919-999-0626
                    </a>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 text-sm text-[#525252]">
                  <Mail className="h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#737373]">Corporate Email</span>
                    <a
                      href="mailto:info@lorvish.com"
                      className="font-semibold text-[#171717] hover:text-[#0084FF]"
                    >
                      info@lorvish.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E8E8EB] pt-3 text-[11px] font-mono text-[#0070E0]">
                Primary US Operations
              </div>
            </div>

            {/* Regional Office Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E8EB] bg-[#F8F8FA] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#525252]">
                    Regional Office
                  </span>
                  <MapPin className="h-5 w-5 text-[#737373]" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#171717]">
                  Parlin, New Jersey
                </h3>

                <div className="mt-4 flex items-start gap-3 text-sm text-[#525252]">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#737373] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">499 Ernston Rd</p>
                    <p>Parlin, NJ 08859.</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm text-[#525252] border-t border-[#E8E8EB] pt-4">
                  <Mail className="h-4 w-4 text-[#737373] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#737373]">Inquiries</span>
                    <a
                      href="mailto:info@lorvish.com"
                      className="font-semibold text-[#171717] hover:text-[#0084FF]"
                    >
                      info@lorvish.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E8E8EB] pt-3 text-[11px] font-mono text-[#737373]">
                East Coast Regional Hub
              </div>
            </div>

            {/* India Headquarters Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E8EB] bg-white p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                    India Headquarters
                  </span>
                  <Globe2 className="h-5 w-5 text-[#6366F1]" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#171717]">
                  Hyderabad, Telangana
                </h3>

                <div className="mt-4 flex items-start gap-3 text-sm text-[#525252]">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#6366F1] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">#502, Techno Residency,</p>
                    <p>Near Paradise Hotel,</p>
                    <p>Raheja Mindspace Building, Madhapur,</p>
                    <p>Hyderabad - 500081.</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm text-[#525252] border-t border-[#E8E8EB] pt-4">
                  <Mail className="h-4 w-4 text-[#6366F1] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#737373]">Global Delivery</span>
                    <a
                      href="mailto:info@lorvish.com"
                      className="font-semibold text-[#171717] hover:text-[#6366F1]"
                    >
                      info@lorvish.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E8E8EB] pt-3 text-[11px] font-mono text-[#4F46E5]">
                Global Delivery &amp; Technology Center
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* 3. Inquiry Form Section */}
      <PageSection background="subtle" className="py-20 sm:py-24">
        <Container size="narrow">
          <QuoteForm />
        </Container>
      </PageSection>
    </div>
  );
}
