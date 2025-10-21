import { useState } from "react";
import { ThemeHeading } from "components/theme-heading";
import { ThemeText } from "components/theme-text";
import { ThemeCard } from "components/theme-card";
import { useTheme } from "contexts/theme-context";
import { cn } from "lib/utils";
import { Copy, Check } from "lucide-react";

export function ContactSection() {
  const { themeConfig } = useTheme();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("valerii.matviiv@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section className="mb-16">
      <ThemeHeading level={2} className="mb-8">
        Get In Touch
      </ThemeHeading>

      <ThemeCard className="max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={cn("text-lg font-bold mb-2")} style={{ color: themeConfig.colors.foreground }}>
              Email
            </h4>
            <div className="flex items-center gap-2">
              <a 
                href="mailto:valerii.matviiv@gmail.com"
                className="hover:underline"
                style={{ color: themeConfig.colors.accent }}
              >
                <ThemeText muted>valerii.matviiv@gmail.com</ThemeText>
              </a>
              <button
                onClick={copyEmail}
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: themeConfig.colors.accent }}
                title="Copy email"
              >
                {emailCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div>
            <h4 className={cn("text-lg font-bold mb-2")} style={{ color: themeConfig.colors.foreground }}>
              Location
            </h4>
            <ThemeText muted>Krakow, Poland</ThemeText>
          </div>

          <div>
            <h4 className={cn("text-lg font-bold mb-2")} style={{ color: themeConfig.colors.foreground }}>
              GitHub
            </h4>
            <a
              href="https://github.com/valmtv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: themeConfig.colors.accent }}
            >
              <ThemeText muted>github.com/valmtv</ThemeText>
            </a>
          </div>

          <div>
            <h4 className={cn("text-lg font-bold mb-2")} style={{ color: themeConfig.colors.foreground }}>
              LinkedIn
            </h4>
            <a
              href="https://www.linkedin.com/in/valerii-matviiv-3822a232b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: themeConfig.colors.accent }}
            >
              <ThemeText muted>linkedin.com/in/valerii-matviiv</ThemeText>
            </a>
          </div>
        </div>
      </ThemeCard>
    </section>
  );
}