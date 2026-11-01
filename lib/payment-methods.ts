import type { StaticImageData } from "next/image";
import visa from "@/public/images/payment/zahlungsmethode-visa.webp";
import mastercard from "@/public/images/payment/zahlungsmethode-mastercard.webp";
import paypal from "@/public/images/payment/zahlungsmethode-paypal.webp";
import applePay from "@/public/images/payment/zahlungsmethode-apple-pay.webp";
import googlePay from "@/public/images/payment/zahlungsmethode-google-pay.webp";
import amazonPay from "@/public/images/payment/zahlungsmethode-amazon-pay.webp";
import skrill from "@/public/images/payment/zahlungsmethode-skrill.webp";
import payoneer from "@/public/images/payment/zahlungsmethode-payoneer.webp";
import binance from "@/public/images/payment/zahlungsmethode-binance.webp";

/**
 * Payment logos shown in the footer. Each image is a uniform 256×160 white badge
 * (logo centred, original proportions kept), so they line up at any size.
 */
export const paymentMethods: { name: string; image: StaticImageData; alt: string }[] = [
  { name: "Visa", image: visa, alt: "Visa – Zahlung per Kreditkarte" },
  { name: "Mastercard", image: mastercard, alt: "Mastercard – Zahlung per Kreditkarte" },
  { name: "PayPal", image: paypal, alt: "PayPal – sichere Online-Zahlung" },
  { name: "Apple Pay", image: applePay, alt: "Apple Pay – mobil bezahlen mit iPhone" },
  { name: "Google Pay", image: googlePay, alt: "Google Pay – mobil bezahlen mit Android" },
  { name: "Amazon Pay", image: amazonPay, alt: "Amazon Pay – bezahlen mit Ihrem Amazon-Konto" },
  { name: "Skrill", image: skrill, alt: "Skrill – Zahlung per digitaler Geldbörse" },
  { name: "Payoneer", image: payoneer, alt: "Payoneer – Online-Zahlung" },
  { name: "Binance", image: binance, alt: "Binance – Zahlung mit Kryptowährung" },
];
