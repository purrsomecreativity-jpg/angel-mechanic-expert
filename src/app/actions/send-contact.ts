"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type Locale = "es" | "en";

const TO_EMAIL = "info@angelmechanicexpert.com";
const FROM_EMAIL = "Angel Mechanic Expert <noreply@angelmechanicexpert.com>";
const BUSINESS_PHONE = "(407) 450-9997";
const BUSINESS_ADDRESS = "3311 W Washington St, Orlando, FL 32805";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildBusinessEmail(opts: {
  name: string;
  phone: string;
  email: string;
  service: string;
  vin: string;
  message: string;
}) {
  const { name, phone, email, service, vin, message } = opts;
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#0f0f0f;">Nueva solicitud desde el sitio AME</h2>
    <table style="font-family:Arial,sans-serif;color:#0f0f0f;border-collapse:collapse;">
      <tr><td style="padding:6px 12px 6px 0;"><strong>Nombre:</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;"><strong>Teléfono:</strong></td><td>${escapeHtml(phone) || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;"><strong>Servicio:</strong></td><td>${escapeHtml(service) || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;"><strong>VIN:</strong></td><td style="font-family:'Courier New',monospace;letter-spacing:0.5px;">${escapeHtml(vin) || "—"}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;color:#0f0f0f;margin-top:16px;"><strong>Mensaje:</strong></p>
    <pre style="font-family:Arial,sans-serif;color:#0f0f0f;white-space:pre-wrap;background:#f9f9f9;padding:12px;border-left:3px solid #e85102;">${escapeHtml(message)}</pre>
  `;
  const text = `Nueva solicitud desde el sitio AME

Nombre: ${name}
Teléfono: ${phone || "—"}
Email: ${email}
Servicio: ${service || "—"}
VIN: ${vin || "—"}

Mensaje:
${message}`;
  return { html, text };
}

function buildCustomerEmail(opts: {
  name: string;
  service: string;
  message: string;
  locale: Locale;
}) {
  const { name, service, message, locale } = opts;
  const isES = locale === "es";

  const subject = isES
    ? "Recibimos tu solicitud — Angel Mechanic Expert"
    : "We received your request — Angel Mechanic Expert";

  const greeting = isES ? `Hola ${name},` : `Hi ${name},`;

  const intro = isES
    ? "Gracias por contactar a Angel Mechanic Expert. Recibimos tu solicitud y un miembro de nuestro equipo te contactará pronto, generalmente dentro del horario laboral."
    : "Thanks for reaching out to Angel Mechanic Expert. We received your request and a member of our team will be in touch soon, typically during business hours.";

  const summaryLabel = isES ? "Resumen de tu solicitud:" : "Summary of your request:";
  const serviceLabel = isES ? "Servicio:" : "Service:";
  const messageLabel = isES ? "Mensaje:" : "Message:";

  const urgent = isES
    ? `Si tu situación es urgente, llámanos al <a href="tel:+14074509997" style="color:#e85102;text-decoration:none;font-weight:600;">${BUSINESS_PHONE}</a>.`
    : `If your situation is urgent, please call us at <a href="tel:+14074509997" style="color:#e85102;text-decoration:none;font-weight:600;">${BUSINESS_PHONE}</a>.`;

  const hours = isES
    ? "Horario: Lunes a Viernes 8:00 AM – 6:00 PM · Sábado 8:00 AM – 2:00 PM"
    : "Hours: Monday–Friday 8:00 AM – 6:00 PM · Saturday 8:00 AM – 2:00 PM";

  const closing = isES
    ? "Saludos,<br>Equipo Angel Mechanic Expert"
    : "Best regards,<br>The Angel Mechanic Expert team";

  const html = `<!doctype html>
<html lang="${locale}">
  <body style="margin:0;padding:0;background:#f9f9f9;font-family:Arial,Helvetica,sans-serif;color:#0f0f0f;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
            <tr>
              <td style="background:#0f0f0f;padding:24px 32px;">
                <div style="font-family:Arial,Helvetica,sans-serif;color:#e85102;font-size:20px;font-weight:700;letter-spacing:0.5px;">ANGEL MECHANIC EXPERT</div>
                <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;opacity:0.6;font-size:12px;margin-top:4px;">Orlando, FL · 36+ ${isES ? "años" : "years"}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:700;">${greeting}</h1>
                <p style="margin:0 0 20px 0;font-size:15px;line-height:1.6;color:#0f0f0f;">${intro}</p>

                <div style="background:#f9f9f9;border-left:3px solid #e85102;border-radius:4px;padding:16px 20px;margin:24px 0;">
                  <p style="margin:0 0 12px 0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#0f0f0f;">${summaryLabel}</p>
                  ${service ? `<p style="margin:0 0 8px 0;font-size:14px;color:#0f0f0f;"><strong>${serviceLabel}</strong> ${escapeHtml(service)}</p>` : ""}
                  <p style="margin:0;font-size:14px;color:#0f0f0f;"><strong>${messageLabel}</strong></p>
                  <p style="margin:6px 0 0 0;font-size:14px;color:#0f0f0f;white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>

                <p style="margin:0 0 12px 0;font-size:14px;line-height:1.6;color:#0f0f0f;">${urgent}</p>
                <p style="margin:0 0 24px 0;font-size:13px;color:#5a5a5a;">${hours}</p>

                <p style="margin:0;font-size:14px;line-height:1.6;color:#0f0f0f;">${closing}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#f9f9f9;padding:20px 32px;text-align:center;font-size:12px;color:#5a5a5a;">
                Angel Mechanic Expert LLC · ${BUSINESS_ADDRESS}<br>
                <a href="tel:+14074509997" style="color:#5a5a5a;text-decoration:none;">${BUSINESS_PHONE}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `${greeting}

${isES
  ? "Gracias por contactar a Angel Mechanic Expert. Recibimos tu solicitud y un miembro de nuestro equipo te contactará pronto, generalmente dentro del horario laboral."
  : "Thanks for reaching out to Angel Mechanic Expert. We received your request and a member of our team will be in touch soon, typically during business hours."}

${summaryLabel}
${service ? `${serviceLabel} ${service}\n` : ""}${messageLabel}
${message}

${isES
  ? `Si tu situación es urgente, llámanos al ${BUSINESS_PHONE}.`
  : `If your situation is urgent, please call us at ${BUSINESS_PHONE}.`}
${hours}

${isES ? "Saludos,\nEquipo Angel Mechanic Expert" : "Best regards,\nThe Angel Mechanic Expert team"}

---
Angel Mechanic Expert LLC
${BUSINESS_ADDRESS}
${BUSINESS_PHONE}`;

  return { subject, html, text };
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "error", message: "RESEND_API_KEY is not configured" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const vin = String(formData.get("vin") ?? "")
    .trim()
    .toUpperCase()
    .slice(0, 17);
  const message = String(formData.get("message") ?? "").trim();
  const localeRaw = String(formData.get("locale") ?? "es").trim();
  const locale: Locale = localeRaw === "en" ? "en" : "es";

  if (!name || !email || !message) {
    return { status: "error", message: "missing-fields" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "invalid-email" };
  }

  const resend = new Resend(apiKey);

  const businessEmail = buildBusinessEmail({ name, phone, email, service, vin, message });
  const customerEmail = buildCustomerEmail({ name, service, message, locale });

  const [businessResult, customerResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de ${name}${service ? ` — ${service}` : ""}`,
      html: businessEmail.html,
      text: businessEmail.text,
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: TO_EMAIL,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    }),
  ]);

  const businessFailed =
    businessResult.status === "rejected" || businessResult.value.error;

  if (businessFailed) {
    const errMsg =
      businessResult.status === "rejected"
        ? businessResult.reason?.message ?? "send-failed"
        : businessResult.value.error?.message ?? "send-failed";
    return { status: "error", message: errMsg };
  }

  if (
    customerResult.status === "rejected" ||
    customerResult.value.error
  ) {
    console.error(
      "Customer confirmation email failed:",
      customerResult.status === "rejected"
        ? customerResult.reason
        : customerResult.value.error
    );
  }

  return { status: "success" };
}
