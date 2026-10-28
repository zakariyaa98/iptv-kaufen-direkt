import { SITE } from "./site";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo IPTV Kaufen Direkt Team, ich habe eine Frage zur IPTV-Einrichtung. Können Sie mir weiterhelfen?";

export const WHATSAPP_DEFAULT_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export function deviceWhatsAppLink(deviceName: string): string {
  return buildWhatsAppLink(
    `Hallo IPTV Kaufen Direkt Team,\nich brauche Hilfe bei der IPTV-Einrichtung auf meinem Gerät: ${deviceName}.`
  );
}
