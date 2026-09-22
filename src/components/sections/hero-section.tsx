import { ThemeHeading } from "components/ui/base/theme-heading";
import { ThemeText } from "components/ui/base/theme-text";
import { ThemeCard } from "components/ui/base/theme-card";

export function HeroSection() {
  return (
    <section className="mb-16 md:mb-24">
      {/* Name — max presence */}
      <ThemeHeading level={1} className="mb-2 tracking-tighter">
        Valerii Matviiv
      </ThemeHeading>

      {/* Role — differentiated: smaller, muted weight, letter-spaced */}
      <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-theme-mutedForeground mb-8">
        Software Engineer &amp; Full-Stack Developer
      </p>

      {/* Bio — confident, no apologies */}
      <ThemeText className="max-w-2xl mb-8 text-lg md:text-xl">
        Software Engineer experienced in designing distributed web applications, scalable cloud infrastructure (AWS, Azure, GCP), and secure data pipelines. Software Engineer Intern at ABB and 3rd year CS student at AGH Kraków (GPA 4.57/5, Erasmus at NOVA Lisbon).
      </ThemeText>

      {/* About card — rewritten with confidence */}
      <ThemeCard className="max-w-2xl">
        <ThemeHeading level={4} className="mb-3">
          About this site
        </ThemeHeading>
        <ThemeText muted className="text-sm md:text-base">
          This is a live version of my CV — structured the same way, but with more
          context on each project than a one-pager allows.{" "}
          The{" "}
          <a href="/projects" className="text-theme-accent hover:underline font-bold">
            Projects page
          </a>{" "}
          has the real story behind each build: what broke, what I&apos;d change, what I learned.
          <br />
          <br />
          <span className="text-theme-mutedForeground text-xs tracking-wide uppercase font-bold">
            Tip:
          </span>{" "}
          <span className="text-theme-mutedForeground text-sm">
            try the Cyberpunk theme in the nav — it&apos;s a completely different look.
          </span>
        </ThemeText>
      </ThemeCard>
    </section>
  );
}
