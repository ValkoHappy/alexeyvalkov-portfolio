"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "@/data/site";

const filters: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "fullstack", label: "Fullstack" },
  { value: "automation", label: "Автоматизация" },
  { value: "react", label: "React" },
  { value: "websites", label: "Сайты" },
  { value: "bots", label: "Telegram" },
  { value: "extensions", label: "Расширения" }
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");
  const visibleProjects = useMemo(
    () => active === "all" ? projects : projects.filter((project) => project.categories.includes(active)),
    [active, projects]
  );

  return (
    <>
      <div className="project-filters" aria-label="Фильтр проектов">
        {filters.map((filter) => (
          <button
            className={active === filter.value ? "active" : undefined}
            type="button"
            aria-pressed={active === filter.value}
            onClick={() => setActive(filter.value)}
            key={filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className="filter-result" aria-live="polite">
        Показано: {visibleProjects.length} из {projects.length}
      </p>
      <div className="projects-grid all-projects">
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
}
