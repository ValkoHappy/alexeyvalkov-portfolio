"use client";

import { useEffect, useRef } from "react";
import styles from "./MapWorld.module.css";

export function MapWorld() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    let frame = 0;

    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      world.style.setProperty("--map-progress", progress.toString());
      world.style.setProperty("--map-shift", `${progress * -180}px`);
      world.style.setProperty("--grid-shift", `${progress * -58}px`);
      world.style.setProperty("--contour-shift", `${progress * -86}px`);
      world.style.setProperty("--route-shift", `${progress * -320}px`);
      world.style.setProperty("--map-rotation", `${progress * 9}deg`);
      world.style.setProperty("--fog-x", `${progress * 70}px`);
      world.style.setProperty("--fog-y", `${progress * -45}px`);
    };

    const requestScrollUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScroll);
    };

    const updatePointer = (event: PointerEvent) => {
      world.style.setProperty("--pointer-x", `${event.clientX}px`);
      world.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
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
      <div className={styles.route}>
        <span /><span /><span /><span /><span /><span />
      </div>
      <div className={styles.fog} />
    </div>
  );
}
