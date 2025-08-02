'use client';

import { useState, createContext, useContext, ReactNode } from "react";

// Theme context for light/dark/system
const ThemeContext = createContext({
  theme: "system",
  setTheme: (_theme: string) => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("system");

  // Determine class for body
  let themeClass = "theme-system";
  if (theme === "light") themeClass = "theme-light";
  if (theme === "dark") themeClass = "theme-dark";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`bg-app text-app ${themeClass}`}>
        {/* Theme Switcher (demo) */}
        <div style={{ position: 'fixed', top: 8, right: 16, zIndex: 1000 }}>
          <button onClick={() => setTheme("light")} className="mx-1 px-2 py-1 rounded bg-gray-200 text-black">Light</button>
          <button onClick={() => setTheme("dark")} className="mx-1 px-2 py-1 rounded bg-gray-800 text-white">Dark</button>
          <button onClick={() => setTheme("system")} className="mx-1 px-2 py-1 rounded bg-gray-400 text-black">System</button>
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
