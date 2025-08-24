// src/app/api/contact/route.ts
import nodemailer from "nodemailer"
import type { Attachment } from "nodemailer/lib/mailer"

export const runtime = "nodejs"

type ContactPayload = {
  topic: string
  requestType: string
  name: string
  phone: string
  email: string
  address?: string
  message?: string
}

function getTransporter() {
  const host = process.env.SMTP_HOST!
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = String(process.env.SMTP_SECURE || "false") === "true"
  const user = process.env.SMTP_USER!
  const pass = process.env.SMTP_PASS!

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // Honeypot (Bots tragen hier etwas ein)
    const honeypot = (formData.get("company") as string) || ""
    if (honeypot.trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    const payload: ContactPayload = {
      topic: (formData.get("topic") as string) || "",
      requestType: (formData.get("requestType") as string) || "",
      name: (formData.get("name") as string) || "",
      phone: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || "",
      address: (formData.get("address") as string) || "",
      message: (formData.get("message") as string) || "",
    }

    // Minimalprüfung
    if (!payload.topic || !payload.requestType || !payload.name || !payload.phone || !payload.email) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 })
    }

    // Attachment (optional)
    const file = formData.get("file") as File | null
    const attachments: Attachment[] = []
    if (file && file.size > 0) {
      // einfache Größenbremse (z. B. 8 MB)
      const MAX = 8 * 1024 * 1024
      if (file.size > MAX) {
        return new Response(JSON.stringify({ ok: false, error: "File too large (>8MB)" }), { status: 400 })
      }
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type || "application/octet-stream",
      })
    }

    const to = process.env.CONTACT_TO || "info@meyen.de"
    const from = process.env.CONTACT_FROM || "Website Anfrage <no-reply@meyen.de>"

    const safeMessage = (payload.message || "").replace(/\n/g, "<br/>")

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Thema:</strong> ${payload.topic}</p>
      <p><strong>Art der Anfrage:</strong> ${payload.requestType}</p>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Telefon:</strong> ${payload.phone}</p>
      <p><strong>E-Mail:</strong> ${payload.email}</p>
      <p><strong>Adresse/PLZ:</strong> ${payload.address || "-"}</p>
      <p><strong>Nachricht:</strong><br/>${safeMessage}</p>
    `.trim()

    const text =
      `Neue Kontaktanfrage\n` +
      `Thema: ${payload.topic}\n` +
      `Art der Anfrage: ${payload.requestType}\n` +
      `Name: ${payload.name}\n` +
      `Telefon: ${payload.phone}\n` +
      `E-Mail: ${payload.email}\n` +
      `Adresse/PLZ: ${payload.address || "-"}\n` +
      `Nachricht:\n${payload.message || ""}\n`

    const transporter = getTransporter()
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `Kontakt (${payload.topic} · ${payload.requestType}) – ${payload.name}`,
      text,
      html,
      attachments,
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err: unknown) {
    console.error(err)
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 })
  }
}
