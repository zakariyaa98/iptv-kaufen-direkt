import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { SITE } from "@/lib/site";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

type CtaBannerProps = {
  title?: string;
  description?: string;
  whatsappLink?: string;
};

export function CtaBanner({
  title = "Sie möchten IPTV einrichten, ohne selbst zu basteln?",
  description = "Schreiben Sie uns, welche Geräte Sie haben. Wir sagen Ihnen ehrlich, was möglich ist, und helfen Ihnen Schritt für Schritt bei der Einrichtung.",
  whatsappLink = WHATSAPP_DEFAULT_LINK,
}: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="hero-glow flex flex-col items-start gap-6 rounded-3xl border border-border-strong bg-surface p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">{title}</h2>
            <p className="text-base leading-relaxed text-secondary">{description}</p>
            <p className="text-sm text-muted">
              Lieber Telegram?{" "}
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-4 hover:text-accent-soft"
              >
                {SITE.telegramHandle}
              </a>
            </p>
          </div>
          {/* shrink-0 + nowrap: keep the buttons at their natural width instead of squeezing the labels onto two lines. */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Button href={whatsappLink} external variant="whatsapp" className="w-full whitespace-nowrap sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Per WhatsApp schreiben
            </Button>
            <Button href="/iptv-pakete" variant="secondary" className="w-full whitespace-nowrap sm:w-auto">
              Pakete ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
