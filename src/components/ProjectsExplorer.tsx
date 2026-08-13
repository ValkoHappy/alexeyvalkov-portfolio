"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { getProjectDetails, type Project, type ProjectCategory } from "@/data/site";

const filters: { value: "all" | ProjectCategory; ru: string; en: string }[] = [
  { value: "all", ru: "Все", en: "All" },
  { value: "websites", ru: "Сайты", en: "Websites" },
  { value: "fullstack", ru: "Сервисы", en: "Services" },
  { value: "automation", ru: "Автоматизация", en: "Automation" },
  { value: "bots", ru: "Telegram", en: "Telegram" },
  { value: "extensions", ru: "Расширения", en: "Extensions" },
  { value: "games", ru: "Unity", en: "Unity" }
];

export function ProjectsExplorer({ projects, locale = "ru" }: { projects: Project[]; locale?: "ru" | "en" }) {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");
  const visibleProjects = useMemo(() => {
    const filtered = active === "all" ? projects : projects.filter((project) => project.categories.includes(active));

    return [...filtered].sort((a, b) => {
      const aHasImage = Boolean(getProjectDetails(a).image);
      const bHasImage = Boolean(getProjectDetails(b).image);
      return Number(bHasImage) - Number(aHasImage);
    });
  }, [active, projects]);

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
