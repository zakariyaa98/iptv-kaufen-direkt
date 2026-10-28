import type { Metadata } from "next";
import { ArticleCard } from "@/components/content/ArticleCard";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { devices } from "@/lib/devices";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IPTV-Geräte: Fire TV, Smart TV, Android TV, MAG & Enigma2",
  description:
    "Welche Geräte eignen sich für IPTV? Überblick und Einrichtungsanleitungen für Fire TV Stick, Samsung- und LG-Smart-TVs, Android-TV-Boxen, MAG-Boxen und Enigma2-Receiver.",
  path: "/geraete",
});

const comparison = [
  ["Fire TV Stick", "Günstig, einfache Bedienung", "Begrenzter Speicher"],
  ["Smart TV", "Kein Zusatzgerät nötig", "Kleinere App-Auswahl, Updates enden früher"],
  ["Android-TV-Box", "Größte App-Auswahl", "Billig-Boxen oft unsicher"],
  ["MAG-Box", "Reiner IPTV-Empfänger, stabil", "Kaum andere Apps"],
  ["Enigma2-Receiver", "IPTV neben Sat und Kabel", "Einrichtung anspruchsvoller"],
];

export default function DevicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Geräte", href: "/geraete" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Kompatible Geräte"
            title="Auf welchen Geräten funktioniert IPTV?"
            description="IPTV läuft auf fast jedem Gerät mit Internetzugang. Hier finden Sie für jedes gängige Gerät eine eigene Anleitung mit Tipps und typischen Fehlern."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <ArticleCard
                key={device.slug}
                href={`/geraete/${device.slug}`}
                title={device.title}
                excerpt={device.excerpt}
                icon={<DeviceIcon icon={device.icon} className="h-6 w-6" />}
                meta={`${device.readingTimeMinutes} Min.`}
              />
            ))}
          </div>

          <section aria-labelledby="compare-heading" className="flex flex-col gap-5">
            <h2 id="compare-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Die Geräte im Vergleich
            </h2>
            <div className="w-full overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-surface">
                    <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Gerät</th>
                    <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Stärke</th>
                    <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Zu beachten</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([device, pro, con]) => (
                    <tr key={device} className="odd:bg-background even:bg-background-elevated">
                      <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">{device}</th>
                      <td className="border-b border-border px-4 py-3 text-secondary">{pro}</td>
                      <td className="border-b border-border px-4 py-3 text-secondary">{con}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Container>
      </section>

      <CtaBanner title="Unsicher, welches Gerät passt?" description="Schreiben Sie uns, was Sie bereits haben und was Sie schauen möchten. Wir empfehlen Ihnen die einfachste Lösung." />
    </>
  );
}
