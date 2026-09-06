import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  subject: z.enum(["", "web-development", "local-seo", "technical-seo", "ai-solutions", "white-label", "general"]),
  message: z.string().trim().min(1).max(5000),
  honeypot: z.string().max(0).optional(),
});

export const auditSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  business: z.string().trim().min(1).max(200),
  website: z.union([
    z.literal(""),
    z.string().trim().url().startsWith("https://").max(2048),
  ]),
  challenge: z.string().trim().min(1).max(5000),
  service: z.enum(["", "local-seo", "technical-seo", "web-development", "saas-development", "ai-integration", "both", "not-sure"]),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type AuditFormData = z.infer<typeof auditSchema>;