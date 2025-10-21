import { ThemeHeading } from "components/theme-heading";
import { ThemeText } from "components/theme-text";
import { ThemeCard } from "components/theme-card";

export function HeroSection() {
  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={1} className="mb-6">
        Valerii Matviiv
      </ThemeHeading>
      <ThemeHeading level={3} className="mb-8">
        Computer Science Student & Developer
      </ThemeHeading>
      <ThemeText className="max-w-3xl mb-8">
        Welcome to my portfolio. I&apos;m a CS student at AGH University of Kraków with a passion for building web
        applications and solving complex problems. This site documents my journey through computer science,
        showcasing projects I&apos;ve built and experiences I&apos;ve gained along the way.
      </ThemeText>

      <ThemeCard className="max-w-3xl">
        <ThemeHeading level={4} className="mb-4">
          About This Portfolio
        </ThemeHeading>
        <ThemeText muted>
          This portfolio is structured as a journey through my path in Computer Science. You&apos;ll find detailed
          information about my projects, academic experiences, and the skills I&apos;ve developed. Feel free to explore
          different sections and switch between visual styles using the style button in the navigation bar.
        </ThemeText>
      </ThemeCard>
    </section>
  );
}