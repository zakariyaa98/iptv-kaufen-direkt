import type { Metadata } from "next";
import { ArticleCard } from "@/components/content/ArticleCard";
import { DeviceIcon } from "@/components/devices/DeviceIcon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { devices } from "@/lib/devices";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IPTV-Anleitungen: Einrichtung, EPG, M3U & Fehlerhilfe",
  description:
    "IPTV-Anleitungen auf Deutsch: Einrichtung auf Fire TV Stick, Smart TV, Android TV, MAG-Box und Enigma2-Receiver sowie M3U, Xtream Codes, EPG und Fehlerhilfe.",
  path: "/anleitungen",
});

/** Moved here from the former /geraete overview page. */
const deviceComparison = [
  ["Fire TV Stick", "Günstig, einfache Bedienung", "Begrenzter Speicher"],
  ["Smart TV", "Kein Zusatzgerät nötig", "Kleinere App-Auswahl, Updates enden früher"],
  ["Android-TV-Box", "Größte App-Auswahl", "Billig-Boxen oft unsicher"],
  ["MAG-Box", "Reiner IPTV-Empfänger, stabil", "Kaum andere Apps"],
  ["Enigma2-Receiver", "IPTV neben Sat und Kabel", "Einrichtung anspruchsvoller"],
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Anleitungen", href: "/anleitungen" }]} />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Anleitungen & Ratgeber"
            title="IPTV verstehen und selbst einrichten"
            description="Schritt-für-Schritt-Anleitungen und Hintergrundwissen, ohne Fachchinesisch. Wenn Sie nicht weiterkommen, helfen wir persönlich."
          />

          <section aria-labelledby="general-heading" className="flex flex-col gap-6">
            <h2 id="general-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Grundlagen, Ratgeber und Fehlerhilfe
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <ArticleCard
                  key={guide.slug}
                  href={`/anleitungen/${guide.slug}`}
                  title={guide.title}
                  excerpt={guide.excerpt}
                  label={guide.category}
                  meta={`${guide.readingTimeMinutes} Min.`}
                />
              ))}
            </div>
          </section>

          {/* id="geraete": target of the former /geraete page (301) and of all "Anleitungen nach Gerät" links. scroll-mt clears the sticky header. */}
          <section id="geraete" aria-labelledby="device-guides-heading" className="flex scroll-mt-24 flex-col gap-6">
            <h2 id="device-guides-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Anleitungen nach Gerät
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {devices.map((device) => (
                <ArticleCard
                  key={device.slug}
                  href={`/geraete/${device.slug}`}
                  title={device.title}
                  excerpt={device.excerpt}
                  icon={<DeviceIcon icon={device.icon} className="h-6 w-6" />}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-5">
              <h3 id="compare-heading" className="text-xl font-semibold tracking-tight text-foreground">
                Die Geräte im Vergleich
              </h3>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table aria-labelledby="compare-heading" className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-surface">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Gerät</th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Stärke</th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Zu beachten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviceComparison.map(([device, pro, con]) => (
                      <tr key={device} className="odd:bg-background even:bg-background-elevated">
                        <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">{device}</th>
                        <td className="border-b border-border px-4 py-3 text-secondary">{pro}</td>
                        <td className="border-b border-border px-4 py-3 text-secondary">{con}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
