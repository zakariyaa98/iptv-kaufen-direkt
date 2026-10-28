import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold text-accent">Fehler 404</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Diese Seite gibt es nicht</h1>
        <p className="max-w-md text-base leading-relaxed text-muted">
          Vielleicht hat sich die Adresse geändert. Auf der Startseite oder in den Anleitungen finden Sie, was Sie
          suchen.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">Zur Startseite</Button>
          <Button href="/anleitungen" variant="secondary">
            Zu den Anleitungen
          </Button>
        </div>
      </Container>
    </section>
  );
}
