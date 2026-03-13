"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "contexts/theme-context"
import { type ThemeType } from "lib/themes"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, Palette } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
 // { href: "/journey", label: "Journey" },
 // { href: "/university", label: "University" },
] as const

const OTHER_THEME: Record<ThemeType, ThemeType> = {
  brutalism: "cyberpunk",
  cyberpunk: "brutalism",
}

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const classes = getThemeClasses(theme)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isCyberpunk = theme === "cyberpunk"
  const otherTheme = OTHER_THEME[theme]

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleToggleTheme = () => {
    setTheme(otherTheme)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        isCyberpunk
          ? "py-6 px-0"
          : "py-4 px-4 md:px-8 border-b-2 border-theme-border bg-theme-background"
      )}
    >
      {isCyberpunk && <div className="cyberpunk-nav-decoration" />}

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-8 relative z-10">
        <Link
          href="/"
          className={cn(
            classes.heading,
            "text-xl md:text-2xl flex-shrink-0 text-theme-foreground",
            isCyberpunk && "cyberpunk-text"
          )}
          data-text="VM"
        >
          VM
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-base",
                  classes.button,
                  classes.transition,
                  "hover:-translate-y-0.5",
                  classes.body,
                  isCyberpunk
                    ? cn("cyberpunk-btn", isActive && "cyberpunk-btn-active")
                    : cn(
                        isActive
                          ? "bg-theme-accent text-theme-accentForeground"
                          : "bg-theme-card text-theme-foreground",
                        "border-theme-border"
                      )
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <button
            onClick={handleToggleTheme}
            className={cn(
              "px-4 py-2 text-base flex items-center gap-2",
              classes.button,
              classes.transition,
              "hover:-translate-y-0.5",
              isCyberpunk
                ? "cyberpunk-btn"
                : "bg-theme-card text-theme-foreground border-theme-border"
            )}
            title={`Switch to ${otherTheme}`}
          >
            <Palette size={18} />
            {otherTheme.toUpperCase()}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2",
            classes.button,
            classes.transition,
            "bg-theme-card text-theme-foreground border-theme-border"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "lg:hidden mt-4 py-4 space-y-2",
            isCyberpunk
              ? "bg-theme-card border-b-2 border-theme-border"
              : "bg-theme-background border-t-2 border-theme-border"
          )}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-base",
                  classes.button,
                  classes.transition,
                  classes.body,
                  isActive
                    ? "bg-theme-accent text-theme-accentForeground"
                    : "bg-theme-card text-theme-foreground",
                  "border-theme-border"
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <button
            onClick={handleToggleTheme}
            className={cn(
              "w-full text-left px-4 py-3 text-base",
              classes.button,
              classes.transition,
              classes.body,
              "bg-theme-card text-theme-foreground border-theme-border"
            )}
          >
            <Palette size={18} className="inline-block mr-2" />
            {otherTheme.toUpperCase()}
          </button>
        </div>
      )}
    </nav>
  )
}