/**
 * Device choices for the contact form. Shared by the form (client) and the API
 * route (server) so both validate against the same list. Kept separate from
 * lib/devices.ts so the long guide content is not shipped to the browser.
 */
export const CONTACT_DEVICE_OPTIONS = [
  "Amazon Fire TV Stick",
  "Smart TV (Samsung / LG)",
  "Android-TV- / Google-TV-Box",
  "MAG-Box",
  "Enigma2-Receiver",
  "Anderes Gerät",
] as const;

export type ContactDevice = (typeof CONTACT_DEVICE_OPTIONS)[number];

export function isContactDevice(value: string): value is ContactDevice {
  return (CONTACT_DEVICE_OPTIONS as readonly string[]).includes(value);
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;
