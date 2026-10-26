import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      company,
      subject,
      projectType,
      budgetRange,
      timeline,
      message,
    } = body;

    // Validate required fields
    if (!fullName || !email || !subject || !projectType || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Read configuration from server-side environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL;

    // Never simulate a successful email submission
    if (!apiKey || !recipientEmail) {
      console.error("Required email configuration is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New Portfolio Contact: ${subject} `,
      text: `
Name: ${fullName}
Email: ${email}
Company: ${company || "N/A"}
Project Type: ${projectType}
Budget: ${budgetRange || "N/A"}
Timeline: ${timeline || "N/A"}
Subject: ${subject}

Message:
${message}
`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to send your message. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}

