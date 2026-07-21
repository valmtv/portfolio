"use client"

import Link from "next/link"
import { ThemeHeading } from "components/ui/base/theme-heading"
import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"

interface ExplorCardProps {
  title: string
  description: string
  href: string
  disabled?: boolean
}

function ExploreCard({ title, description, href, disabled = false }: ExplorCardProps) {
  const { classes } = useThemeClasses()

  if (disabled) {
    return (
      <div
        className={cn(
          "block p-6 md:p-8 relative",
          "bg-theme-card text-theme-cardForeground border-theme-border",
          classes.card,
          "opacity-50 cursor-not-allowed select-none"
        )}
        aria-disabled="true"
      >
        {/* Coming soon badge */}
        <span
          className={cn(
            "absolute top-4 right-4",
            "font-mono text-xs font-bold tracking-widest uppercase",
            "border border-theme-border px-2 py-0.5",
            "text-theme-mutedForeground"
          )}
        >
          soon
        </span>
        <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3 text-theme-foreground")}>
          {title}
        </h3>
        <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
          {description}
        </p>
      </div>
    )
  }

  // Cyberpunk: decorative wrapper (matches SectionCard behaviour)
  if (classes.cardWrapperClass) {
    return (
      <Link href={href} className="block group relative">
        <div
          className={cn(
            classes.cardWrapperClass,
            "transition-all duration-300 h-full",
            "group-hover:translate-x-1 group-hover:-translate-y-1"
          )}
        >
          <article className="h-full w-full p-6 md:p-8 text-theme-cardForeground flex flex-col">
            <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3 text-theme-foreground group-hover:text-theme-primary transition-colors")}>
              <span className={classes.headingClass} data-text={title}>{title}</span>
            </h3>
            <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
              {description}
            </p>
          </article>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "block p-6 md:p-8",
        "bg-theme-card text-theme-cardForeground border-theme-border",
        classes.card,
        classes.cardHover,
        "hover:-translate-x-1 hover:-translate-y-1",
        "group"
      )}
    >
      <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3 text-theme-foreground")}>
        {title}
      </h3>
      <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
        {description}
      </p>
    </Link>
  )
}

export function ExploreSection() {
  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={2} className="mb-8">
        Explore
      </ThemeHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ExploreCard
          title="Projects"
          description="Full technical writeups on what I built, what broke, and what I'd do differently."
          href="/projects"
        />

        <ExploreCard
          title="Journey"
          description="My path through CS — foundational skills, key moments, and where I'm headed."
          href="/journey"
          disabled
        />

        <ExploreCard
          title="University"
          description="Academic experiences at AGH Kraków and Erasmus at NOVA School of Science and Technology."
          href="/university"
          disabled
        />
      </div>
    </section>
  )
}
