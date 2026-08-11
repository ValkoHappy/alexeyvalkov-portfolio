import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  MapPin,
  MessageSquare,
  Repeat2,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Wrench,
  Zap
} from "lucide-react";
import Link from "next/link";
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
  skillGroups,
  stats
} from "@/data/site";

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const capabilityIcons = [Globe2, Layers3, Bot, Workflow];

const deliverySteps = [
  { number: "01", title: "Разобрать задачу", text: "Фиксирую пользовательский сценарий, данные, ограничения и критерий готовности." },
  { number: "02", title: "Собрать основу", text: "Проектирую интерфейс, API, хранение и фоновые процессы как единую систему." },
  { number: "03", title: "Проверить на данных", text: "Прогоняю реальные сценарии, пограничные состояния и адаптивность интерфейса." },
  { number: "04", title: "Передать результат", text: "Готовлю запуск, документацию и понятный путь дальнейшего развития продукта." }
];

export default function HomePage() {
  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-shell">
        <Header />

        <section className="hero-section">
          <div className="hero-copy reveal-up">
            <div className="availability"><span /> Открыт к проектам и предложениям</div>
            <p className="hero-kicker">Алексей Вальков · Fullstack developer</p>
            <h1>Создаю веб-инструменты, которые <em>убирают ручную работу.</em></h1>
            <p className="hero-text">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Смотреть кейсы <ArrowRight size={18} />
              </a>
              <a className="button secondary" href={profile.telegram} target="_blank" rel="noreferrer">
                <Send size={18} /> Обсудить задачу
              </a>
            </div>
            <div className="hero-footnote">
              <span><MapPin size={15} /> {profile.location}</span>
              <span><ShieldCheck size={15} /> Работаю с коммерческими и внутренними продуктами</span>
            </div>
          </div>

          <aside className="system-card reveal-up" aria-label="Как устроена моя работа">
            <div className="system-card-head">
              <span><i /><i /><i /></span>
              <small>delivery.pipeline</small>
              <b>live</b>
            </div>
            <div className="system-card-body">
              <div className="system-title">
                <Sparkles size={20} />
                <span>От задачи до работающей системы</span>
              </div>
              <div className="system-flow">
                <div><span>01</span><Code2 size={20} /><b>Interface</b><small>React / Next.js</small></div>
                <i />
                <div><span>02</span><Server size={20} /><b>Backend</b><small>Node / Python</small></div>
                <i />
                <div><span>03</span><Database size={20} /><b>Data</b><small>SQL / APIs</small></div>
                <i />
                <div><span>04</span><Zap size={20} /><b>Automation</b><small>Workers / Bots</small></div>
              </div>
              <div className="system-result">
                <CheckCircle2 size={18} />
                <span><small>Результат</small><b>Проверяемый рабочий сценарий</b></span>
              </div>
            </div>
          </aside>
        </section>

        <section className="stats-row" aria-label="Факты об опыте">
          {stats.map((stat, index) => (
            <div className="stat-card" key={stat.label}>
              <small>0{index + 1}</small>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section-block featured-work" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / Избранное</span>
              <h2>Проекты, где видна система целиком</h2>
              <p>Не только интерфейс: данные, интеграции, фоновые процессы и рабочий результат.</p>
            </div>
            <Link className="text-link" href="/projects">Все 15 кейсов <ArrowRight size={17} /></Link>
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
              <span className="section-index">02 / Экспертиза</span>
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
              <span className="section-index">Рабочий стек</span>
              <h3>Инструменты меняются. Инженерный подход остаётся.</h3>
              <p>Умею пройти через весь сценарий: от интерфейса и API до данных, автоматизации и запуска.</p>
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

        <section className="section-block process-section">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-index">03 / Подход</span>
              <h2>От запроса до результата</h2>
            </div>
          </div>
          <div className="delivery-grid">
            {deliverySteps.map((step) => (
              <article className="delivery-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
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
            <span className="availability"><i /> Сейчас открыт к предложениям</span>
            <h2>Есть задача, которую пора перестать делать вручную?</h2>
            <p>Расскажите, как процесс работает сейчас. Я помогу превратить его в понятный веб-инструмент.</p>
          </div>
          <div className="contact-actions">
            <a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">
              Написать в Telegram <Send size={18} />
            </a>
            <a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub <Github size={18} />
            </a>
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
