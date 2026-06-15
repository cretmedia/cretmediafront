"use client";

import { Laptop2, Palette } from "lucide-react";
import { useColorTheme } from "@/components/color-theme-provider";

export function ThemeToggle() {
  const { apiThemeAvailable, isLoading, mode, toggleMode } = useColorTheme();

  const checked = mode === "api";
  const disabled = isLoading || !apiThemeAvailable;

  return (
    <button
      type="button"
      onClick={toggleMode}
      disabled={disabled}
      aria-label={checked ? "Switch to present theme" : "Switch to API theme"}
      aria-pressed={checked}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card disabled:cursor-not-allowed disabled:opacity-60"
      title={disabled ? "API theme unavailable" : checked ? "Using API theme" : "Using present theme"}
    >
      <span
        className={`relative flex h-6 w-12 items-center rounded-full transition-colors ${
          checked ? "bg-primary/25" : "bg-secondary"
        }`}
      >
        <span
          className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform ${
            checked ? "translate-x-6" : "translate-x-0.5"
          }`}
        >
          {checked ? <Palette size={12} /> : <Laptop2 size={12} />}
        </span>
      </span>
      <span className="hidden sm:inline">{checked ? "API Theme" : "Present Theme"}</span>
    </button>
  );
}
