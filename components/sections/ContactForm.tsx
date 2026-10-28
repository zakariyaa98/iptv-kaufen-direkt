"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  CONTACT_DEVICE_OPTIONS,
  EMAIL_MAX_LENGTH,
  EMAIL_REGEX,
  NAME_MAX_LENGTH,
  isContactDevice,
} from "@/lib/contact-options";

type Status = "idle" | "loading" | "success" | "error";
type Field = "name" | "device" | "email";
type FieldErrors = Partial<Record<Field, string>>;

const initialValues: Record<Field, string> = { name: "", device: "", email: "" };

const inputClasses =
  "min-h-12 w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 sm:text-sm";

function validate(values: Record<Field, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!isContactDevice(values.device)) errors.device = "Bitte wählen Sie Ihr Gerät aus.";
  if (!values.email.trim()) errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  else if (!EMAIL_REGEX.test(values.email.trim())) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validate(values);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          device: values.device,
          email: values.email.trim(),
        }),
      });

      const data: { success?: boolean; error?: string } | null = await response.json().catch(() => null);

      // Only report success when the backend confirms delivery.
      if (!response.ok || data?.success !== true) {
        throw new Error(data?.error || "Die Nachricht konnte nicht gesendet werden.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden."
      );
    }
  }

  const describedBy = (field: Field) => (fieldErrors[field] ? `${field}-error` : undefined);
  const borderFor = (field: Field) => (fieldErrors[field] ? "border-red-400" : "border-border");

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:p-8"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-foreground">Anfrage per Formular</h2>
        <p className="text-sm text-muted">Wir melden uns per E-Mail bei Ihnen. Alle Felder sind Pflichtfelder.</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={NAME_MAX_LENGTH}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={describedBy("name")}
          className={`${inputClasses} ${borderFor("name")}`}
          placeholder="Ihr Name"
        />
        {fieldErrors.name ? (
          <p id="name-error" className="text-sm text-red-400">{fieldErrors.name}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="device" className="text-sm font-medium text-foreground">
          Gerät
        </label>
        <select
          id="device"
          name="device"
          required
          value={values.device}
          onChange={(event) => update("device", event.target.value)}
          aria-invalid={Boolean(fieldErrors.device)}
          aria-describedby={describedBy("device")}
          className={`${inputClasses} ${borderFor("device")} ${values.device ? "" : "text-muted"}`}
        >
          <option value="" disabled>
            Bitte auswählen
          </option>
          {CONTACT_DEVICE_OPTIONS.map((option) => (
            <option key={option} value={option} className="text-foreground">
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.device ? (
          <p id="device-error" className="text-sm text-red-400">{fieldErrors.device}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={EMAIL_MAX_LENGTH}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={describedBy("email")}
          className={`${inputClasses} ${borderFor("email")}`}
          placeholder="name@beispiel.de"
        />
        {fieldErrors.email ? (
          <p id="email-error" className="text-sm text-red-400">{fieldErrors.email}</p>
        ) : null}
      </div>

      <div aria-live="polite">
        {status === "success" ? (
          <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns per E-Mail bei Ihnen.
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {errorMessage} Sie erreichen uns auch per WhatsApp oder Telegram.
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-all duration-200 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet …" : "Anfrage senden"}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Wir verwenden Ihre Angaben nur zur Bearbeitung Ihrer Anfrage. Mehr dazu in unserer{" "}
        <Link href="/datenschutz" className="text-accent underline underline-offset-4">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}
