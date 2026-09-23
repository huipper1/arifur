import type { Metadata } from "next";
import PricingHero from "@/components/sections/PricingHero";
import PricingTabs from "@/components/sections/PricingTabs";
import PricingBonuses from "@/components/sections/PricingBonuses";
import PricingBenefits from "@/components/sections/PricingBenefits";
import PricingFigmaProjects from "@/components/sections/PricingFigmaProjects";
import PricingTestimonials from "@/components/sections/PricingTestimonials";
import PricingFAQ from "@/components/sections/PricingFAQ";
import PricingContactCTA from "@/components/sections/PricingContactCTA";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import { pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing — Affordable UI/UX & Web Development Packages",
  description:
    "Flexible pricing for AI-powered UI/UX, SaaS, mobile apps, and full-stack web development services built for startups, brands, and digital products.",
  openGraph: {
    title: "Pricing — Arifur Rahman",
    description:
      "Flexible pricing for AI-powered UI/UX, SaaS, mobile apps, and web development.",
  },
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingHero />
      <PricingTabs />
      <PricingBonuses />
      <MarqueeStrip />
      <PricingBenefits />
      <PricingFigmaProjects />
      <PricingTestimonials />
      <PricingFAQ />
      <PricingContactCTA />
    </>
  );
}
