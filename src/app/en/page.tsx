import type { Metadata } from "next";
import { EnglishHome } from "@/components/EnglishHome";

export const metadata: Metadata = {
  title: "Alexey Valkov — Fullstack / AI Product Engineer",
  description: "Portfolio of Alexey Valkov: web products, automation, AI tools, agent workflows and Unity games.",
  alternates: { canonical: "/en", languages: { ru: "/", en: "/en" } }
};

export default function EnglishPage() { return <EnglishHome />; }
