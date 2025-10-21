"use client"

import Link from "next/link"
import { ThemeHeading } from "components/theme-heading"
import { ThemeText } from "components/theme-text"
import { ThemeCard } from "components/theme-card"
import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"
import { Rocket, Home } from "lucide-react"

function ComingSoonPage() {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <div className="min-h-screen bg-theme-secondary flex items-center justify-center p-4 pt-20">
      <div className="max-w-4xl w-full">
        <ThemeCard className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className={cn(
                "inline-block p-8 bg-theme-accent border-theme-border",
                classes.card,
                classes.transition
              )}
            >
              <Rocket className="w-16 h-16 text-theme-accentForeground" />
            </div>
          </div>

          {/* Title */}
          <ThemeHeading level={1} className="mb-6">
            COMING SOON
          </ThemeHeading>

          {/* Description */}
          <ThemeText muted className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            This page is under construction and will be worth the wait!
          </ThemeText>

          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3",
                "bg-theme-accent text-theme-accentForeground border-theme-border",
                classes.button,
                classes.transition,
                "hover:-translate-y-1"
              )}
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Msg to make the page look complete */}
          <ThemeText muted className="text-sm">
            Expected launch: <span className="font-bold text-theme-foreground">Soon</span>
          </ThemeText>
        </ThemeCard>
      </div>
    </div>
  )
}

export default ComingSoonPage;
