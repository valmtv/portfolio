import { ThemeText } from "components/theme-text"

export function Footer() {
  return (
    <footer className="border-t-2 border-theme-border py-8 px-4 md:px-8 bg-theme-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <ThemeText muted className="text-sm text-center md:text-left">
          © 2025 Valerii Matviiv. All rights reserved.
        </ThemeText>
        <ThemeText muted className="text-sm text-center md:text-right">
          Last updated: October 2025
        </ThemeText>
      </div>
    </footer>
  )
}
