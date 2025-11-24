import { ThemeText } from "components/theme-text"
import { cn } from "lib/utils"
import { Github } from "lucide-react"

export function StudentTestingProject() {
  const dateRange = "April 2025 - June 2025"
  const projectLink = "https://github.com/LilConsul/hell-app"
  const techStack = ["React", "React Router", "Tailwind CSS", "Shadcn/ui", "Vite", "Git"]

  const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="text-lg font-semibold text-theme-foreground">Student Testing Platform</h5>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-lg hover:underline text-theme-accent"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
        <ThemeText muted className="text-sm whitespace-nowrap">
          {dateRange}
        </ThemeText>
      </div>

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Led the frontend development for a full-stack student testing application, mentoring two
          junior developers and managing the team&apos;s Git workflow (including PR reviews).
        </li>
        <li>
          Architected and implemented the entire user-facing application using React, TypeScript, and
          React Router, building all views for authentication, exam management, and student dashboards.
        </li>
        <li>
          Developed a library of reusable components (e.g., debounced inputs, date-time pickers,
          pagination) using Tailwind CSS and Shadcn/ui to ensure UI consistency and stability.
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium bg-theme-accent text-theme-accentForeground opacity-90 border border-theme-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}