import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  companyName: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().default(""),
  product: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
});

const sanitize = (value: string) => value.replace(/[<>]/g, "").slice(0, 2000);

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const raw = await request.json();
          const parsed = enquirySchema.safeParse(raw);

          if (!parsed.success) {
            return Response.json(
              {
                ok: false,
                message: "Please check the highlighted fields and try again.",
                errors: parsed.error.flatten().fieldErrors,
              },
              { status: 400 },
            );
          }

          const enquiry = {
            fullName: sanitize(parsed.data.fullName),
            companyName: sanitize(parsed.data.companyName),
            email: sanitize(parsed.data.email),
            phone: sanitize(parsed.data.phone),
            product: sanitize(parsed.data.product),
            message: sanitize(parsed.data.message),
            receivedAt: new Date().toISOString(),
          };

          // Email delivery is configuration-driven. Add EMAIL_USER / EMAIL_PASSWORD
          // (or ENQUIRY_WEBHOOK_URL) as secrets to forward enquiries onward.
          const webhook = process.env["ENQUIRY_WEBHOOK_URL"];
          if (webhook) {
            await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(enquiry),
            });
          } else {
            console.info("[enquiry] received", {
              email: enquiry.email,
              product: enquiry.product,
            });
          }

          return Response.json({
            ok: true,
            message: "Thank you — your enquiry has been received.",
          });
        } catch {
          return Response.json(
            { ok: false, message: "Something went wrong. Please email us directly." },
            { status: 500 },
          );
        }
      },
    },
  },
});
