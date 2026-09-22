import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getPrimaryWhatsAppUrl } from "@/lib/helpers";

export default function AboutPreview() {
  return (
    <section className="section bg-[var(--bg-surface)]">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[350px] md:w-[360px] md:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-page)] border border-[var(--border)] shadow-xl">
              <Image
                src={profile.portraitAboutSrc}
                alt={profile.portraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 360px"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionEyebrow label="About Me" />
            <SectionHeading regular="Who is" accent="Arifur Rahman?" />

            <p className="text-[var(--text-secondary)] leading-relaxed mt-6 mb-6">
              {profile.bio[0]}
            </p>

            {/* Contact shortcuts */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={getPrimaryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </span>
                {formatPhoneDisplay(profile.whatsappPrimary)}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                {profile.email}
              </a>
            </div>

            <Link href="/about/" className="btn btn-outline px-6 py-3">
              Learn More About Me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
