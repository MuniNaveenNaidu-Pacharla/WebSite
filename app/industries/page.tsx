import type { Metadata } from "next";
import { IndustriesSection } from "@/components/home/industries-section";
import { ContactCtaSection } from "@/components/home/contact-cta-section";

export const metadata: Metadata = {
  title: "Industries | Lorvish Technologies",
  description:
    "Enterprise technology consulting and software engineering tailored to telecommunications, financial services, healthcare, retail, aerospace, and public sector agencies.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717] pt-4 sm:pt-8">
      {/* Unified Industries Showcase with Category Tabs & Animated Grid */}
      <IndustriesSection />

      {/* Bottom Consultation CTA */}
      <ContactCtaSection />
    </div>
  );
}
