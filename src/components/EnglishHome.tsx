import { aboutOverviewEn, aboutPrinciplesEn, focusItemsEn, homeContentEn, projectsEn, reviewsEn } from "@/data/site.en";
import { featuredProjectSlugs } from "@/data/site";
import { Header } from "./Header";
import { HomeSections } from "./HomeSections";
import { PortfolioHero } from "./PortfolioHero";

const featuredProjects = featuredProjectSlugs
  .map((slug) => projectsEn.find((project) => project.slug === slug))
  .filter((project): project is (typeof projectsEn)[number] => Boolean(project));

const groupTitles: Record<string, string> = {
  Databases: "Databases",
  Automation: "Automation",
  "Game development": "Game development"
};

export function EnglishHome() {
  return (
    <main>
      <div className="page-shell">
        <Header locale="en" />
        <PortfolioHero locale="en" />
        <HomeSections
          about={aboutOverviewEn}
          content={homeContentEn}
          featuredProjects={featuredProjects}
          focusItems={focusItemsEn}
          groupTitles={groupTitles}
          locale="en"
          principles={aboutPrinciplesEn}
          projectsCount={projectsEn.length}
          reviews={reviewsEn}
        />
      </div>
    </main>
  );
}
