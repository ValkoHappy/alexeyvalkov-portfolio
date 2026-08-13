"use client";

import { ArrowUpRight, Github, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { SiInstagram, SiVk } from "react-icons/si";
import { profile } from "@/data/site";
import { getLocalePath, preferenceKey } from "./LocaleRedirect";

const homeSections = ["top", "expertise", "projects", "proof", "about"] as const;
type HomeSection = (typeof homeSections)[number];

export function Header({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const pathname = usePathname();
  const router = useRouter();
  const localeRoot = locale === "en" ? "/en" : "";
  const isProjects = pathname.startsWith(`${localeRoot}/projects`);
  const languageHref = locale === "en" ? (pathname.replace(/^\/en/, "") || "/") : `/en${pathname === "/" ? "" : pathname}`;
  const [activeSection, setActiveSection] = useState<HomeSection>(isProjects ? "projects" : "top");
  const [hasSurface, setHasSurface] = useState(isProjects);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const switchLanguage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const nextLocale = locale === "en" ? "ru" : "en";
    const nextPath = getLocalePath(pathname, nextLocale);
    window.localStorage.setItem(preferenceKey, nextLocale);
    document.documentElement.lang = nextLocale;
    setIsMenuOpen(false);

    const navigate = () => router.push(nextPath);
    const viewTransitionDocument = document as Document & { startViewTransition?: (callback: () => void) => void };
    if (viewTransitionDocument.startViewTransition) {
      viewTransitionDocument.startViewTransition(navigate);
    } else {
      navigate();
    }
  };

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
      <Link className="brand" href={localeRoot || "/"} onClick={() => setIsMenuOpen(false)}>
        <span>{profile.initials}</span>
        <small>Fullstack / AI Product Engineer</small>
      </Link>
      <nav className="main-nav" id="main-navigation" aria-label={locale === "en" ? "Main navigation" : "Главная навигация"}>
        <Link className={!isProjects && activeSection === "top" ? "active" : undefined} href={`${localeRoot}/#top`} onClick={() => setIsMenuOpen(false)}>{locale === "en" ? "Home" : "Главная"}</Link>
        <Link className={!isProjects && activeSection === "expertise" ? "active" : undefined} href={`${localeRoot}/#expertise`} onClick={() => setIsMenuOpen(false)}>{locale === "en" ? "Services" : "Услуги"}</Link>
        <Link className={activeSection === "projects" ? "active" : undefined} href={isProjects ? `${localeRoot}/projects` : `${localeRoot}/#projects`} onClick={() => setIsMenuOpen(false)}>{locale === "en" ? "Projects" : "Проекты"}</Link>
        <Link className={!isProjects && activeSection === "proof" ? "active" : undefined} href={`${localeRoot}/#proof`} onClick={() => setIsMenuOpen(false)}>{locale === "en" ? "Reviews" : "Отзывы"}</Link>
        <Link className={!isProjects && activeSection === "about" ? "active" : undefined} href={`${localeRoot}/#about`} onClick={() => setIsMenuOpen(false)}>{locale === "en" ? "About" : "Обо мне"}</Link>
        <Link
          className="language-toggle"
          data-locale={locale}
          href={languageHref}
          aria-label={locale === "en" ? "Switch language to Russian" : "Переключить язык на английский"}
          title={locale === "en" ? "Русская версия" : "English version"}
          onClick={switchLanguage}
        >
          <span aria-hidden="true">RU</span>
          <span aria-hidden="true">EN</span>
        </Link>
        <div className="mobile-nav-actions">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
          <a href={profile.vk} target="_blank" rel="noreferrer"><SiVk size={20} /> VK</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer"><SiInstagram size={19} /> Instagram</a>
          <a href={profile.telegram} target="_blank" rel="noreferrer"><Send size={19} /> {locale === "en" ? "Discuss a project" : "Обсудить задачу"}</a>
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
          <span>{locale === "en" ? "Discuss a project" : "Обсудить задачу"}</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? (locale === "en" ? "Close menu" : "Закрыть меню") : (locale === "en" ? "Open menu" : "Открыть меню")}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}
