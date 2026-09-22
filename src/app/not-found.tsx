import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section pt-32 md:pt-40 min-h-[60vh] flex items-center">
      <div className="section-inner text-center">
        <span className="text-8xl font-bold text-[var(--accent)] opacity-20 font-serif">
          404
        </span>
        <h1 className="text-[length:var(--text-h1)] font-bold tracking-tight mt-4 mb-4">
          Page{" "}
          <span className="text-[var(--accent)] font-serif italic">
            Not Found
          </span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-[420px] mx-auto">
          This page doesn&apos;t exist. You might have followed an old link or
          mistyped the address.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary px-8 py-3.5 shadow-lg shadow-[var(--accent)]/15">
            Return Home
            <span className="btn-circle-arrow">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link href="/contact/" className="btn btn-outline px-8 py-3.5">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
