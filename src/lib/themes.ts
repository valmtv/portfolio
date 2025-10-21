export type ThemeType = "brutalism" | "neomorphism"

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
  neomorphism: {
    name: "Neomorphism",
    description: "Soft, subtle, and refined",
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