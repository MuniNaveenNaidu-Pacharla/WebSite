/**
 * Corporate IT Consulting & Technology Services Homepage Data for Lorvish Technologies.
 * Aligned with the official company identity:
 * Global consulting and technology services company providing cloud offerings,
 * managed services, ERP technologies, IT staffing, and project outsourcing.
 */

export interface CoreServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export const HERO_DATA = {
  eyebrow: "Global Consulting & Technology Services",
  headline: "Technology that moves your business forward.",
  supportingText:
    "Lorvish Technologies helps organizations plan, implement, manage, and scale their technology through consulting and technology services.",
  primaryCta: {
    text: "Explore Services",
    href: "/services",
  },
  secondaryCta: {
    text: "Contact Us",
    href: "/contact",
  },
  corePillars: [
    { title: "Plan", desc: "Strategic architecture and technology roadmap" },
    { title: "Implement", desc: "Enterprise cloud, ERP, and engineering execution" },
    { title: "Manage", desc: "24/7 proactive managed services and operations" },
    { title: "Scale", desc: "Elastic workforce and IT staffing support" },
  ],
};

/**
 * 5 Core Service Domains of Lorvish Technologies
 */
export const FIVE_SERVICES: CoreServiceItem[] = [
  {
    id: "cloud-offerings",
    name: "Cloud Offerings",
    shortDesc: "Scalable cloud strategy, migrations, and hybrid infrastructure engineering.",
    iconName: "Cloud",
  },
  {
    id: "managed-services",
    name: "Managed Services",
    shortDesc: "24/7 proactive infrastructure operations, monitoring, and ongoing maintenance.",
    iconName: "Headphones",
  },
  {
    id: "erp-technologies",
    name: "ERP Technologies",
    shortDesc: "Modern enterprise resource planning implementations and legacy modernization.",
    iconName: "Layers",
  },
  {
    id: "it-staffing",
    name: "IT Staffing",
    shortDesc: "Dedicated direct full-time technology talent and elastic engineering capacity.",
    iconName: "Users",
  },
  {
    id: "project-outsourcing",
    name: "Project Outsourcing",
    shortDesc: "End-to-end turnkey project execution with guaranteed accountability and delivery.",
    iconName: "Briefcase",
  },
];

export const INTRODUCTION_DATA = {
  eyebrow: "About Lorvish Technologies",
  statement:
    "Helping organizations plan, implement, manage, and scale their technology investments.",
  narrativeParagraphs: [
    "Lorvish Technologies is a global consulting and technology services company with over a decade of experience dedicated to helping customers maximize their investment in Technology Services by delivering unmatched services and solutions.",
    "Lorvish Technologies today offers advanced solutions in the realms of information technology and consultation to a host of clients belonging to industry verticals as diverse as telecommunications, finance, retail, insurance, healthcare, gaming, entertainment, aerospace & defense, as well as a number of federal, state, and local government agencies.",
    "Our full-service approach and unparalleled experience in all areas of Cloud Services, ERP Applications, IT Staffing, and Managed Services has helped build one of the strongest reference bases of technology customers.",
  ],
  pillars: [
    {
      title: "100% Full-Time Talent",
      description:
        "Directly employed software engineers and technology consultants, guaranteeing domain depth, continuity, and security.",
    },
    {
      title: "Proven Ability to Execute",
      description:
        "Over a decade of successful implementations across commercial enterprises and government agencies.",
    },
    {
      title: "End-to-End Delivery",
      description:
        "Comprehensive lifecycle from strategic IT consultation and architecture to 24/7 managed support.",
    },
  ],
};

