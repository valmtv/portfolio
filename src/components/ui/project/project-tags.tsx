import { cn } from "lib/utils";

interface ProjectTagsProps {
  tags: string[];
  className?: string;
}

export function ProjectTags({ tags, className }: ProjectTagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 pt-2", className)}>
      {tags.map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-xs font-medium bg-theme-accent text-theme-accentForeground opacity-90 border border-theme-border"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
