import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqList, faqJsonLd } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allFaqItems, faqCategories } from "@/lib/faq-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Häufige Fragen zu IPTV und unserem Service",
  description:
    "Antworten auf häufige Fragen: Was ist IPTV, ist IPTV legal, welche Geräte werden unterstützt und wie läuft unsere Einrichtung per WhatsApp ab?",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(allFaqItems)} />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Häufige Fragen"
            description="Die Fragen, die uns am häufigsten erreichen. Ihre ist nicht dabei? Schreiben Sie uns einfach."
          />
          <div className="flex w-full max-w-3xl flex-col gap-12">
            {faqCategories.map((category) => (
              <section key={category.category} className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                <FaqList items={category.items} />
              </section>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
