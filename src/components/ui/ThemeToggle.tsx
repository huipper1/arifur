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

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:border-[var(--text-tertiary)] transition-colors cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon className="w-[18px] h-[18px] text-[var(--text-secondary)]" />
      ) : (
        <Sun className="w-[18px] h-[18px] text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
