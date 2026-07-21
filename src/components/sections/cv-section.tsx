"use client"

import { ThemeHeading } from "components/ui/base/theme-heading"
import { ThemeText } from "components/ui/base/theme-text"
import { ThemeCard } from "components/ui/base/theme-card"
import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"
import { Download } from "lucide-react"
import Link from "next/link"
import { track } from "@vercel/analytics"

import { PROJECTS_DATA } from "lib/data/projects-data"
import { ProjectCard } from "components/ui/project/project-card"
import { ProjectTags } from "components/ui/project/project-tags"

export function CVSection() {
  const { classes } = useThemeClasses()

  const handleDownloadCV = () => {
    track("cv_download", { source: "cv_section" })
    const link = document.createElement("a")
    link.href = "/Valerii_Matviiv.pdf"
    link.download = "Valerii_Matviiv.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const languagesSkills = [
    "Java",
    "TypeScript",
    "JavaScript",
    "SQL/NoSQL",
  ]
  const frameworksToolsSkills = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Redis",
    "Playwright",
  ]
  const cloudDevOpsSkills = [
    "Azure",
    "AWS",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Git",
  ]

  const professionalSummaryText =
    "CS student at AGH University, Kraków (GPA 4.73/5), with an Erasmus semester at NOVA School of Science and Technology in Lisbon. Currently at ABB as a Software Engineer intern, building full-stack test automation infrastructure for a global product platform. Full-stack dev \u2013 frontend, backend, deployment \u2013 working across whatever the project needs."

  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={2} className="mb-8">
        Curriculum Vitae
      </ThemeHeading>

      <div className="space-y-6">
        {/* Professional Summary */}
        <ThemeCard className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <ThemeHeading level={4}>Professional Summary</ThemeHeading>
            <button
              onClick={handleDownloadCV}
              className={cn(
                "px-6 py-3 flex items-center gap-2 justify-center whitespace-nowrap",
                "bg-theme-accent text-theme-accentForeground border-theme-border",
                classes.button,
                classes.transition,
                "hover:-translate-y-1",
                "cursor-pointer"
              )}
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>

          <ThemeText muted className="mb-6">
            {professionalSummaryText}
          </ThemeText>
        </ThemeCard>

        {/* Technical Skills */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Technical Skills
          </ThemeHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Languages</h5>
              <ProjectTags tags={languagesSkills} />
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Frameworks / Tools</h5>
              <ProjectTags tags={frameworksToolsSkills} />
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Cloud &amp; DevOps</h5>
              <ProjectTags tags={cloudDevOpsSkills} />
            </div>
          </div>
        </ThemeCard>

        {/* Work Experience */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Work Experience
          </ThemeHeading>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h5 className="text-lg font-semibold text-theme-foreground">Software Engineer Intern</h5>
                <ThemeText className="text-sm">ABB</ThemeText>
              </div>
              <ThemeText muted className="text-sm whitespace-nowrap">April 2026 – Present</ThemeText>
            </div>
            <ul className="space-y-2 text-base md:text-lg leading-relaxed text-theme-mutedForeground">
              {[
                "Engineered a full-stack, distributed test automation platform from scratch for a core product configurator, scaling execution across 170+ regional instances.",
                "Architected a plugin-style abstraction layer for distinct DOM architectures. Built a custom API and React dashboard to fully configure and trigger tests with real-time SSE log streaming.",
                "Built a self-healing, checkpoint-based state-recovery mechanism to eliminate false failures in long regression runs, and deployed containerized Docker test suites via Azure Container Apps and GitHub Actions.",
                "Contributed automation work on a second internal configurator platform (Critical Power), proactively proposing and implementing improvements beyond assigned scope.",
                "Delivered a stable regression framework surfacing 50+ production defects, with full technical documentation.",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-theme-primary flex-shrink-0 mt-0.5" aria-hidden="true">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ProjectTags tags={["TypeScript", "Playwright", "Fastify", "Next.js", "React", "Zod", "SSE", "Docker", "Azure Container Apps", "GitHub Actions"]} />
            </div>
          </div>
        </ThemeCard>

        {/* Main Projects */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Main Projects
          </ThemeHeading>

          <div className="space-y-6">
            <ProjectCard data={PROJECTS_DATA["lego-auction"]} variant="summary" />

            <div className="border-t pt-6 border-theme-border">
              <ProjectCard data={PROJECTS_DATA["student-testing"]} variant="summary" />
            </div>
          </div>
        </ThemeCard>

        {/* Projects page note */}
        <p className={cn("text-sm max-w-4xl", classes.body)}>
          <span className="text-theme-mutedForeground">
            More context on each of these - what actually happened, what broke, what I&apos;d do differently - is on the{" "}
          </span>
          <Link href="/projects" className="text-theme-accent hover:underline">
            Projects page
          </Link>
          <span className="text-theme-mutedForeground">.</span>
        </p>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Education
            </ThemeHeading>
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold mb-1 text-theme-foreground">AGH University of Kraków</h5>
                <ThemeText className="text-sm mb-1">Bachelor of Computer Science</ThemeText>
                <ThemeText muted className="text-xs mb-1">Oct 2023 – Feb 2027</ThemeText>
                <ThemeText muted className="text-xs">GPA: 4.73/5</ThemeText>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-1 text-theme-foreground">
                  NOVA School of Science and Technology
                </h5>
                <ThemeText className="text-sm mb-1">Erasmus Exchange Program</ThemeText>
                <ThemeText muted className="text-xs mb-1">Sep 2025 – Jan 2026</ThemeText>
                <ThemeText muted className="text-xs">Lisbon, Portugal</ThemeText>
              </div>
            </div>
          </ThemeCard>

          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Awards & Certificates
            </ThemeHeading>
            <div className="space-y-2">
              <ThemeText className="text-sm">• Rector&apos;s Scholarship at AGH University of Kraków</ThemeText>
              <ThemeText className="text-sm">
                •{" "}
                <a
                  href="https://coursera.org/share/2e745de70cf41af57467e3e77c9c3907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-theme-accent"
                >
                  Principles of UI/UX Design
                </a>
              </ThemeText>
              <ThemeText className="text-sm">
                •{" "}
                <a
                  href="https://coursera.org/share/701cf91b31bf81aa9ef1b63bb86ca166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-theme-accent"
                >
                  Developing Back-End Apps with Node.js and Express
                </a>
              </ThemeText>
              <ThemeText className="text-sm">• Software Engineer</ThemeText>
              <ThemeText className="text-sm">• Frontend Developer (React)</ThemeText>
              <ThemeText className="text-sm">• Participation in Deployed&apos;s Frontend Workshop</ThemeText>
            </div>
          </ThemeCard>
        </div>

        {/* Languages */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-4">
            Languages
          </ThemeHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <ThemeText className="text-sm font-semibold">Ukrainian</ThemeText>
              <ThemeText muted className="text-xs">Native</ThemeText>
            </div>
            <div>
              <ThemeText className="text-sm font-semibold">English</ThemeText>
              <ThemeText muted className="text-xs">Fluent</ThemeText>
            </div>
            <div>
              <ThemeText className="text-sm font-semibold">Polish</ThemeText>
              <ThemeText muted className="text-xs">Intermediate</ThemeText>
            </div>
          </div>
        </ThemeCard>
      </div>
    </section>
  )
}
