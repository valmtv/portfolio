import { ThemeText } from "components/ui/theme-text"
import { cn } from "lib/utils"
import { Github } from "lucide-react"

export function StudentTestingProject() {
  const dateRange = "Apr 2025 – Jun 2025"
  const projectLink = "https://github.com/LilConsul/hell-app"
  const techStack = ["React", "JavaScript", "React Router", "Tailwind CSS", "Shadcn/ui", "Vite", "Git"]

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
            className="inline-flex items-center text-base gap-1 hover:underline text-theme-secondary"
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
          Took the lead on frontend development, managing the team&apos;s Git workflow and conducting
          PR reviews for two junior developers.
        </li>
        <li>
          Built most of the student-facing and teacher-facing interfaces in React and JavaScript using
          React Router — auth flows, exam management, student dashboards, and shared views.
        </li>
        <li>
          Extended Shadcn/ui with custom reusable components (debounced inputs, date-time pickers,
          pagination) using Tailwind CSS to keep the UI consistent across all views.
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