"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/site";
import { getProjectDetails } from "@/data/site";
import { getProjectDetailsEn } from "@/data/site.en";

export function PreviewFrame({ project, locale = "ru", priority = false }: { project: Project; locale?: "ru" | "en"; priority?: boolean }) {
  const details = locale === "en" ? getProjectDetailsEn(project) : getProjectDetails(project);
  const [loaded, setLoaded] = useState(false);

  if (!details.image) return null;

  return (
    <div className={`preview-frame preview-real preview-${project.accent} preview-${project.slug}${loaded ? " is-loaded" : ""}`}>
      <Image
        className="preview-image"
        src={details.image}
        alt={details.imageAlt ?? `Интерфейс проекта ${project.shortTitle}`}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 700px"
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
      <span className="preview-status">{details.status}</span>
      <div className="preview-caption">
        <strong>{project.shortTitle}</strong>
        <span>{project.preview.label}</span>
      </div>
    </div>
  );
}
