interface SectionEyebrowProps {
  label: string;
  className?: string;
}

export default function SectionEyebrow({
  label,
  className = "",
}: SectionEyebrowProps) {
  return <p className={`eyebrow ${className}`}>{label}</p>;
}
