export const profile = {
  displayName: "Arifur Rahman",
  shortName: "Arifur",
  role: "Full-Stack Developer",
  summary:
    "I help founders and businesses turn ideas into practical software, improve existing products, and simplify everyday workflows.",
  heroHeadline: "SaaS, Mobile Apps, and Web Applications Built Around Your Business",
  email: "arifur.fullstack@gmail.com",
  whatsappPrimary: "+8801756601431",
  whatsappAlternative: "+8801707991750",
  bookingUrl: null as string | null,
  portraitSrc: "/images/arifur-portrait.png",
  portraitAlt: "Arifur Rahman — Full-Stack Developer",
  portraitAboutSrc: "/images/arifur-about.png",
  portraitCasualSrc: "/images/arifur-casual.png",
  brandPosterSrc: "/images/poster-brand.png",
  developerBannerSrc: "/images/banner-developer.png",
  automationBannerSrc: "/images/banner-automation.png",
  siteUrl: "", // Set before production launch
  company: "Huipper",
  companyRole: "Founder & CTO",
  socialLinks: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/arifurrahman", label: "LinkedIn" },
  ] as { platform: string; url: string; label: string }[],
  location: "Bangladesh",
  workingGlobally: true,
  bio: [
    "I build software that serves real business needs — SaaS platforms, mobile applications, and custom web tools that help teams work better and grow faster.",
    "My approach centers on understanding what you're trying to accomplish before writing a single line of code. Every project starts with clear scope, regular communication, and a focus on delivering something people actually want to use.",
    "Whether you're launching a new product, improving an existing one, or need someone to turn your idea into a focused first release — I'm here to help make it happen.",
  ],
  workingPrinciples: [
    {
      title: "Clear Scope",
      description:
        "Every project starts with well-defined goals, deliverables, and timelines so there are no surprises.",
    },
    {
      title: "Regular Communication",
      description:
        "Consistent updates and check-ins keep you informed and involved throughout the development process.",
    },
    {
      title: "Usable Interfaces",
      description:
        "I build interfaces that real people can navigate, understand, and use effectively from day one.",
    },
    {
      title: "Maintainable Code",
      description:
        "Clean, well-structured code that your team can understand, extend, and maintain long after handover.",
    },
    {
      title: "Explicit Handover",
      description:
        "Thorough documentation, walkthrough sessions, and everything you need to run and maintain your product independently.",
    },
  ],
  techCapabilities: [
    {
      category: "Frontend & Mobile",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "Flutter",
        "Tailwind CSS",
        "GSAP",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Laravel",
        "Python",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Database & Cloud",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Firebase",
        "AWS",
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git",
        "Docker",
        "Figma",
        "CI/CD",
        "Vercel",
      ],
    },
  ],
} as const;
