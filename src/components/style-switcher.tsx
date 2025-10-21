"use client"

import { useTheme } from "contexts/theme-context"
import { ThemeButton } from "./theme-button"

export function StyleSwitcher() {
  const { theme, setTheme, themeConfig } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "brutalism" ? "neomorphism" : "brutalism")
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      <div
        className="text-sm px-3 py-1 rounded"
        style={{
          backgroundColor: themeConfig.colors.muted,
          color: themeConfig.colors.mutedForeground,
        }}
      >
        Current: {themeConfig.name}
      </div>
      <ThemeButton onClick={toggleTheme} variant="accent">
        Switch Style
      </ThemeButton>
    </div>
  )
}

