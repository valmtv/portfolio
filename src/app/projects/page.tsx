"use client"

import { ThemeHeading } from "components/ui/base/theme-heading"
import { ThemeText } from "components/ui/base/theme-text"
import { useThemeClasses } from "hooks/use-theme-classes"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"
import { PROJECTS_DATA, ProjectData } from "lib/data/projects-data"

const projectContents = Object.values(PROJECTS_DATA)

function TimelineNode({ isCyberpunk }: { isCyberpunk: boolean }) {
  if (isCyberpunk) {
    return (
      <div
        className="relative z-10 w-3 h-3 rounded-full bg-theme-primary flex-shrink-0"
        style={{ boxShadow: "0 0 6px var(--theme-primary), 0 0 14px var(--theme-primary)" }}
      />
    )
  }
  return (
    <div className="relative z-10 w-3 h-3 flex-shrink-0 bg-theme-foreground border-2 border-theme-border" />
  )
}

interface ProjectEntryProps {
  content: ProjectData
  isLast: boolean
  isCyberpunk: boolean
  classes: ReturnType<typeof getThemeClasses>
}

function ProjectEntry({ content: meta, isLast, isCyberpunk, classes }: ProjectEntryProps) {
  const content = meta.content.full

  return (
    <div className="flex gap-5 md:gap-8 group">
      {/* Left column: node + line */}
      <div className="flex flex-col items-center w-3 flex-shrink-0">
        <div className="mt-[6px]">
          <TimelineNode isCyberpunk={isCyberpunk} />
        </div>
        {!isLast && (
          <div
            className={cn("w-px flex-1 mt-3", isCyberpunk ? "bg-theme-primary opacity-30" : "bg-theme-border")}
            style={isCyberpunk ? { boxShadow: "0 0 4px var(--theme-primary)" } : undefined}
          />
        )}
      </div>

      {/* Right column: content */}
      <div className={cn("flex-1 min-w-0", !isLast && "pb-12 md:pb-16")}>
        <ProjectHeader meta={meta} />

        {/* Prose */}
        <div className="space-y-3 mb-6">
          {content.prose.map((paragraph, i) => (
            <ThemeText key={i} muted>
              {paragraph}
            </ThemeText>
          ))}
        </div>

        {/* Divider */}
        <div
          className={cn("border-t mb-5", isCyberpunk ? "border-theme-border opacity-30" : "border-theme-border")}
          aria-hidden="true"
        />

        {/* Technical bullets */}
        <ul className="space-y-2 mb-6" aria-label={`Key features of ${meta.title}`}>
          {content.bullets.map((bullet, i) => (
            <li key={i} className={cn("flex gap-2 text-sm md:text-base text-theme-mutedForeground", classes.body)}>
              <span className="text-theme-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                →
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <ProjectTags tags={meta.techStack} className={isCyberpunk ? "[&>span]:shadow-[2px_2px_0px_var(--theme-primary)]" : ""} />
      </div>
    </div>
  )
}

function ProjectsPage() {
  const { isCyberpunk, classes } = useThemeClasses()

  return (
    <div className="min-h-screen bg-theme-background">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 pt-28 md:pt-36">
        <ThemeHeading level={1} className="mb-4">
          Projects
        </ThemeHeading>
        <ThemeText muted className="mb-16 max-w-2xl">
          {projectContents.length === 0 ? "No projects documented yet." :
            `${projectContents.length} projects documented here so far. Each one taught me something different - sometimes about the tech, sometimes about how I work.`}
        </ThemeText>

        <div className="relative">
          {projectContents.map((content, index) => (
            <ProjectEntry
              key={content.id}
              content={content}
              isLast={index === projectContents.length - 1}
              isCyberpunk={isCyberpunk}
              classes={classes}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage
