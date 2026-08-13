"use client";

import { useEffect, useRef } from "react";
import styles from "./MapWorld.module.css";

export function MapWorld() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const isTouchLayout = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 820px)").matches;

    let frame = 0;

    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      world.style.setProperty("--map-progress", progress.toString());
      world.style.setProperty("--map-position", `${progress * 100}%`);
      world.style.setProperty("--map-shift", `${progress * -18}px`);
      world.style.setProperty("--grid-shift", `${progress * -28}px`);
      world.style.setProperty("--contour-shift", `${progress * -44}px`);
      world.style.setProperty("--map-rotation", `${progress * 3}deg`);
      world.style.setProperty("--fog-x", `${progress * 30}px`);
      world.style.setProperty("--fog-y", `${progress * -24}px`);
    };

    const requestScrollUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScroll);
    };

    const updatePointer = (event: PointerEvent) => {
      world.style.setProperty("--pointer-x", `${event.clientX}px`);
      world.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    if (isTouchLayout) {
      updateScroll();
      return undefined;
    }

    const settleTimer = window.setTimeout(updateScroll, 300);
    updateScroll();
    frame = requestAnimationFrame(updateScroll);
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div className={styles.world} ref={worldRef} aria-hidden="true">
      <div className={styles.base} />
      <div className={styles.pointerGlow} />
      <div className={styles.grid} />
      <div className={styles.contours}>
        <i /><i /><i /><i />
      </div>
      <div className={styles.fog} />
    </div>
  );
}
