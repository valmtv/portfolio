"use client"

import { ThemeHeading } from "components/ui/base/theme-heading"
import { ThemeText } from "components/ui/base/theme-text"
import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

import { PROJECTS_META } from "lib/data/projects-meta"
import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"

interface ProjectContent {
  id: string
  prose: string[]
  bullets: string[]
}

const projectContents: ProjectContent[] = [
  {
    id: "advocate-website",
    prose: [
      "Not the most technically complex thing I've built, but probably the one I paid the most attention to detail on. The old site had two problems: it looked bad, and any content change - a new article, updated info - required a developer. That's not a sustainable setup for a working lawyer. CMS was a requirement from day one. Picked Keystatic because it's local, file-based, and the needs here were genuinely simple: edit content, publish articles. No reason to bolt on a full headless CMS for that.",
      "The actual hardest part was the data migration. The old site's content was raw HTML - inconsistent, messy, not fun. Getting it into a shape Keystatic would accept took scripting and a couple of correction passes. I also did TDD for most of the build, mostly to actually practice it rather than because a static site demanded it. It held up - no surprises, which is exactly what you want from tests on a client project. Mobile-first this time, properly, from the start.",
    ],
    bullets: [
      "Architected a statically generated site using Next.js and React, deployed via AWS S3, using AWS CLI",
      "Integrated Keystatic CMS for local, file-based content management, allowing the client to independently publish articles",
      "Engineered a custom Node.js migration pipeline utilizing Turndown to convert legacy, inconsistent HTML into clean Markdown",
      "Designed and built a fully responsive, mobile-first UI from scratch utilizing Tailwind CSS",
      "Implemented a comprehensive Test-Driven Development (TDD) workflow using Vitest and React Testing Library",
    ],
  },
  {
    id: "llvm-compiler",
    prose: [
      "Pair project, tight deadline, and OCaml - which the course technically assumed you already knew going in. I did not. Writing a compiler in a language you're learning while also working through LLVM IR, which sits close enough to assembly that the gap between 'I understand this' and 'I can actually debug this' is significant - that's a specific kind of uncomfortable.",
      "It's also one of the most technically interesting things I've built. You don't really understand data structures until you've had to implement records, tuples, and lists in a language that makes you think about memory layout explicitly. And LLVM IR makes you appreciate every single abstraction sitting above it.",
    ],
    bullets: [
      "Functional language with first-class functions compiling to LLVM IR, with heap-allocated memory",
      "Implemented Records, Tuples, Lists, Pairs, and String support",
      "Two compiler optimizations: Constant Folding and Short-Circuit Evaluation",
      "Lexer, parser, and AST in OCaml; codegen targeting the C runtime for memory management",
    ],
  },
  {
    id: "lego-auction",
    prose: [
      "Backend-heavy team project, Azure at the center of everything. The actual functionality is fairly simple  an auction platform - but the goal was chaining as many Azure services together as possible: App Service, Cosmos DB, Blob Storage, Redis, Functions, Databricks. Azure is a lot. The docs are dense, the error messages are cryptic, and there was a stretch trying to get Azure Functions deployed for the first time where I was stuck in an error loop I genuinely couldn't get out of. Once it clicked it was fine - but that was a rough few days.",
      "The part that stayed with me most wasn't Azure though. It was the Kubernetes re-deployment at the end to cut vendor lock-in. After weeks of wrestling with cloud-specific configs, Docker and Kubernetes just made complete sense. Came out of this one with a clear opinion on containerization.",
    ],
    bullets: [
      "Core REST endpoints on Azure App Service - Java, Maven",
      "Two-level Redis caching: cut mean response time 57% (180ms → 77ms), p99 from 3.5s to 153ms",
      "Time-triggered Azure Function for auction lifecycle management and Redis Sorted Set maintenance",
      "Apache Spark job on Databricks to surface trending Lego sets from historical bid data",
      "Found and fixed a critical security flaw: unauthenticated endpoints accepting modifications under load",
      "Full re-deployment with Docker, Kubernetes, and MongoDB to remove Azure vendor dependency",
    ],
  },
  {
    id: "student-testing",
    prose: [
      "The project I've put the most time into so far. Team project, but I owned essentially the entire frontend - somewhere around 85-90% of the UI. Early on I made a call to take on logic that technically belonged on the backend, I volunteered to push myself and for the sake of experiemnt did it, knowing full well it wasn't the right architectural call. Was it? No. Did it push me further than staying in my lane would've? Yes.",
      "The bigger growth was around design. Keeping UI consistent across a lot of pages, deciding what to even expose to users, making those calls over and over. The main thing I'd change: I should've gone mobile-first from the start. Scaling a desktop layout down to mobile is genuinely painful, and I did that the hard way.",
    ],
    bullets: [
      "Led frontend development - managed Git workflow, reviewed PRs for two junior developers",
      "Built most student-facing and teacher-facing interfaces: auth flows, exam management, dashboards",
      "Extended Shadcn/ui with custom components (debounced inputs, date-time pickers, pagination)",
      "Handled complex exam scoring logic on the frontend - architecturally wrong, educationally useful",
    ],
  },
  {
    id: "taskflow",
    prose: [
      "My first real full-stack project. Built it solo over about three months, and the code quality reflects that - the structure isn't great and I know it. The course required raw SQL with no ORM, which was the whole point and actually forced me to think about queries in a way an abstraction layer would've hidden from me.",
      "What didn't go as well was everything else: I was picking up React, MUI, Express, JWT, and Google OAuth all at the same time under a tight deadline. It shows in the code. But it worked, and for the first time I had a clear picture of what a full web stack actually looks like end to end. That felt like something.",
    ],
    bullets: [
      "Task creation, assignment, and user profiles backed by email confirmation",
      "JWT auth with optional Google OAuth",
      "Express.js backend with raw SQL - no ORM, course requirement",
      "API documented with Swagger",
    ],
  },
]

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
  content: ProjectContent
  isLast: boolean
  isCyberpunk: boolean
  classes: ReturnType<typeof getThemeClasses>
}

function ProjectEntry({ content, isLast, isCyberpunk, classes }: ProjectEntryProps) {
  const meta = PROJECTS_META[content.id];
  if (!meta) return null;

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
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)
  const isCyberpunk = theme === "cyberpunk"

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