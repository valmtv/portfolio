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
    "TypeScript",
    "Python",
    "Java",
    "SQL",
  ]
  const frontendBackendSkills = [
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "Express.js",
    "CSS/HTML",
    "Redux",
    "Redis",
  ]
  const cloudDevOpsSkills = [
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "CI/CD",
    "AWS",
    "GCP",
  ]
  const dataSkills = [
    "Databricks",
    "Delta Lake",
    "PySpark",
    "ETL/Data Pipelines",
    "Azure Event Hubs",
  ]
  const testingSkills = [
    "Playwright",
    "Vitest",
    "React Testing Library",
  ]

  const professionalSummaryText =
    "Software Engineer experienced in designing distributed web applications, scalable cloud infrastructure (AWS, Azure, GCP), and secure data pipelines. Focused on building highly reliable systems, ensuring strict data integrity, and delivering seamless user experiences."

  const abbBullets = [
    {
      label: "Incident Resolution",
      text: "Diagnosed and resolved a production schema validation defect restoring cart checkout for ~75% of products.",
    },
    {
      label: "Distributed Automation Platform",
      text: "Built a modular Test engine covering 170+ regional instances, containerised via Docker on Azure Container Apps with CI/CD integration.",
    },
    {
      label: "Real-Time Tooling & Reliability",
      text: "Built a React dashboard with real-time SSE log streaming and engineered a self-healing state recovery mechanism to prevent false test failures.",
    },
    {
      label: "Cost Optimization",
      text: "Re-architected an internal vendor tool during downtime, modernizing legacy tool and saving ~€15K/year.",
    },
  ]

  const databricksBullets = [
    {
      label: "Streaming Ingestion",
      text: "Built streaming pipelines in Azure Databricks ingesting real-time feeds via Event Hubs and files via Auto Loader into Bronze Delta tables.",
    },
    {
      label: "Medallion & Governance",
      text: "Modeled Silver/Gold Delta layers (PySpark/SQL) with SCD Type 1/2 merges, Unity Catalog security policies (RLS/CLS), and Terraform automation.",
    },
  ]

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
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Frontend &amp; Backend</h5>
              <ProjectTags tags={frontendBackendSkills} />
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Cloud &amp; DevOps</h5>
              <ProjectTags tags={cloudDevOpsSkills} />
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Data</h5>
              <ProjectTags tags={dataSkills} />
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3 text-theme-cardForeground">Testing</h5>
              <ProjectTags tags={testingSkills} />
            </div>
          </div>
        </ThemeCard>

        {/* Professional Experience */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Professional Experience
          </ThemeHeading>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h5 className="text-lg font-semibold text-theme-foreground">Software Engineer Intern</h5>
                <ThemeText className="text-sm">ABB</ThemeText>
              </div>
              <ThemeText muted className="text-sm whitespace-nowrap">April 2026 – Present</ThemeText>
            </div>
            <ul className="space-y-3 text-base md:text-lg leading-relaxed text-theme-mutedForeground">
              {abbBullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-theme-primary flex-shrink-0 mt-0.5" aria-hidden="true">→</span>
                  <span>
                    <strong className="text-theme-cardForeground font-semibold">{bullet.label}:</strong>{" "}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ProjectTags tags={["TypeScript", "React", "Docker", "Azure Container Apps", "SSE", "CI/CD", "Playwright", "Zod"]} />
            </div>
          </div>
        </ThemeCard>

        {/* Engineering Practicum */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Engineering Practicum
          </ThemeHeading>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h5 className="text-lg font-semibold text-theme-foreground">Cloud &amp; Data Engineering Practicum</h5>
                <ThemeText className="text-sm">SoftServe Databricks Academy</ThemeText>
              </div>
              <ThemeText muted className="text-sm whitespace-nowrap">June 2026 – Present</ThemeText>
            </div>
            <ul className="space-y-3 text-base md:text-lg leading-relaxed text-theme-mutedForeground">
              {databricksBullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-theme-primary flex-shrink-0 mt-0.5" aria-hidden="true">→</span>
                  <span>
                    <strong className="text-theme-cardForeground font-semibold">{bullet.label}:</strong>{" "}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ProjectTags tags={["Azure Databricks", "Delta Lake", "PySpark", "ETL/Data Pipelines", "Event Hubs", "Auto Loader", "Unity Catalog", "Terraform"]} />
            </div>
          </div>
        </ThemeCard>

        {/* Technical Projects */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Technical Projects
          </ThemeHeading>

          <div className="space-y-6">
            <ProjectCard data={PROJECTS_DATA["advocate-website"]} variant="summary" />

            <div className="border-t pt-6 border-theme-border">
              <ProjectCard data={PROJECTS_DATA["lego-auction"]} variant="summary" />
            </div>

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

        {/* Education & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Education
            </ThemeHeading>
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold mb-1 text-theme-foreground">AGH University of Kraków</h5>
                <ThemeText className="text-sm mb-1">Bachelor in Computer Science</ThemeText>
                <ThemeText muted className="text-xs mb-1">Oct 2023 – Feb 2027</ThemeText>
                <ThemeText muted className="text-xs">GPA: 4.57/5</ThemeText>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-1 text-theme-foreground">
                  NOVA School of Science and Technology
                </h5>
                <ThemeText className="text-sm mb-1">Erasmus Semester</ThemeText>
                <ThemeText muted className="text-xs mb-1">Sep 2025 – Jan 2026</ThemeText>
                <ThemeText muted className="text-xs">Lisbon, Portugal</ThemeText>
              </div>
              <div className="pt-3 border-t border-theme-border">
                <ThemeText className="text-sm font-semibold mb-2">Honors &amp; Activities</ThemeText>
                <ul className="space-y-1">
                  <li className="text-sm text-theme-mutedForeground flex items-center gap-1.5">
                    <span className="text-theme-primary">→</span>
                    Rector&apos;s Scholarship
                  </li>
                  <li className="text-sm text-theme-mutedForeground flex items-center gap-1.5">
                    <span className="text-theme-primary">→</span>
                    Software Mansion x Gemini Hackathon
                  </li>
                </ul>
              </div>
            </div>
          </ThemeCard>

          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Certifications
            </ThemeHeading>
            <div className="space-y-3">
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
            </div>
          </ThemeCard>
        </div>

        {/* Languages */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-4">
            Languages
          </ThemeHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <ThemeText className="text-sm font-semibold">English</ThemeText>
              <ThemeText muted className="text-xs">Fluent</ThemeText>
            </div>
            <div>
              <ThemeText className="text-sm font-semibold">Ukrainian</ThemeText>
              <ThemeText muted className="text-xs">Native</ThemeText>
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
