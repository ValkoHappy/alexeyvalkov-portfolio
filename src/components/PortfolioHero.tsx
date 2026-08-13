"use client";

import { ArrowDown, ArrowRight, Bot, Code2, Gamepad2, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/data/site";
import styles from "./PortfolioHero.module.css";

const directions = [
  { href: "#practice-web", label: "Веб", icon: Globe2 },
  { href: "#practice-automation", label: "Автоматизация", icon: Code2 },
  { href: "#practice-ai", label: "AI и агенты", icon: Bot },
  { href: "#practice-unity", label: "Unity", icon: Gamepad2 }
];

export function PortfolioHero({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;

    const updateScroll = () => {
      const rect = hero.getBoundingClientRect();
      const heroProgress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      const activationLine = window.innerHeight * 0.72;
      const routeProgress = directions.reduce((maxProgress, direction, index) => {
        const target = document.querySelector(direction.href);
        if (!target) return maxProgress;

        const targetTop = target.getBoundingClientRect().top;
        if (targetTop > activationLine) return maxProgress;

        const targetProgress = Math.min(1, Math.max(0, (activationLine - targetTop) / Math.max(1, window.innerHeight)));
        return Math.max(maxProgress, (index + targetProgress) / (directions.length - 1));
      }, 0);
      const activeStep = Math.min(directions.length - 1, Math.floor(routeProgress * (directions.length - 1) + 0.001));

      hero.style.setProperty("--hero-scroll", `${heroProgress * -34}px`);
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
          <span className={styles.eyebrow}><Sparkles size={15} /> Fullstack / AI Product Engineer</span>
          <h1 id="portfolio-title"><span>{locale === "en" ? "Alexey Valkov" : profile.name}</span><strong>{locale === "en" ? "Web · automation · AI" : "Веб · автоматизация · AI"}</strong></h1>
          <p className={styles.lead}>
            {locale === "en"
              ? "I design and launch websites, internal tools, automation and AI products. I can own a complete product or join an existing team for a focused part."
              : "Проектирую и запускаю сайты, внутренние сервисы, автоматизацию и AI-инструменты. Могу собрать продукт целиком или подключиться к отдельной части проекта."}
          </p>
          <div className={styles.actions}>
            <Link href="#projects">{locale === "en" ? "View projects" : "Смотреть проекты"} <ArrowDown size={17} /></Link>
            <a href={profile.telegram} target="_blank" rel="noreferrer">{locale === "en" ? "Discuss a project" : "Обсудить задачу"} <ArrowRight size={17} /></a>
          </div>
        </div>

        <nav className={styles.route} aria-label={locale === "en" ? "Core areas" : "Основные направления"}>
          <div className={styles.routeLine} />
          {directions.map(({ href, icon: Icon, label }, index) => (
            <a data-active={index === 0 || undefined} data-route-node={index} href={href} key={label}>
              <span><Icon size={19} /></span>
              <small>{locale === "en" ? ["Web", "Automation", "AI & agents", "Unity"][index] : label}</small>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
