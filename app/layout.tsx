import type { Metadata } from "next";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasalubong905 | Authentic Filipino Restaurant in Oshawa",
  description:
    "Pasalubong905 offers authentic Filipino cuisine in Oshawa, Ontario. Enjoy traditional dishes like adobo, sinigang, and lechon, made with rich flavors that feel like home. Dine in or order today.",
  keywords: [
    "filipino restaurant oshawa",
    "pasalubong905",
    "filipino food oshawa",
    "authentic filipino cuisine",
    "adobo oshawa",
    "sinigang oshawa",
    "lechon oshawa",
    "filipino takeout oshawa",
    "best filipino food durham region",
    "asian restaurant oshawa",
  ],
  openGraph: {
    title: "Pasalubong905 | Filipino Food in Oshawa",
    description:
      "Craving Filipino food? Pasalubong905 serves authentic, home-style Filipino dishes in Oshawa. Experience bold flavors and comforting meals made with love.",
    url: "https://pasalubong905.vercel.app/",
    siteName: "Pasalubong905",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth h-full`}>
      <body className="bg-(--primary-bg) min-h-full flex flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
