import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Valerii Matviiv",
  description:
    "5 projects: a cloud-native auction platform on Azure, a student testing app, an OCaml-to-LLVM compiler, and a full-stack task manager. Details on what was built, what broke, and what I'd do differently.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
