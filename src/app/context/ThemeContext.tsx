"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Provide a default context value to prevent errors when used outside provider
const defaultContextValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Set the theme on initial load
  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || getSystemTheme();
    
    setTheme(initialTheme);
    setMounted(true);
    
    // Add a listener for system theme changes (if no theme is set in localStorage)
    if (!savedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setTheme(getSystemTheme());
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Update the theme class on the html element and save to localStorage
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    // Remove both classes first to avoid conflicts
    root.classList.remove('light', 'dark');
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Prevent hydration mismatch by only rendering children when mounted
  if (!mounted) {
    return (
      <div className="h-screen w-full" suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
