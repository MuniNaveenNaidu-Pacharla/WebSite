"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  ChevronDown,
  Cloud,
  Headphones,
  Layers,
  Users,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_DETAILS } from "@/lib/constants";
import { Container } from "@/components/ui/container";

const SERVICES_MENU = [
  {
    name: "Cloud Offerings",
    href: "/services#cloud-offerings",
    desc: "Cloud migration, multi-cloud strategy & hybrid architectures",
    icon: Cloud,
  },
  {
    name: "Managed Services",
    href: "/services#managed-services",
    desc: "24/7 proactive infrastructure operations and management",
    icon: Headphones,
  },
  {
    name: "ERP Technologies",
    href: "/services#erp-technologies",
    desc: "Enterprise SAP, Oracle & core systems transformation",
    icon: Layers,
  },
  {
    name: "IT Staffing",
    href: "/services#it-staffing",
    desc: "Vetted, specialized direct technical talent and architects",
    icon: Users,
  },
  {
    name: "Project Outsourcing",
    href: "/services#project-outsourcing",
    desc: "Turnkey engineering solutions and project delivery",
    icon: Briefcase,
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  // Escape key handler & scroll lock
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close drawer upon pathname change
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setServicesOpen(false);
  }

  // Scroll detection: Keep header background completely transparent at the top
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#EAECEF]/60 shadow-xs"
          : "bg-transparent border-b border-transparent shadow-none"
      )}
    >
      <Container size="default">
        <div className="flex h-18 sm:h-20 items-center justify-between">
          {/* Lorvish Official Company Logo on the Left */}
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
              priority
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                pathname === "/"
                  ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                  : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
              )}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#0084FF] rounded-full" />
              )}
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                  pathname.startsWith("/services")
                    ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                    : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    servicesOpen ? "rotate-180 text-[#0084FF]" : "text-[#59616D]"
                  )}
                />
              </Link>

              {/* Services Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 z-50 w-80 pt-2 animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="rounded-2xl border border-[#EAECEF] bg-white p-3 shadow-xl backdrop-blur-md">
                    <div className="px-3 py-2 border-b border-[#EAECEF] mb-1">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#737373]">
                        Enterprise Capabilities
                      </span>
                    </div>
                    <div className="space-y-1">
                      {SERVICES_MENU.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-[#EFF6FF]/60"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0084FF] transition-colors group-hover:bg-[#0084FF] group-hover:text-white">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="block text-xs font-bold text-[#171717] group-hover:text-[#0084FF] transition-colors">
                                {item.name}
                              </span>
                              <span className="mt-0.5 block text-[11px] text-[#59616D] leading-snug">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 border-t border-[#EAECEF] pt-2 px-2">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0084FF] hover:text-[#006ED6] transition-colors"
                      >
                        <span>View all capabilities</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <Link
              href="/industries"
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                pathname === "/industries"
                  ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                  : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
              )}
            >
              Industries
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                pathname === "/about"
                  ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                  : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
              )}
            >
              About Us
            </Link>

            {/* Careers */}
            <Link
              href="/careers"
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                pathname === "/careers"
                  ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                  : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
              )}
            >
              Careers
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]",
                pathname === "/contact"
                  ? "bg-[#EFF6FF] font-semibold text-[#0084FF]"
                  : "text-[#59616D] hover:bg-[#F8F8FA] hover:text-[#171717]"
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right Side: Phone + Blue "Get a Quote" Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone Number with circular phone icon */}
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#59616D] hover:text-[#0084FF] transition-colors"
              title="Call Lorvish Technologies"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0084FF] border border-[#BFDBFE]/50 shadow-2xs transition-transform hover:scale-105">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span className="tracking-tight">{COMPANY_DETAILS.phone}</span>
            </a>

            {/* Blue "Schedule Consultation" Button */}
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#0084FF] px-4.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#006ED6] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] focus-visible:ring-offset-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#0084FF] px-3.5 text-xs font-semibold text-white shadow-xs hover:bg-[#006ED6]"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#EAECEF] bg-white text-[#171717] transition-colors hover:bg-[#F8F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Accessible Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs sm:max-w-sm flex-col justify-between border-l border-[#EAECEF] bg-white p-6 shadow-2xl transition-transform duration-200 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between border-b border-[#EAECEF] pb-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center"
              aria-label="Lorvish Technologies Home"
            >
              <Image
                src="/images/lorvish-logo-hd.png"
                alt="Lorvish Technologies"
                width={196}
                height={146}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#EAECEF] text-[#59616D] hover:bg-[#F8F8FA]"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links inside drawer */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile Drawer Navigation">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium",
                pathname === "/" ? "bg-[#EFF6FF] text-[#0084FF] font-semibold" : "text-[#171717]"
              )}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#171717]"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileServicesOpen ? "rotate-180 text-[#0084FF]" : "text-[#59616D]"
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 pl-3 border-l border-[#EAECEF] space-y-1 py-1">
                  {SERVICES_MENU.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-1.5 text-xs font-medium text-[#59616D] hover:text-[#0084FF]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#171717]"
            >
              Industries
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#171717]"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#171717]"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#171717]"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="border-t border-[#EAECEF] pt-4 space-y-3">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="flex items-center gap-2.5 text-xs text-[#59616D] font-medium"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0084FF]">
              <Phone className="h-3 w-3" />
            </span>
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0084FF] px-4 text-sm font-semibold text-white shadow-xs hover:bg-[#006ED6]"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
