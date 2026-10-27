import { NextResponse } from "next/server";
import { Resend } from "resend";
import {isRateLimited} from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Read the visitor's IP address from the request headers.
    const forwardedFor = request.headers.get("x-forwarded-for");

    // Use the first IP address if multiple addresses are provided.
    // Fall back to "unknown" if the header is missing.
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // Block requests that exceed the limit of 5 per 10 minutes.
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }
    
    // Basic spam protection: reject submissions that fill the hidden field.
    const honeypot = String(body.website ?? "");

    if (honeypot) {
        return NextResponse.json({ success: true });
    } 
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (
      !name ||
      name.length > 100 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length > 30 ||
      ![  "Carpet cleaning",
          "Commercial cleaning",
          "Deep cleaning",
          "Window cleaning",].includes(service) ||
      !message ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "Please check the information you entered." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !fromEmail || !contactEmail) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Cleaning quote request — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Email sending failed:", error);
      return NextResponse.json(
        { error: "Unable to send your request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}