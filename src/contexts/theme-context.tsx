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
    // Apply theme to document - CSS variables are handled by global.css
    document.documentElement.setAttribute("data-theme", theme)
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