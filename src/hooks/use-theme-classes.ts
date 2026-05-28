"use client"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"

/**
 * Convenience hook that combines useTheme() + getThemeClasses() into a single
 * call. All Theme* components should use this instead of calling the two
 * separately.
 */
export function useThemeClasses() {
  const { theme, setTheme, themeConfig } = useTheme()
  return {
    theme,
    setTheme,
    themeConfig,
    isCyberpunk: theme === "cyberpunk",
    classes: getThemeClasses(theme),
  }
}
