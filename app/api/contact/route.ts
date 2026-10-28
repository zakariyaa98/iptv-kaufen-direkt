import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  EMAIL_MAX_LENGTH,
  EMAIL_REGEX,
  NAME_MAX_LENGTH,
  isContactDevice,
} from "@/lib/contact-options";
import { SITE } from "@/lib/site";

const CONTACT_DESTINATION_EMAIL = SITE.email;
// Resend's shared test sender. It only delivers to the address the Resend account is
// registered with. For production, verify your own domain in Resend and change this.
const CONTACT_SENDER_EMAIL = "onboarding@resend.dev";

type ContactPayload = {
  name?: unknown;
  device?: unknown;
  email?: unknown;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const device = typeof payload.device === "string" ? payload.device.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";

  if (!name || !device || !email) {
    return NextResponse.json({ error: "Bitte füllen Sie alle Felder aus." }, { status: 400 });
  }

  if (name.length > NAME_MAX_LENGTH || email.length > EMAIL_MAX_LENGTH) {
    return NextResponse.json({ error: "Eine Eingabe ist zu lang." }, { status: 400 });
  }

  if (!isContactDevice(device)) {
    return NextResponse.json({ error: "Bitte wählen Sie ein Gerät aus der Liste." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Das Kontaktformular ist derzeit nicht verfügbar." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_SENDER_EMAIL,
      to: CONTACT_DESTINATION_EMAIL,
      replyTo: email,
      subject: `[${SITE.name}] Neue Anfrage: ${device}`,
      text: `Neue Anfrage über das Kontaktformular\n\nName: ${name}\nGerät: ${device}\nE-Mail: ${email}`,
      html: `
        <h2>Neue Anfrage über das Kontaktformular</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Gerät:</strong> ${escapeHtml(device)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
