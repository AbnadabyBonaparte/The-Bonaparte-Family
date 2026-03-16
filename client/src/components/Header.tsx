import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Comece Aqui", href: "/start-here" },
  { label: "Expedição", href: "/expedition" },
  { label: "Família", href: "/family" },
  { label: "Vida", href: "/life" },
  { label: "Educação", href: "/education" },
  { label: "Saúde", href: "/health" },
  { label: "Fé", href: "/faith" },
  { label: "ALSHAM", href: "/alsham" },
  { label: "Obra", href: "/work" },
  { label: "Loja", href: "/store" },
  { label: "Legado", href: "/legacy" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="editorial-container">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link href="/">
            <a className="text-lg font-serif font-bold text-primary">The Bonaparte Family</a>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
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
          <nav className="xl:hidden grid grid-cols-2 gap-2 border-t border-border py-4">
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
