export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  buyerProblem: string;
  capabilities: string[];
  process: string[];
  relatedProjectIds: string[];
  ctaLabel: string;
}

export const services: Service[] = [
  {
    id: "saas",
    slug: "saas-development",
    title: "SaaS Application Development",
    summary:
      "Launch or improve a subscription-based software product with multi-tenant architecture, user management, and scalable infrastructure.",
    buyerProblem:
      "You have an idea for a software product that serves multiple customers, handles subscriptions, and needs to scale — but building it from scratch feels overwhelming.",
    capabilities: [
      "Multi-tenant Architecture",
      "User Roles & Permissions",
      "Dashboard & Analytics",
      "Billing & Subscription Flows",
      "API Integrations",
      "Workspace Management",
    ],
    process: [
      "Define core workflows and user types",
      "Design data architecture and tenant isolation",
      "Build authentication, roles, and billing",
      "Develop core product features iteratively",
      "Test, deploy, and prepare for launch",
    ],
    relatedProjectIds: [],
    ctaLabel: "Discuss SaaS Development",
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    summary:
      "Deliver a useful mobile product with smooth onboarding, real-time features, and device-aware workflows for iOS and Android.",
    buyerProblem:
      "You need a mobile app that works reliably across devices, handles real-time updates, and gives your users a native-feeling experience.",
    capabilities: [
      "Cross-Platform Development",
      "Onboarding & Account Flows",
      "Push Notifications",
      "Offline Support",
      "API Integration",
      "Device-Aware Workflows",
    ],
    process: [
      "Map user journeys and key screens",
      "Choose the right platform approach",
      "Build core features with iterative feedback",
      "Integrate with backend services",
      "Test on real devices and prepare for store submission",
    ],
    relatedProjectIds: [],
    ctaLabel: "Discuss Mobile Development",
  },
  {
    id: "web",
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    summary:
      "Support specific business workflows with booking systems, portals, marketplaces, and operational tools tailored to your needs.",
    buyerProblem:
      "Your business has unique workflows that off-the-shelf tools can't handle properly — you need a custom solution built around how your team actually works.",
    capabilities: [
      "Booking & Scheduling Systems",
      "Client Portals",
      "Marketplace Platforms",
      "Internal Operational Tools",
      "Real-time Dashboards",
      "Third-party Integrations",
    ],
    process: [
      "Understand your business workflows and pain points",
      "Map out the key user journeys",
      "Design and build the core system",
      "Integrate with your existing tools",
      "Deploy, test, and train your team",
    ],
    relatedProjectIds: [],
    ctaLabel: "Discuss Web Application",
  },
  {
    id: "mvp",
    slug: "mvp-planning",
    title: "MVP Planning & Development",
    summary:
      "Turn an idea into a focused first release with discovery, user journeys, feature priorities, and practical implementation planning.",
    buyerProblem:
      "You have a software idea but you're not sure where to start — you need help scoping the first version and building something people can actually use and give feedback on.",
    capabilities: [
      "Discovery & Research",
      "User Journey Mapping",
      "Feature Prioritization",
      "Prototype Development",
      "Release Planning",
      "Iteration Strategy",
    ],
    process: [
      "Explore the idea and identify the core value",
      "Define the minimum feature set",
      "Design key screens and flows",
      "Build and test the first version",
      "Plan the path from MVP to full product",
    ],
    relatedProjectIds: [],
    ctaLabel: "Discuss MVP Planning",
  },
  {
    id: "improvement",
    slug: "app-improvements",
    title: "Existing Application Improvements",
    summary:
      "Resolve limitations in your current product — fix workflows, add integrations, improve UX, boost performance, and modernize the tech stack.",
    buyerProblem:
      "Your existing product has rough edges — slow performance, confusing workflows, missing integrations, or outdated technology that's holding your team back.",
    capabilities: [
      "Workflow Fixes & Optimization",
      "New Feature Integration",
      "UX Improvements",
      "Performance Optimization",
      "Tech Stack Modernization",
      "Code Refactoring",
    ],
    process: [
      "Audit the current application and identify bottlenecks",
      "Prioritize improvements by impact",
      "Implement changes incrementally",
      "Test thoroughly against existing functionality",
      "Document changes and update your team",
    ],
    relatedProjectIds: [],
    ctaLabel: "Discuss Improvements",
  },
];

export const industries = [
  {
    name: "E-commerce",
    description: "Online stores, product catalogs, and shopping experiences",
  },
  {
    name: "Service & Booking",
    description: "Appointment scheduling, service management, and client portals",
  },
  {
    name: "Education",
    description: "Learning platforms, course management, and student tools",
  },
  {
    name: "Real Estate",
    description: "Property listings, management tools, and client platforms",
  },
  {
    name: "Hospitality",
    description: "Reservation systems, guest management, and operations tools",
  },
  {
    name: "Logistics",
    description: "Tracking systems, inventory management, and delivery tools",
  },
  {
    name: "Creator Platforms",
    description: "Content management, community tools, and monetization systems",
  },
];
