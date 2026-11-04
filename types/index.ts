import { ReactNode } from "react";

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface OfficeLocation {
  title: string;
  addressLines: string[];
  phone?: string;
  email?: string;
  isHeadquarters?: boolean;
}

export interface CompanyContactInfo {
  name: string;
  legalName: string;
  tagline: string;
  businessDomain: string;
  contactEmail: string;
  inquiriesEmail: string;
  careersEmail: string;
  phone: string;
  location: string;
  offices: OfficeLocation[];
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "default" | "wide" | "full";
  children: ReactNode;
}

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  badgeVariant?: "blue" | "orange" | "neutral";
}

export interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "warm" | "white" | "subtle";
  borderBottom?: boolean;
  borderTop?: boolean;
  children: ReactNode;
}