/**
 * 5 Core Services with Full Deliverables
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cloud-offerings",
    category: "Infrastructure & Architecture",
    title: "Cloud Offerings & Hybrid Solutions",
    description:
      "Comprehensive cloud strategy, migration, and multi-cloud engineering across AWS, Azure, and Google Cloud to maximize agility and infrastructure resilience.",
    deliverables: [
      "Enterprise cloud migration & modernization",
      "Multi-cloud and hybrid infrastructure design",
      "Cloud governance, cost optimization & FinOps",
      "Disaster recovery and business continuity",
    ],
    iconName: "Cloud",
  },
  {
    id: "managed-services",
    category: "Operations & Governance",
    title: "24/7 Managed IT Services",
    description:
      "Continuous operations, proactive infrastructure management, and dedicated incident response to ensure mission-critical stability and performance.",
    deliverables: [
      "24/7/365 infrastructure monitoring and management",
      "Proactive patch management & vulnerability remediation",
      "SLA-driven technical support & ticketing",
      "Network operations center (NOC) oversight",
    ],
    iconName: "Headphones",
  },
  {
    id: "erp-technologies",
    category: "Enterprise Applications",
    title: "ERP Technologies & Modernization",
    description:
      "Modernize critical enterprise resource planning systems with robust extensions, legacy software migrations, and unified business data synchronization.",
    deliverables: [
      "Full ERP lifecycle implementation & upgrades",
      "Legacy system modernization and migration",
      "Cross-department workflow integration",
      "Continuous functional and technical ERP support",
    ],
    iconName: "Layers",
  },
  {
    id: "it-staffing",
    category: "Workforce & Augmentation",
    title: "IT Staffing & Dedicated Talent",
    description:
      "Access pre-vetted, direct full-time software architects, cloud engineers, and technical consultants to augment your team with specialized expertise.",
    deliverables: [
      "Dedicated full-time engineering resources",
      "Specialized technical domain consultants",
      "Contract-to-hire and long-term project placement",
      "Fast-track onboarding and talent governance",
    ],
    iconName: "Users",
  },
  {
    id: "project-outsourcing",
    category: "Turnkey Execution",
    title: "Project Outsourcing & Custom Delivery",
    description:
      "End-to-end turnkey software engineering and custom digital platform development with guaranteed accountability, clear milestones, and measurable outcomes.",
    deliverables: [
      "Turnkey software development & architecture",
      "Custom web and enterprise application delivery",
      "Disciplined sprint execution & automated testing",
      "Comprehensive post-deployment handover & SLA",
    ],
    iconName: "Briefcase",
  },
];

/**
 * Verified Industry Verticals
 */
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "telecommunications",
    name: "Telecommunications",
    category: "High-Throughput Networks",
    description: "High-concurrency data routing, network operations support, and modern communication infrastructure.",
    highlight: "Enterprise carrier reliability & operational scale",
    iconName: "Radio",
  },
  {
    id: "finance-insurance",
    name: "Finance & Insurance",
    category: "Regulated Systems",
    description: "Secure transactional backends, regulatory reporting systems, risk analytics, and insurance workflows.",
    highlight: "Strict data confidentiality & regulatory compliance",
    iconName: "BadgeDollarSign",
  },
  {
    id: "retail-ecommerce",
    name: "Retail & E-commerce",
    category: "Digital Commerce",
    description: "Inventory synchronization, omnichannel customer platforms, ERP integrations, and supply visibility.",
    highlight: "Seamless multi-channel operational continuity",
    iconName: "ShoppingCart",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    category: "Patient & Clinical Systems",
    description: "Secure health data management, clinical workflows, and compliant enterprise infrastructure.",
    highlight: "High-trust security & regulatory compliance",
    iconName: "HeartPulse",
  },
  {
    id: "aerospace-defense",
    name: "Aerospace & Defense",
    category: "Mission-Critical Systems",
    description: "Rigorous software engineering, systems validation, and precision data architectures for defense partners.",
    highlight: "Strict operational standards & security protocols",
    iconName: "Shield",
  },
  {
    id: "government-public",
    name: "Government Agencies",
    category: "Public Sector",
    description: "Reliable IT consulting, ERP deployments, and digital services for federal, state, and local agencies.",
    highlight: "Government compliance & proven execution track record",
    iconName: "Building2",
  },
];

/**
 * 4-Phase Delivery Framework: Plan, Implement, Manage, Scale
 */
export const PROCESS_DATA: ProcessStep[] = [
  {
    step: "01",
    title: "Plan",
    description:
      "We assess your existing IT landscape, define target architecture, and map out a prioritized roadmap aligned with organizational goals.",
    outcome: "Strategic Technology Blueprint & Roadmap",
  },
  {
    step: "02",
    title: "Implement",
    description:
      "Our full-time engineers and consultants execute cloud migrations, ERP rollouts, and custom development in structured, accountable sprints.",
    outcome: "Production-Grade System Deployment",
  },
  {
    step: "03",
    title: "Manage",
    description:
      "We provide continuous 24/7 monitoring, infrastructure administration, proactive maintenance, and dedicated technical governance.",
    outcome: "24/7 Operational Stability & SLA Delivery",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "We augment your organizational capabilities with elastic workforce support, specialized staffing, and continuous optimization.",
    outcome: "Sustainable Long-Term Capability Expansion",
  },
];

export const CAREERS_PREVIEW_DATA = {
  eyebrow: "Our Talent Model",
  title: "100% Full-Time Dedicated Engineers & Consultants",
  description:
    "At Lorvish Technologies, we build and nurture dedicated full-time teams of software architects, cloud engineers, and IT consultants who take personal pride in client success and institutional longevity.",
  openRolesSummary:
    "We regularly welcome talented professionals across our Durham, NC headquarters and Hyderabad technology delivery center.",
  linkText: "Explore Careers",
  href: "/careers",
};

export const CONTACT_CTA_DATA = {
  eyebrow: "Start a Conversation",
  title: "Connect with us to experience unmatched IT solutions.",
  description:
    "Looking for experienced IT consulting and technology services? Our team is ready to help you plan, implement, manage, and scale your technology.",
  primaryButtonText: "Contact Us",
  primaryButtonHref: "/contact",
  secondaryButtonText: "Explore Services",
  secondaryButtonHref: "/services",
};
