import { ArrowDown, ArrowRight, Bot, Code2, Gamepad2, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/site";
import styles from "./PortfolioHero.module.css";

const directions = [
  { href: "#projects", label: "Веб", icon: Globe2 },
  { href: "#expertise", label: "Автоматизация", icon: Code2 },
  { href: "#expertise", label: "AI и агенты", icon: Bot },
  { href: "#projects", label: "Unity", icon: Gamepad2 }
];

export function PortfolioHero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="portfolio-title">
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
          {directions.map(({ href, icon: Icon, label }) => (
            <a href={href} key={label}>
              <span><Icon size={19} /></span>
              <small>{label}</small>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
