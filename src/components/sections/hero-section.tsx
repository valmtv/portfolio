import { ThemeHeading } from "components/ui/base/theme-heading";
import { ThemeText } from "components/ui/base/theme-text";
import { ThemeCard } from "components/ui/base/theme-card";

export function HeroSection() {
  return (
    <section className="mb-16 md:mb-24">
      <ThemeHeading level={1} className="mb-6">
        Valerii Matviiv
      </ThemeHeading>
      <ThemeHeading level={3} className="mb-8">
        CS Student & Full-Stack Developer
      </ThemeHeading>
      <ThemeText className="max-w-3xl mb-8 text-lg md:text-xl">
        Welcome to my portfolio.{" "}
        <span className="text-theme-mutedForeground">
          (Try cyberpunk mode in the navbar - it&apos;s worth it.)
        </span>
        <br />
        <br />
        I&apos;m a 3rd year CS student at AGH University in Kraków, currently interning at ABB
        as a Testing Processes & Automation Intern. I work across the full stack - frontend,
        backend, deployment - whatever the project needs. This site documents what I&apos;ve built and learned.
      </ThemeText>

      <ThemeCard className="max-w-3xl">
        <ThemeHeading level={4} className="mb-4">
          About This Portfolio
        </ThemeHeading>
        <ThemeText muted>
          This page is a styled version of my CV
          <br />
          Projects page has direct words I would say about those projects, without the usual resume jargon.
          Unfortunately, I didn&apos;t have the time to write about all of them, but I plan to add more in the future,
          Also so far I didn&apos;t add other pages yet :(
          Feel free to explore, and switch themes using the style button in the nav.
        </ThemeText>
      </ThemeCard>
    </section>
  );
}
