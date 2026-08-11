import { ArrowRight, BarChart3, Bell, BrainCircuit, Eye, Gamepad2, Github, Globe2, MessageSquare, Repeat2, Search, Send, ShoppingCart, Star, Workflow, Wrench } from "lucide-react";
import Link from "next/link";
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

const parserCases = [
  {
    title: "Мониторинг цен",
    text: "Сбор цен с 10+ магазинов и маркетплейсов, история изменений, web-панель и уведомления в Telegram.",
    icon: Bell
  },
  {
    title: "Маркетплейсы",
    text: "Яндекс Маркет, Ozon и Wildberries: карточки, цены и характеристики через API или браузерную автоматизацию, выгрузка в Excel.",
    icon: ShoppingCart
  },
  {
    title: "Рекламные креативы",
    text: "Регулярный сбор объявлений из Google Ads Transparency Center: очередь заданий, нормализация, история и приватный dashboard.",
    icon: Eye
  },
  {
    title: "Telegram-аналитика",
    text: "Сбор статистики, постов и комментариев, AI-анализ через Gemini и формирование PDF-отчёта.",
    icon: BarChart3
  },
  {
    title: "Мониторинг заказов",
    text: "Сбор новых заказов с freelance-площадок, фильтры, дедупликация, автотеги и отправка подходящих задач в Telegram.",
    icon: Search
  },
  {
    title: "Проверка сайтов",
    text: "Пакетный обход URL из Google Sheets, снимки через Playwright, первичная оценка и очередь для ручной проверки.",
    icon: Globe2
  }
];

export default function HomePage() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <PortfolioHero />
        <ProjectReel projects={featuredProjects} totalCount={projects.length} />

        <section className="section-block expertise-section" id="expertise">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / Услуги</span>
              <h2>Что я делаю</h2>
              <p>Разрабатываю продукт целиком: интерфейс, серверную часть, данные, интеграции и запуск.</p>
            </div>
          </div>
          <div className="capability-grid">
            {focusItems.map((item, index) => {
              const Icon = capabilityIcons[index] ?? Wrench;
              return (
                <article className="capability-card" id={index === 2 ? "ai-agents" : undefined} key={item.title}>
                  <div><span>0{index + 1}</span><Icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="parser-section" id="parsers">
            <div className="parser-intro">
              <span className="section-index">Практика автоматизации</span>
              <h3>Какие парсеры я делал</h3>
              <p>Это не разовые скрипты для сбора HTML, а рабочие системы: очереди, хранение данных, фильтры, отчёты, интерфейс и уведомления.</p>
            </div>
            <div className="parser-grid">
              {parserCases.map(({ icon: Icon, text, title }, index) => (
                <article key={title}>
                  <div><span>0{index + 1}</span><Icon size={22} /></div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="stack-board">
            <div className="stack-board-copy">
              <span className="section-index">Стек</span>
              <h3>Технологии подбираю под задачу.</h3>
              <p>Работаю с современными web-фреймворками, прикладной автоматизацией, AI API и Unity.</p>
            </div>
            <div className="stack-groups">
              {skillGroups.map((group) => (
                <div className="stack-group" key={group.title}>
                  <b>{group.title}</b>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block proof-section" id="proof">
          <div className="proof-intro">
            <span className="section-index">03 / Опыт</span>
            <h2>Отзывы заказчиков</h2>
            <p>Коммерческие сайты, парсеры и автоматизация. Ниже — отзывы с моего профиля на Kwork.</p>
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
            <span className="section-index">04 / Обо мне</span>
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
