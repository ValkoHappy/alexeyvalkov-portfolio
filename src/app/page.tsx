import { ArrowRight, Bot, Github, Globe2, Layers3, MessageSquare, Repeat2, Send, Star, Workflow, Wrench } from "lucide-react";
import Link from "next/link";
import { ExpeditionJourney } from "@/components/ExpeditionJourney";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import {
  aboutOverview,
  aboutPrinciples,
  featuredProjectSlugs,
  focusItems,
  profile,
  projects,
  reviews,
  skillGroups
} from "@/data/site";

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const capabilityIcons = [Globe2, Layers3, Bot, Workflow];

export default function HomePage() {
  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-shell">
        <Header />
        <ExpeditionJourney />

        <section className="section-block featured-work" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / Избранные миссии</span>
              <h2>Проекты, где видна система целиком</h2>
              <p>Игры, интерфейсы, данные, интеграции и автоматизация — с честным статусом и подробным разбором.</p>
            </div>
            <Link className="text-link" href="/projects">Все {projects.length} кейсов <ArrowRight size={17} /></Link>
          </div>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project, index) => (
              <div className={`featured-slot featured-slot-${index + 1}`} key={project.slug}>
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        </section>

        <section className="section-block expertise-section" id="expertise">
          <div className="section-heading">
            <div>
              <span className="section-index">03 / Экспертиза</span>
              <h2>Что я могу собрать</h2>
              <p>Выбираю технологию под сценарий, а не под красивый список в резюме.</p>
            </div>
          </div>
          <div className="capability-grid">
            {focusItems.map((item, index) => {
              const Icon = capabilityIcons[index] ?? Wrench;
              return (
                <article className="capability-card" key={item.title}>
                  <div><span>0{index + 1}</span><Icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="stack-board">
            <div className="stack-board-copy">
              <span className="section-index">Инвентарь</span>
              <h3>Инструменты меняются. Инженерный подход остаётся.</h3>
              <p>Могу пройти через весь сценарий: от интерфейса и игровой логики до API, данных, автоматизации и запуска.</p>
            </div>
            <div className="stack-groups">
              {skillGroups.map((group) => (
                <div className="stack-group" key={group.title}>
                  <b>{group.title}</b>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
              <div className="stack-group">
                <b>Game development</b>
                <p>Unity · C# · Gameplay systems · WebGL · Yandex Games SDK</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block proof-section" id="proof">
          <div className="proof-intro">
            <span className="section-index">04 / Коммерческий опыт</span>
            <h2>Работа, к которой возвращаются</h2>
            <p>Заказы на парсинг, сайты и автоматизацию. В отзывах чаще всего отмечают ответственность, связь и аккуратную работу с правками.</p>
            <div className="proof-metrics">
              <div><Star size={21} /><strong>5.0</strong><span>рейтинг</span></div>
              <div><MessageSquare size={21} /><strong>5</strong><span>отзывов</span></div>
              <div><Repeat2 size={21} /><strong>60%</strong><span>повторных заказов</span></div>
            </div>
            <a className="text-link" href={profile.kwork} target="_blank" rel="noreferrer">Профиль на Kwork <ArrowRight size={17} /></a>
          </div>
          <div className="reviews-list">
            {reviews.slice(0, 3).map((review, index) => (
              <article className="review-card" key={`${review.author}-${review.title}`}>
                <div className="review-number">0{index + 1}</div>
                <div>
                  <div className="stars">★★★★★</div>
                  <p>«{review.text}»</p>
                  <footer><b>{review.author}</b><span>{review.title}</span></footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-lead">
            <span className="section-index">05 / Обо мне</span>
            <h2>{aboutOverview.heading}</h2>
          </div>
          <div className="about-content">
            {aboutOverview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="about-path">
              <span>{aboutOverview.pathLabel}</span>
              <b>Unity / C# → Web / React → Fullstack / Automation</b>
              <p>{aboutOverview.pathText}</p>
            </div>
          </div>
          <div className="principles-grid">
            {aboutPrinciples.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacts">
          <div>
            <span className="availability"><i /> Новая миссия доступна</span>
            <h2>Есть задача, которую пора перестать делать вручную?</h2>
            <p>Расскажите, как процесс работает сейчас. Я помогу превратить его в понятный веб-инструмент.</p>
          </div>
          <div className="contact-actions">
            <a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">Написать в Telegram <Send size={18} /></a>
            <a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Github size={18} /></a>
          </div>
        </section>

        <footer className="site-footer">
          <div><b>{profile.name}</b><span>{profile.role}</span></div>
          <span>Архангельск · 2026</span>
        </footer>
      </div>
    </main>
  );
}
