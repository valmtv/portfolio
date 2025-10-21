import { ThemeText } from "components/theme-text";
import { useTheme } from "contexts/theme-context";

export function Footer() {
  const { themeConfig } = useTheme();

  return (
    <footer 
      className="border-t py-8 px-4 md:px-8"
      style={{ 
        borderColor: themeConfig.colors.border,
        backgroundColor: themeConfig.colors.card
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <ThemeText muted className="text-sm text-center md:text-left">
          © 2025 Valerii Matviiv. All rights reserved.
        </ThemeText>
        <ThemeText muted className="text-sm text-center md:text-right">
          Last updated: October 2025
        </ThemeText>
      </div>
    </footer>
  );
}
