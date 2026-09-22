import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="section bg-[var(--bg-surface)]">
      <div className="section-inner text-center">
        <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight mb-4">
          Ready to{" "}
          <span className="text-[var(--accent)] font-serif italic">
            Start Your Project?
          </span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-[480px] mx-auto">
          Share your idea and let&apos;s figure out the best way to bring it to
          life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/"
            className="btn btn-primary text-base px-8 py-4"
          >
            Discuss Your Project
            <span className="btn-circle-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
