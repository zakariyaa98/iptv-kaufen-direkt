import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Über uns",
  description:
    "Wer hinter IPTV Kaufen Direkt steht, wie wir arbeiten und warum wir ausschließlich bei legalen IPTV-Lösungen helfen.",
  path: "/ueber-uns",
});

const principles = [
  {
    title: "Ehrlich statt verkäuferisch",
    text: "Wir verdienen an unserer Hilfe, nicht an Abos. Deshalb können wir Ihnen auch sagen, wenn Sie etwas nicht brauchen.",
  },
  {
    title: "Nur legale Lösungen",
    text: "Wir helfen ausschließlich bei Diensten und Inhalten, die rechtmäßig angeboten werden.",
  },
  {
    title: "Verständlich erklärt",
    text: "Sie sollen nach der Einrichtung wissen, wie Ihr System funktioniert, und kleine Probleme selbst lösen können.",
  },
  {
    title: "Datensparsam",
    text: "Wir fragen nur nach Informationen, die wir für die Hilfe wirklich brauchen. Fernzugriff gibt es nur mit Ihrer Zustimmung.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Über uns", href: "/ueber-uns" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Über uns"
            title="Persönliche IPTV-Hilfe statt Abo-Verkauf"
            description="IPTV Kaufen Direkt hilft Menschen in Deutschland, Fernsehen über das Internet einfach und legal zu nutzen. Wir beraten, richten ein und sind da, wenn etwas nicht funktioniert."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle.title} className="rounded-2xl border border-border bg-background-elevated p-6">
                <h2 className="text-lg font-semibold text-foreground">{principle.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.text}</p>
              </li>
            ))}
          </ul>

          <p className="max-w-3xl text-base leading-relaxed text-secondary">
            Unsere Erfahrung stammt aus der praktischen Arbeit mit Streaming-Geräten und Linux-Receivern. Dieses
            Wissen teilen wir auch kostenlos in unseren{" "}
            <Link href="/anleitungen" className="text-accent underline underline-offset-4">
              Anleitungen
            </Link>
            . Die Angaben zum Anbieter finden Sie im{" "}
            <Link href="/impressum" className="text-accent underline underline-offset-4">
              Impressum
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
