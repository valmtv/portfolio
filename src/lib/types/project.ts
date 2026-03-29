export type ProjectLink = {
  type: "github" | "live" | "other";
  label: string;
  href: string;
};

export type ProjectRepoStatus = "public" | "private";

export interface ProjectMetadata {
  id: string;
  title: string;
  dateRange?: string;
  techStack: string[];
  links: ProjectLink[];
  repoStatus: ProjectRepoStatus;
}
