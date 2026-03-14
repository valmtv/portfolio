"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type ThemeType, themes } from "lib/themes"

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  themeConfig: (typeof themes)[ThemeType]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("brutalism")

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeType | null
    if (savedTheme && savedTheme in themes) {
      setThemeState(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme)

    // --- Dynamic Favicon Logic ---
    // Find and remove ANY existing default favicons Next.js injected
    const existingIcons = document.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach((icon) => {
      if (icon.id !== "dynamic-favicon") {
        icon.remove();
      }
    });

    // Find or create our custom dynamic favicon tag
    let dynamicFavicon = document.getElementById("dynamic-favicon") as HTMLLinkElement | null;
    
    if (!dynamicFavicon) {
      dynamicFavicon = document.createElement("link");
      dynamicFavicon.id = "dynamic-favicon";
      dynamicFavicon.rel = "icon";
      document.head.appendChild(dynamicFavicon);
    }
    
    // Explicitly set the type to SVG, and update the URL
    dynamicFavicon.type = "image/svg+xml";
    dynamicFavicon.href = `/favicon-${theme}.svg`;
    
  }, [theme])

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}