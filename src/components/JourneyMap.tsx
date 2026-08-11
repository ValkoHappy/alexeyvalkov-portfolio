"use client";

import { ArrowRight, Check, Code2, ExternalLink, Flag, Gamepad2, Globe2, Play, Route, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { journeyStages, type JourneyIcon, type JourneyMission, type JourneyStageId } from "@/data/journey";
import styles from "./JourneyMap.module.css";

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

export function JourneyMap() {
  const [activeStageId, setActiveStageId] = useState<JourneyStageId>("unity");
  const stageRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = journeyStages.findIndex((stage) => stage.id === activeStageId);
  const activeStage = journeyStages[activeIndex];
  const progress = Math.round(((activeIndex + 1) / journeyStages.length) * 100);

  const progressLabel = useMemo(
    () => `${activeStage.chapter}: ${activeStage.label}`,
    [activeStage.chapter, activeStage.label]
  );

  function selectStage(index: number) {
    const normalizedIndex = (index + journeyStages.length) % journeyStages.length;
    setActiveStageId(journeyStages[normalizedIndex].id);
    stageRefs.current[normalizedIndex]?.focus();
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectStage(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectStage(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectStage(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectStage(journeyStages.length - 1);
    }
  }

  return (
    <section className={styles.journey} id="journey" aria-labelledby="journey-title">
      <div className={styles.mapTexture} aria-hidden="true" />
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}><Route size={15} /> Интерактивный маршрут</span>
          <h2 id="journey-title">Путь разработчика</h2>
          <p>Выберите этап — карта покажет навыки, достижения и проекты этой главы.</p>
        </div>
        <div className={styles.progressCard} aria-label={`Прогресс маршрута: ${progress}%`}>
          <div className={styles.progressRing} style={{ "--progress": `${progress * 3.6}deg` } as CSSProperties}>
            <strong>{progress}%</strong>
          </div>
          <span><small>Текущая точка</small><b>{progressLabel}</b></span>
        </div>
      </header>

      <div className={styles.routeGrid} role="tablist" aria-label="Этапы развития">
        {journeyStages.map((stage, index) => {
          const Icon = stageIcons[stage.icon];
          const isActive = stage.id === activeStageId;
          const isCompleted = index < activeIndex;

          return (
            <div className={styles.stageSlot} data-position={index + 1} key={stage.id}>
              <button
                ref={(element) => { stageRefs.current[index] = element; }}
                className={styles.stageButton}
                data-accent={stage.accent}
                data-active={isActive || undefined}
                data-completed={isCompleted || undefined}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="journey-stage-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveStageId(stage.id)}
                onKeyDown={(event) => handleStageKeyDown(event, index)}
              >
                <span className={styles.stageChapter}>{stage.chapter}</span>
                <span className={styles.stageIcon}>{isCompleted ? <Check size={23} /> : <Icon size={25} />}</span>
                <b>{stage.label}</b>
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.stagePanel} id="journey-stage-panel" role="tabpanel">
        <div className={styles.stageStory}>
          <span className={styles.chapter}>{activeStage.chapter}</span>
          <h3>{activeStage.title}</h3>
          <p>{activeStage.summary}</p>
          <div className={styles.skills} aria-label="Навыки этапа">
            {activeStage.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <ul className={styles.achievements}>
            {activeStage.achievements.map((achievement) => (
              <li key={achievement}><Check size={14} /> {achievement}</li>
            ))}
          </ul>
        </div>

        <div className={styles.missions}>
          <div className={styles.missionsTitle}><span>Проекты-миссии</span><small>{activeStage.missions.length} открыто</small></div>
          <div className={styles.missionList}>
            {activeStage.missions.map((mission) => (
              <MissionCard mission={mission} key={mission.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({ mission }: { mission: JourneyMission }) {
  const content = (
    <>
      {mission.image ? (
        <span className={styles.missionImage}>
          <Image src={mission.image} alt="" fill sizes="72px" />
        </span>
      ) : (
        <span className={styles.missionFallback}><Code2 size={21} /></span>
      )}
      <span className={styles.missionCopy}>
        <span className={styles.missionStatus} data-status={mission.status}><i /> {missionStatusLabel[mission.status]}</span>
        <b>{mission.title}</b>
        <small>{mission.description}</small>
      </span>
      <ArrowRight className={styles.missionArrow} size={18} />
    </>
  );

  return (
    <article className={styles.missionCard}>
      {mission.projectSlug ? <Link href={`/projects/${mission.projectSlug}`}>{content}</Link> : (
        <a href={mission.href} target="_blank" rel="noreferrer">{content}</a>
      )}
      {mission.href && mission.projectSlug && (
        <a className={styles.playLink} href={mission.href} target="_blank" rel="noreferrer" aria-label={`Открыть ${mission.title}`}>
          {mission.status === "live" ? <Play size={15} /> : <ExternalLink size={15} />}
        </a>
      )}
    </article>
  );
}
