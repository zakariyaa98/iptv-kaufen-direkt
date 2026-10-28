import type { Metadata } from "next";
import Link from "next/link";
import { PriceTable } from "@/components/plans/PriceTable";
import { PricingPlans } from "@/components/plans/PricingPlans";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DURATIONS, LOWEST_PRICE, PLAN_SCOPE_NOTE, deviceCategories, formatPrice } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "IPTV-Einrichtungshilfe & Support – Pakete und Preise",
  description: `Einrichtungshilfe, Support und Anleitungen für 1, 2 oder 3 Geräte, mit Laufzeiten von 1 Monat bis 2 Jahre, ab ${formatPrice(LOWEST_PRICE)}. Ohne Senderverkauf.`,
  path: "/iptv-pakete",
});

const included = [
  {
    title: "Was enthalten ist",
    items: [
      "Einrichtungshilfe für Apps und Geräte",
      "Support bei Störungen und Fehlermeldungen während der Laufzeit",
      "Schritt-für-Schritt-Anleitungen",
      "Kontakt per WhatsApp, Telegram und E-Mail",
    ],
  },
  {
    title: "Was nicht enthalten ist",
    items: [
      "TV-Sender, Senderpakete, Abonnements oder Zugangsdaten",
      "Einrichtung von Angeboten ohne gültige Senderlizenzen",
      "Eingriffe, die Garantie oder Nutzungsbedingungen Ihrer Geräte verletzen",
    ],
  },
];

const pricingFaq = [
  {
    question: "Was bedeutet die Laufzeit eines Pakets?",
    answer:
      "Während der gewählten Laufzeit helfen wir Ihnen bei der Einrichtung und bei technischen Problemen auf der gewählten Anzahl an Geräten. " +
      PLAN_SCOPE_NOTE,
  },
  {
    question: "Sind die Kosten für einen TV-Streaming-Dienst im Preis enthalten?",
    answer:
      "Nein. Ein Abonnement bei einem TV-Streaming-Anbieter schließen Sie direkt mit diesem ab. Unsere Preise gelten nur für Einrichtungshilfe, Support und Anleitungen.",
  },
  {
    question: "Wie bezahle ich?",
    answer:
      "Die Zahlungsmöglichkeiten nennen wir Ihnen vor Beginn der Leistung. Sie zahlen erst, nachdem wir Paket und Preis mit Ihnen abgestimmt haben.",
  },
  {
    question: "Wie läuft die Hilfe ab?",
    answer:
      "Meist per WhatsApp- oder Telegram-Chat oder Videoanruf: Sie bedienen das Gerät, wir sagen Ihnen jeden Schritt. Eine Fernwartung erfolgt nur mit Ihrer ausdrücklichen Zustimmung.",
  },
];

export default function PlansPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "IPTV-Einrichtungshilfe und Support",
          serviceType: "Technischer Support und Einrichtungshilfe für IPTV-Geräte und -Apps",
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: { "@type": "Country", name: "Deutschland" },
          availableLanguage: "de",
          url: absoluteUrl("/iptv-pakete"),
          offers: deviceCategories.flatMap((category) =>
            DURATIONS.map((duration) => ({
              "@type": "Offer",
              name: `${duration.label} – ${category.label}`,
              price: category.prices[duration.id],
              priceCurrency: "EUR",
              url: absoluteUrl("/iptv-pakete"),
            }))
          ),
        }}
      />
      <JsonLd data={faqJsonLd(pricingFaq)} />
      <Breadcrumbs items={[{ label: "Pakete", href: "/iptv-pakete" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Pakete & Preise"
            title="Einrichtungshilfe und Support zum festen Preis"
            description="Wählen Sie die Anzahl Ihrer Geräte und die Laufzeit. Alle Preise sind Gesamtpreise für die gesamte Laufzeit."
          />

          <PricingPlans />

          <section aria-labelledby="compare-heading" className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            <h2 id="compare-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Alle Preise im Vergleich
            </h2>
            <PriceTable />
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            {included.map((block) => (
              <section key={block.title} className="rounded-2xl border border-border bg-background-elevated p-6 sm:p-7">
                <h2 className="text-lg font-semibold text-foreground">{block.title}</h2>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-secondary marker:text-accent">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted">
            Es gelten unsere{" "}
            <Link href="/agb" className="text-accent underline underline-offset-4">AGB</Link> und die{" "}
            <Link href="/widerruf" className="text-accent underline underline-offset-4">Widerrufsbelehrung</Link>.
            Welche legalen Dienste es gibt, lesen Sie unter{" "}
            <Link href="/iptv-legal" className="text-accent underline underline-offset-4">IPTV legal in Deutschland</Link>.
          </p>

          <section aria-labelledby="pricing-faq-heading" className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            <h2 id="pricing-faq-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Fragen zu den Paketen
            </h2>
            <FaqList items={pricingFaq} />
          </section>
        </Container>
      </section>

      <CtaBanner title="Welches Paket passt zu Ihnen?" description="Beschreiben Sie kurz Ihre Geräte. Wir empfehlen Ihnen das passende Paket." />
    </>
  );
}
