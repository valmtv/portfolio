import { ThemeText } from "components/theme-text"
import { Github } from "lucide-react"

export function TaskFlowProject() {
  const techStack = ["React", "MUI", "Node.js", "Express.js", "MySQL", "JWT", "Google API", "Swagger"]
  const projectLink = "https://github.com/valmtv/task-manager"
  const dateRange = "Jan 2025 - March 2025"

  return (
    <div className="pt-6 border-theme-border">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="text-lg font-semibold text-theme-foreground">TaskFlow Manager</h5>
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

      <ThemeText muted className="mb-3">
        Full-stack web application for task management, featuring task creation, assignment, and user
        profile handling with email confirmation. Implemented JWT authentication with optional Google
        OAuth, designed and built frontend components, integrated Express.js APIs, and authored all
        database interactions using raw SQL (no ORM per course requirements).
      </ThemeText>

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
