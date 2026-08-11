"use client";

import {
  ArrowDown,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Flag,
  Gamepad2,
  Globe2,
  MapPin,
  Route,
  Sparkles,
  Workflow
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { journeyStages, type JourneyIcon, type JourneyMission, type JourneyStage } from "@/data/journey";
import styles from "./ExpeditionJourney.module.css";

const INTRO_SHARE = 0.16;

const stageIcons: Record<JourneyIcon, typeof Gamepad2> = {
  gamepad: Gamepad2,
  globe: Globe2,
  code: Code2,
  workflow: Workflow,
  flag: Flag
};

const missionStatusLabel: Record<JourneyMission["status"], string> = {
  live: "Live",
  complete: "Завершено",
  case: "Кейс"
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ExpeditionJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const rawProgress = clamp(-rect.top / travel, 0, 1);
      const stageProgress = clamp((rawProgress - INTRO_SHARE) / (1 - INTRO_SHARE), 0, 0.9999);
      const nextStageIndex = rawProgress < INTRO_SHARE
        ? -1
        : Math.floor(stageProgress * journeyStages.length);

      section.style.setProperty("--route-progress", `${rawProgress * 100}%`);
      section.style.setProperty("--orbit-rotation", `${rawProgress * 280}deg`);
      section.style.setProperty("--orbit-rotation-reverse", `${rawProgress * -220}deg`);
      section.style.setProperty("--world-scale", `${1 + rawProgress * 0.22}`);
      section.style.setProperty("--world-y", `${rawProgress * -7}%`);
      section.style.setProperty("--artifact-tilt", `${-7 + rawProgress * 12}deg`);

      setActiveStageIndex((current) => current === nextStageIndex ? current : nextStageIndex);
      setProgress((current) => {
        const rounded = Math.round(rawProgress * 100);
        return current === rounded ? current : rounded;
      });
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const scrollToStage = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const travel = section.offsetHeight - window.innerHeight;
    const target = INTRO_SHARE + ((index + 0.44) / journeyStages.length) * (1 - INTRO_SHARE);
    window.scrollTo({ top: section.offsetTop + travel * target, behavior: "smooth" });
  }, []);

  const accent = activeStageIndex >= 0 ? journeyStages[activeStageIndex].accent : "intro";

  return (
    <section
      className={styles.journey}
      data-accent={accent}
      id="journey"
      ref={sectionRef}
      aria-label="Интерактивный путь разработчика"
    >
      <div className={styles.stickyScene}>
        <div className={styles.world} aria-hidden="true">
          <div className={styles.worldGlow} />
          <div className={styles.gridPlane} />
          <div className={`${styles.contour} ${styles.contourOne}`} />
          <div className={`${styles.contour} ${styles.contourTwo}`} />
          <div className={styles.scanLine} />
        </div>
        <div className={styles.heroArt} data-visible={activeStageIndex === -1 || undefined} aria-hidden="true">
          <Image className={styles.heroDesktop} src="/profile/hero-map-v2.png" alt="" fill priority sizes="100vw" />
          <Image className={styles.heroMobile} src="/profile/hero-map-mobile.png" alt="" fill priority sizes="100vw" />
          <div className={styles.heroVeil} />
        </div>

        <div className={styles.sceneHud}>
          <span><MapPin size={13} /> Архангельск · 64.54° N</span>
          <span className={styles.progress}><i /><b>{progress.toString().padStart(2, "0")}%</b></span>
        </div>

        <div className={styles.sceneContent}>
          <div className={styles.introScene} data-visible={activeStageIndex === -1 || undefined}>
            <div className={styles.introCopy}>
              <span className={styles.eyebrow}><Sparkles size={15} /> Developer expedition / 2026</span>
              <h1><span>Алексей Вальков</span><strong>Путь разработчика</strong></h1>
              <p className={styles.role}>Unity → Web → Fullstack → Automation</p>
              <p className={styles.summary}>
                Не список технологий, а маршрут через реальные проекты — от игровых миров
                до систем, которые автоматизируют работу.
              </p>
              <button className={styles.startButton} type="button" onClick={() => scrollToStage(0)}>
                Запустить экспедицию <ArrowDown size={17} />
              </button>
            </div>

          </div>

          {journeyStages.map((stage, index) => (
            <StageScene
              active={activeStageIndex === index}
              index={index}
              key={stage.id}
              stage={stage}
            />
          ))}
        </div>

        <nav className={styles.routeNav} aria-label="Главы пути">
          <div className={styles.routeLine} aria-hidden="true">
            <span className={styles.routeFill} />
            <span className={styles.traveler}><Route size={13} /></span>
          </div>
          {journeyStages.map((stage, index) => {
            const Icon = stageIcons[stage.icon];
            const active = activeStageIndex === index;
            const passed = activeStageIndex > index;

            return (
              <button
                aria-current={active ? "step" : undefined}
                aria-label={`Перейти к этапу ${stage.label}`}
                className={styles.routeNode}
                data-active={active || undefined}
                data-passed={passed || undefined}
                key={stage.id}
                onClick={() => scrollToStage(index)}
                type="button"
              >
                <span>{passed ? <Check size={16} /> : <Icon size={16} />}</span>
                <small>{stage.label}</small>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

function StageScene({ active, index, stage }: { active: boolean; index: number; stage: JourneyStage }) {
  const Icon = stageIcons[stage.icon];
  const primaryMission = stage.missions[0];

  return (
    <article className={styles.stageScene} data-visible={active || undefined} aria-hidden={!active}>
      <div className={styles.stageCopy}>
        <span className={styles.eyebrow}>{stage.chapter} / {stage.label}</span>
        <span className={styles.ghostNumber}>0{index + 1}</span>
        <h2>{stage.title}</h2>
        <p>{stage.summary}</p>
        <div className={styles.skills} aria-label="Технологии главы">
          {stage.skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <ul className={styles.achievements}>
          {stage.achievements.map((achievement) => <li key={achievement}><Check size={13} /> {achievement}</li>)}
        </ul>
        <div className={styles.missionLinks}>
          {stage.missions.map((mission) => <MissionLink key={mission.title} mission={mission} />)}
        </div>
      </div>

      <div className={styles.artifact}>
        <div className={`${styles.orbit} ${styles.artifactOrbit}`} />
        <span className={styles.artifactIndex}>Artifact / 0{index + 1}</span>
        <MissionDestination mission={primaryMission} className={styles.artifactCard}>
          <div className={styles.artifactMedia}>
            {primaryMission.image ? (
              <Image src={primaryMission.image} alt="" fill sizes="(max-width: 760px) 70vw, 38vw" />
            ) : (
              <Icon size={92} strokeWidth={1.1} />
            )}
            <div className={styles.artifactShade} />
          </div>
          <div className={styles.artifactCaption}>
            <span>{missionStatusLabel[primaryMission.status]}</span>
            <b>{primaryMission.title}</b>
            <ArrowRight size={18} />
          </div>
        </MissionDestination>
        <div className={styles.artifactIcon}><Icon size={24} /></div>
      </div>
    </article>
  );
}

function MissionLink({ mission }: { mission: JourneyMission }) {
  return (
    <MissionDestination className={styles.missionLink} mission={mission}>
      <span><i data-status={mission.status} /> {missionStatusLabel[mission.status]}</span>
      <b>{mission.title}</b>
      {mission.href && mission.projectSlug ? <ExternalLink size={13} /> : <ArrowRight size={14} />}
    </MissionDestination>
  );
}

function MissionDestination({
  children,
  className,
  mission
}: {
  children: React.ReactNode;
  className: string;
  mission: JourneyMission;
}) {
  if (mission.projectSlug) return <Link className={className} href={`/projects/${mission.projectSlug}`}>{children}</Link>;
  return <a className={className} href={mission.href} target="_blank" rel="noreferrer">{children}</a>;
}
