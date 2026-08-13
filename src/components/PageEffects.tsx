"use client";

import { useEffect, useState } from "react";

const loaderKey = "portfolio-loader-seen";
const revealSelectors = [
  ".section-block",
  ".practice-section",
  ".stack-board",
  ".project-card",
  ".proof-section",
  ".about-section",
  ".contact-section",
  ".case-hero",
  ".case-facts",
  ".case-story",
  ".case-section",
  ".next-case",
  ".case-contact"
];

export function PageEffects() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("motion-ready");

    if (reduceMotion || window.sessionStorage.getItem(loaderKey)) {
      setShowLoader(false);
    } else {
      window.sessionStorage.setItem(loaderKey, "1");
      const timeout = window.setTimeout(() => setShowLoader(false), 1150);
      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, []);

  useEffect(() => {
    const elements = revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));
    const uniqueElements = Array.from(new Set(elements));
    uniqueElements.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
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
    }, { threshold: 0.12, rootMargin: "0px 0px -7%" });

    uniqueElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`page-loader${showLoader ? "" : " is-hidden"}`} aria-hidden="true">
      <div className="loader-grid" />
      <div className="loader-orbit orbit-one" />
      <div className="loader-orbit orbit-two" />
      <div className="loader-scan" />
      <div className="loader-nodes" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="loader-content">
        <div className="loader-kicker"><i /> INITIALIZING PORTFOLIO <b>01</b></div>
        <div className="loader-mark"><span>AV</span><i /><b>∞</b></div>
        <div className="loader-title">Alexey Valkov</div>
        <div className="loader-track"><span /></div>
        <div className="loader-meta"><small>FULLSTACK / AI PRODUCT ENGINEER</small><strong><i /> READY</strong></div>
        <div className="loader-foot"><span>BUILDING DIGITAL PRODUCTS</span><b>02 / 05</b></div>
      </div>
    </div>
  );
}
