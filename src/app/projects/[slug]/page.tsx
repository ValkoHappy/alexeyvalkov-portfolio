import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Target,
  Zap
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PreviewFrame } from "@/components/PreviewFrame";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { getProjectDetails, profile, projects } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}`, languages: { ru: `/projects/${slug}`, en: `/en/projects/${slug}` } },
    openGraph: { title: project.title, description: project.summary }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const details = getProjectDetails(project);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main>
      <div className="page-shell">
        <Header />
        <article className="case-page">
          <Link className="back-link" href="/projects"><ArrowLeft size={17} /> Все проекты</Link>

          <section className={`case-hero${details.image ? "" : " case-hero-text"}`}>
            <div className="case-hero-copy">
              <div className="case-eyebrow"><span>{details.status}</span><i />{details.period}</div>
              <h1>{project.title}</h1>
              <p>{project.summary}</p>
              <div className="case-links">
                {project.links.map((link) => (
                  <a className="button secondary" href={link.href} target="_blank" rel="noreferrer" key={`${link.label}-${link.href}`}>
                    {link.label} <ExternalLink size={17} />
                  </a>
                ))}
              </div>
            </div>
            {details.image ? <PreviewFrame project={project} priority /> : null}
          </section>

          <section className="case-facts" aria-label="Кратко о проекте">
            <div><CalendarDays size={20} /><span>Период</span><b>{details.period}</b></div>
            <div><Target size={20} /><span>Тип проекта</span><b>{project.type}</b></div>
            <div><Layers3 size={20} /><span>Моя роль</span><b>{details.role}</b></div>
            <div><Code2 size={20} /><span>Основной стек</span><b>{project.stack.slice(0, 3).join(" / ")}</b></div>
          </section>

          <section className="case-story">
            <div className="case-story-title"><span>Коротко о проекте</span><h2>Задача, моя работа, результат</h2></div>
            <div className="case-story-grid">
              <article><Target size={23} /><span>01 / Задача</span><p>{details.challenge}</p></article>
              <article><Layers3 size={23} /><span>02 / Что сделал</span><p>{details.solution}</p></article>
              <article><Zap size={23} /><span>03 / Результат</span><p>{details.outcome}</p></article>
            </div>
          </section>

          {project.workflow?.length ? <section className="case-section workflow-section">
            <div className="case-section-head"><span>Рабочий поток</span><h2>Что происходит по шагам</h2></div>
            <WorkflowDiagram steps={project.workflow} />
          </section> : null}

          <section className="case-detail-grid">
            <div className="case-section">
              <div className="case-section-head"><span>Реализовано</span><h2>Ключевые функции</h2></div>
              <ul className="check-list">
                {project.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="case-section stack-section">
              <div className="case-section-head"><span>Технологии</span><h2>Стек</h2></div>
              <div className="stack-list large">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </section>

          <section className="next-case">
            <div><span>Следующий кейс</span><h2>{nextProject.title}</h2></div>
            <Link className="button primary" href={`/projects/${nextProject.slug}`}>Открыть <ArrowRight size={18} /></Link>
          </section>

          <section className="case-contact">
            <div><span>Есть похожая задача?</span><h2>Давайте разберём ваш сценарий</h2></div>
            <div className="case-contact-actions">
              <a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">Написать в Telegram <ArrowRight size={18} /></a>
              <a className="button contact-ghost" href={`mailto:${profile.email}`}>Email <Mail size={16} /></a>
              <a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={16} /></a>
              <a className="button contact-ghost" href={profile.vk} target="_blank" rel="noreferrer">VK <ExternalLink size={16} /></a>
              <a className="button contact-ghost" href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ExternalLink size={16} /></a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
