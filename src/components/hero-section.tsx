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
        CS Student & Full-Stack Developer
      </ThemeHeading>
      <ThemeText className="max-w-3xl mb-8">
        Welcome to my portfolio.{" "}
        <span className="text-theme-mutedForeground">
          (Try the style switcher in the navbar - it&apos;s worth it.)
        </span>
        <br />
        <br />
        I&apos;m studying Computer Science at AGH University in Kraków. I&apos;ve worked on both
        sides of the stack - cloud infrastructure on Azure, backend services in Java, and frontend
        interfaces in React. This site documents what I&apos;ve built and learned along the way.
      </ThemeText>

      <ThemeCard className="max-w-3xl">
        <ThemeHeading level={4} className="mb-4">
          About This Portfolio
        </ThemeHeading>
        <ThemeText muted>
          The site is structured as a walk through my path in CS - projects, academic experiences,
          and the skills I&apos;ve picked up. Feel free to explore, and switch themes using the
          style button in the nav.
        </ThemeText>
      </ThemeCard>
    </section>
  );
}