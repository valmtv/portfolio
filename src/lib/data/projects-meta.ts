import { ProjectMetadata } from "../types/project";

export const PROJECTS_META: Record<string, ProjectMetadata> = {
  "advocate-website": {
    id: "advocate-website",
    title: "Lawyer Website Redesign & CMS",
    dateRange: "Nov 2025 – Feb 2026",
    repoStatus: "public",
    techStack: ["TypeScript", "Next.js", "React", "Tailwind", "Keystatic CMS", "AWS S3", "Vitest"],
    links: [
      { type: "live", label: "Live Demo", href: "https://advocate.matviiv.com" }
    ]
  },
  "lego-auction": {
    id: "lego-auction",
    title: "Cloud-Native Lego Auction Platform",
    dateRange: "Sep 2025 – Nov 2025",
    repoStatus: "private",
    techStack: [
      "Java (JAX-RS)", "Maven", "Azure", "Cosmos DB", "Redis Cache", 
      "Azure Functions", "Apache Spark", "Docker", "Kubernetes", 
      "MongoDB", "Artillery", "Faker.js", "Git"
    ],
    links: []
  },
  "llvm-compiler": {
    id: "llvm-compiler",
    title: "OCaml-to-LLVM Compiler",
    dateRange: "Sep 2025 – Nov 2025",
    repoStatus: "public",
    techStack: ["OCaml", "C", "LLVM IR", "Dune", "Make", "Git"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/valmtv/LCD_Final_Project" }
    ]
  },
  "student-testing": {
    id: "student-testing",
    title: "Student Testing Platform",
    dateRange: "Apr 2025 – Jun 2025",
    repoStatus: "public",
    techStack: ["React", "JavaScript", "React Router", "Tailwind CSS", "Shadcn/ui", "Vite", "Git"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/LilConsul/hell-app" }
    ]
  },
  "taskflow": {
    id: "taskflow",
    title: "TaskFlow Manager",
    dateRange: "Jan 2025 – Mar 2025",
    repoStatus: "public",
    techStack: ["React", "MUI", "Node.js", "Express.js", "MySQL", "JWT", "Google API", "Swagger"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/valmtv/task-manager" }
    ]
  }
};
