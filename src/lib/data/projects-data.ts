import { ProjectMetadata } from "../types/project";

export interface ProjectData extends ProjectMetadata {
  content: {
    full: {
      prose: string[];
      bullets: string[];
    };
    summary?: {
      bullets: string[];
    };
  };
}

export const PROJECTS_DATA: Record<string, ProjectData> = {
  "stm32-gyro": {
    id: "stm32-gyro",
    title: "STM32 Alpine Telemetry",
    dateRange: "Jun 2026",
    repoStatus: "public",
    techStack: ["C", "STM32F429", "FreeRTOS", "DMA", "BMA180", "ESP32", "WiFi", "UART"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/valmtv/STM32F429-GYRO-CARVING" }
    ],
    content: {
      full: {
        prose: [
          "Embedded systems project that sits well outside my usual stack — and that's exactly why I built it. The goal was real-time calculation of skiing carving angles and acceleration during a run, with the data streamed wirelessly to a PC for analysis.",
          "The BMA180 digital accelerometer feeds raw data over SPI via DMA, keeping the CPU free while samples accumulate. Angle calculation is done mathematically from the accelerometer readings — not 100% perfect under high dynamic load, but accurate enough to surface meaningful carving patterns. FreeRTOS handles task scheduling, and an ESP32 co-processor handles WiFi streaming over UART, forwarding data to a receiver on the PC side. Closest I've worked to bare metal — you don't take abstractions for granted when there aren't any.",
        ],
        bullets: [
          "BMA180 digital accelerometer sampled over SPI using DMA — frees the CPU from polling, enables continuous high-frequency data capture",
          "Mathematical angle derivation from raw accelerometer data with FreeRTOS task scheduling for concurrent sample processing",
          "ESP32 co-processor connected via UART handles WiFi transmission, streaming live telemetry to a PC receiver",
          "FreeRTOS task architecture separates sensor acquisition, angle computation, and data forwarding cleanly",
        ]
      }
    }
  },
  "advocate-website": {
    id: "advocate-website",
    title: "Lawyer Website Redesign & CMS",
    dateRange: "Nov 2025 – Feb 2026",
    repoStatus: "public",
    techStack: ["Next.js", "React", "Tailwind CSS", "Keystatic CMS", "AWS S3", "Node.js", "Vitest", "React Testing Library"],
    links: [
      { type: "live", label: "Live Demo", href: "https://advocate.matviiv.com" }
    ],
    content: {
      full: {
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
      }
    }
  },
  "lego-auction": {
    id: "lego-auction",
    title: "Cloud-Native Lego Auction Platform",
    dateRange: "Sep 2025 – Nov 2025",
    repoStatus: "private",
    techStack: [
      "Java", "Maven", "Azure (App Service, Cosmos DB, Blob Storage, Redis Cache, Azure Functions)",
      "Apache Spark (Databricks)", "Artillery", "Faker.js",
      "Docker", "Kubernetes", "MongoDB"
    ],
    links: [],
    content: {
      full: {
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
        ]
      },
      summary: {
        bullets: [
          "Designed a two-level Redis caching strategy; load tests confirmed it eliminated all 46 ETIMEDOUT failures, cut mean response time by 57% (180ms to 77ms) and p99 latency from 3.5s to 153ms.",
          "Found and fixed a critical security flaw: unauthenticated endpoints were accepting data modifications under high request volume.",
          "Re-deployed the entire platform using Docker, Kubernetes, and MongoDB to remove Azure vendor lock-in."
        ]
      }
    }
  },
  "llvm-compiler": {
    id: "llvm-compiler",
    title: "OCaml-to-LLVM Compiler",
    dateRange: "Sep 2025 – Nov 2025",
    repoStatus: "public",
    techStack: ["OCaml", "C", "LLVM IR", "Dune", "Make", "Git"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/valmtv/LCD_Final_Project" }
    ],
    content: {
      full: {
        prose: [
          "Pair project, tight deadline, and OCaml - which the course technically assumed you already knew going in. I did not. Writing a compiler in a language you're learning while also working through LLVM IR, which sits close enough to assembly that the gap between 'I understand this' and 'I can actually debug this' is significant - that's a specific kind of uncomfortable.",
          "It's also one of the most technically interesting things I've built. You don't really understand data structures until you've had to implement records, tuples, and lists in a language that makes you think about memory layout explicitly. And LLVM IR makes you appreciate every single abstraction sitting above it.",
        ],
        bullets: [
          "Functional language with first-class functions compiling to LLVM IR, with heap-allocated memory",
          "Implemented Records, Tuples, Lists, Pairs, and String support",
          "Two compiler optimizations: Constant Folding and Short-Circuit Evaluation",
          "Lexer, parser, and AST in OCaml; codegen targeting the C runtime for memory management",
        ]
      }
    }
  },
  "student-testing": {
    id: "student-testing",
    title: "Student Testing Platform",
    dateRange: "Apr 2025 – Jun 2025",
    repoStatus: "public",
    techStack: ["React", "JavaScript", "React Router", "Tailwind CSS", "Shadcn/ui", "Vite", "Git"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/LilConsul/hell-app" }
    ],
    content: {
      full: {
        prose: [
          "The project I've put the most time into so far. Team project, but I owned essentially the entire frontend - somewhere around 85-90% of the UI. Early on I made a call to take on logic that technically belonged on the backend, I volunteered to push myself and for the sake of experiemnt did it, knowing full well it wasn't the right architectural call. Was it? No. Did it push me further than staying in my lane would've? Yes.",
          "The bigger growth was around design. Keeping UI consistent across a lot of pages, deciding what to even expose to users, making those calls over and over. The main thing I'd change: I should've gone mobile-first from the start. Scaling a desktop layout down to mobile is genuinely painful, and I did that the hard way.",
        ],
        bullets: [
          "Led frontend development - managed Git workflow, reviewed PRs for two junior developers",
          "Built most student-facing and teacher-facing interfaces: auth flows, exam management, dashboards",
          "Extended Shadcn/ui with custom components (debounced inputs, date-time pickers, pagination)",
          "Handled complex exam scoring logic on the frontend - architecturally wrong, educationally useful",
        ]
      },
      summary: {
        bullets: [
          "Took the lead on frontend development, managing the team's Git workflow and conducting PR reviews for two junior developers.",
          "Built most of the student-facing and teacher-facing interfaces in React and JavaScript using React Router - auth flows, exam management, student dashboards, and shared views.",
          "Extended Shadcn/ui with custom reusable components (debounced inputs, date-time pickers, pagination) using Tailwind CSS to keep the UI consistent across all views."
        ]
      }
    }
  },
  "taskflow": {
    id: "taskflow",
    title: "TaskFlow Manager",
    dateRange: "Jan 2025 – Mar 2025",
    repoStatus: "public",
    techStack: ["React", "MUI", "Node.js", "Express.js", "MySQL", "JWT", "Google API", "Swagger"],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/valmtv/task-manager" }
    ],
    content: {
      full: {
        prose: [
          "My first real full-stack project. Built it solo over about three months, and the code quality reflects that - the structure isn't great and I know it. The course required raw SQL with no ORM, which was the whole point and actually forced me to think about queries in a way an abstraction layer would've hidden from me.",
          "What didn't go as well was everything else: I was picking up React, MUI, Express, JWT, and Google OAuth all at the same time under a tight deadline. It shows in the code. But it worked, and for the first time I had a clear picture of what a full web stack actually looks like end to end. That felt like something.",
        ],
        bullets: [
          "Task creation, assignment, and user profiles backed by email confirmation",
          "JWT auth with optional Google OAuth",
          "Express.js backend with raw SQL - no ORM, course requirement",
          "API documented with Swagger",
        ]
      }
    }
  }
};