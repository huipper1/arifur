"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useGSAP";

interface AccordionItem {
  number: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null
  );
  const containerRef = useStaggerReveal<HTMLDivElement>(".accordion-item", {
    y: 20,
    stagger: 0.08,
  });

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.number}
            className="accordion-item"
            data-open={isOpen}
          >
            <button
              className="accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.number}`}
            >
              <span className="accordion-number">{item.number}.</span>
              <span className="flex-1">{item.title}</span>
              <span className="accordion-icon">
                {isOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>
            <div
              id={`accordion-content-${item.number}`}
              className="accordion-content"
              role="region"
              aria-labelledby={`accordion-trigger-${item.number}`}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
