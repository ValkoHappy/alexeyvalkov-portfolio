import type { Metadata, Viewport } from "next";
import { MapWorld } from "@/components/MapWorld";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Алексей Вальков — Fullstack / AI Product Engineer",
    template: "%s — Алексей Вальков"
  },
  description:
    "Портфолио Алексея Валькова: веб-приложения, автоматизация, AI-инструменты, агенты и Unity-игры.",
  keywords: ["fullstack разработчик", "Next.js", "Astro", "автоматизация", "AI агенты", "MCP", "Unity", "портфолио"],
  authors: [{ name: "Алексей Вальков", url: "https://github.com/ValkoHappy" }],
  creator: "Алексей Вальков",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Алексей Вальков — портфолио",
    title: "Алексей Вальков — Fullstack / AI Product Engineer",
    description: "Веб-приложения, внутренние сервисы, автоматизация, AI-инструменты и Unity-игры.",
    images: [{ url: "/og.png", width: 1693, height: 929, alt: "Портфолио Алексея Валькова" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Алексей Вальков — Fullstack / AI Product Engineer",
    description: "Веб-приложения, автоматизация, AI-инструменты и Unity.",
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Алексей Вальков",
    jobTitle: "Fullstack / AI Product Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/ValkoHappy",
      "https://t.me/leshaqt",
      "https://vk.ru/alexvalkoov",
      "https://www.instagram.com/leshaqt/",
      "https://kwork.ru/user/leshaqt"
    ],
    address: { "@type": "PostalAddress", addressLocality: "Архангельск", addressCountry: "RU" }
  };

  return (
    <html lang="ru">
      <body>
        <MapWorld />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
