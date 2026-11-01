import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/logo/BrandLogo";
import { paymentMethods } from "@/lib/payment-methods";
import { legalNav } from "@/lib/navigation";
import { devices } from "@/lib/devices";
import { SITE } from "@/lib/site";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

const columns = [
  {
    title: "Service",
    links: [
      { href: "/iptv-pakete", label: "Pakete & Preise" },
      { href: "/angebote", label: "Angebote vergleichen" },
      { href: "/anleitungen", label: "Anleitungen" },
      { href: "/iptv-legal", label: "IPTV legal in Deutschland" },
      { href: "/ueber-uns", label: "Über uns" },
    ],
  },
  {
    title: "Geräte",
    links: devices.map((device) => ({ href: `/geraete/${device.slug}`, label: device.shortName })),
  },
  {
    title: "Hilfe",
    links: [
      { href: "/faq", label: "Häufige Fragen" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  { title: "Rechtliches", links: legalNav },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <BrandLogo variant="footer" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Einrichtungshilfe, Support und Anleitungen für IPTV auf Ihren Geräten. Wir verkaufen keine
            TV-Senderpakete.
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-accent-soft"
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-accent-soft"
              >
                Telegram: {SITE.telegramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="break-all text-muted hover:text-accent">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">{column.title}</h2>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 pt-8 sm:px-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-8">
          <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            Zahlungsmethoden
          </h2>
          <ul className="flex w-full flex-wrap justify-center gap-2 sm:w-auto lg:justify-end">
            {paymentMethods.map((method) => (
              // Mobile: five per row (5 + 4, centred). From sm up: fixed-size badges in one row.
              <li key={method.name} className="basis-[calc((100%-2rem)/5)] sm:basis-auto">
                <Image
                  src={method.image}
                  alt={method.alt}
                  title={method.name}
                  loading="lazy"
                  sizes="(min-width: 1280px) 77px, 64px"
                  className="aspect-[8/5] h-auto w-full rounded-md object-contain shadow-sm shadow-black/30 ring-1 ring-white/10 sm:h-9 sm:w-[3.6rem] md:h-10 md:w-16 xl:h-12 xl:w-[4.8rem]"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 pb-24 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:pb-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Einrichtungshilfe und Support – keine TV-Sender oder Zugangsdaten.</p>
        </div>
      </div>
    </footer>
  );
}
