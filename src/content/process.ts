export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the Business & Users",
    description:
      "We start by getting clear on your goals, your users, and the problem your product needs to solve. This ensures every decision that follows is grounded in real needs.",
  },
  {
    number: "02",
    title: "Define Scope & Priorities",
    description:
      "Together we identify the essential features, set realistic timelines, and create a focused plan that delivers the most value first.",
  },
  {
    number: "03",
    title: "Design, Develop & Review",
    description:
      "I build iteratively with regular check-ins, so you see progress early and can give feedback before things go too far in the wrong direction.",
  },
  {
    number: "04",
    title: "Prepare Launch & Handover",
    description:
      "Thorough testing, deployment preparation, documentation, and walkthrough sessions ensure a smooth launch and confident handover.",
  },
  {
    number: "05",
    title: "Improve Through Agreed Support",
    description:
      "Post-launch support helps you respond to user feedback, fix issues quickly, and evolve the product based on real usage data.",
  },
];
