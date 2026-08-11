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
  Workflow
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { journeyStages, type JourneyIcon, type JourneyMission } from "@/data/journey";
import styles from "./ScrollJourney.module.css";

const INTRO_SHARE = 0.14;

const stageIcons: Record<JourneyIcon, typeof Gamepad2> = {
  gamepad: Gamepad2,
  globe: Globe2,
  code: Code2,
  workflow: Workflow,
  flag: Flag
};

const missionStatusLabel: Record<JourneyMission["status"], string> = {
  live: "В игре",
  complete: "Завершено",
  case: "Кейс"
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const updateScene = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = clamp(-rect.top / travel, 0, 1);
      const stageProgress = clamp((nextProgress - INTRO_SHARE) / (1 - INTRO_SHARE), 0, 0.9999);
      const nextStageIndex = nextProgress < INTRO_SHARE
        ? -1
        : Math.floor(stageProgress * journeyStages.length);

      section.style.setProperty("--route-progress", `${nextProgress * 100}%`);
      section.style.setProperty("--scene-scale", `${1 + nextProgress * 0.075}`);
      section.style.setProperty("--scene-x", `${nextProgress * -3.8}%`);
      section.style.setProperty("--mist-x", `${nextProgress * 9}%`);

      setActiveStageIndex((current) => current === nextStageIndex ? current : nextStageIndex);
      setProgress((current) => {
        const rounded = Math.round(nextProgress * 100);
        return current === rounded ? current : rounded;
      });
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScene);
    };

    updateScene();
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
    const targetProgress = INTRO_SHARE + ((index + 0.42) / journeyStages.length) * (1 - INTRO_SHARE);
    window.scrollTo({
      top: section.offsetTop + travel * targetProgress,
      behavior: "smooth"
    });
  }, []);

  const activeAccent = activeStageIndex >= 0
    ? journeyStages[activeStageIndex].accent
    : "copper";

  return (
    <section
      className={styles.journey}
      data-accent={activeAccent}
      id="journey"
      ref={sectionRef}
      aria-label="Интерактивный путь разработчика"
    >
      <div className={styles.stickyScene}>
        <div className={styles.backdrop} aria-hidden="true">
          <Image
            className={styles.backdropImage}
            src="/profile/hero-map-v2.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.colorWash} />
          <div className={styles.mist} />
          <div className={styles.vignette} />
          <div className={styles.grain} />
        </div>

        <div className={styles.sceneChrome}>
          <div className={styles.coordinates}>
            <MapPin size={14} /> 64.54° N / 40.54° E
          </div>
          <div className={styles.progressReadout} aria-live="polite">
            <span>Пройдено</span>
            <strong>{progress.toString().padStart(2, "0")}%</strong>
          </div>
        </div>

        <div className={styles.contentLayer}>
          <div className={styles.intro} data-visible={activeStageIndex === -1 || undefined}>
            <span className={styles.eyebrow}><Route size={16} /> Интерактивная экспедиция</span>
            <p className={styles.kicker}>Портфолио разработчика · Архангельск</p>
            <h1>Алексей <span>Вальков</span></h1>
            <h2>Путь разработчика</h2>
            <p className={styles.introSummary}>
              От игровых миров на Unity до fullstack-систем и автоматизации.
              Прокрутите страницу — и пройдите маршрут вместе со мной.
            </p>
            <a className={styles.startButton} href="#scroll-stage-unity" onClick={(event) => {
              event.preventDefault();
              scrollToStage(0);
            }}>
              Начать путь <ArrowDown size={17} />
            </a>
          </div>

          {journeyStages.map((stage, index) => (
            <article
              className={styles.stagePanel}
              data-visible={activeStageIndex === index || undefined}
              id={`scroll-stage-${stage.id}`}
              aria-hidden={activeStageIndex !== index}
              key={stage.id}
            >
              <div className={styles.stageStory}>
                <span className={styles.eyebrow}>{stage.chapter} · {stage.label}</span>
                <h2>{stage.title}</h2>
                <p>{stage.summary}</p>
                <div className={styles.skills} aria-label="Технологии этапа">
                  {stage.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <ul className={styles.achievements}>
                  {stage.achievements.map((achievement) => (
                    <li key={achievement}><Check size={14} /> {achievement}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.missions}>
                <span className={styles.missionsLabel}>Проекты главы</span>
                {stage.missions.map((mission) => (
                  <MissionLink mission={mission} key={mission.title} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <nav className={styles.routeNav} aria-label="Главы пути">
          <div className={styles.routeTrack} aria-hidden="true">
            <span style={{ width: "var(--route-progress)" } as CSSProperties} />
          </div>
          {journeyStages.map((stage, index) => {
            const Icon = stageIcons[stage.icon];
            const isActive = activeStageIndex === index;
            const isPassed = activeStageIndex > index;

            return (
              <button
                className={styles.routeNode}
                data-active={isActive || undefined}
                data-passed={isPassed || undefined}
                data-accent={stage.accent}
                type="button"
                onClick={() => scrollToStage(index)}
                aria-label={`Перейти к этапу ${stage.label}`}
                aria-current={isActive ? "step" : undefined}
                key={stage.id}
              >
                <span>{isPassed ? <Check size={18} /> : <Icon size={18} />}</span>
                <small>{stage.label}</small>
              </button>
            );
          })}
        </nav>

        <div className={styles.scrollCue} data-hidden={activeStageIndex >= 0 || undefined} aria-hidden="true">
          <span>Scroll to explore</span><i />
        </div>
      </div>
    </section>
  );
}

function MissionLink({ mission }: { mission: JourneyMission }) {
  const content = (
    <>
      <span className={styles.missionIcon}>
        {mission.image ? <Image src={mission.image} alt="" fill sizes="46px" /> : <Code2 size={18} />}
      </span>
      <span className={styles.missionCopy}>
        <small data-status={mission.status}>{missionStatusLabel[mission.status]}</small>
        <b>{mission.title}</b>
      </span>
      <ArrowRight size={17} />
    </>
  );

  if (mission.projectSlug) {
    return (
      <div className={styles.missionRow}>
        <Link href={`/projects/${mission.projectSlug}`}>{content}</Link>
        {mission.href && (
          <a className={styles.externalMission} href={mission.href} target="_blank" rel="noreferrer" aria-label={`Открыть ${mission.title}`}>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    );
  }

  return <a className={styles.missionRow} href={mission.href} target="_blank" rel="noreferrer">{content}</a>;
}
