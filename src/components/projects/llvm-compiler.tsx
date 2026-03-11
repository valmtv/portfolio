import { ThemeText } from "components/theme-text"
import { cn } from "lib/utils"
import { Github } from "lucide-react"

export function LLVMCompiler() {
  const dateRange = "Sep 2025 - Nov 2025"
  const projectLink = "https://github.com/valmtv/LCD_Final_Project"
  const techStack = [
    "Ocaml",
    "C",
    "Dune",
    "Make",
    "Git",
  ]
  
  const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="text-lg font-semibold text-theme-foreground">Ocaml-to-LLVM Compiler</h5>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-base text-theme-secondary gap-1 text-lg hover:underline text-theme-accent"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
        <ThemeText muted className="text-sm whitespace-nowrap">
          {dateRange}
        </ThemeText>
      </div>

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Worked in pair to develop a simple functional language with simple first-class functions
          (no parameters, no closures), and heap allocated memory locations 
        </li>
        <li>
          Personally implemented some complex Data Structures: Records, Tuples, Lists, Pairs. Added Strings to the Language
          & implemented Optimization in a for of Constant Folding & Short-Circuit evaluation. 
        </li>
        <li>
          Authored and deployed a time-triggered Azure Function (&quot;Auction Closer and RecentLegoSetsTracker&quot;)
          to manage auction state and update the Redis Sorted Set of recent items.
        </li>
        <li>
          Engineered and deployed a data processing job using Apache Spark on Azure Databricks to
          analyze historical data and compute &quot;trending&quot; Lego sets.
        </li>
        <li>
          Identified and resolved a critical high-load security flaw, properly securing endpoints that
          allowed unauthenticated data modification under heavy request load.
        </li>
        <li>
          Wrote Artillery (with Faker.js) test scripts to simulate realistic user load, verifying that the
          caching solution dramatically reduced latency and eliminated database spikes.
        </li>
      </ul>

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
