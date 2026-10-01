"use client";

import Waves from "@/components/Waves";
import { useIsDarkMode } from "@/lib/use-dark-mode";

// Wave lines are tinted with the palette rather than plain black/white -
// a faint phosphor green on dark water, neutral ink on bright foam.
const LINE_COLOR = {
  dark: "rgba(120, 235, 165, 0.22)",
  light: "rgba(140, 141, 132, 0.28)",
};

export function WavesBackground() {
  const dark = useIsDarkMode();

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Waves
        lineColor={dark ? LINE_COLOR.dark : LINE_COLOR.light}
        backgroundColor="transparent"
        waveSpeedX={0.0175}
        waveSpeedY={0.0075}
        waveAmpX={32}
        waveAmpY={16}
        friction={0.925}
        tension={0.005}
        maxCursorMove={100}
        xGap={12}
        yGap={36}
      />
    </div>
  );
}
