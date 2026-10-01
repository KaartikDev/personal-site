"use client";

import { useIsDarkMode } from "@/lib/use-dark-mode";

export function ThemeToggle() {
  const dark = useIsDarkMode();

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="font-mono text-[11px] tracking-[0.15em]"
    >
      <span className="text-tide/40">[</span>
      <span className={dark ? "text-slate dark:text-mist" : "text-lantern"}>DAY</span>
      <span className="mx-1 text-tide/40">/</span>
      <span className={dark ? "text-tide" : "text-slate"}>NIGHT</span>
      <span className="text-tide/40">]</span>
    </button>
  );
}
