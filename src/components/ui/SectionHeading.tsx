import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  regular: string;
  accent: string;
  showSparkle?: boolean;
  as?: "h1" | "h2" | "h3";
  size?: "display" | "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  regular,
  accent,
  showSparkle = true,
  as: Tag = "h2",
  size = "h1",
  className = "",
}: SectionHeadingProps) {
  const sizeClass = {
    display: "text-[length:var(--text-display)]",
    h1: "text-[length:var(--text-h1)]",
    h2: "text-[length:var(--text-h2)]",
  }[size];

  return (
    <Tag
      className={`${sizeClass} font-bold tracking-tight leading-tight ${className}`}
    >
      {regular}{" "}
      <span className="text-[var(--accent)] font-serif italic">{accent}</span>
      {showSparkle && (
        <span
          className="inline-inline-flex items-center text-[var(--accent)] align-super ml-1.5 opacity-90 transition-transform duration-300 hover:rotate-12 hover:scale-110"
          aria-hidden="true"
        >
          <Sparkles className="inline-block w-4 h-4 md:w-5 md:h-5 text-[var(--accent)] fill-current" />
        </span>
      )}
    </Tag>
  );
}
