import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: true, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true; // default: dark
  });

  // Apply / remove the light-mode class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('light-mode');
    } else {
      html.classList.add('light-mode');
    }
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => {
    // Briefly add theme-transition so every element eases into new colors
    document.documentElement.classList.add('theme-transition');
    setIsDark((prev) => !prev);
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 400);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
