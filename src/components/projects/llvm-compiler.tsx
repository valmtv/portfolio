import { ThemeText } from "components/ui/theme-text"
import { cn } from "lib/utils"
import { Github } from "lucide-react"

export function LLVMCompiler() {
  const dateRange = "Sep 2025 – Nov 2025"
  const projectLink = "https://github.com/valmtv/LCD_Final_Project"
  const techStack = ["OCaml", "C", "LLVM IR", "Dune", "Make", "Git"]

  const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="text-lg font-semibold text-theme-foreground">OCaml-to-LLVM Compiler</h5>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-theme-secondary gap-1 text-lg hover:underline"
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
          Built in a pair: a simple functional language with first-class functions (no parameters,
          no closures) that compiles down to LLVM IR, with heap-allocated memory locations.
        </li>
        <li>
          Personally implemented complex data structures in the language: Records, Tuples, Lists,
          and Pairs. Also added String support and two compiler optimizations — Constant Folding and
          Short-Circuit Evaluation.
        </li>
        <li>
          Wrote the lexer, parser, and AST representation in OCaml, then the LLVM IR code generation
          pass targeting the C runtime for memory management.
        </li>
        <li>
          Used Dune as the build system and coordinated work via Git, keeping changes cleanly
          separated between language features and codegen.
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