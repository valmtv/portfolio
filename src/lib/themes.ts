export type ThemeType = "brutalism" | "neomorphism"

export interface ThemeConfig {
  name: string
  description: string
  colors: {
    background: string
    foreground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    accent: string
    accentForeground: string
    muted: string
    mutedForeground: string
    border: string
    card: string
    cardForeground: string
  }
  typography: {
    headingFont: "font-mono" | "font-sans"
    bodyFont: "font-mono" | "font-sans"
    headingWeight: string
    bodyWeight: string
  }
  effects: {
    borderWidth: string
    borderRadius: string
    shadow: string
    shadowHover: string
    transition: string
  }
}

export const themes: Record<ThemeType, ThemeConfig> = {
  brutalism: {
    name: "Brutalism",
    description: "Bold, honest, and direct",
    colors: {
      background: "#ffffff",
      foreground: "#000000",
      primary: "#000000",
      primaryForeground: "#ffffff",
      secondary: "#86efac",
      secondaryForeground: "#000000",
      accent: "#86efac",
      accentForeground: "#000000",
      muted: "#f5f5f5",
      mutedForeground: "#737373",
      border: "#000000",
      card: "#ffffff",
      cardForeground: "#000000",
    },
    typography: {
      headingFont: "font-mono",
      bodyFont: "font-mono",
      headingWeight: "font-bold",
      bodyWeight: "font-normal",
    },
    effects: {
      borderWidth: "border-2",
      borderRadius: "rounded-none",
      shadow: "shadow-[6px_6px_0px_black]",
      shadowHover: "hover:shadow-[8px_8px_0px_black]",
      transition: "transition-all duration-300",
    },
  },
  neomorphism: {
    name: "Neomorphism",
    description: "Soft, subtle, and refined",
    colors: {
      background: "#e0e5ec",
      foreground: "#2c3e50",
      primary: "#6366f1",
      primaryForeground: "#ffffff",
      secondary: "#8b5cf6",
      secondaryForeground: "#ffffff",
      accent: "#ec4899",
      accentForeground: "#ffffff",
      muted: "#d1d5db",
      mutedForeground: "#6b7280",
      border: "#c7ccd4",
      card: "#e0e5ec",
      cardForeground: "#2c3e50",
    },
    typography: {
      headingFont: "font-sans",
      bodyFont: "font-sans",
      headingWeight: "font-semibold",
      bodyWeight: "font-normal",
    },
    effects: {
      borderWidth: "border-0",
      borderRadius: "rounded-2xl",
      shadow: "shadow-[8px_8px_16px_#b8bec8,-8px_-8px_16px_#ffffff]",
      shadowHover: "hover:shadow-[12px_12px_24px_#b8bec8,-12px_-12px_24px_#ffffff]",
      transition: "transition-all duration-500",
    },
  },
}

export function getThemeClasses(theme: ThemeType) {
  const config = themes[theme]
  return {
    heading: `${config.typography.headingFont} ${config.typography.headingWeight}`,
    body: `${config.typography.bodyFont} ${config.typography.bodyWeight}`,
    card: `${config.effects.borderWidth} ${config.effects.borderRadius} ${config.effects.shadow} ${config.effects.transition}`,
    cardHover: config.effects.shadowHover,
    button: `${config.effects.borderWidth} ${config.effects.borderRadius} ${config.typography.bodyFont} ${config.typography.headingWeight}`,
    transition: config.effects.transition,
  }
}

