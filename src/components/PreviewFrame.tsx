import Image from "next/image";
import type { Project } from "@/data/site";
import { getProjectDetails } from "@/data/site";
import { getProjectDetailsEn } from "@/data/site.en";

export function PreviewFrame({ project, locale = "ru" }: { project: Project; locale?: "ru" | "en" }) {
  const details = locale === "en" ? getProjectDetailsEn(project) : getProjectDetails(project);

  if (!details.image) return null;

  return (
    <div className={`preview-frame preview-real preview-${project.accent} preview-${project.slug}`}>
      <Image
        src={details.image}
        alt={details.imageAlt ?? `Интерфейс проекта ${project.shortTitle}`}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 700px"
      />
      <span className="preview-status">{details.status}</span>
      <div className="preview-caption">
        <strong>{project.shortTitle}</strong>
        <span>{project.preview.label}</span>
      </div>
    </div>
  );
}
