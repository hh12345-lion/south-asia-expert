import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "South Asia Expert Witness UK | Asylum Tribunal Reports",
    template: "%s | SouthAsiaExpert",
  },
  description:
    "UK South Asia expert witnesses for Bangladesh, India, Sri Lanka, Nepal and Bhutan. Country condition reports for asylum appeals and tribunals. Legal Aid compatible.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${karla.variable} ${bricolage.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
