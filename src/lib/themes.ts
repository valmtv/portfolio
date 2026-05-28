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
    /** Extra CSS class applied to the outer card wrapper (e.g. cyberpunk-card-wrapper). Empty string for themes without one. */
    cardWrapperClass: string
    /** Extra CSS class applied to buttons (e.g. cyberpunk-btn). Empty string for themes without one. */
    buttonClass: string
    /** Extra CSS class applied to headings (e.g. cyberpunk-text for glitch effect). Empty string for themes without one. */
    headingClass: string
    /** Extra CSS class for the active/selected button state. */
    activeButtonClass: string
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
      shadow: "shadow-brutalism",
      shadowHover: "hover:shadow-brutalism-hover hover:-translate-x-0.5 hover:-translate-y-0.5",
      transition: "transition-all duration-300",
      cardWrapperClass: "",
      buttonClass: "",
      headingClass: "",
      activeButtonClass: "",
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
      cardWrapperClass: "cyberpunk-card-wrapper",
      buttonClass: "cyberpunk-btn",
      headingClass: "cyberpunk-text",
      activeButtonClass: "cyberpunk-btn-active",
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
    // Theme-specific override classes — empty string when not applicable
    cardWrapperClass: config.effects.cardWrapperClass,
    buttonClass: config.effects.buttonClass,
    headingClass: config.effects.headingClass,
    activeButtonClass: config.effects.activeButtonClass,
  }
}