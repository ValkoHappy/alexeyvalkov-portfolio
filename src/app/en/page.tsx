import type { Metadata } from "next";
import { EnglishHome } from "@/components/EnglishHome";

export const metadata: Metadata = {
  title: "Alexey Valkov — Fullstack / AI Product Engineer",
  description: "Alexey Valkov's portfolio: websites, internal tools, automation, AI integrations and Unity games.",
  alternates: { canonical: "/en", languages: { ru: "/", en: "/en" } }
};

export default function EnglishPage() { return <EnglishHome />; }
