export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How do you approach planning the first version of a product?",
    answer:
      "I start by understanding the core problem you're solving and who you're solving it for. From there, we identify the smallest set of features that delivers real value — your MVP. This usually involves mapping user journeys, prioritizing features by impact, and creating a realistic timeline. The goal is to get something useful into users' hands quickly, then iterate based on real feedback.",
  },
  {
    question: "Should I build a web app or a mobile app?",
    answer:
      "It depends on how your users will interact with your product. If they need it on the go, a mobile app makes sense. If it's a workflow tool or dashboard, a web app is often the better starting point. Many products benefit from both — we can start with one platform and expand later. I'll help you figure out the right approach based on your specific use case.",
  },
  {
    question: "Can you help improve an existing product?",
    answer:
      "Absolutely. Whether it's fixing performance issues, modernizing an outdated tech stack, improving the user experience, or adding new features — I can audit your current application and build a clear plan for improvements. Many projects start with an existing codebase that needs attention rather than building from scratch.",
  },
  {
    question: "What factors influence project budget and timeline?",
    answer:
      "The main factors are complexity of features, number of integrations, design requirements, and how much existing work can be reused. A focused MVP might take a few weeks, while a full-featured platform could take several months. I'll give you an honest estimate after understanding your requirements — no generic pricing packages, because every project is different.",
  },
  {
    question: "How does working across time zones work?",
    answer:
      "I've worked with clients across the US, UK, Australia, Europe, and the Middle East. We establish overlapping communication windows, use async updates for non-urgent items, and schedule regular check-ins that work for both of us. Clear documentation and consistent progress updates make distance a non-issue.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch isn't the end — it's the beginning. I can provide post-launch support including bug fixes, performance monitoring, user feedback integration, and planned feature additions. The support scope is agreed upon before launch so there are no surprises. You'll also receive complete documentation and handover materials.",
  },
];
