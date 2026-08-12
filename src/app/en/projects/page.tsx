import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projectsEn } from "@/data/site.en";

export const metadata: Metadata = {
  title: "Projects",
  description: "18 case studies: Unity games, fullstack systems, automation, interfaces, Telegram bots and commercial websites.",
  alternates: { canonical: "/en/projects", languages: { ru: "/projects", en: "/en/projects" } }
};

export default function EnglishProjectsPage() {
  return <main><div className="page-shell"><Header locale="en" /><section className="inner-hero"><Link className="back-link" href="/en"><ArrowLeft size={17} /> Back home</Link><h1>All projects</h1><p>Published games, production systems, working internal tools and prototypes. Every case study states the project status, my role and its technical context.</p></section><section className="projects-explorer" aria-label="Project catalogue"><ProjectsExplorer projects={projectsEn} locale="en" /></section></div></main>;
}
