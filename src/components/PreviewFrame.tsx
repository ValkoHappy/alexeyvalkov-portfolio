import Image from "next/image";
import type { Project } from "@/data/site";
import { getProjectDetails } from "@/data/site";

export function PreviewFrame({ project }: { project: Project }) {
  const details = getProjectDetails(project);

  if (details.image) {
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

  return (
    <div className={`preview-frame preview-${project.preview.kind} preview-${project.slug}`}>
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-body">
        {project.preview.kind === "site" && (
          <>
            <div className="preview-nav" />
            <div className="preview-hero">
              <strong>{project.shortTitle}</strong>
              <span>{project.preview.label}</span>
              <em>Подробнее</em>
            </div>
            <div className="preview-lines">
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {project.preview.kind === "tool" && (
          <>
            <div className="preview-sidebar" />
            <div className="preview-panel">
              <strong>{project.preview.label}</strong>
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {project.preview.kind === "bot" && (
          <>
            <div className="chat-bubble incoming">{project.preview.label}</div>
            <div className="chat-bubble outgoing">Telegram alert</div>
            <div className="chat-bubble incoming small">ready</div>
          </>
        )}
        {project.preview.kind === "extension" && (
          <>
            <div className="extension-score">SEO</div>
            <strong className="extension-title">{project.shortTitle}</strong>
            <div className="preview-lines wide">
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {project.preview.kind === "game" && (
          <div className="game-preview-mark">
            <span>UNITY / C#</span>
            <strong>{project.shortTitle}</strong>
            <i>PLAYABLE BUILD</i>
          </div>
        )}
      </div>
      <div className="preview-caption preview-caption-abstract">
        <strong>{project.shortTitle}</strong>
        <span>{project.preview.label}</span>
      </div>
    </div>
  );
}
