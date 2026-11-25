import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, MobileActionBar, WhatsAppFab } from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { dentistSchema, websiteSchema } from "@/lib/schema";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["500", "700"],
  display: "swap",
  preload: false,
});

const description =
  "Dr. Gaur Dental Hospital, Behror — trusted dentist since 2014. Painless root canal, dental implants, braces & aligners, crowns, dentures, teeth cleaning and kids dentistry. Call +91 97993 53531.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dr. Gaur Dental Hospital | Best Dentist in Behror, Rajasthan",
    template: "%s | Dr. Gaur Dental Hospital",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "dentist in Behror",
    "dental hospital Behror",
    "best dentist Behror",
    "root canal treatment Behror",
    "dental implants Behror",
    "braces Behror",
    "dentist near Neemrana",
    "Dr Saurabh Gaur",
    "Dr Gaur Dental",
    "बहरोड़ दांतों का डॉक्टर",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Dr. Gaur Dental Hospital — Trusted Dentist in Behror since 2014",
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dr. Gaur Dental Hospital, Behror" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gaur Dental Hospital — Dentist in Behror",
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
  category: "health",
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Behror",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
  // Add your Google Search Console code here after verifying the site:
  // verification: { google: "xxxxxxxx" },
};

export const viewport: Viewport = {
  themeColor: "#3b0a4f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const navTreatments = treatments.map(({ slug, name, short, icon }) => ({ slug, name, short, icon }));
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${devanagari.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={[dentistSchema(), websiteSchema()]} />
        <Header treatments={navTreatments} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
