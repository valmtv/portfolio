import { ThemeText } from "components/ui/base/theme-text"
import { cn } from "lib/utils"
/* Centralized Project Metadata */
import { PROJECTS_META } from "lib/data/projects-meta"
/* Atomic Project UI Components */
import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"

const meta = PROJECTS_META["taskflow"]!;
const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

/* 
  HONEST TAKE: Used in the /projects page 
*/
export function TaskFlowProject() {
  return (
    <div className="pt-6 border-theme-border">
      <ProjectHeader meta={meta} />

      <ThemeText muted className="mb-3">
        Full-stack task manager with task creation, assignment, and user profiles backed by email
        confirmation. JWT auth with optional Google OAuth. Frontend built in React with MUI; backend
        in Express.js with raw SQL queries (no ORM - course requirement). API documented with Swagger.
      </ThemeText>

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}

/* 
  OFFICIAL VERSION: Used on the Homepage/CV 
*/
export function TaskFlowOfficial() {
  return (
    <div className="pt-6 border-theme-border">
      <ProjectHeader meta={meta} />
      
      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Task creation, assignment, and user profiles backed by email confirmation.
        </li>
        <li>
          JWT auth with optional Google OAuth.
        </li>
        <li>
          Express.js backend with raw SQL - no ORM, course requirement.
        </li>
        <li>
          API documented with Swagger.
        </li>
      </ul>


      <ProjectTags tags={meta.techStack} />
    </div>
  )
}