import { Header } from "@/components/Header";
import { HomeSections } from "@/components/HomeSections";
import { PortfolioHero } from "@/components/PortfolioHero";
import { aboutOverview, aboutPrinciples, featuredProjectSlugs, focusItems, homeContent, projects, reviews } from "@/data/site";

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function HomePage() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <PortfolioHero />
        <HomeSections
          about={aboutOverview}
          content={homeContent}
          featuredProjects={featuredProjects}
          focusItems={focusItems}
          principles={aboutPrinciples}
          projectsCount={projects.length}
          reviews={reviews}
        />
      </div>
    </main>
  );
}
