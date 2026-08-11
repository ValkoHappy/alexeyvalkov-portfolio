"use client";

import { ArrowUpRight, Github, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span>{profile.initials}</span>
        <small>developer journey</small>
      </Link>
      <nav className="main-nav" aria-label="Главная навигация">
        <Link className={!isProjects ? "active" : undefined} href="/#top">Главная</Link>
        <Link href="/#journey">Путь</Link>
        <Link className={isProjects ? "active" : undefined} href={isProjects ? "/projects" : "/#projects"}>Кейсы</Link>
        <Link href="/#expertise">Экспертиза</Link>
        <Link href="/#about">Обо мне</Link>
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
