import { ArrowLeft, ArrowRight, CalendarDays, Code2, ExternalLink, Layers3, Target, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PreviewFrame } from "@/components/PreviewFrame";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { getProjectDetailsEn, projectsEn } from "@/data/site.en";
import { profile } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projectsEn.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const project = projectsEn.find((item) => item.slug === slug); if (!project) return {}; return { title: project.title, description: project.summary, alternates: { canonical: `/en/projects/${slug}`, languages: { ru: `/projects/${slug}`, en: `/en/projects/${slug}` } } }; }

export default async function EnglishProjectPage({ params }: Props) {
  const { slug } = await params; const index = projectsEn.findIndex((item) => item.slug === slug); const project = projectsEn[index]; if (!project) notFound();
  const details = getProjectDetailsEn(project); const next = projectsEn[(index + 1) % projectsEn.length];
  return <main><div className="page-shell"><Header locale="en" /><article className="case-page">
    <Link className="back-link" href="/en/projects"><ArrowLeft size={17} /> All projects</Link>
    <section className={`case-hero${details.image ? "" : " case-hero-text"}`}><div className="case-hero-copy"><div className="case-eyebrow"><span>{details.status}</span><i />{details.period}</div><h1>{project.title}</h1><p>{project.summary}</p><div className="case-links">{project.links.map((link) => <a className="button secondary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={17} /></a>)}</div></div>{details.image ? <PreviewFrame project={project} locale="en" priority /> : null}</section>
    <section className="case-facts" aria-label="Project summary"><div><CalendarDays size={20} /><span>Period</span><b>{details.period}</b></div><div><Target size={20} /><span>Project type</span><b>{project.type}</b></div><div><Layers3 size={20} /><span>My role</span><b>{details.role}</b></div><div><Code2 size={20} /><span>Core stack</span><b>{project.stack.slice(0, 3).join(" / ")}</b></div></section>
    <section className="case-story"><div className="case-story-title"><span>Project overview</span><h2>Challenge, my work, outcome</h2></div><div className="case-story-grid"><article><Target size={23} /><span>01 / Challenge</span><p>{details.challenge}</p></article><article><Layers3 size={23} /><span>02 / What I built</span><p>{details.solution}</p></article><article><Zap size={23} /><span>03 / Outcome</span><p>{details.outcome}</p></article></div></section>
    {project.workflow?.length ? <section className="case-section workflow-section"><div className="case-section-head"><span>Workflow</span><h2>What happens step by step</h2></div><WorkflowDiagram steps={project.workflow} locale="en" /></section> : null}
    <section className="case-detail-grid"><div className="case-section"><div className="case-section-head"><span>Delivered</span><h2>Key features</h2></div><ul className="check-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="case-section stack-section"><div className="case-section-head"><span>Technology</span><h2>Stack</h2></div><div className="stack-list large">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    <section className="next-case"><div><span>Next case study</span><h2>{next.title}</h2></div><Link className="button primary" href={`/en/projects/${next.slug}`}>Open <ArrowRight size={18} /></Link></section>
    <section className="case-contact"><div><span>Have a similar challenge?</span><h2>Let&apos;s discuss your project</h2></div><div className="case-contact-actions"><a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">Message on Telegram <ArrowRight size={18} /></a><a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={16} /></a><a className="button contact-ghost" href={profile.vk} target="_blank" rel="noreferrer">VK <ExternalLink size={16} /></a><a className="button contact-ghost" href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ExternalLink size={16} /></a></div></section>
  </article></div></main>;
}
