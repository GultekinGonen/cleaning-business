import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Metadata used by search engines and social media previews.
export const metadata = {
  // The title appears in browser tabs and can appear in Google results.
  title: "T.A. Cleaning | Nettoyage professionnel",

  // A concise description of the services offered by the business.
  description:
    "T.A. Cleaning propose des services de nettoyage de tapis et moquettes, de bureaux, de vitres et de nettoyage en profondeur. Demandez votre devis gratuit.",

  // The business name associated with the website.
  applicationName: "T.A. Cleaning",

  // Metadata for link previews on platforms that support Open Graph.
  openGraph: {
    title: "T.A. Cleaning | Nettoyage professionnel",
    description:
      "Des services de nettoyage professionnels adaptés à vos besoins. Contactez T.A. Cleaning pour un devis gratuit.",
    locale: "fr_BE",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
