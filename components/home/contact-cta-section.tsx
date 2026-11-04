import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CONTACT_CTA_DATA } from "@/lib/homepage-data";
import { COMPANY_DETAILS } from "@/lib/constants";

export function ContactCtaSection() {
  return (
    <section className="bg-transparent py-10 sm:py-14">
      <Container size="default">
        <div className="relative overflow-hidden rounded-3xl border border-[#BFDBFE] bg-gradient-to-b from-white/95 to-[#EFF6FF]/60 backdrop-blur-md px-6 py-10 text-center sm:px-12 sm:py-14 shadow-2xs reveal-init">
          {/* Subtle Blue Glow Aura */}
          <div
            className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0084FF]/[0.10] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0] shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
              {CONTACT_CTA_DATA.eyebrow}
            </span>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl md:text-4xl leading-tight">
              {CONTACT_CTA_DATA.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#525252] sm:text-base">
              {CONTACT_CTA_DATA.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <Link href={CONTACT_CTA_DATA.primaryButtonHref}>
                <Button size="lg" className="h-11 px-7 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-[0_8px_20px_rgba(0,132,255,0.3)] active:scale-[0.98]">
                  <span>{CONTACT_CTA_DATA.primaryButtonText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={CONTACT_CTA_DATA.secondaryButtonHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-7 text-xs font-bold uppercase tracking-wider border-[#BFDBFE] bg-white/90 hover:bg-[#EFF6FF] hover:text-[#0084FF] transition-all duration-200"
                >
                  {CONTACT_CTA_DATA.secondaryButtonText}
                </Button>
              </Link>
            </div>

            <div className="mt-7 pt-6 border-t border-[#BFDBFE]/60 flex flex-wrap items-center justify-center gap-5 text-xs text-[#525252]">
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#0084FF]" />
                <span>Call Us: </span>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="font-semibold text-[#171717] underline decoration-[#BFDBFE] underline-offset-2 hover:text-[#0084FF] transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#0084FF]" />
                <span>Email: </span>
                <a
                  href={`mailto:${COMPANY_DETAILS.contactEmail}`}
                  className="font-semibold text-[#171717] underline decoration-[#BFDBFE] underline-offset-2 hover:text-[#0084FF] transition-colors"
                >
                  {COMPANY_DETAILS.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[#59616D]">
                <Clock className="h-3.5 w-3.5 text-[#0084FF]" />
                <span>24/7 Global Managed Support SLA</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
