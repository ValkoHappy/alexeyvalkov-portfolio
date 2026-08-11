"use client";

import { ArrowUpRight, Github, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const homeSections = ["top", "journey", "projects", "expertise", "about"] as const;
type HomeSection = (typeof homeSections)[number];

export function Header() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const [activeSection, setActiveSection] = useState<HomeSection>(isProjects ? "projects" : "top");

  useEffect(() => {
    if (isProjects) {
      setActiveSection("projects");
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const viewportOffset = window.innerHeight * 0.38;
      const journey = document.getElementById("journey");
      const thresholds = homeSections.map((id) => {
        if (id === "top") return { id, top: 0 };

        const section = document.getElementById(id);
        if (!section) return { id, top: Number.POSITIVE_INFINITY };

        const top = id === "journey"
          ? Math.max(window.innerHeight * 0.8, (journey?.offsetTop ?? 0) + window.innerHeight * 0.8)
          : section.offsetTop - viewportOffset;

        return { id, top };
      });

      const scrollPosition = window.scrollY;
      const current = thresholds.reduce<HomeSection>(
        (active, section) => scrollPosition >= section.top ? section.id : active,
        "top"
      );

      setActiveSection((active) => active === current ? active : current);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isProjects]);

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span>{profile.initials}</span>
        <small>developer journey</small>
      </Link>
      <nav className="main-nav" aria-label="Главная навигация">
        <Link className={!isProjects && activeSection === "top" ? "active" : undefined} href="/#top">Главная</Link>
        <Link className={!isProjects && activeSection === "journey" ? "active" : undefined} href="/#journey">Путь</Link>
        <Link className={activeSection === "projects" ? "active" : undefined} href={isProjects ? "/projects" : "/#projects"}>Кейсы</Link>
        <Link className={!isProjects && activeSection === "expertise" ? "active" : undefined} href="/#expertise">Экспертиза</Link>
        <Link className={!isProjects && activeSection === "about" ? "active" : undefined} href="/#about">Обо мне</Link>
      </nav>
      <div className="header-actions">
        <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github size={19} />
          <span>GitHub</span>
        </a>
        <a href={profile.telegram} aria-label="Telegram" target="_blank" rel="noreferrer">
          <Send size={19} />
          <span>Обсудить задачу</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
