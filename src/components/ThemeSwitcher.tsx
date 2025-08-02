"use client";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setTheme("light")}
        className={`btn btn-ghost p-2 rounded ${theme === "light" ? "bg-accent" : ""}`}
        aria-label="Light theme"
      >
        <FaSun size={16} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`btn btn-ghost p-2 rounded ${theme === "dark" ? "bg-accent" : ""}`}
        aria-label="Dark theme"
      >
        <FaMoon size={16} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`btn btn-ghost p-2 rounded ${theme === "system" ? "bg-accent" : ""}`}
        aria-label="System theme"
      >
        <FaDesktop size={16} />
      </button>
    </div>
  );
} 