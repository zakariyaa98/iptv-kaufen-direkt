import type { Metadata } from "next";
import { LegalPage } from "@/components/content/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${SITE.name} gemäß § 5 DDG.`,
  path: "/impressum",
});

// TODO(owner): all bracketed values come from LEGAL in lib/site.ts and must be filled in before launch.
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" path="/impressum" updated={LEGAL.lastUpdated}>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {LEGAL.ownerName}
        <br />
        {LEGAL.street}
        <br />
        {LEGAL.postalCity}
        <br />
        {LEGAL.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon / WhatsApp: {LEGAL.phone}
        <br />
        E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {LEGAL.vatId}</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>{LEGAL.responsibleForContent}</p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Wir erstellen die Inhalte dieser Website mit Sorgfalt, übernehmen aber keine Gewähr für Vollständigkeit
        und Aktualität. Insbesondere Angaben zu Apps, Geräten und Angeboten Dritter können sich jederzeit ändern.
        Für Inhalte externer Websites, auf die wir verlinken, sind ausschließlich deren Betreiber verantwortlich.
        Bei Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Links umgehend.
      </p>

      <h2>Markenhinweis</h2>
      <p>
        Genannte Produkt- und Firmennamen wie Amazon Fire TV, Samsung, LG, Google TV, MAG, waipu.tv, Zattoo oder
        MagentaTV sind Marken ihrer jeweiligen Inhaber. {SITE.name} ist mit diesen Unternehmen nicht verbunden.
      </p>
    </LegalPage>
  );
}
