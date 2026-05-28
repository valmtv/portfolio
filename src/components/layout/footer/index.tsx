"use client"

import { useThemeClasses } from "hooks/use-theme-classes"
import { BrutalismFooter } from "./brutalism-footer"
import { CyberpunkFooter } from "./cyberpunk-footer"

export function Footer() {
  const { isCyberpunk } = useThemeClasses()
  return isCyberpunk ? <CyberpunkFooter /> : <BrutalismFooter />
}