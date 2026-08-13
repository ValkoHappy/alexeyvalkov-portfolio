import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Проекты",
  description: `${projects.length} кейсов Алексея Валькова: сайты, сервисы, автоматизация, Telegram-инструменты, расширения и Unity-игры.`,
  alternates: { canonical: "/projects", languages: { ru: "/projects", en: "/en/projects" } }
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <section className="inner-hero">
          <Link className="back-link" href="/">
            <ArrowLeft size={17} /> На главную
          </Link>
          <h1>Все проекты</h1>
          <p>
            Здесь коммерческие сайты, внутренние сервисы, автоматизация, Telegram-инструменты и Unity-игры.
            В каждом кейсе указаны моя роль, статус проекта и основные технологии.
          </p>
        </section>
        <section className="projects-explorer" aria-label="Каталог проектов">
          <ProjectsExplorer projects={projects} />
        </section>
      </div>
    </main>
  );
}
