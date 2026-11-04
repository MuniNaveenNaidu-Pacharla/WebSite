import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Globe, ArrowUpRight, Phone } from "lucide-react"
import { Container } from "@/components/ui/container"
import { COMPANY_DETAILS, FOOTER_NAVIGATION, COPYRIGHT_YEAR } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E8E8EB]/80 bg-white/85 backdrop-blur-md text-[#171717]">
      <Container size="default">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand & Mission Column */}
            <div className="space-y-4 lg:col-span-5">
              <Link
                href="/"
                className="group inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] transition-all"
                aria-label="Lorvish Technologies Home"
              >
                <Image
                  src="/images/lorvish-logo-hd.png"
                  alt="Lorvish Technologies"
                  width={196}
                  height={146}
                  className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-[#525252]">
                A global consulting and technology services company dedicated to helping organizations maximize their investment in technology services across Cloud Offerings, Managed Services, ERP Technologies, IT Staffing, and Project Outsourcing.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 text-xs text-[#0070E0]">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-medium">Direct Talent Delivery Model</span>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4 lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm" role="list">
                {FOOTER_NAVIGATION.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#525252] transition-colors hover:text-[#0084FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] rounded-xs"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Configurable Contact Details Column */}
            <div className="space-y-4 lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                Company Contact
              </h3>
              <p className="text-xs text-[#525252]">
                Configured organizational channels for partners, clients, and prospective talent:
              </p>
              <div className="space-y-3 rounded-xl border border-[#E8E8EB] bg-white p-4 text-sm shadow-xs">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-[#737373]">General &amp; Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contactEmail}`}
                      className="font-semibold text-[#171717] hover:text-[#0084FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] rounded-xs"
                    >
                      {COMPANY_DETAILS.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#E8E8EB] pt-3">
                  <Globe className="mt-0.5 h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-[#737373]">US Headquarters</span>
                    <span className="font-semibold text-[#171717]">
                      {COMPANY_DETAILS.location} (Durham, NC)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#E8E8EB] pt-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-[#737373]">Telephone</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="font-semibold text-[#171717] hover:text-[#0084FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] rounded-xs"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#E8E8EB] pt-3">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 text-[#0084FF] shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-[#737373]">Careers Contact</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.careersEmail}`}
                      className="font-semibold text-[#171717] hover:text-[#0084FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] rounded-xs"
                    >
                      {COMPANY_DETAILS.careersEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E8E8EB] py-8 sm:flex-row">
          <p className="text-xs text-[#525252]">
            &copy; {COPYRIGHT_YEAR} {COMPANY_DETAILS.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#525252]">
            {FOOTER_NAVIGATION.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] rounded-xs"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
