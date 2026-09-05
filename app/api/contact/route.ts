import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createContactEmailHtml, subjectLabels } from "@/components/emails/ContactEmail";
import { SITE_CONFIG } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subjectLabel = subjectLabels[subject] || subject || "New Message";

    const { error } = await resend.emails.send({
      from: SITE_CONFIG.email,
      to: SITE_CONFIG.email,
      subject: `Contact Form: ${subjectLabel}`,
      html: createContactEmailHtml(name, email, subject, message),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}