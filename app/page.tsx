import { HeroSection } from "@/components/home/hero-section";
import { ServicesStrip } from "@/components/home/services-strip";
import { TrustCapabilitiesSection } from "@/components/home/trust-capabilities";
import { IntroSection } from "@/components/home/intro-section";
import { ProcessSection } from "@/components/home/process-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { CareersPreviewSection } from "@/components/home/careers-preview-section";
import { ContactCtaSection } from "@/components/home/contact-cta-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent text-[#171717]">
      {/* 1. Hero Section matching reference composition */}
      <HeroSection />

      {/* 2. Five Premium Service Cards in Horizontal Grid immediately below Hero */}
      <ServicesStrip />

      {/* 3. Horizontal Enterprise Trust & Capabilities Section */}
      <TrustCapabilitiesSection />

      {/* 4. Company Introduction & Purpose */}
      <IntroSection />

      {/* 5. Plan, Implement, Manage, and Scale Methodology */}
      <ProcessSection />

      {/* 6. Industries We Serve */}
      <IndustriesSection />

      {/* 7. Dedicated Full-Time Talent Model */}
      <CareersPreviewSection />

      {/* 8. Contact Consultation Section */}
      <ContactCtaSection />
    </div>
  );
}
