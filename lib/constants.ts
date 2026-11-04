import { CompanyContactInfo, NavItem } from "@/types";

export const SITE_NAVIGATION: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

/**
 * Confirmed corporate office locations and contact specifications.
 */
export const COMPANY_DETAILS: CompanyContactInfo = {
  name: "Lorvish",
  legalName: "Lorvish Technologies",
  tagline: "Enterprise IT Solutions & Technology Services",
  businessDomain: "Enterprise IT Solutions & Technology Services",
  contactEmail: "info@lorvish.com",
  inquiriesEmail: "info@lorvish.com",
  careersEmail: "careers@lorvish.com",
  phone: "+1 919-999-0626",
  location: "Durham, NC",
  offices: [
    {
      title: "US Headquarters",
      addressLines: [
        "4819 Emperor Boulevard, Suite 400",
        "Durham, NC 27703",
      ],
      phone: "+1 919-999-0626",
      email: "info@lorvish.com",
      isHeadquarters: true,
    },
    {
      title: "Regional Office",
      addressLines: [
        "499 Ernston Rd",
        "Parlin, NJ 08859",
      ],
      isHeadquarters: false,
    },
    {
      title: "India Headquarters",
      addressLines: [
        "#502, Techno Residency, Near Paradise Hotel",
        "Raheja Mindspace Building, Madhapur",
        "Hyderabad - 500081",
      ],
      isHeadquarters: true,
    },
  ],
};

export const FOOTER_NAVIGATION = {
  main: SITE_NAVIGATION,
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

export const COPYRIGHT_YEAR = "2026";
