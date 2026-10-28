import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/content/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: `Allgemeine Geschäftsbedingungen für Beratungs-, Einrichtungs- und Supportleistungen von ${SITE.name}.`,
  path: "/agb",
});

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" path="/agb" updated={LEGAL.lastUpdated}>
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese AGB gelten für alle Verträge über Beratungs-, Einrichtungs- und Supportleistungen zwischen{" "}
        {LEGAL.ownerName} (nachfolgend „wir“) und unseren Kundinnen und Kunden (nachfolgend „Sie“).
        Abweichende Bedingungen gelten nur, wenn wir ihnen ausdrücklich zustimmen.
      </p>

      <h2>§ 2 Leistungen</h2>
      <p>
        Wir erbringen technische Dienstleistungen: Einrichtungshilfe für Apps und Geräte, Unterstützung bei
        technischen Problemen und Anleitungen. Die Pakete unterscheiden sich nach der Anzahl der Geräte (1, 2 oder
        3) und der Laufzeit (1 Monat bis 2 Jahre). Während der Laufzeit können Sie unseren Support für die gewählte
        Anzahl an Geräten nutzen. Der genaue Umfang ergibt sich aus der jeweiligen Paketbeschreibung.
      </p>
      <p>
        Wir verkaufen und vermitteln keine Senderpakete, Abonnements oder Zugangsdaten. Verträge mit
        TV-Streaming-Anbietern schließen Sie direkt mit dem jeweiligen Anbieter. Wir unterstützen ausschließlich die
        Einrichtung rechtmäßig angebotener Dienste und Inhalte.
      </p>
      <p>
        Wir schulden die fachgerechte Erbringung der vereinbarten Tätigkeit, nicht einen bestimmten Erfolg. Die
        Verfügbarkeit von Apps, Diensten und Inhalten Dritter liegt außerhalb unseres Einflusses.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        Die Darstellung der Pakete auf unserer Website ist kein verbindliches Angebot. Nach Ihrer Anfrage per
        WhatsApp, Telegram, E-Mail oder Kontaktformular bestätigen wir Ihnen Paket und Preis. Der Vertrag kommt zustande, wenn
        Sie dieses Angebot in Textform annehmen.
      </p>

      <h2>§ 4 Preise und Zahlung</h2>
      <p>
        Es gelten die bei Vertragsschluss auf der Seite <Link href="/iptv-pakete">Pakete</Link> angegebenen
        Preise. Sie sind Gesamtpreise für die gesamte Laufzeit. Die verfügbaren Zahlungsarten teilen wir Ihnen vor
        Vertragsschluss mit. Sofern nicht anders vereinbart, ist der Preis vor Beginn der Leistung fällig.
      </p>

      <h2>§ 5 Ihre Mitwirkung</h2>
      <ul>
        <li>Sie stellen sicher, dass Sie zur Nutzung der Geräte und gewünschten Dienste berechtigt sind.</li>
        <li>Sie sorgen für eine funktionierende Internetverbindung und halten Zugangsdaten bereit.</li>
        <li>Sie sichern vor der Einrichtung wichtige Daten und Einstellungen Ihrer Geräte.</li>
      </ul>

      <h2>§ 6 Fernwartung</h2>
      <p>
        Eine Fernwartung erfolgt nur mit Ihrer ausdrücklichen Zustimmung im Einzelfall. Sie können die Sitzung
        jederzeit beenden.
      </p>

      <h2>§ 7 Haftung</h2>
      <p>
        Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder
        Gesundheit sowie nach dem Produkthaftungsgesetz. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung
        einer wesentlichen Vertragspflicht und begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Im Übrigen
        ist die Haftung ausgeschlossen.
      </p>

      <h2>§ 8 Widerrufsrecht</h2>
      <p>
        Verbraucherinnen und Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Einzelheiten finden Sie in
        unserer <Link href="/widerruf">Widerrufsbelehrung</Link>.
      </p>

      <h2>§ 9 Datenschutz</h2>
      <p>
        Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer{" "}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>

      <h2>§ 10 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gegenüber
        Verbraucherinnen und Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht zwingende
        Verbraucherschutzvorschriften des Staates ihres gewöhnlichen Aufenthalts entzogen werden. Sollte eine
        Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
      </p>
    </LegalPage>
  );
}
