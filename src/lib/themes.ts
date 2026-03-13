export type ThemeType = "brutalism" | "cyberpunk"

export interface ThemeConfig {
  name: string
  description: string
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
  cyberpunk: {
    name: "Cyberpunk",
    description: "High-tech, low-life. System unstable.",
    typography: {
      headingFont: "font-mono",
      bodyFont: "font-mono",
      headingWeight: "font-bold",
      bodyWeight: "font-normal",
    },
    effects: {
      borderWidth: "border-0",
      borderRadius: "rounded-none",
      shadow: "shadow-none",
      shadowHover: "brightness-110", 
      transition: "transition-none",
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