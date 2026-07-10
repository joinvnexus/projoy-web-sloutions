import { SITE_CONFIG } from "@/lib/constants";

export const serviceLabels: Record<string, string> = {
  "local-seo": "Local SEO & Google Maps Ranking",
  "web-development": "New Website or Redesign",
  "saas-development": "SaaS / Web Application",
  "ai-integration": "AI Chatbot or Automation",
  "both": "Web Development + Local SEO (both)",
  "not-sure": "Not sure yet — need guidance",
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

export function createAuditEmailHtml(
  name: string,
  email: string,
  business: string,
  website: string | undefined,
  challenge: string,
  service: string
): string {
  const label = serviceLabels[service] || service || "Not specified";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Growth Audit Request</title>
      </head>
      <body style="margin:0;padding:20px 0;background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;">
        <div style="background-color:#ffffff;margin:0 auto;padding:40px;border-radius:8px;max-width:600px;">
          <div style="margin-bottom:32px;">
            <span style="font-size:24px;font-weight:700;color:#1973e0;margin:0;">${SITE_CONFIG.name}</span>
          </div>

          <h1 style="color:#1a1a1a;font-size:24px;font-weight:600;margin:0 0 24px;">New Growth Audit Request</h1>

          <p style="color:#555;font-size:14px;line-height:24px;margin:0 0 16px;">
            A new growth audit request has been submitted. Here are the details:
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
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Business:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(business)}</p>
          </div>

          ${website ? `
          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Website:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(website)}</p>
          </div>
          ` : ""}

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Service Interest:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(label)}</p>
          </div>

          <div style="margin-bottom:12px;">
            <p style="color:#1a1a1a;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px;">Challenge:</p>
            <p style="color:#333;font-size:14px;margin:0 0 8px;line-height:20px;">${escapeHtml(challenge)}</p>
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