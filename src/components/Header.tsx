"use client";

import { ArrowUpRight, Github, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const homeSections = ["top", "expertise", "projects", "proof", "about"] as const;
type HomeSection = (typeof homeSections)[number];

export function Header() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const [activeSection, setActiveSection] = useState<HomeSection>(isProjects ? "projects" : "top");
  const [hasSurface, setHasSurface] = useState(isProjects);

  useEffect(() => {
    if (isProjects) {
      setActiveSection("projects");
      setHasSurface(true);
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const viewportOffset = window.innerHeight * 0.38;
      const thresholds = homeSections.map((id) => {
        if (id === "top") return { id, top: 0 };

        const section = document.getElementById(id);
        if (!section) return { id, top: Number.POSITIVE_INFINITY };

        const top = section.offsetTop - viewportOffset;

        return { id, top };
      });

      const scrollPosition = window.scrollY;
      const hero = document.getElementById("top");
      const surfaceThreshold = hero
        ? hero.offsetTop + hero.offsetHeight - 88
        : window.innerHeight - 88;
      const current = thresholds.reduce<HomeSection>(
        (active, section) => scrollPosition >= section.top ? section.id : active,
        "top"
      );

      setActiveSection((active) => active === current ? active : current);
      setHasSurface((currentValue) => {
        const nextValue = scrollPosition >= surfaceThreshold;
        return currentValue === nextValue ? currentValue : nextValue;
      });
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
    <header className={`site-header${hasSurface ? " is-scrolled" : ""}`}>
      <Link className="brand" href="/">
        <span>{profile.initials}</span>
        <small>fullstack developer</small>
      </Link>
      <nav className="main-nav" aria-label="Главная навигация">
        <Link className={!isProjects && activeSection === "top" ? "active" : undefined} href="/#top">Главная</Link>
        <Link className={!isProjects && activeSection === "expertise" ? "active" : undefined} href="/#expertise">Услуги</Link>
        <Link className={activeSection === "projects" ? "active" : undefined} href={isProjects ? "/projects" : "/#projects"}>Проекты</Link>
        <Link className={!isProjects && activeSection === "proof" ? "active" : undefined} href="/#proof">Отзывы</Link>
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
