import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Проекты",
  description: "15 кейсов Алексея Валькова: fullstack-системы, автоматизация, React-интерфейсы, Telegram-боты, расширения и коммерческие сайты."
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
            Здесь и production-системы, и рабочие внутренние инструменты, и прототипы.
            Для каждого проекта честно указан статус, роль и технический контекст.
          </p>
        </section>
        <section className="projects-explorer" aria-label="Каталог проектов">
          <ProjectsExplorer projects={projects} />
        </section>
      </div>
    </main>
  );
}
