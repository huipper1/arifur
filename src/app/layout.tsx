import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl || "https://arifur.dev"),
  title: {
    default: "Arifur Rahman — Full-Stack Developer",
    template: "%s — Arifur Rahman",
  },
  description:
    "SaaS, mobile apps, and web applications built around your business. Full-stack developer helping founders turn ideas into practical software.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arifur Rahman",
    title: "Arifur Rahman — Full-Stack Developer",
    description:
      "SaaS, mobile apps, and web applications built around your business.",
    images: [
      {
        url: "/images/banner-developer.png",
        width: 1200,
        height: 630,
        alt: "Arifur Rahman — Full-Stack Web Developer, Founder & CTO at Huipper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifur Rahman — Full-Stack Developer",
    description:
      "SaaS, mobile apps, and web applications built around your business.",
    images: ["/images/banner-developer.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arifur Rahman — Full-Stack Developer",
              url: "https://arifur.dev",
              description:
                "SaaS, mobile apps, and web applications built around your business.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased relative selection:bg-[var(--accent)] selection:text-white">
        {/* Background Grid & Ambient Glow Effects */}
        <div className="bg-grid-pattern" aria-hidden="true" />
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-glow-center" aria-hidden="true" />

        {/* Skip to content */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
