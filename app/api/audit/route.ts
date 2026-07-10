import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createAuditEmailHtml } from "@/components/emails/AuditEmail";
import { SITE_CONFIG } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, website, challenge, service } = body;

    if (!name || !email || !business || !challenge) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: SITE_CONFIG.email,
      to: SITE_CONFIG.email,
      subject: `New Growth Audit Request from ${name}`,
      html: createAuditEmailHtml(name, email, business, website, challenge, service),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Audit request sent successfully" },
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