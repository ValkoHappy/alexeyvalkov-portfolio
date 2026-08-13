"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".capability-card",
  ".practice-intro",
  ".practice-grid > article",
  ".stack-board-copy",
  ".stack-group",
  ".project-card",
  ".proof-intro",
  ".review-card",
  ".about-lead",
  ".about-content",
  ".principles-grid > article",
  ".contact-section > *",
  ".case-hero > *",
  ".case-facts > div",
  ".case-story-title",
  ".case-story-grid > article",
  ".case-section-head",
  ".workflow-item",
  ".case-detail-grid > *",
  ".next-case",
  ".case-contact"
];

export function PageEffects() {
  useEffect(() => {
    document.body.classList.add("motion-ready");
    const elements = revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));
    const uniqueElements = Array.from(new Set(elements));
    uniqueElements.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      uniqueElements.forEach((element) => element.dataset.revealVisible = "true");
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealVisible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: window.matchMedia("(max-width: 760px)").matches
        ? "0px 0px 8% 0px"
        : "0px 0px -2% 0px"
    });

    uniqueElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
