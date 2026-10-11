"use client";

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

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
      }}
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
