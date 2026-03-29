"use client"

import { Github, Globe, Lock } from "lucide-react";
import { ThemeText } from "../base/theme-text";
import { ProjectMetadata } from "lib/types/project";
import { cn } from "lib/utils";

interface ProjectHeaderProps {
  meta: ProjectMetadata;
  className?: string;
}

export function ProjectHeader({ meta, className }: ProjectHeaderProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3", className)}>
      <div className="flex items-center gap-2 flex-wrap">
        <h5 className="text-lg font-semibold text-theme-foreground">{meta.title}</h5>
        
        {meta.repoStatus === "private" && (
          <span
            className="inline-flex items-center gap-1 text-base text-theme-secondary font-medium cursor-default select-none"
            title="Private Repository"
          >
            <Lock size={20} />
            Private Repository
          </span>
        )}

        {meta.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-lg hover:underline text-theme-secondary"
          >
            {link.type === "github" ? <Github size={20} /> : <Globe size={20} />}
            {link.label}
          </a>
        ))}
      </div>
      
      {meta.dateRange && (
        <ThemeText muted className="text-sm whitespace-nowrap">
          {meta.dateRange}
        </ThemeText>
      )}
    </div>
  );
}
