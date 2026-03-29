"use client"

import { ThemeHeading } from "components/ui/base/theme-heading"
import { ThemeText } from "components/ui/base/theme-text"
import { ThemeButton } from "components/ui/base/theme-button"
import { ThemeCard } from "components/ui/base/theme-card"
import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"
import { Download } from "lucide-react"
import Link from "next/link"

import { StudentTestingOfficial } from "components/projects/student-testing"
import { LegoAuctionOfficial } from "components/projects/lego-auction"

export function CVSection() {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Valerii_Matviiv.pdf"
    link.download = "Valerii_Matviiv.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Styled Components",
    "Component Libraries",
    "Shadcn/ui",
  ]
  const backendSkills = [
    "Java",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "SQL",
    "Azure",
    "Apache Spark",
    "Azure Functions",
    "Cosmos DB",
    "Redis",
    "Docker",
    "Kubernetes",
    "MongoDB",
  ]
  const toolsSkills = [
    "Git",
    "Algorithms",
    "Data Structures",
    "Maven",
    "Artillery",
    "Faker.js",
    "Vite",
    "Figma",
    "Cypress",
  ]

  const professionalSummaryText =
    "CS student at AGH University in Kraków (GPA: 4.73/5), with an Erasmus semester at NOVA School of Science and Technology in Lisbon. I've built and shipped cloud-native services on Azure - Java backends, Redis caching, Spark jobs - and led frontend work in React. I'm comfortable on both sides of the stack and prefer it that way; whatever the project needs, that's what I work on."

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
                "hover:-translate-y-1"
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
              <h5 className="text-sm font-semibold mb-3 text-theme-cardForeground">Frontend</h5>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-theme-accent text-theme-accentForeground border border-theme-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-3 text-theme-cardForeground">Backend & Infrastructure</h5>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-theme-accent text-theme-accentForeground border border-theme-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-3 text-theme-cardForeground">Tools & Other</h5>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-theme-accent text-theme-accentForeground border border-theme-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ThemeCard>

        {/* Main Projects */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Main Projects
          </ThemeHeading>

          <div className="space-y-6">
            <LegoAuctionOfficial />

            <div className="border-t pt-6 border-theme-border">
              <StudentTestingOfficial />
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
              <ThemeText className="text-sm">• Participation in Deployed&apos;s Frontend Workshop</ThemeText>
            </div>
          </ThemeCard>
        </div>

        {/* Languages */}
        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-4">
            Languages
          </ThemeHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
            <div>
              <ThemeText className="text-sm font-semibold">German</ThemeText>
              <ThemeText muted className="text-xs">Intermediate (out of practice)</ThemeText>
            </div>
          </div>
        </ThemeCard>
      </div>
    </section>
  )
}