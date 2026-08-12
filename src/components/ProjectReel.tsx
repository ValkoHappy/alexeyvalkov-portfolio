"use client";

import { ArrowRight, Layers3 } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getProjectDetails, type Project } from "@/data/site";
import { getProjectDetailsEn } from "@/data/site.en";
import { PreviewFrame } from "./PreviewFrame";
import styles from "./ProjectReel.module.css";

export function ProjectReel({ projects, totalCount, locale = "ru" }: { projects: Project[]; totalCount: number; locale?: "ru" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / travel));
      const nextIndex = Math.round(nextProgress * Math.max(0, projects.length - 1));

      section.style.setProperty("--reel-progress", `${nextProgress * 100}%`);
      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
      setProgress((current) => {
        const rounded = Math.round(nextProgress * 100);
        return current === rounded ? current : rounded;
      });
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [projects.length]);

  const renderProject = (project: Project, index: number, mobile = false) => {
    const details = locale === "en" ? getProjectDetailsEn(project) : getProjectDetails(project);
    const prefix = locale === "en" ? "/en" : "";

    return (
      <article
        className={styles.panel}
        data-accent={project.accent}
        data-mobile={mobile || undefined}
        key={project.slug}
      >
        <div className={styles.panelInner}>
          <div className={styles.copy}>
            <span className={styles.index}>{locale === "en" ? "Project" : "Проект"} / 0{index + 1}</span>
            <p className={styles.type}>{project.type} · {details.status}</p>
            <h3>{project.title}</h3>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.stack}>
              {project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link className={styles.caseLink} href={`${prefix}/projects/${project.slug}`}>
              {locale === "en" ? "View case study" : "Открыть кейс"} <ArrowRight size={18} />
            </Link>
          </div>
          {details.image ? (
            <Link className={styles.visual} data-project={project.slug} href={`${prefix}/projects/${project.slug}`} aria-label={`${locale === "en" ? "View case study" : "Открыть кейс"} ${project.shortTitle}`}>
              <PreviewFrame project={project} locale={locale} />
              <span className={styles.visualNumber}>0{index + 1}</span>
            </Link>
          ) : null}
        </div>
      </article>
    );
  };

  const scrollToProject = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const travel = section.offsetHeight - window.innerHeight;
    const target = projects.length <= 1 ? 0 : index / (projects.length - 1);
    window.scrollTo({ top: section.offsetTop + travel * target, behavior: "smooth" });
  }, [projects.length]);

  return (
    <section className={styles.reel} id="projects" ref={sectionRef} aria-labelledby="projects-reel-title">
      <div className={styles.sticky}>
        <header className={styles.header}>
          <div>
            <span><Layers3 size={15} /> 04 / {locale === "en" ? "Selected work" : "Избранные работы"}</span>
            <h2 id="projects-reel-title">{locale === "en" ? "Projects" : "Проекты"}</h2>
          </div>
          <div className={styles.counter} aria-live="polite">
            <span>0{activeIndex + 1} / 0{projects.length}</span>
            <strong>{progress}%</strong>
          </div>
        </header>

        <div className={styles.stage} aria-live="polite">
          {renderProject(projects[activeIndex], activeIndex)}
        </div>

        <div className={styles.mobileList}>
          {projects.map((project, index) => renderProject(project, index, true))}
        </div>

        <footer className={styles.footer}>
          <nav aria-label={locale === "en" ? "Selected projects" : "Избранные проекты"}>
            {projects.map((project, index) => (
              <button
                aria-current={activeIndex === index ? "step" : undefined}
                aria-label={`${locale === "en" ? "Go to project" : "Перейти к проекту"} ${project.shortTitle}`}
                data-active={activeIndex === index || undefined}
                key={project.slug}
                onClick={() => scrollToProject(index)}
                type="button"
              >
                <span>0{index + 1}</span><i />
              </button>
            ))}
          </nav>
          <Link href={`${locale === "en" ? "/en" : ""}/projects`}>{locale === "en" ? `All ${totalCount} case studies` : `Все ${totalCount} кейсов`} <ArrowRight size={17} /></Link>
        </footer>
      </div>
    </section>
  );
}
