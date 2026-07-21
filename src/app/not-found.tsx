"use client"

import Link from "next/link"
import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"

export default function NotFound() {
  const { classes, isCyberpunk } = useThemeClasses()

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center px-4 md:px-8">
      {/* Giant 404 */}
      <div className="relative mb-6 select-none" aria-hidden="true">
        <span
          className={cn(
            "font-mono font-bold leading-none",
            "text-[clamp(7rem,22vw,16rem)]",
            "text-theme-foreground",
            isCyberpunk ? "cyberpunk-text" : "tracking-tighter"
          )}
          data-text="404"
        >
          404
        </span>

        {/* Brutalism accent bar under the number */}
        {!isCyberpunk && (
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-theme-accent" />
        )}
      </div>

      {/* Label */}
      <p
        className={cn(
          "font-mono text-xs font-bold tracking-[0.3em] uppercase mb-6",
          isCyberpunk ? "text-theme-primary" : "text-theme-mutedForeground"
        )}
      >
        Page not found
      </p>

      {/* Message */}
      <p
        className={cn(
          "font-mono text-base md:text-lg text-center max-w-sm mb-10",
          "text-theme-mutedForeground leading-relaxed"
        )}
      >
        This URL doesn&apos;t exist. You probably followed a dead link or typed something wrong.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className={cn(
          "px-8 py-3 font-mono font-bold text-sm tracking-widest uppercase",
          classes.button,
          classes.transition,
          isCyberpunk
            ? classes.buttonClass
            : "bg-theme-foreground text-theme-background border-theme-border hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutalism-hover"
        )}
      >
        ← Back to home
      </Link>
    </div>
  )
}
