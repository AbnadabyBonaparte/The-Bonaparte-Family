import { Link } from "wouter";

/**
 * Footer Canônico - Portal-Hub The Bonaparte Family
 * Design: Híbrido (Documentary + Tech)
 */
export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Manifesto */}
        <div className="max-w-2xl mx-auto mb-12 pb-12 border-b border-border">
          <p className="text-sm text-muted-foreground leading-relaxed text-center font-serif italic">
            "We chose freedom over comfort, presence over performance, and legacy over convenience. 
            This is the story of a family that refused to accept the ordinary."
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-foreground">
              Life
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/family">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Family
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/life">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Life
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/expedition">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Expedition
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-foreground">
              Learning
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/health">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Health
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faith">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Faith
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-foreground">
              Systems
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/alsham">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    ALSHAM
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/store">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Store
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-foreground">
              Legacy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Legacy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 The Bonaparte Family. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with intention. Designed for freedom.
          </p>
        </div>
      </div>
    </footer>
  );
}
