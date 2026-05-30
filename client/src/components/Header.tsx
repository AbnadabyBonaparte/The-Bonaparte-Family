import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

const navItems = [
  { label: "Início",         href: "/" },
  { label: "Expedição",      href: "/expedition" },
  { label: "Journal",        href: "/journal" },
  { label: "Família",        href: "/family" },
  { label: "Educação",       href: "/education" },
  { label: "Bazar & Livros", href: "/store" },
  { label: "Legado",         href: "/legacy" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        borderColor: scrolled ? "rgba(26,66,45,0.4)" : "transparent",
        background: scrolled ? "rgba(26,66,45,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="editorial-container">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link href="/">
            {/* TODO: fazer upload de logo.png em client/public/ */}
            <a className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Bonaparte"
                style={{
                  height: "2rem",
                  width: "2rem",
                  objectFit: "contain",
                  filter: "brightness(0) saturate(100%) invert(72%) sepia(28%) saturate(601%) hue-rotate(1deg) brightness(93%) contrast(87%)",
                }}
              />
              <span
                className="font-serif text-base md:text-lg font-semibold transition-colors duration-300"
                style={{ color: scrolled ? "var(--color-cream)" : "var(--primary)" }}
              >
                The Bonaparte Family
              </span>
            </a>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a
                  className="rounded-md px-3 py-2 text-sm transition-colors duration-300"
                  style={{ color: scrolled ? "rgba(248,247,241,0.75)" : "var(--muted-foreground)" }}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="min-h-11 min-w-11"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden min-h-11 min-w-11"
              onClick={() => setOpen(prev => !prev)}
              aria-label="Abrir menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="xl:hidden grid grid-cols-1 gap-2 border-t border-border py-4">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
