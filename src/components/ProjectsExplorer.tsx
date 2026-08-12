"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "@/data/site";

const filters: { value: "all" | ProjectCategory; ru: string; en: string }[] = [
  { value: "all", ru: "Все", en: "All" },
  { value: "games", ru: "Unity / Игры", en: "Unity / Games" },
  { value: "fullstack", ru: "Fullstack", en: "Fullstack" },
  { value: "automation", ru: "Автоматизация", en: "Automation" },
  { value: "react", ru: "React", en: "React" },
  { value: "websites", ru: "Сайты", en: "Websites" },
  { value: "bots", ru: "Telegram", en: "Telegram" },
  { value: "extensions", ru: "Расширения", en: "Extensions" }
];

export function ProjectsExplorer({ projects, locale = "ru" }: { projects: Project[]; locale?: "ru" | "en" }) {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");
  const visibleProjects = useMemo(
    () => active === "all" ? projects : projects.filter((project) => project.categories.includes(active)),
    [active, projects]
  );

  return (
    <>
      <div className="project-filters" aria-label={locale === "en" ? "Project filter" : "Фильтр проектов"}>
        {filters.map((filter) => (
          <button
            className={active === filter.value ? "active" : undefined}
            type="button"
            aria-pressed={active === filter.value}
            onClick={() => setActive(filter.value)}
            key={filter.value}
          >
            {filter[locale]}
          </button>
        ))}
      </div>
      <p className="filter-result" aria-live="polite">
        {locale === "en" ? "Showing" : "Показано"}: {visibleProjects.length} {locale === "en" ? "of" : "из"} {projects.length}
      </p>
      <div className="projects-grid all-projects">
        {visibleProjects.map((project) => (
          <ProjectCard project={project} locale={locale} key={project.slug} />
        ))}
      </div>
    </>
  );
}
