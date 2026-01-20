import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Header Canônico - Portal-Hub The Bonaparte Family
 * Navegação principal com dark mode toggle
 * Design: Híbrido (Documentary + Tech)
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Start Here", href: "/start-here" },
    { label: "Family", href: "/family" },
    { label: "Life", href: "/life" },
    { label: "Expedition", href: "/expedition" },
    { label: "Education", href: "/education" },
    { label: "Health", href: "/health" },
    { label: "Faith", href: "/faith" },
    { label: "ALSHAM", href: "/alsham" },
    { label: "Work", href: "/work" },
    { label: "Store", href: "/store" },
    { label: "Legacy", href: "/legacy" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-serif font-bold text-primary">
                Bonaparte
              </div>
              <div className="hidden sm:block text-xs font-sans text-muted-foreground uppercase tracking-widest">
                Family
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="mx-2 h-4 w-px bg-border" />
            {navItems.slice(6).map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-secondary"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden hover:bg-secondary"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
