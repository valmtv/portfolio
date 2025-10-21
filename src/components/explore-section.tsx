import { ThemeHeading } from "components/theme-heading";
import { SectionCard } from "components/section-card";

export function ExploreSection() {
  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={2} className="mb-8">
        Explore
      </ThemeHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <SectionCard
          title="Projects"
          description="Explore my technical projects including full-stack web applications, frontend work, and collaborative team projects."
          href="/projects"
          icon="⚡"
        />

        <SectionCard
          title="Journey"
          description="Follow my path through Computer Science, from foundational skills to advanced development practices and continuous learning."
          href="/journey"
          icon="🚀"
        />

        <SectionCard
          title="University"
          description="Learn about my academic experiences at AGH University and my Erasmus semester at NOVA School of Science and Technology."
          href="/university"
          icon="🎓"
        />
      </div>
    </section>
  );
}
