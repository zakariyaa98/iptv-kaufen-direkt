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
    "Verständliche IPTV-Anleitungen auf Deutsch: M3U und Xtream Codes, EPG einrichten, Ruckler beheben, Internetgeschwindigkeit und seriöse Anbieter erkennen.",
  path: "/anleitungen",
});

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

          <section aria-labelledby="device-guides-heading" className="flex flex-col gap-6">
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
          </section>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
