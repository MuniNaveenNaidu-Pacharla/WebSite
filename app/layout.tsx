import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FixedBackground } from "@/components/layout/fixed-background";
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal-provider";
import { COMPANY_DETAILS } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FCFCFD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_DETAILS.name} — ${COMPANY_DETAILS.businessDomain}`,
    template: `%s | ${COMPANY_DETAILS.name}`,
  },
  description: "Enterprise AI software and technology systems engineered for reliability, scale, and clarity.",
  applicationName: COMPANY_DETAILS.name,
  keywords: ["AI software", "Artificial Intelligence", "Enterprise Technology", "Lorvish"],
  authors: [{ name: COMPANY_DETAILS.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="relative flex min-h-full flex-col bg-transparent text-[#171717] font-sans antialiased selection:bg-[#0084FF]/20 selection:text-[#171717]"
      >
        {/* Dynamic Fixed Background: Crisp 0-blur on Home, 60% blur on Subpages */}
        <FixedBackground />
        <SiteHeader />
        <ScrollRevealProvider>
          <main className="flex-1 w-full bg-transparent pt-18 sm:pt-20" id="main-content">
            {children}
          </main>
        </ScrollRevealProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
