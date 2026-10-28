import type { Metadata } from "next";
import { TelegramIcon } from "@/components/layout/TelegramIcon";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt – IPTV-Hilfe per WhatsApp, Telegram oder E-Mail",
  description:
    "Fragen zur IPTV-Einrichtung? Schreiben Sie uns per WhatsApp, Telegram, E-Mail oder über das Kontaktformular. Wir antworten persönlich und auf Deutsch.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Kontakt"
            title="Wie können wir helfen?"
            description="Schreiben Sie uns per WhatsApp oder Telegram, oder nennen Sie uns im Formular Ihr Gerät. Dann können wir direkt und konkret antworten."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h2 className="text-base font-semibold text-foreground">WhatsApp</h2>
                <p className="text-sm leading-relaxed text-muted">
                  Der schnellste Weg, auch für Fotos von Fehlermeldungen oder Sprachnachrichten.
                </p>
                <Button href={WHATSAPP_DEFAULT_LINK} external variant="whatsapp" className="w-full sm:w-fit">
                  <WhatsAppIcon className="h-5 w-5" />
                  {SITE.whatsappDisplay}
                </Button>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h2 className="text-base font-semibold text-foreground">Telegram</h2>
                <p className="text-sm leading-relaxed text-muted">Schreiben Sie uns direkt im Telegram-Chat.</p>
                <Button href={SITE.telegramUrl} external variant="secondary" className="w-full sm:w-fit">
                  <TelegramIcon className="h-5 w-5 text-[#2aabee]" />
                  {SITE.telegramHandle}
                </Button>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h2 className="text-base font-semibold text-foreground">E-Mail</h2>
                <p className="text-sm leading-relaxed text-muted">Für ausführliche Anfragen.</p>
                <a href={`mailto:${SITE.email}`} className="break-all text-sm font-semibold text-accent hover:text-accent-soft">
                  {SITE.email}
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
