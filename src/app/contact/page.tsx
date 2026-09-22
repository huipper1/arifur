"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle, Copy, Check, Phone } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import {
  getWhatsAppUrl,
  getMailtoUrl,
  buildInquiryText,
  formatPhoneDisplay,
  isValidEmail,
  copyToClipboard,
} from "@/lib/helpers";

const projectTypes = [
  { value: "", label: "Select project type" },
  { value: "SaaS", label: "SaaS Application" },
  { value: "Mobile App", label: "Mobile Application" },
  { value: "Web Application", label: "Web Application" },
  { value: "Existing App Improvement", label: "Existing App Improvement" },
  { value: "Other", label: "Other" },
];

const serviceMap: Record<string, string> = {
  saas: "SaaS",
  mobile: "Mobile App",
  web: "Web Application",
  mvp: "Other",
  improvement: "Existing App Improvement",
};

function ContactContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState(() => {
    const service = searchParams.get("service");
    return {
      name: "",
      email: "",
      projectType: (service && serviceMap[service]) || "",
      summary: "",
      budget: "",
      timing: "",
    };
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (formData.email && !isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";
    if (!formData.summary.trim())
      newErrors.summary = "Project summary is required";
    if (formData.summary.length > 1000)
      newErrors.summary = "Summary must be under 1,000 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailDraft = () => {
    if (!validate()) return;
    const body = buildInquiryText(formData);
    const url = getMailtoUrl(profile.email, "Project Inquiry", body);
    window.open(url, "_self");
  };

  const handleWhatsApp = (phone: string) => {
    if (!validate()) return;
    const text = buildInquiryText(formData);
    const url = getWhatsAppUrl(phone, text);
    window.open(url, "_blank");
  };

  const handleCopy = async () => {
    const text = buildInquiryText(formData);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section className="section pt-32 md:pt-40">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <SectionEyebrow label="Contact Me" />
            <SectionHeading
              regular="Let's Talk for"
              accent="Your Next Project"
              as="h1"
              size="h1"
            />
            <p className="text-[var(--text-secondary)] mt-4 mb-10">
              Share your idea, the problem you&apos;re solving, or the part of
              your current product that needs attention.
            </p>

            {/* Form */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label">
                    Your Name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="Ex. John Doe"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="field-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="field-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="label">
                  I&apos;m Interested In{" "}
                  <span className="text-[var(--accent)]">*</span>
                </label>
                <select
                  id="projectType"
                  className="select"
                  value={formData.projectType}
                  onChange={(e) => updateField("projectType", e.target.value)}
                  aria-invalid={!!errors.projectType}
                  aria-describedby={
                    errors.projectType ? "projectType-error" : undefined
                  }
                >
                  {projectTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p id="projectType-error" className="field-error">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="label">
                    Budget Range (Optional)
                  </label>
                  <input
                    id="budget"
                    type="text"
                    className="input"
                    placeholder="e.g. $5,000 - $10,000"
                    value={formData.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                  />
                </div>

                {/* Timing */}
                <div>
                  <label htmlFor="timing" className="label">
                    Desired Timing (Optional)
                  </label>
                  <input
                    id="timing"
                    type="text"
                    className="input"
                    placeholder="e.g. Q1 2027"
                    value={formData.timing}
                    onChange={(e) => updateField("timing", e.target.value)}
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <label htmlFor="summary" className="label">
                  Your Message{" "}
                  <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="summary"
                  className="textarea"
                  placeholder="Tell me about your project idea, the problem you're solving, or what needs attention..."
                  rows={5}
                  maxLength={1000}
                  value={formData.summary}
                  onChange={(e) => updateField("summary", e.target.value)}
                  aria-invalid={!!errors.summary}
                  aria-describedby={
                    errors.summary ? "summary-error" : undefined
                  }
                />
                <div className="flex justify-between mt-1">
                  {errors.summary ? (
                    <p id="summary-error" className="field-error">
                      {errors.summary}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {formData.summary.length}/1,000
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleEmailDraft}
                  className="btn btn-primary px-6 py-3"
                  type="button"
                >
                  <Mail className="w-4 h-4" />
                  Open Email Draft
                </button>
                <button
                  onClick={() => handleWhatsApp(profile.whatsappPrimary)}
                  className="btn btn-secondary px-6 py-3"
                  type="button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Continue in WhatsApp
                </button>
                <button
                  onClick={handleCopy}
                  className="btn btn-outline px-5 py-3"
                  type="button"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied ? "Copied!" : "Copy Brief"}
                </button>
              </div>

              <p className="text-xs text-[var(--text-tertiary)] mt-2">
                This opens a draft in your email app or WhatsApp. Review it and
                send it there. Nothing is submitted through this website.
              </p>
            </div>
          </div>

          {/* Right: Contact info card */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--bg-dark)] text-[var(--text-on-dark)] rounded-2xl p-8 lg:sticky lg:top-28 space-y-8">
              {/* Contact */}
              <div>
                <h3 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`https://wa.me/${profile.whatsappPrimary.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-[var(--accent)] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[var(--accent)]" />
                      <div>
                        <div>{formatPhoneDisplay(profile.whatsappPrimary)}</div>
                        <div className="text-xs text-[var(--text-on-dark-muted)]">
                          Primary WhatsApp
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${profile.whatsappAlternative.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-[var(--accent)] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[var(--accent)]" />
                      <div>
                        <div>
                          {formatPhoneDisplay(profile.whatsappAlternative)}
                        </div>
                        <div className="text-xs text-[var(--text-on-dark-muted)]">
                          Alternative WhatsApp
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-3 text-sm hover:text-[var(--accent)] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[var(--accent)]" />
                      <div>
                        <div>{profile.email}</div>
                        <div className="text-xs text-[var(--text-on-dark-muted)]">
                          Email
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-sm text-[var(--text-on-dark-muted)]">
                  Based in {profile.location}, working globally
                </p>
              </div>

              {/* Social — hidden until URLs provided */}
              {profile.socialLinks.length > 0 && (
                <div>
                  <h3 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-4">
                    Stay Connected
                  </h3>
                  <div className="flex gap-3">
                    {profile.socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-[var(--bg-dark-surface)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors text-sm"
                      >
                        {social.platform.charAt(0).toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="section pt-32 md:pt-40 min-h-[60vh] flex items-center justify-center">
          <div className="text-[var(--text-secondary)]">Loading...</div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}

