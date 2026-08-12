import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getProjectDetails, type Project } from "@/data/site";
import { PreviewFrame } from "./PreviewFrame";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const details = getProjectDetails(project);

  return (
    <Link className={`project-card ${featured ? "project-card-featured" : ""}${details.image ? "" : " project-card-text"}`} href={`/projects/${project.slug}`}>
      {details.image ? <PreviewFrame project={project} /> : null}
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
          <span className="project-more">Разобрать кейс <ArrowRight size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
