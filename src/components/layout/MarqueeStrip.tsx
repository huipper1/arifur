const marqueeItems = [
  "SaaS Development",
  "Mobile Apps",
  "Web Applications",
  "MVP Planning",
  "Product Improvement",
  "UI/UX Design",
  "API Integration",
  "Cloud Solutions",
];

export default function MarqueeStrip() {
  // Duplicate items for seamless infinite scroll
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-content">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
