import { describe, expect, it } from "vitest";
import { createContactEmailHtml } from "@/components/emails/ContactEmail";
import { createAuditEmailHtml } from "@/components/emails/AuditEmail";
import { auditSchema, contactSchema } from "@/lib/validation";

describe("contact request validation", () => {
  it("accepts a valid contact request and supported service subject", () => {
    const result = contactSchema.safeParse({
      name: "QA Tester",
      email: "qa@example.com",
      subject: "technical-seo",
      message: "Please review our technical SEO setup.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email, missing message, and honeypot values", () => {
    const result = contactSchema.safeParse({
      name: "QA Tester",
      email: "not-an-email",
      subject: "",
      message: "",
      honeypot: "bot input",
    });

    expect(result.success).toBe(false);
  });
});

describe("audit request validation", () => {
  it("accepts a valid audit request with an HTTPS website", () => {
    const result = auditSchema.safeParse({
      name: "QA Tester",
      email: "qa@example.com",
      business: "Example Business",
      website: "https://example.com",
      challenge: "We need help improving local visibility.",
      service: "local-seo",
    });

    expect(result.success).toBe(true);
  });

  it("rejects non-HTTPS websites and invalid service values", () => {
    const result = auditSchema.safeParse({
      name: "QA Tester",
      email: "qa@example.com",
      business: "Example Business",
      website: "http://example.com",
      challenge: "A challenge",
      service: "unsupported-service",
    });

    expect(result.success).toBe(false);
  });
});

describe("email HTML escaping", () => {
  it("escapes user input in contact email HTML", () => {
    const html = createContactEmailHtml("<img>", "test@example.com", "general", "<script>alert(1)</script>");

    expect(html).not.toContain("<img>");
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).toContain("&lt;img&gt;");
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
  });

  it("escapes user input in audit email HTML", () => {
    const html = createAuditEmailHtml("<img>", "test@example.com", "<b>Business</b>", "https://example.com", "<script>alert(1)</script>", "");

    expect(html).not.toContain("<img>");
    expect(html).not.toContain("<b>Business</b>");
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).toContain("&lt;img&gt;");
    expect(html).toContain("&lt;b&gt;Business&lt;/b&gt;");
  });
});