import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import ServicesOverview from "@/components/sections/ServicesOverview";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import BrandInquirySection from "@/components/sections/BrandInquirySection";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { faqItems } from "@/content/faq";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
      <HeroSection />
      <MarqueeStrip />
      <ServicesOverview />
      <MarqueeStrip />
      <SelectedWork />
      <AboutPreview />
      <ProcessSection />
      <MarqueeStrip />
      <FAQSection />
      <BrandInquirySection />
      <ClosingCTA />
    </>
  );
}
