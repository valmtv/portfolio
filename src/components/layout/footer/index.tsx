"use client"

import { useTheme } from "contexts/theme-context"
import { BrutalismFooter } from "./brutalism-footer"
import { CyberpunkFooter } from "./cyberpunk-footer"

export function Footer() {
  const { theme } = useTheme()
  return theme === "cyberpunk" ? <CyberpunkFooter /> : <BrutalismFooter />
}