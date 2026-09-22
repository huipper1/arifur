import { profile } from "@/content/profile";

/**
 * Generate a WhatsApp URL with optional prefilled message.
 * Uses the wa.me format without the leading + sign.
 */
export function getWhatsAppUrl(
  phone: string,
  message?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const baseUrl = `https://wa.me/${cleanPhone}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

/**
 * Generate a mailto URL with subject and body.
 */
export function getMailtoUrl(
  email: string,
  subject?: string,
  body?: string
): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ""}`;
}

/**
 * Format a phone number for display in international format.
 * E.g., "+8801756601431" → "+880 1756 601431"
 */
export function formatPhoneDisplay(phone: string): string {
  // Remove all non-digit and non-+ characters
  const clean = phone.replace(/[^0-9+]/g, "");
  if (clean.startsWith("+880")) {
    const rest = clean.slice(4);
    return `+880 ${rest.slice(0, 4)} ${rest.slice(4)}`;
  }
  return clean;
}

/**
 * Build an inquiry draft text from form data.
 */
export function buildInquiryText(data: {
  name: string;
  email?: string;
  projectType: string;
  summary: string;
  budget?: string;
  timing?: string;
}): string {
  const lines = [
    `Hi Arifur, I'd like to discuss a software project.`,
    ``,
    `Name: ${data.name}`,
  ];

  if (data.email) lines.push(`Email: ${data.email}`);
  lines.push(`Project Type: ${data.projectType}`);
  if (data.budget) lines.push(`Budget Range: ${data.budget}`);
  if (data.timing) lines.push(`Desired Timing: ${data.timing}`);
  lines.push(``, `Project Summary:`, data.summary);

  return lines.join("\n");
}

/**
 * Get the primary WhatsApp URL with a default message.
 */
export function getPrimaryWhatsAppUrl(message?: string): string {
  return getWhatsAppUrl(
    profile.whatsappPrimary,
    message || "Hi Arifur, I'd like to discuss a software project."
  );
}

/**
 * Get the alternative WhatsApp URL.
 */
export function getAlternativeWhatsAppUrl(message?: string): string {
  return getWhatsAppUrl(
    profile.whatsappAlternative,
    message || "Hi Arifur, I'd like to discuss a software project."
  );
}

/**
 * Get the primary email mailto URL.
 */
export function getEmailUrl(subject?: string, body?: string): string {
  return getMailtoUrl(
    profile.email,
    subject || "Project Inquiry",
    body
  );
}

/**
 * Validate email format.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Copy text to clipboard with fallback.
 * Returns true on success, false on failure.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for insecure contexts
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textArea);
    return success;
  } catch {
    return false;
  }
}
