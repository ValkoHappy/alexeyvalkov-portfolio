import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projectsEn } from "@/data/site.en";

export const metadata: Metadata = {
  title: "Projects",
  description: `${projectsEn.length} case studies covering websites, services, automation, Telegram tools, browser extensions and Unity games.`,
  alternates: { canonical: "/en/projects", languages: { ru: "/projects", en: "/en/projects" } }
};

export default function EnglishProjectsPage() {
  return <main><div className="page-shell"><Header locale="en" /><section className="inner-hero"><Link className="back-link" href="/en"><ArrowLeft size={17} /> Back home</Link><h1>All projects</h1><p>Commercial websites, internal tools, automation, Telegram products and Unity games. Each case study explains my role, the project status and the main technologies used.</p></section><section className="projects-explorer" aria-label="Project catalogue"><ProjectsExplorer projects={projectsEn} locale="en" /></section></div></main>;
}
