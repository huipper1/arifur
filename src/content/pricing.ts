export interface PricingPackage {
  name: string;
  price: string;
  billingPeriod?: string;
  tagline: string;
  description?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface SubTabPlan {
  id: string;
  label: string;
  packages?: PricingPackage[];
  isEnterprise?: boolean;
}

export interface PricingCategory {
  id: string;
  label: string;
  type: "subtabs" | "direct" | "subscription";
  subTabs?: SubTabPlan[];
  packages?: PricingPackage[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "website",
    label: "Website",
    type: "subtabs",
    subTabs: [
      {
        id: "1-4-pages",
        label: "1-4 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$1,800",
            tagline: "Design only",
            features: [
              "UX research",
              "High-fidelity designs",
              "Responsive Design",
              "Figma Prototype",
              "Design System",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-launch-1-4",
          },
          {
            name: "Growth Package",
            price: "$2,880",
            tagline: "Design + Development",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Next.js / Webflow / Framer Development",
              "Hosting & Domain Setup",
              "Analytics Setup",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-growth-1-4",
          },
          {
            name: "Signature Package",
            price: "$3,960",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "SEO Setup & Optimization",
              "3 Months maintenance",
              "Logo and Brand Essentials",
              "AI brand photoshoot assets",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-signature-1-4",
          },
        ],
      },
      {
        id: "5-9-pages",
        label: "5-9 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$3,150",
            tagline: "Design only",
            features: [
              "UX research",
              "High-fidelity designs",
              "Responsive Design",
              "Figma Prototype",
              "Design System",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-launch-5-9",
          },
          {
            name: "Growth Package",
            price: "$4,700",
            tagline: "Design + Development",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Next.js / Webflow / Framer Development",
              "Hosting & Domain Setup",
              "Analytics Setup",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-growth-5-9",
          },
          {
            name: "Signature Package",
            price: "$5,900",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "SEO Setup & Optimization",
              "3 Months maintenance",
              "Logo and Brand Essentials",
              "AI brand photoshoot assets",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-signature-5-9",
          },
        ],
      },
      {
        id: "10-15-pages",
        label: "10-15 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$4,500",
            tagline: "Design only",
            features: [
              "UX research",
              "High-fidelity designs",
              "Responsive Design",
              "Figma Prototype",
              "Design System",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-launch-10-15",
          },
          {
            name: "Growth Package",
            price: "$6,750",
            tagline: "Design + Development",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Next.js / Webflow / Framer Development",
              "Hosting & Domain Setup",
              "Analytics Setup",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-growth-10-15",
          },
          {
            name: "Signature Package",
            price: "$8,670",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "SEO Setup & Optimization",
              "3 Months maintenance",
              "Logo and Brand Essentials",
              "AI brand photoshoot assets",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-signature-10-15",
          },
        ],
      },
      {
        id: "16-25-pages",
        label: "16-25 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$6,750",
            tagline: "Design only",
            features: [
              "UX research",
              "High-fidelity designs",
              "Responsive Design",
              "Figma Prototype",
              "Design System",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-launch-16-25",
          },
          {
            name: "Growth Package",
            price: "$9,400",
            tagline: "Design + Development",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Next.js / Webflow / Framer Development",
              "Hosting & Domain Setup",
              "Analytics Setup",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-growth-16-25",
          },
          {
            name: "Signature Package",
            price: "$11,150",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "SEO Setup & Optimization",
              "3 Months maintenance",
              "Logo and Brand Essentials",
              "AI brand photoshoot assets",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=website-signature-16-25",
          },
        ],
      },
      {
        id: "enterprise",
        label: "Enterprise",
        isEnterprise: true,
      },
    ],
  },
  {
    id: "web-app",
    label: "Web App",
    type: "subtabs",
    subTabs: [
      {
        id: "1-10-screens",
        label: "1-10 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$4,500",
            tagline: "Design only",
            features: [
              "UX research & wireframing",
              "High-fidelity UI designs",
              "Responsive app layout",
              "Interactive Figma prototype",
              "Design system & component library",
              "Developer Handoff with tokens",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-launch-1-10",
          },
          {
            name: "Growth Package",
            price: "$6,000",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Logo Design & Identity",
              "Color Palette & Typography",
              "Component state specs",
              "Up to 3 logo revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-growth-1-10",
          },
          {
            name: "Signature Package",
            price: "$12,600",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Full React / Next.js Frontend Dev",
              "SEO & Meta tag Setup",
              "3 Months active maintenance",
              "PWA Support & Offline readiness",
              "AI brand photography assets",
              "Dark / Light mode support",
              "Multilingual UI support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-signature-1-10",
          },
        ],
      },
      {
        id: "11-25-screens",
        label: "11-25 Pages",
        packages: [
          {
            name: "Starter Package",
            price: "$10,500",
            tagline: "Design only",
            features: [
              "In-depth UX research",
              "High-fidelity UI designs",
              "Responsive app layouts",
              "Figma interactive prototype",
              "Scalable Design System",
              "Developer handoff documentation",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-starter-11-25",
          },
          {
            name: "Growth Package",
            price: "$12,000",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Logo and Brand Essentials",
              "Hosting & Domain Setup guidance",
              "Analytics Setup & Events",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-growth-11-25",
          },
          {
            name: "Signature Package",
            price: "$29,500",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Full Next.js / TypeScript Web App Dev",
              "SEO & Social Graph Setup",
              "3 Months ongoing maintenance",
              "PWA Support",
              "AI brand photoshoot",
              "Dark / Light theme support",
              "Multilingual localization",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-signature-11-25",
          },
        ],
      },
      {
        id: "26-40-screens",
        label: "26-40 Pages",
        packages: [
          {
            name: "Starter Package",
            price: "$16,000",
            tagline: "Design only",
            features: [
              "UX research & user journeys",
              "High-fidelity UI screens",
              "Responsive layouts (desktop + tablet + mobile)",
              "Figma Prototype with micro-interactions",
              "Design System with reusable atoms",
              "Developer Handoff with tokens",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-starter-26-40",
          },
          {
            name: "Growth Package",
            price: "$20,000",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation",
              "Logo and Brand Essentials",
              "Cloud Hosting & DevOps Setup",
              "Analytics & Telemetry Setup",
              "2 Months maintenance",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-growth-26-40",
          },
          {
            name: "Signature Package",
            price: "$44,800",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Enterprise Next.js / React Architecture",
              "API & Backend Integration",
              "SEO & OpenGraph Setup",
              "3 Months maintenance",
              "PWA & Offline caching",
              "AI brand photography",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-signature-26-40",
          },
        ],
      },
      {
        id: "41-60-screens",
        label: "41-60 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$21,000",
            tagline: "Design only",
            features: [
              "Comprehensive UX research",
              "High-fidelity designs across 40+ flows",
              "Responsive design",
              "Full Figma clickable prototype",
              "Enterprise Design System",
              "Developer Handoff with token pipeline",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-launch-41-60",
          },
          {
            name: "Growth Package",
            price: "$22,500",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Design Documentation & Storybook specs",
              "Logo and Brand identity guidelines",
              "Cloud & CDN Setup",
              "User Analytics & Funnels",
              "Up to 3 logo revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-growth-41-60",
          },
          {
            name: "Signature Package",
            price: "$58,800",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Complete Production Web App Build",
              "Role-based Access & Auth Integration",
              "SEO Setup & Core Web Vitals",
              "3 Months dedicated maintenance",
              "PWA Support",
              "AI brand photoshoot assets",
              "Dark / Light mode + Localization",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=webapp-signature-41-60",
          },
        ],
      },
      {
        id: "enterprise",
        label: "Enterprise",
        isEnterprise: true,
      },
    ],
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    type: "subtabs",
    subTabs: [
      {
        id: "1-10-screens",
        label: "1-10 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$2,800",
            tagline: "Design only",
            features: [
              "UX research & mobile patterns",
              "High-fidelity iOS & Android designs",
              "Custom Graphic Assets",
              "Design Style Guide",
              "Design System tokens",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-launch-1-10",
          },
          {
            name: "Growth Package",
            price: "$5,300",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Interactive Figma prototype",
              "Design Documentation",
              "App Store / Google Play Screenshots",
              "App Icon & Splash Design",
              "Color palette and Brand font",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-growth-1-10",
          },
          {
            name: "Signature Package",
            price: "$7,800",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Design Token Support",
              "Advanced Analytics & Event Setup",
              "React Native / Flutter App Development",
              "App Store & Google Play Submission",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-signature-1-10",
          },
        ],
      },
      {
        id: "11-25-screens",
        label: "11-25 Pages",
        packages: [
          {
            name: "Basic Package",
            price: "$6,250",
            tagline: "Design only",
            features: [
              "UX research & wireframes",
              "High-fidelity mobile screens",
              "Custom Graphic Assets & Icons",
              "Design Style Guide",
              "Design System & Components",
              "Developer Handoff",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-basic-11-25",
          },
          {
            name: "Growth Package",
            price: "$8,750",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Interactive Figma prototype",
              "Design Documentation",
              "App Store / Google Play Screenshots",
              "App Icon Design & Brand Kit",
              "Color palette and Brand font",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-growth-11-25",
          },
          {
            name: "Signature Package",
            price: "$17,500",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Design Token Pipeline",
              "Advanced Analytics & Crashlytics",
              "React Native / Flutter Cross-Platform Dev",
              "App Store & Google Play Submission",
              "Color theme support (Dark/Light)",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-signature-11-25",
          },
        ],
      },
      {
        id: "26-40-screens",
        label: "26-40 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$8,800",
            tagline: "Design only",
            features: [
              "In-depth mobile UX research",
              "High-fidelity designs for 30+ screens",
              "Custom Graphic Assets & Illustrations",
              "Design Style Guide",
              "Full Design System",
              "Developer Handoff with specs",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-launch-26-40",
          },
          {
            name: "Growth Package",
            price: "$11,300",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Figma interactive prototype",
              "Design Documentation",
              "App Store / Google Play Screenshots",
              "App Icon & Splash Animations",
              "Color palette and Brand typography",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-growth-26-40",
          },
          {
            name: "Signature Package",
            price: "$24,500",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Design Token Support",
              "Advanced Analytics & Event Tracking",
              "Full App Development (iOS + Android)",
              "Store Submission & Release Support",
              "Dark/Light Theme & Accessibility",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-signature-26-40",
          },
        ],
      },
      {
        id: "41-60-screens",
        label: "41-60 Pages",
        packages: [
          {
            name: "Launch Package",
            price: "$11,500",
            tagline: "Design only",
            features: [
              "Comprehensive mobile UX research",
              "High-fidelity designs for 50+ screens",
              "Custom Graphic Assets",
              "Design Style Guide",
              "Full Scale Design System",
              "Developer Handoff with tokens",
              "Unlimited Revisions",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-launch-41-60",
          },
          {
            name: "Growth Package",
            price: "$13,900",
            tagline: "Design + Branding",
            isPopular: true,
            features: [
              "Everything from Launch",
              "Figma interactive prototype",
              "Design Documentation",
              "App Store & Google Play Screenshots",
              "Logo and App Icon Suite",
              "Brand Guidelines for Mobile",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-growth-41-60",
          },
          {
            name: "Signature Package",
            price: "$31,900",
            tagline: "Design + Dev + Branding",
            features: [
              "Everything from Growth",
              "Design Token Automation",
              "Advanced Analytics & Push Notifications",
              "Complete Mobile App Build (React Native / Flutter)",
              "App Store / Play Store Submission",
              "Color theme support",
              "Multilingual support",
            ],
            ctaLabel: "Book a Call",
            ctaHref: "/contact/?plan=mobile-signature-41-60",
          },
        ],
      },
      {
        id: "enterprise",
        label: "Enterprise",
        isEnterprise: true,
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    type: "direct",
    packages: [
      {
        name: "Basic",
        price: "$1,850",
        tagline: "Logo + Essentials",
        features: [
          "Logo Design (Primary & Secondary)",
          "Basic Color Palette",
          "Typography Guidelines",
          "Vector & Web Export Assets",
          "Up to 3 Revisions",
        ],
        ctaLabel: "Book a Call",
        ctaHref: "/contact/?plan=branding-basic",
      },
      {
        name: "Standard",
        price: "$2,900",
        tagline: "Logo + Brand Guidelines",
        isPopular: true,
        features: [
          "Everything from Basic",
          "Custom Iconography Set",
          "Comprehensive Brand Guidelines",
          "Social Media Kit (Profile & Banners)",
          "Up to 5 Revisions",
          "Up to 3 merchandise mockups",
        ],
        ctaLabel: "Book a Call",
        ctaHref: "/contact/?plan=branding-standard",
      },
      {
        name: "Ultimate",
        price: "$4,500",
        tagline: "Logo + Complete Package",
        features: [
          "Everything from Standard",
          "Full Brand Identity System",
          "Figma Style Guide & Component Tokens",
          "5–10 sec animated logo motion",
          "3 custom social templates + header/cover",
          "Up to 10 merchandise items",
          "Unlimited Revisions",
        ],
        ctaLabel: "Book a Call",
        ctaHref: "/contact/?plan=branding-ultimate",
      },
    ],
  },
  {
    id: "subscription",
    label: "Subscription",
    type: "subscription",
  },
];

export interface SubscriptionBillingPeriod {
  id: "monthly" | "quarterly" | "yearly";
  label: string;
  badge?: string;
  plans: {
    startup: {
      price: string;
      hours: string;
      period: string;
      description: string;
      features: string[];
    };
    growth: {
      price: string;
      hours: string;
      period: string;
      description: string;
      features: string[];
    };
  };
}

export const subscriptionBillingPeriods: Record<string, SubscriptionBillingPeriod> = {
  monthly: {
    id: "monthly",
    label: "Monthly",
    plans: {
      startup: {
        price: "$2,200",
        hours: "80 hours",
        period: "monthly, part time design & dev support",
        description: "80 hours per month",
        features: [
          "Access to full design & development stack",
          "Unlimited requests in queue",
          "1 request in progress at a time",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Average 48-hour delivery",
          "Unlimited Icons & stock assets",
          "Weekly updates and monthly reports",
        ],
      },
      growth: {
        price: "$3,800",
        hours: "160 hours",
        period: "monthly, full time design & dev support",
        description: "160 hours per month",
        features: [
          "Access to full design & development stack",
          "Unlimited requests added to your queue",
          "1 request in progress at a time",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Average 48-hour delivery",
          "Unlimited Icons & stock assets",
          "Weekly updates and monthly reports",
        ],
      },
    },
  },
  quarterly: {
    id: "quarterly",
    label: "Quarterly",
    badge: "Save 5%",
    plans: {
      startup: {
        price: "$6,200",
        hours: "80 hours",
        period: "monthly, part time support billed quarterly",
        description: "80 hours per month",
        features: [
          "Save 5% with quarterly commitment",
          "Access to full design & development stack",
          "Unlimited requests in queue",
          "1 request in progress at a time",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Average 48-hour delivery",
          "Weekly updates and monthly reports",
        ],
      },
      growth: {
        price: "$10,850",
        hours: "160 hours",
        period: "monthly, full time support billed quarterly",
        description: "160 hours per month",
        features: [
          "Save 5% with quarterly commitment",
          "Access to full design & development stack",
          "Unlimited requests added to your queue",
          "1 request in progress at a time",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Average 48-hour delivery",
          "Weekly updates and monthly reports",
        ],
      },
    },
  },
  yearly: {
    id: "yearly",
    label: "Yearly",
    badge: "Save 10%",
    plans: {
      startup: {
        price: "$23,700",
        hours: "80 hours",
        period: "monthly, part time support billed annually",
        description: "80 hours per month",
        features: [
          "Save 10% with annual commitment",
          "Access to full design & development stack",
          "Unlimited requests in queue",
          "Priority development bandwidth",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Fast turnaround delivery",
          "Quarterly strategy roadmap sessions",
        ],
      },
      growth: {
        price: "$41,500",
        hours: "160 hours",
        period: "monthly, full time support billed annually",
        description: "160 hours per month",
        features: [
          "Save 10% with annual commitment",
          "Access to full design & development stack",
          "Unlimited requests in queue",
          "Priority development bandwidth",
          "Shared task board for clear tracking",
          "Discord / Slack + Loom communication",
          "Dedicated Project Manager & Lead Dev",
          "Fast turnaround delivery",
          "Quarterly strategy roadmap sessions",
        ],
      },
    },
  },
};

export const customPricingSteps = [
  {
    step: "1",
    title: "Share Your Requirements",
    description: "Tell us about your project vision, timeline, target audience, and specific functionality requirements.",
  },
  {
    step: "2",
    title: "Get a Tailored Quote",
    description: "Receive a transparent, fixed-scope estimate tailored directly to your milestone goals.",
  },
  {
    step: "3",
    title: "Collaborate & Create",
    description: "We work in rapid, feedback-driven sprints with interactive prototypes and regular check-ins.",
  },
  {
    step: "4",
    title: "Final Delivery & Support",
    description: "Receive clean code, complete documentation, walkthrough sessions, and post-launch support.",
  },
];

export const valuePropositions = [
  {
    title: "Affordable Hourly Rate!",
    description: "Quality UI design & full-stack development at fair prices tailored to your needs.",
    icon: "Clock",
  },
  {
    title: "Personalized Consultation",
    description: "Work directly with our team to bring your vision to life with architectural clarity.",
    icon: "Users",
  },
  {
    title: "Flexible Revisions",
    description: "We adapt to your feedback. Enjoy revisions to ensure the result is exactly what you envision.",
    icon: "RefreshCw",
  },
];

export const bonusFeatures = [
  {
    title: "Free Design Prototype",
    description: "Experience your design in action before development begins so there are zero surprises.",
    icon: "Layers",
  },
  {
    title: "Developer Handoff",
    description: "We ensure what is designed is exactly what gets built with clean, production-grade code.",
    icon: "Code2",
  },
  {
    title: "Project Management",
    description: "Stay on track with expert management, clear milestone dates, and continuous transparency.",
    icon: "Kanban",
  },
  {
    title: "Project Consultation",
    description: "Get professional architectural advice to enhance your scalability and tech stack choices.",
    icon: "MessageSquare",
  },
];

export const strategicBenefits = [
  {
    title: "Unlimited Revisions",
    description: "We're committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.",
  },
  {
    title: "Lifetime Support",
    description: "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    title: "Personalised Plans",
    description: "Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment.",
  },
  {
    title: "Custom Design Solutions",
    description: "Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.",
  },
  {
    title: "24/7 Customer Support",
    description: "Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.",
  },
];

export const livePortfolioItems = [
  {
    role: "Need a Product Designer?",
    tagline: "Turning your big ideas into pixel-perfect products — need a Product Designer?",
    linkText: "See Figma File",
    url: "https://www.figma.com/design/eKzH2d2jWbOwvOSsG9nfNT/Designmonks-Landing-Page-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6",
    badge: "Figma Live",
  },
  {
    role: "Need a Mobile Designer?",
    tagline: "Seeking a Mobile Designer for user-friendly app designs and fluid cross-platform interactions.",
    linkText: "See Figma File",
    url: "https://www.figma.com/design/wML2YPnkaI7WhaQOPh3FbB/DM-Mobile-App-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6",
    badge: "Figma Live",
  },
  {
    role: "Need a Brand Designer?",
    tagline: "Your story, my design — together, we craft a brand identity that speaks and resonates.",
    linkText: "See Figma File",
    url: "https://www.figma.com/design/nR9RCciO92pCXVtqT3EXR5/DM-Brand-Book-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6",
    badge: "Figma Live",
  },
  {
    role: "Need a SaaS Designer?",
    tagline: "Turning SaaS platforms into user-friendly experiences and high-converting workflows.",
    linkText: "See Figma File",
    url: "https://www.figma.com/design/UV5rZSzHBgZmCWIrvgYDUD/Designmonks-WebApp-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6",
    badge: "Figma Live",
  },
];

export const pricingFaqs = [
  {
    question: "How Long Does a Design Project Take?",
    answer:
      "At Design Monks, we understand that each project is unique. Usually, our design process takes a few weeks, depending on the project's complexity and scope. We begin with thorough research and planning, followed by design iterations and client feedback sessions. This collaborative approach ensures that the final design aligns perfectly with your vision and goals.",
  },
  {
    question: "Why is Design Monks Different?",
    answer:
      "The team Design Monks prioritizes a perfect mix of creativity, client-focused strategy, and deep industry insights. We consistently deliver high-quality UI/UX design across branding, product design, and web design. Our collaborative process ensures designs align with your goals to help your brand grow and succeed. This is definitely a unique process that makes us different from others.",
  },
  {
    question: "How Much Does a Design Project Cost at Your Agency?",
    answer:
      "Every design project is unique, so pricing varies based on scope, requirements, and expertise needed. For a project, we charge from $1,800 to $58,800 depending on screen counts and development scope. We offer custom pricing personalized according to your specific needs, whether it's UI/UX, branding, or full web/mobile development. Contact us for a personalized proposal.",
  },
  {
    question: "Is Design Monks a start-up-friendly agency?",
    answer:
      "Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "We use industry-leading tools. For pixel-perfect UI/UX and Web designs, we swear by Figma and Figjam. When it comes to crafting visually stunning branding and product designs, our go-to is the Adobe suite, which includes Photoshop, Illustrator, and After Effects. For modern web & app builds, we work with Next.js, React, Webflow, and React Native. And for seamless project documentation, Notion and GitHub have got our back.",
  },
  {
    question: "Do you create WordPress e-commerce sites, and develop apps?",
    answer:
      "Yes. Even though we specialize in UI/UX, branding, and product design, we're also well-versed in Next.js, WordPress, eCommerce, and app development. Our team is equipped to create responsive sites, powerful eCommerce platforms, and innovative mobile apps. From design to development, we ensure your digital presence is both visually aesthetic and highly functional on all devices.",
  },
];

export const clientSuccessStories = [
  {
    quote: "We started with an MVP and needed a polished product. Design Monks delivered with great communication, high-quality work, and quick iterations until everything felt right. Truly grateful and highly recommended.",
    author: "Sebastian",
    title: "Founder @ Salesgo",
  },
  {
    quote: "Working with Design Monks was a fantastic experience. Their team was incredibly responsive, patient, and easy to work with throughout the entire process. They took the time to understand my ideas and delivered great work at an affordable price.",
    author: "David",
    title: "Founder @ Externalize It",
  },
  {
    quote: "Design Monks did an amazing job bringing my brand to life. From the branding strategy to the logo, the team was professional, responsive, and kept me informed every step of the way. The project was delivered on time and stress free.",
    author: "Tommy Lu",
    title: "Founder @ GoodGenes",
  },
  {
    quote: "Design Monks delivered an exceptional redesign with strong product thinking, attention to detail, and a highly responsive team. They genuinely cared about our product and outperformed every agency we had worked with before.",
    author: "Ishraq Khan",
    title: "Founder @ Kodezi & Nurvia",
  },
  {
    quote: "Design Monks has been professional, responsive, and truly committed to bringing our vision to life. They feel like an extension of our team, combining attention to detail, creativity, and thoughtful solutions.",
    author: "Chinho Gonzalez",
    title: "Founder @ Tatlist",
  },
  {
    quote: "We've worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free.",
    author: "Moshiur Rahman Radif",
    title: "COO @ Ontik Technologies",
  },
];
