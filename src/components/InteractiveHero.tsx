import { ArrowDown, Backpack, Github, MapPin, Route, Send, Trophy } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/site";
import styles from "./InteractiveHero.module.css";

const inventory = ["React", "Python", "Next.js", "PostgreSQL"];

export function InteractiveHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.topography} aria-hidden="true" />
      <div className={styles.copy}>
        <div className={styles.status}><i /> На связи · открыт к предложениям</div>
        <p className={styles.kicker}>Портфолио разработчика · Архангельск</p>
        <h1 id="hero-title">Алексей <span>Вальков</span></h1>
        <p className={styles.role}>Fullstack · Web tools · Automation</p>
        <p className={styles.summary}>
          От игровых миров на Unity до веб-систем, которые убирают ручную работу.
          Исследуйте мой путь через проекты, технологии и выпущенные продукты.
        </p>
        <div className={styles.actions}>
          <a className={styles.startButton} href="#journey">
            <Route size={19} /> Начать путь <ArrowDown size={17} />
          </a>
          <a className={styles.iconButton} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a className={styles.iconButton} href={profile.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
            <Send size={19} />
          </a>
        </div>

        <div className={styles.hud} aria-label="Краткие факты">
          <article>
            <div className={styles.hudTitle}><Backpack size={16} /><span>Инвентарь</span></div>
            <ul>{inventory.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <div className={styles.hudTitle}><Trophy size={16} /><span>Достижения</span></div>
            <dl>
              <div><dt>Проекты</dt><dd>17</dd></div>
              <div><dt>Kwork</dt><dd>5.0</dd></div>
              <div><dt>Повторные</dt><dd>60%</dd></div>
            </dl>
          </article>
        </div>
      </div>

      <div className={styles.portraitCard}>
        <div className={styles.frameCorners} aria-hidden="true" />
        <Image
          src="/profile/alexey.png"
          alt="Алексей Вальков на берегу реки"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 44vw"
        />
        <div className={styles.portraitInfo}>
          <div><i /><span><small>Статус</small><b>В пути</b></span></div>
          <div><MapPin size={17} /><span><small>Локация</small><b>Север · Архангельск</b></span></div>
        </div>
      </div>
    </section>
  );
}
