import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Алексей Вальков — Fullstack-разработчик и автоматизация",
    template: "%s — Алексей Вальков"
  },
  description:
    "Портфолио Алексея Валькова: fullstack-системы, React-интерфейсы, парсеры, Telegram-боты, расширения и автоматизация бизнес-процессов.",
  keywords: ["fullstack разработчик", "React", "Next.js", "автоматизация", "парсеры", "Telegram боты", "портфолио"],
  authors: [{ name: "Алексей Вальков", url: "https://github.com/ValkoHappy" }],
  creator: "Алексей Вальков",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Алексей Вальков — портфолио",
    title: "Алексей Вальков — Fullstack-разработчик и автоматизация",
    description: "Прикладные веб-системы: интерфейс, API, данные, парсинг и интеграции — от идеи до рабочего сценария.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Портфолио Алексея Валькова" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Алексей Вальков — Fullstack-разработчик",
    description: "Веб-инструменты и автоматизация под реальные задачи.",
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
    jobTitle: "Fullstack-разработчик веб-инструментов и автоматизации",
    url: siteUrl,
    sameAs: ["https://github.com/ValkoHappy", "https://t.me/leshaqt", "https://kwork.ru/user/leshaqt"],
    address: { "@type": "PostalAddress", addressLocality: "Архангельск", addressCountry: "RU" }
  };

  return (
    <html lang="ru">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
