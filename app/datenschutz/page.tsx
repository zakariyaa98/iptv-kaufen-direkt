import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/content/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf ${SITE.name} nach der DSGVO.`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" path="/datenschutz" updated={LEGAL.lastUpdated}>
      <p>
        Mit dieser Erklärung informieren wir Sie, welche personenbezogenen Daten wir beim Besuch unserer Website und
        bei der Kontaktaufnahme verarbeiten und welche Rechte Sie nach der Datenschutz-Grundverordnung (DSGVO) haben.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {LEGAL.ownerName}, {LEGAL.street}, {LEGAL.postalCity}, {LEGAL.country}
        <br />
        E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        <br />
        Weitere Angaben finden Sie im <Link href="/impressum">Impressum</Link>.
      </p>

      <h2>2. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
        werden technisch notwendige Daten verarbeitet, etwa IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
        Browsertyp und Betriebssystem. Das ist erforderlich, um die Website sicher und stabil auszuliefern.
      </p>
      <p>
        Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
        Für Übermittlungen in die USA stützt sich Vercel auf das EU-U.S. Data Privacy Framework bzw. auf
        Standardvertragsklauseln der EU-Kommission.
      </p>

      <h2>3. Reichweitenmessung mit Vercel Web Analytics</h2>
      <p>
        Wir nutzen Vercel Web Analytics, um die Nutzung unserer Website in zusammengefasster Form auszuwerten, etwa
        welche Seiten häufig aufgerufen werden. Dabei werden nach Angaben von Vercel keine Cookies gesetzt und keine
        Nutzerprofile über Websites hinweg erstellt. Rechtsgrundlage ist unser berechtigtes Interesse an der
        Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>4. Schriftarten</h2>
      <p>
        Die verwendete Schriftart wird beim Erstellen der Website auf unseren Server geladen und von dort
        ausgeliefert. Beim Besuch der Website wird keine Verbindung zu Servern von Google hergestellt.
      </p>

      <h2>5. Kontaktformular und E-Mail</h2>
      <p>
        Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir Ihren Namen, das ausgewählte Gerät und Ihre
        E-Mail-Adresse, um Ihre Anfrage zu beantworten. Für den Versand der Formularnachrichten nutzen wir den E-Mail-Dienst Resend
        (Resend, Inc., USA). Übermittlungen in die USA erfolgen auf Grundlage von Standardvertragsklauseln.
      </p>
      <p>
        Rechtsgrundlage ist die Durchführung vorvertraglicher Maßnahmen bzw. eines Vertrags (Art. 6 Abs. 1 lit. b
        DSGVO) sowie unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir
        löschen die Daten, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
        Aufbewahrungspflichten bestehen.
      </p>

      <h2>6. Kommunikation über WhatsApp</h2>
      <p>
        Wenn Sie uns über WhatsApp kontaktieren, verarbeitet WhatsApp Ireland Limited (Meta) Ihre Telefonnummer,
        Nachrichteninhalte und Metadaten. Die Nachrichten sind Ende-zu-Ende-verschlüsselt, Metadaten können jedoch auch
        in Drittländer wie die USA übermittelt werden. Bitte nutzen Sie alternativ E-Mail oder das Kontaktformular,
        wenn Sie das nicht möchten.
      </p>
      <p>
        Die Links auf WhatsApp sind normale Verweise. Erst wenn Sie darauf klicken, wird eine Verbindung zu WhatsApp
        hergestellt.
      </p>

      <h2>7. Kommunikation über Telegram</h2>
      <p>
        Wenn Sie uns über Telegram ({SITE.telegramHandle}) kontaktieren, verarbeitet der Messenger-Dienst Telegram
        (Telegram Messenger Inc. bzw. Telegram FZ-LLC, Dubai) Ihre Nachrichten, Ihren Benutzernamen und gegebenenfalls
        Ihre Telefonnummer. Standard-Chats bei Telegram sind nicht Ende-zu-Ende-verschlüsselt, und Daten können
        außerhalb der EU verarbeitet werden. Nutzen Sie alternativ E-Mail oder das Kontaktformular, wenn Sie das
        nicht möchten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
      </p>
      <p>Der Telegram-Link ist ein normaler Verweis. Erst wenn Sie darauf klicken, wird eine Verbindung hergestellt.</p>

      <h2>8. Fernwartung</h2>
      <p>
        Eine Fernwartung Ihres Geräts erfolgt nur nach Ihrer ausdrücklichen Zustimmung und nur für die Dauer der
        Sitzung. Wir greifen dabei nur auf die für die Einrichtung nötigen Funktionen zu und speichern keine Inhalte
        Ihres Geräts.
      </p>

      <h2>9. Ihre Rechte</h2>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
        <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>
        Für die Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich unser Angebot oder die Rechtslage ändert. Es gilt die
        jeweils hier veröffentlichte Fassung.
      </p>
    </LegalPage>
  );
}
