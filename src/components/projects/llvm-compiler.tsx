import { ThemeText } from "components/ui/base/theme-text"
import { cn } from "lib/utils"
/* Centralized Project Metadata */
import { PROJECTS_META } from "lib/data/projects-meta"
/* Atomic Project UI Components */
import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"

const meta = PROJECTS_META["llvm-compiler"]!;
const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

/* 
  HONEST TAKE: Used in the /projects page 
*/
export function LLVMCompilerProject() {
  return (
    <div>
      <ProjectHeader meta={meta} />

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Built in a pair: a simple functional language with first-class functions (no parameters,
          no closures) that compiles down to LLVM IR, with heap-allocated memory locations.
        </li>
        <li>
          Personally implemented complex data structures in the language: Records, Tuples, Lists,
          and Pairs. Also added String support and two compiler optimizations - Constant Folding and
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

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}

/* 
  OFFICIAL VERSION: Used on the Homepage/CV 
*/
export function LLVMCompilerOfficial() {
  return (
    <div>
      <ProjectHeader meta={meta} />
      
      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Built in a pair: a simple functional language with first-class functions (no parameters,
          no closures) that compiles down to LLVM IR, with heap-allocated memory locations.
        </li>
        <li>
          Personally implemented complex data structures in the language: Records, Tuples, Lists,
          and Pairs. Also added String support and two compiler optimizations - Constant Folding and
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

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}