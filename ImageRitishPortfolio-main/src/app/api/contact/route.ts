import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, company, subject, projectType, budgetRange, timeline, message } = body;

    if (!fullName || !email || !subject || !projectType || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️ RESEND_API_KEY is missing. Simulating successful message submission for local testing:', {
        fullName,
        email,
        subject,
        message,
      });
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received! (Note: Running in simulation mode. Add RESEND_API_KEY in .env.local to send real emails).' 
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'kannurritish@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New Portfolio Contact: ${subject}`,
      text: `
Name:
${fullName}

Email:
${email}

Company:
${company || 'N/A'}

Project Type:
${projectType}

Budget:
${budgetRange || 'N/A'}

Timeline:
${timeline || 'N/A'}

Subject:
${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
