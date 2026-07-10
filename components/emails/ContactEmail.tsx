import { SITE_CONFIG } from "@/lib/constants";

export const subjectLabels: Record<string, string> = {
  "web-development": "Web Development Project",
  "local-seo": "Local SEO Campaign",
  "ai-solutions": "AI Integration",
  "white-label": "White-Label Partnership",
  "general": "General Enquiry",
};

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]!));
}

export function createContactEmailHtml(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  const label = subjectLabels[subject] || subject || "No subject";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin:0;padding:20px 0;background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;">
        <div style="background-color:#ffffff;margin:0 auto;padding:40px;border-radius:8px;max-width:600px;">
          <div style="margin-bottom:32px;">
            <span style="font-size:24px;font-weight:700;color:#1973e0;margin:0;">${SITE_CONFIG.name}</span>
          </div>

          <h1 style="color:#1a1a1a;font-size:24px;font-weight:600;margin:0 0 24px;">New Contact Form Submission</h1>

          <p style="color:#555;font-size:14px;line-height:24px;margin:0 0 16px;">
            A new contact form submission has been received. Here are the details:
          </p>

          <hr style="border-color:#e6ebf1;margin:24px 0;">

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Name:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(name)}</p>
          </div>

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Email:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(email)}</p>
          </div>

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Subject:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(label)}</p>
          </div>

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Message:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(message)}</p>
          </div>

          <hr style="border-color:#e6ebf1;margin:24px 0;">

          <p style="color:#8898aa;font-size:12px;line-height:16px;margin:24px 0 0;">
            This email was sent from ${SITE_CONFIG.name}. You can reply directly to
            the customer at ${escapeHtml(email)}.
          </p>
        </div>
      </body>
    </html>
  `;
}