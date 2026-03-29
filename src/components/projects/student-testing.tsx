import { ThemeText } from "components/ui/base/theme-text"
import { cn } from "lib/utils"
/* Centralized Project Metadata */
import { PROJECTS_META } from "lib/data/projects-meta"
/* Atomic Project UI Components */
import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"

const meta = PROJECTS_META["student-testing"]!;
const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

/* 
  HONEST TAKE: Used in the /projects page 
*/
export function StudentTestingProject() {
  return (
    <div>
      <ProjectHeader meta={meta} />

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Took the lead on frontend development, managing the team&apos;s Git workflow and conducting
          PR reviews for two junior developers.
        </li>
        <li>
          Built most of the student-facing and teacher-facing interfaces in React and JavaScript using
          React Router - auth flows, exam management, student dashboards, and shared views.
        </li>
        <li>
          Extended Shadcn/ui with custom reusable components (debounced inputs, date-time pickers,
          pagination) using Tailwind CSS to keep the UI consistent across all views.
        </li>
      </ul>

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}

/* 
  OFFICIAL VERSION: Used on the Homepage/CV 
*/
export function StudentTestingOfficial() {
  return (
    <div>
      <ProjectHeader meta={meta} />
      
      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Took the lead on frontend development, managing the team&apos;s Git workflow and conducting
          PR reviews for two junior developers.
        </li>
        <li>
          Built most of the student-facing and teacher-facing interfaces in React and JavaScript using
          React Router - auth flows, exam management, student dashboards, and shared views.
        </li>
        <li>
          Extended Shadcn/ui with custom reusable components (debounced inputs, date-time pickers,
          pagination) using Tailwind CSS to keep the UI consistent across all views.
        </li>
      </ul>

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}