"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "contexts/theme-context"
import { themes, type ThemeType } from "lib/themes"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"
import { useState, useRef, useEffect } from "react"
import { Menu, X, Palette } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/journey", label: "Journey" },
  { href: "/university", label: "University" },
] as const

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, themeConfig } = useTheme()
  const classes = getThemeClasses(theme)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get available themes dynamically from themes object
  const availableThemes = Object.entries(themes).map(([id, config]) => ({
    id: id as ThemeType,
    name: config.name,
  }))

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleThemeSelect = (themeId: ThemeType) => {
    setTheme(themeId)
    setIsDropdownOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-theme-background border-b-2 border-theme-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={cn(classes.heading, "text-xl md:text-2xl flex-shrink-0 text-theme-foreground")}
        >
          VM
        </Link>

        {/* Desktop Navigation */}
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

          {/* Style Switcher Dropdown - Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                "px-4 py-2 text-base flex items-center gap-2",
                classes.button,
                classes.transition,
                "hover:-translate-y-0.5",
                "bg-theme-accent text-theme-accentForeground border-theme-border"
              )}
            >
              <Palette size={18} />
              <span>{themeConfig.name}</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className={cn(
                  "absolute right-0 mt-2 py-2 min-w-[200px]",
                  classes.card,
                  "bg-theme-card border-theme-border"
                )}
              >
                {availableThemes.map((themeOption) => {
                  const isSelected = theme === themeOption.id
                  return (
                    <button
                      key={themeOption.id}
                      onClick={() => handleThemeSelect(themeOption.id)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-base transition-colors",
                        classes.body,
                        isSelected
                          ? "bg-theme-muted text-theme-accent"
                          : "bg-transparent text-theme-foreground hover:bg-theme-muted/50"
                      )}
                    >
                      {themeOption.name}
                      {isSelected && <span className="ml-2">✓</span>}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
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

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 py-4 space-y-2 border-t-2 border-theme-border">
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

          {/* Style Switcher - Mobile */}
          <div className="pt-2">
            <div className="px-4 py-2 text-sm flex items-center gap-2 text-theme-mutedForeground">
              <Palette size={16} />
              <span>Theme:</span>
            </div>
            {availableThemes.map((themeOption) => {
              const isSelected = theme === themeOption.id
              return (
                <button
                  key={themeOption.id}
                  onClick={() => handleThemeSelect(themeOption.id)}
                  className={cn(
                    "w-full text-left px-6 py-2 text-base transition-colors",
                    classes.body,
                    isSelected
                      ? "bg-theme-muted text-theme-accent"
                      : "bg-transparent text-theme-foreground"
                  )}
                >
                  {themeOption.name}
                  {isSelected && <span className="ml-2">✓</span>}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}