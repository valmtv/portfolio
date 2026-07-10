import { ProjectHeader } from "./project-header"
import { ProjectTags } from "./project-tags"
import { cn } from "lib/utils"
import { ProjectData } from "lib/data/projects-data"

export interface ProjectCardProps {
  data: ProjectData
  variant?: "full" | "summary"
}

export function ProjectCard({ data, variant = "full" }: ProjectCardProps) {
  const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"
  const content = variant === "summary" && data.content.summary ? data.content.summary : data.content.full

  return (
    <div>
      <ProjectHeader meta={data} />

      {variant === "full" && data.content.full.prose && (
        <div className="space-y-3 mb-6">
          {data.content.full.prose.map((paragraph, i) => (
            <p key={i} className={textBodyClasses}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        {content.bullets.map((bullet, i) => (
          <li key={i} className={cn("flex gap-2", textBodyClasses)}>
            <span className="text-theme-primary flex-shrink-0 mt-0.5" aria-hidden="true">
              →
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <ProjectTags tags={data.techStack} />
    </div>
  )
}
