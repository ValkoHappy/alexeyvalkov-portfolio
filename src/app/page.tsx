import { ArrowRight, BrainCircuit, Code2, Database, Gamepad2, Github, Globe2, MessageSquare, Repeat2, Send, Server, Star, Workflow, Wrench } from "lucide-react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiAstro,
  SiCss3,
  SiFastapi,
  SiGooglechrome,
  SiHtml5,
  SiInstagram,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTelegram,
  SiTypescript,
  SiUnity,
  SiVk,
  SiWebgl
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Header } from "@/components/Header";
import { PortfolioHero } from "@/components/PortfolioHero";
import { ProjectReel } from "@/components/ProjectReel";
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

const capabilityIcons = [Globe2, Workflow, BrainCircuit, Gamepad2];
const stackGroupIcons = [Code2, Server, Database, BrainCircuit, Workflow, Gamepad2];

const technologyIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  Astro: SiAstro,
  React: SiReact,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  FastAPI: SiFastapi,
  PHP: SiPhp,
  SQLite: SiSqlite,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  "LLM API": SiOpenai,
  "Telegram API": SiTelegram,
  "Chrome Extensions": SiGooglechrome,
  Unity: SiUnity,
  "C#": TbBrandCSharp,
  WebGL: SiWebgl
};

const practiceItems = [
  {
    id: "practice-web",
    label: "Web / production",
    title: "Сайты и рабочие сервисы",
    text: "Коммерческие сайты и внутренние продукты, которые используются после релиза, а не остаются в виде макета.",
    facts: ["PANZZI и сайт автошколы Mustang", "Кабинеты, CMS и формы заявок", "API, базы данных и публикация"],
    icon: Globe2
  },
  {
    id: "practice-automation",
    label: "Automation",
    title: "Сбор данных и автоматизация",
    text: "Делал не только парсеры, а полные рабочие цепочки: от регулярного сбора до фильтрации, хранения и уведомлений.",
    facts: ["Цены и карточки маркетплейсов", "Рекламные креативы и Telegram-аналитика", "Заказы, проверка сайтов и отчёты"],
    icon: Workflow
  },
  {
    id: "practice-ai",
    label: "AI / agents",
    title: "AI в прикладных процессах",
    text: "Встраивал модели туда, где они сокращают ручную работу: анализируют данные, готовят материалы и возвращают результат в заданном формате.",
    facts: ["LLM API и структурированный вывод", "MCP и агентные сценарии", "Очереди, отчёты и проверка человеком"],
    icon: BrainCircuit
  },
  {
    id: "practice-unity",
    label: "Unity / games",
    title: "Законченные игровые проекты",
    text: "Проектировал игровые системы и доводил проекты до готового состояния, включая браузерную сборку и интеграцию с площадкой.",
    facts: ["Два законченных Unity-проекта", "Gameplay, UI и сохранения", "Одна игра работает на Яндекс Играх"],
    icon: Gamepad2
  }
];

export default function HomePage() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <PortfolioHero />

        <section className="section-block expertise-section" id="expertise">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / Услуги</span>
              <h2>С чем могу помочь</h2>
              <p>Можно обратиться с готовым техническим заданием или только с проблемой, которую нужно разобрать и превратить в рабочее решение.</p>
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
          <div className="practice-section" id="practice">
            <div className="practice-intro">
              <span className="section-index">02 / Практика</span>
              <h3>Что уже делал</h3>
              <p>Конкретный опыт по каждому направлению. Здесь — типы решённых задач, ниже — отдельные проекты с деталями.</p>
            </div>
            <div className="practice-grid">
              {practiceItems.map(({ facts, icon: Icon, id, label, text, title }, index) => (
                <article id={id} key={title}>
                  <div className="practice-card-head"><span>0{index + 1}</span><Icon size={24} /></div>
                  <span className="practice-label">{label}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
          <div className="stack-board">
            <div className="stack-board-copy">
              <span className="section-index">03 / Стек</span>
              <h3>Технологии подбираю под задачу.</h3>
              <p>Смотрю на ограничения проекта, дальнейшую поддержку и способ запуска — без привязки к одному фреймворку.</p>
            </div>
            <div className="stack-groups">
              {skillGroups.map((group, groupIndex) => {
                const GroupIcon = stackGroupIcons[groupIndex] ?? Wrench;
                return (
                  <div className="stack-group" key={group.title}>
                    <div className="stack-group-head"><span><GroupIcon size={18} /></span><b>{group.title}</b></div>
                    <div className="stack-skill-list">
                      {group.skills.map((skill) => {
                        const SkillIcon = technologyIcons[skill];
                        return (
                          <span className="stack-skill" data-has-icon={Boolean(SkillIcon) || undefined} key={skill}>
                            {SkillIcon ? <SkillIcon aria-hidden="true" /> : null}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ProjectReel projects={featuredProjects} totalCount={projects.length} />

        <section className="section-block proof-section" id="proof">
          <div className="proof-intro">
            <span className="section-index">05 / Отзывы</span>
            <h2>Отзывы заказчиков</h2>
            <p>Отзывы о выполненных заказах из моего профиля на Kwork.</p>
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
            <span className="section-index">06 / Обо мне</span>
            <h2>{aboutOverview.heading}</h2>
          </div>
          <div className="about-content">
            {aboutOverview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="about-path">
              <span>{aboutOverview.pathLabel}</span>
              <b>{aboutOverview.pathTitle}</b>
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
            <span className="availability"><i /> Открыт к проектам и предложениям</span>
            <h2>Нужен сайт, сервис или автоматизация?</h2>
            <p>Опишите задачу — предложу подход, стек и понятный план реализации.</p>
          </div>
          <div className="contact-actions">
            <a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">Написать в Telegram <Send size={18} /></a>
            <a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Github size={18} /></a>
            <a className="button contact-ghost" href={profile.vk} target="_blank" rel="noreferrer">VK <SiVk size={19} /></a>
            <a className="button contact-ghost" href={profile.instagram} target="_blank" rel="noreferrer">Instagram <SiInstagram size={18} /></a>
          </div>
        </section>

        <footer className="site-footer">
          <div><b>{profile.name}</b><span>{profile.role}</span></div>
          <span>Работаю удалённо · 2026</span>
        </footer>
      </div>
    </main>
  );
}
