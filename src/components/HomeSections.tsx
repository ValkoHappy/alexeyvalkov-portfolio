import { ArrowRight, BrainCircuit, Code2, Gamepad2, Github, Globe2, MessageSquare, Send, Server, Star, Workflow, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import { SiAstro, SiCss3, SiFastapi, SiGooglechrome, SiHtml5, SiInstagram, SiMysql, SiNextdotjs, SiNodedotjs, SiOpenai, SiPhp, SiPostgresql, SiPython, SiReact, SiSqlite, SiTelegram, SiTypescript, SiUnity, SiVk, SiWebgl } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import type { HomeContent, Project } from "@/data/site";
import { profile, skillGroups } from "@/data/site";
import { ProjectReel } from "./ProjectReel";

type Review = { title: string; author: string; text: string };
type About = {
  heading: string;
  paragraphs: string[];
  pathLabel: string;
  pathTitle: string;
  pathText: string;
};
type Principle = { title: string; text: string };

const capabilityIcons = [Globe2, Workflow, BrainCircuit, Gamepad2];
const stackGroupIcons = [Code2, Server, Wrench, BrainCircuit, Workflow, Gamepad2];
const technologyIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs, Astro: SiAstro, React: SiReact, TypeScript: SiTypescript,
  HTML: SiHtml5, CSS: SiCss3, "Node.js": SiNodedotjs, Python: SiPython,
  FastAPI: SiFastapi, PHP: SiPhp, SQLite: SiSqlite, MySQL: SiMysql,
  PostgreSQL: SiPostgresql, "LLM API": SiOpenai, "Telegram API": SiTelegram,
  "Chrome Extensions": SiGooglechrome, Unity: SiUnity, "C#": TbBrandCSharp, WebGL: SiWebgl
};

export function HomeSections({
  about,
  content,
  featuredProjects,
  focusItems,
  groupTitles = {},
  locale = "ru",
  principles,
  projectsCount,
  reviews
}: {
  about: About;
  content: HomeContent;
  featuredProjects: Project[];
  focusItems: { title: string; text: string }[];
  groupTitles?: Record<string, string>;
  locale?: "ru" | "en";
  principles: Principle[];
  projectsCount: number;
  reviews: Review[];
}) {
  return (
    <>
      <section className="section-block expertise-section" id="expertise">
        <div className="section-heading"><div><span className="section-index">{content.services.index}</span><h2>{content.services.title}</h2><p>{content.services.intro}</p></div></div>
        <div className="capability-grid">
          {focusItems.map((item, index) => {
            const Icon = capabilityIcons[index] ?? Wrench;
            return <article className="capability-card" key={item.title}><div><span>0{index + 1}</span><Icon size={25} /></div><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>

        <div className="practice-section" id="practice">
          <div className="practice-intro"><span className="section-index">{content.evidence.index}</span><h3>{content.evidence.title}</h3><p>{content.evidence.intro}</p></div>
          <div className="practice-grid">
            {content.evidence.items.map((item, index) => {
              const Icon = capabilityIcons[index] ?? Wrench;
              return <article id={item.id} key={item.title}><div className="practice-card-head"><span>0{index + 1}</span><Icon size={24} /></div><span className="practice-label">{item.label}</span><h4>{item.title}</h4><p>{item.text}</p><ul>{item.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></article>;
            })}
          </div>
        </div>

        <div className="stack-board">
          <div className="stack-board-copy"><span className="section-index">{content.stack.index}</span><h3>{content.stack.title}</h3><p>{content.stack.intro}</p></div>
          <div className="stack-groups">
            {skillGroups.map((group, index) => {
              const Icon = stackGroupIcons[index] ?? Wrench;
              return <div className="stack-group" key={group.title}><div className="stack-group-head"><span><Icon size={18} /></span><b>{groupTitles[group.title] ?? group.title}</b></div><div className="stack-skill-list">{group.skills.map((skill) => { const SkillIcon = technologyIcons[skill]; return <span className="stack-skill" data-has-icon={Boolean(SkillIcon) || undefined} key={skill}>{SkillIcon ? <SkillIcon aria-hidden="true" /> : null}{skill}</span>; })}</div></div>;
            })}
          </div>
        </div>
      </section>

      <ProjectReel projects={featuredProjects} totalCount={projectsCount} locale={locale} />

      <section className="section-block proof-section" id="proof">
        <div className="proof-intro"><span className="section-index">{content.reviews.index}</span><h2>{content.reviews.title}</h2><p>{content.reviews.intro}</p><div className="proof-metrics"><div><Star size={21} /><strong>5.0</strong><span>{content.reviews.ratingLabel}</span></div><div><MessageSquare size={21} /><strong>{reviews.length}</strong><span>{content.reviews.reviewsLabel}</span></div></div><a className="text-link" href={profile.kwork} target="_blank" rel="noreferrer">{content.reviews.linkLabel} <ArrowRight size={17} /></a></div>
        <div className="reviews-list">{reviews.map((review, index) => <article className="review-card" key={`${review.author}-${review.title}`}><div className="review-number">0{index + 1}</div><div><div className="stars">★★★★★</div><p>{locale === "en" ? `“${review.text}”` : `«${review.text}»`}</p><footer><b>{review.author}</b><span>{review.title}</span></footer></div></article>)}</div>
      </section>

      <section className="about-section" id="about">
        <div className="about-lead"><span className="section-index">{content.about.index}</span><h2>{about.heading}</h2></div>
        <div className="about-content">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="about-path"><span>{about.pathLabel}</span><b>{about.pathTitle}</b><p>{about.pathText}</p></div></div>
        <div className="principles-grid">{principles.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contacts"><div><span className="availability"><i /> {content.contact.availability}</span><h2>{content.contact.title}</h2><p>{content.contact.text}</p></div><div className="contact-actions"><a className="button light" href={profile.telegram} target="_blank" rel="noreferrer">{content.contact.telegram} <Send size={18} /></a><a className="button contact-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Github size={18} /></a><a className="button contact-ghost" href={profile.vk} target="_blank" rel="noreferrer">VK <SiVk size={19} /></a><a className="button contact-ghost" href={profile.instagram} target="_blank" rel="noreferrer">Instagram <SiInstagram size={18} /></a></div></section>

      <footer className="site-footer"><div><b>{locale === "en" ? "Alexey Valkov" : profile.name}</b><span>{profile.role}</span></div><span>{content.footer}</span></footer>
    </>
  );
}
