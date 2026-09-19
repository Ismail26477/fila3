import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "companyName", label: "Company Name", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "product", label: "Product / Service", type: "text", required: false },
] as const;

type Values = Record<string, string>;
type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [values, setValues] = useState<Values>({ product: defaultProduct });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!(values["fullName"] ?? "").trim()) next["fullName"] = "Please enter your full name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test((values["email"] ?? "").trim()))
      next["email"] = "Please enter a valid email address.";
    if ((values["message"] ?? "").trim().length < 10)
      next["message"] = "Please add a few details (10 characters or more).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values["fullName"] ?? "",
          companyName: values["companyName"] ?? "",
          email: values["email"] ?? "",
          phone: values["phone"] ?? "",
          product: values["product"] ?? "",
          message: values["message"] ?? "",
        }),
      });
      const data = (await res.json()) as { ok: boolean; message: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setFeedback(data.message);
      setValues({ product: defaultProduct });
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto size-10 text-brand-teal" aria-hidden="true" />
        <h3 className="mt-5 font-display text-xl font-bold text-ink">Enquiry sent</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">{feedback}</p>
        <Button variant="outline" className="mt-7" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={cn("relative", field.name === "product" && "sm:col-span-2")}
          >
            <label
              htmlFor={field.name}
              className="mb-2 block text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase"
            >
              {field.label}
              {field.required && <span aria-hidden="true"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => set(field.name, e.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className={cn(
                "w-full rounded-md border bg-background px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted-foreground/70 focus:border-brand-teal focus:outline-none",
                errors[field.name] ? "border-destructive" : "border-input",
              )}
            />
            {errors[field.name] && (
              <p id={`${field.name}-error`} className="mt-1.5 text-xs text-destructive">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase"
          >
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={values["message"] ?? ""}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors["message"])}
            aria-describedby={errors["message"] ? "message-error" : undefined}
            className={cn(
              "w-full resize-y rounded-md border bg-background px-4 py-3 text-sm text-ink transition-colors focus:border-brand-teal focus:outline-none",
              errors["message"] ? "border-destructive" : "border-input",
            )}
          />
          {errors["message"] && (
            <p id="message-error" className="mt-1.5 text-xs text-destructive">
              {errors["message"]}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-destructive">
          {feedback}
        </p>
      )}

      <Button type="submit" className="mt-7 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" /> Send Enquiry
          </>
        )}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Fields marked * are required. We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}
