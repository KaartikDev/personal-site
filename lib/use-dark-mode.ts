"use client";

import { useSyncExternalStore } from "react";

// Tracks whether the `dark` class is present on <html>, kept in sync with
// ThemeToggle's clicks and the anti-flash script in app/layout.tsx.
// Uses useSyncExternalStore (not useState + useEffect) so components don't
// need an effect that calls setState just to read an external DOM value.

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  // Matches the default `dark` class set in app/layout.tsx so there is no
  // server/client mismatch on first paint.
  return true;
}

export function useIsDarkMode() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
