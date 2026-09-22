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
          className="inline-block text-[var(--accent)] text-[0.5em] align-super ml-1"
          aria-hidden="true"
        >
          ✦
        </span>
      )}
    </Tag>
  );
}
