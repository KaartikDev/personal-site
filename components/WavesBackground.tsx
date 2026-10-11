"use client";

import { useEffect, useRef } from "react";
import Waves from "@/components/Waves";
import { useIsDarkMode } from "@/lib/use-dark-mode";

// Wave lines are tinted with the palette rather than plain black/white -
// a faint phosphor green on dark water, neutral ink on bright foam.
const LINE_COLOR = {
  dark: "rgba(120, 235, 165, 0.24)",
  light: "rgba(140, 141, 132, 0.3)",
};

export function WavesBackground() {
  const dark = useIsDarkMode();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updatePosition = () => {
      frame = 0;
      // Follow normal scrolling, but stay in place when the page bounces past the top.
      if (wrapperRef.current) {
        const offset = Math.min(wrapperRef.current.offsetHeight, Math.max(0, window.scrollY));
        wrapperRef.current.style.transform = `translate3d(0, -${offset}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="wave-background pointer-events-none fixed inset-x-0 top-0 z-0 h-56 overflow-hidden"
      aria-hidden="true"
    >
      <Waves
        lineColor={dark ? LINE_COLOR.dark : LINE_COLOR.light}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.008}
        waveAmpX={38}
        waveAmpY={18}
        friction={0.925}
        tension={0.005}
        maxCursorMove={60}
        xGap={12}
        yGap={24}
      />
    </div>
  );
}
