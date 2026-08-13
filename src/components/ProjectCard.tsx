import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getProjectDetails, type Project } from "@/data/site";
import { getProjectDetailsEn } from "@/data/site.en";
import { PreviewFrame } from "./PreviewFrame";

export function ProjectCard({ project, featured = false, locale = "ru" }: { project: Project; featured?: boolean; locale?: "ru" | "en" }) {
  const details = locale === "en" ? getProjectDetailsEn(project) : getProjectDetails(project);
  const prefix = locale === "en" ? "/en" : "";

  return (
    <Link className={`project-card ${featured ? "project-card-featured" : ""}${details.image ? "" : " project-card-text"}`} href={`${prefix}/projects/${project.slug}`}>
      {details.image ? <PreviewFrame project={project} locale={locale} priority={featured} /> : null}
      <div className="project-card-body">
        <div className="project-meta">
          <span>{details.status}</span>
          <span>{details.period}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card-footer">
          <div className="stack-list">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="project-more">{locale === "en" ? "View case study" : "Разобрать кейс"} <ArrowRight size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
