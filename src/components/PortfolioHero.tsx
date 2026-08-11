"use client";

import { ArrowDown, ArrowRight, Bot, Code2, Gamepad2, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/data/site";
import styles from "./PortfolioHero.module.css";

const directions = [
  { href: "#projects", label: "Веб", icon: Globe2 },
  { href: "#parsers", label: "Автоматизация", icon: Code2 },
  { href: "#ai-agents", label: "AI и агенты", icon: Bot },
  { href: "/projects/mystery-forest-survival", label: "Unity", icon: Gamepad2 }
];

export function PortfolioHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;

    const updateScroll = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      const routeProgress = Math.min(1, progress * 1.35);
      const activeStep = Math.round(routeProgress * (directions.length - 1));

      hero.style.setProperty("--hero-scroll", `${progress * -34}px`);
      hero.style.setProperty("--route-progress", `${routeProgress * 100}%`);
      hero.querySelectorAll<HTMLElement>("[data-route-node]").forEach((node, index) => {
        node.toggleAttribute("data-active", index <= activeStep);
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (window.matchMedia("(max-width: 820px)").matches) return;
      const x = (event.clientX / window.innerWidth - 0.5) * -18;
      hero.style.setProperty("--hero-x", `${x}px`);
    };

    const requestScrollUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" ref={heroRef} aria-labelledby="portfolio-title">
      <div className={styles.media} aria-hidden="true">
        <Image className={styles.desktopImage} src="/profile/hero-map-v2.png" alt="" fill priority sizes="100vw" />
        <Image className={styles.mobileImage} src="/profile/hero-map-mobile.png" alt="" fill priority sizes="100vw" />
        <div className={styles.veil} />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><Sparkles size={15} /> Fullstack developer · Архангельск</span>
          <h1 id="portfolio-title"><span>{profile.name}</span><strong>Веб · автоматизация · AI</strong></h1>
          <p className={styles.lead}>
            Разрабатываю веб-приложения, внутренние сервисы, парсеры, ботов и AI-инструменты.
            Работаю с Next.js, Astro, React, Node.js и Python. Также выпускаю игры на Unity.
          </p>
          <div className={styles.actions}>
            <Link href="#projects">Смотреть проекты <ArrowDown size={17} /></Link>
            <a href={profile.telegram} target="_blank" rel="noreferrer">Обсудить задачу <ArrowRight size={17} /></a>
          </div>
        </div>

        <nav className={styles.route} aria-label="Основные направления">
          <div className={styles.routeLine} />
          {directions.map(({ href, icon: Icon, label }, index) => (
            <a data-active={index === 0 || undefined} data-route-node={index} href={href} key={label}>
              <span><Icon size={19} /></span>
              <small>{label}</small>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
