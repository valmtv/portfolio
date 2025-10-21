import { ThemeHeading } from "components/theme-heading";
import { ThemeText } from "components/theme-text";
import { ThemeCard } from "components/theme-card";
import { useTheme } from "contexts/theme-context";
import { getThemeClasses } from "lib/themes";
import { cn } from "lib/utils";
import { Download, Github } from "lucide-react";

export function CVSection() {
  const { themeConfig, theme } = useTheme();
  const classes = getThemeClasses(theme);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Valerii_Matviiv.pdf';
    link.download = 'Valerii_Matviiv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const frontendSkills = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Styled Components", "Component Libraries"];
  const backendSkills = ["Node.js", "Express.js", "SQL", "MySQL", "PostgreSQL", "RESTful APIs"];
  const toolsSkills = ["Git", "Docker", "Webpack", "Figma", "Cypress", "Algorithms", "Data Structures"];

  const studentTestingTech = ["React", "React Router", "Tailwind CSS", "Shadcn/ui", "Vite"];
  const taskFlowTech = ["React", "MUI", "Node.js", "Express.js", "MySQL", "JWT", "Google API", "Swagger"];

  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={2} className="mb-8">
        Curriculum Vitae
      </ThemeHeading>

      <div className="space-y-6">
        <ThemeCard className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <ThemeHeading level={4}>
              Professional Summary
            </ThemeHeading>
            <button
              onClick={handleDownloadCV}
              className={cn(
                "px-6 py-3 flex items-center gap-2 justify-center whitespace-nowrap",
                classes.button,
                classes.transition,
                "hover:-translate-y-1"
              )}
              style={{
                backgroundColor: themeConfig.colors.accent,
                color: themeConfig.colors.accentForeground,
                borderColor: themeConfig.colors.border,
              }}
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
          
          <ThemeText muted className="mb-6">
            Computer Science student at AGH University of Kraków (GPA: 4.82/5) with a strong foundation in
            core CS disciplines such as algorithms, data structures, operating systems, and databases.
            Proficient in front-end and back-end development, combining a solid understanding of UX/UI best
            practices with knowledge of server-side logic, data flow, and RESTful architecture. Eager to apply
            problem-solving skills and continuously learn new technologies to become more adaptable and
            confident in both skills and knowledge.
          </ThemeText>

          <ThemeText muted>
            Experienced with React and its ecosystem, including React Router, Styled Components, and Tailwind
            CSS, for building modular and accessible UIs. Comfortable working with Express.js, implementing
            RESTful APIs, handling JWT-based authentication flows, and integrating external services such as
            Google OAuth and mailing. Confident in managing relational databases like MySQL and PostgreSQL
            with raw SQL. Skilled in using Git, Docker, and working in Unix-based environments.
          </ThemeText>
        </ThemeCard>

        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Technical Skills
          </ThemeHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h5 
                className="text-sm font-semibold mb-3"
                style={{ color: themeConfig.colors.cardForeground }}
              >
                Frontend
              </h5>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs"
                    style={{
                      backgroundColor: themeConfig.colors.secondary,
                      color: themeConfig.colors.secondaryForeground,
                      borderWidth: "1px",
                      borderColor: themeConfig.colors.border,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 
                className="text-sm font-semibold mb-3"
                style={{ color: themeConfig.colors.cardForeground }}
              >
                Backend & Database
              </h5>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs"
                    style={{
                      backgroundColor: themeConfig.colors.secondary,
                      color: themeConfig.colors.secondaryForeground,
                      borderWidth: "1px",
                      borderColor: themeConfig.colors.border,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 
                className="text-sm font-semibold mb-3"
                style={{ color: themeConfig.colors.cardForeground }}>
                Tools & Other
              </h5>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs"
                    style={{
                      backgroundColor: themeConfig.colors.secondary,
                      color: themeConfig.colors.secondaryForeground,
                      borderWidth: "1px",
                      borderColor: themeConfig.colors.border,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-6">
            Main Projects
          </ThemeHeading>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h5 
                    className="text-lg font-semibold"
                    style={{ color: themeConfig.colors.foreground }}
                  >
                    Student Testing Platform
                  </h5>
                  <a
                    href="https://github.com/valmtv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
                <ThemeText muted className="text-sm whitespace-nowrap">
                  April 2025 - June 2025
                </ThemeText>
              </div>
              
              <ThemeText muted className="mb-3">
                Built a web app enabling instructors to create and assign online exams from customizable
                question collections (public, private, archived) and students to take and review them. I led the
                frontend team - mentoring two new programmers and implementing a robust Git workflow with
                PR reviews to ensure stability - and architected user-friendly views (authentication flows,
                collection/exam management, exam-taking and review). I also developed reusable components
                like debounced password inputs, a combined date-time picker, and pagination, and set up
                dynamic client-side routing to keep navigation clear without global state.
              </ThemeText>
              
              <div className="flex flex-wrap gap-2">
                {studentTestingTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: themeConfig.colors.accent,
                      color: themeConfig.colors.accentForeground,
                      opacity: 0.9
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="border-t pt-6"
              style={{ borderColor: themeConfig.colors.border }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h5 
                    className="text-lg font-semibold"
                    style={{ color: themeConfig.colors.foreground }}
                  >
                    TaskFlow Manager
                  </h5>
                  <a
                    href="https://github.com/valmtv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
                <ThemeText muted className="text-sm whitespace-nowrap">
                  Jan 2025 - March 2025
                </ThemeText>
              </div>
              
              <ThemeText muted className="mb-3">
                Full-stack web application for task management, featuring task creation, assignment, and user
                profile handling with email confirmation. Implemented JWT authentication with optional Google
                OAuth, designed and built frontend components, integrated Express.js APIs, and authored all
                database interactions using raw SQL (no ORM per course requirements).
              </ThemeText>
              
              <div className="flex flex-wrap gap-2">
                {taskFlowTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: themeConfig.colors.accent,
                      color: themeConfig.colors.accentForeground,
                      opacity: 0.9
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ThemeCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Education
            </ThemeHeading>
            <div className="space-y-4">
              <div>
                <h5 
                  className="text-lg font-semibold mb-1"
                  style={{ color: themeConfig.colors.foreground }}
                >
                  AGH University of Kraków
                </h5>
                <ThemeText className="text-sm mb-1">Bachelor of Computer Science</ThemeText>
                <ThemeText muted className="text-xs mb-1">Oct 2023 - Feb 2027</ThemeText>
                <ThemeText muted className="text-xs">GPA: 4.82/5</ThemeText>
              </div>
              <div>
                <h5 
                  className="text-lg font-semibold mb-1"
                  style={{ color: themeConfig.colors.foreground }}
                >
                  NOVA School of Science and Technology
                </h5>
                <ThemeText className="text-sm mb-1">Erasmus Exchange Program</ThemeText>
                <ThemeText muted className="text-xs mb-1">Sep 2025 - Jan 2026</ThemeText>
                <ThemeText muted className="text-xs">Lisbon, Portugal</ThemeText>
              </div>
            </div>
          </ThemeCard>

          <ThemeCard>
            <ThemeHeading level={4} className="mb-4">
              Awards & Certificates
            </ThemeHeading>
            <div className="space-y-2">
              <ThemeText className="text-sm">
                • Rector&apos;s Scholarship at AGH University of Kraków
              </ThemeText>
              <ThemeText className="text-sm">
                • Principles of UI/UX Design
              </ThemeText>
              <ThemeText className="text-sm">
                • Developing Back-End Apps with Node.js and Express
              </ThemeText>
              <ThemeText className="text-sm">
                • Participation in Deployed&apos;s Frontend Workshop
              </ThemeText>
            </div>
          </ThemeCard>
        </div>

        <ThemeCard className="max-w-4xl">
          <ThemeHeading level={4} className="mb-4">
            Languages
          </ThemeHeading>
          <div className="flex gap-4">
            <ThemeText className="text-sm">English</ThemeText>
            <ThemeText className="text-sm">Ukrainian</ThemeText>
            <ThemeText className="text-sm">Polish</ThemeText>
          </div>
        </ThemeCard>
      </div>
    </section>
  );
}