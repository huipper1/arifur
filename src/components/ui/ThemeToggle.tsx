"use client";

import { useSyncExternalStore, useState } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", next);
  };

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) {
    return (
      <div
        className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/50 flex items-center justify-center opacity-60 shrink-0"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0 active:scale-95 shadow-xs"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-neutral-600 transition-transform hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-neutral-300 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
