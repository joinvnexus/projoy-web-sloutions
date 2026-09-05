import { describe, expect, it } from "vitest";
import { createContactEmailHtml } from "@/components/emails/ContactEmail";
import { createAuditEmailHtml } from "@/components/emails/AuditEmail";

describe("contact API route scaffold", () => {
  it.todo("accepts valid input and sends through Resend");
  it.todo("returns a generic error for malformed JSON");
  it.todo("rejects missing fields");
  it.todo("rejects oversized values");
  it.todo("rejects invalid email and URL values");
  it.todo("returns a generic error when Resend fails");
  it.todo("returns success after a successful Resend response");
});

describe("audit API route scaffold", () => {
  it.todo("accepts valid input and sends through Resend");
  it.todo("returns a generic error for malformed JSON");
  it.todo("rejects missing fields");
  it.todo("rejects oversized values");
  it.todo("rejects invalid email and URL values");
  it.todo("returns a generic error when Resend fails");
  it.todo("returns success after a successful Resend response");
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