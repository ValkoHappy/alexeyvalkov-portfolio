"use client";

import { ArrowUpRight, Github, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SiInstagram, SiVk } from "react-icons/si";
import { profile } from "@/data/site";

const homeSections = ["top", "expertise", "projects", "proof", "about"] as const;
type HomeSection = (typeof homeSections)[number];

export function Header() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const [activeSection, setActiveSection] = useState<HomeSection>(isProjects ? "projects" : "top");
  const [hasSurface, setHasSurface] = useState(isProjects);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 1120) setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isMenuOpen]);

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
    <header className={`site-header${hasSurface ? " is-scrolled" : ""}${isMenuOpen ? " menu-open" : ""}`} ref={headerRef}>
      <Link className="brand" href="/" onClick={() => setIsMenuOpen(false)}>
        <span>{profile.initials}</span>
        <small>Fullstack / AI Product Engineer</small>
      </Link>
      <nav className="main-nav" id="main-navigation" aria-label="Главная навигация">
        <Link className={!isProjects && activeSection === "top" ? "active" : undefined} href="/#top" onClick={() => setIsMenuOpen(false)}>Главная</Link>
        <Link className={!isProjects && activeSection === "expertise" ? "active" : undefined} href="/#expertise" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
        <Link className={activeSection === "projects" ? "active" : undefined} href={isProjects ? "/projects" : "/#projects"} onClick={() => setIsMenuOpen(false)}>Проекты</Link>
        <Link className={!isProjects && activeSection === "proof" ? "active" : undefined} href="/#proof" onClick={() => setIsMenuOpen(false)}>Отзывы</Link>
        <Link className={!isProjects && activeSection === "about" ? "active" : undefined} href="/#about" onClick={() => setIsMenuOpen(false)}>Обо мне</Link>
        <div className="mobile-nav-actions">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
          <a href={profile.vk} target="_blank" rel="noreferrer"><SiVk size={20} /> VK</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer"><SiInstagram size={19} /> Instagram</a>
          <a href={profile.telegram} target="_blank" rel="noreferrer"><Send size={19} /> Обсудить задачу</a>
        </div>
      </nav>
      <div className="header-actions">
        <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github size={19} />
          <span>GitHub</span>
        </a>
        <a className="header-social" href={profile.vk} aria-label="VK" title="VK" target="_blank" rel="noreferrer">
          <SiVk size={20} />
        </a>
        <a className="header-social" href={profile.instagram} aria-label="Instagram" title="Instagram" target="_blank" rel="noreferrer">
          <SiInstagram size={18} />
        </a>
        <a href={profile.telegram} aria-label="Telegram" target="_blank" rel="noreferrer">
          <Send size={19} />
          <span>Обсудить задачу</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}
