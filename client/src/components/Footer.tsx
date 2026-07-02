import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="editorial-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-serif">A Família Bonaparte</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Portal-hub da jornada entre sítio, estrada, educação, fé, saúde e legado.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/start-here"><a className="text-muted-foreground hover:text-primary">Comece Aqui</a></Link>
            <Link href="/expedition"><a className="text-muted-foreground hover:text-primary">Expedição</a></Link>
            <Link href="/family"><a className="text-muted-foreground hover:text-primary">Família</a></Link>
            <Link href="/education"><a className="text-muted-foreground hover:text-primary">Educação</a></Link>
            <Link href="/alsham"><a className="text-muted-foreground hover:text-primary">ALSHAM</a></Link>
            <Link href="/legacy"><a className="text-muted-foreground hover:text-primary">Legado</a></Link>
          </div>
          <div className="text-sm">
            <div className="flex gap-4">
              <a href="https://youtube.com/@FamiliaBonaparte" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                YouTube →
              </a>
              <a href="https://instagram.com/familiabonaparte" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                Instagram →
              </a>
              <a href="https://tiktok.com/@familiabonaparte" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                TikTok →
              </a>
            </div>
            <p className="mt-3 text-muted-foreground">Desenvolvido por ALSHAM Global Commerce</p>
          </div>
        </div>
        {/* Universo Bonaparte — ecossistema completo */}
        <div className="mt-8 border-t border-border pt-8 flex flex-wrap justify-center gap-6">
          {[
            { label: "Casa Bonaparte",     url: "https://casabonaparte.com.br" },
            { label: "Livraria",           url: "https://livraria.casabonaparte.com.br" },
            { label: "Podcast",            url: "https://podcast.casabonaparte.com.br" },
            { label: "ALSHAM Global",      url: "https://alshamglobal.com.br" },
            { label: "Aby Bonaparte",      url: "https://abnadabybonaparte.alshamglobal.com.br" },
            { label: "ALSHAM Ascension",   url: "https://select.alshamglobal.com.br" },
            { label: "ALSHAM Pulso",       url: "https://pulso.alshamglobal.com.br" },
          ].map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(26,66,45,0.45)",
                textDecoration: "none",
                transition: "color 220ms ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-sunset-orange)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "rgba(26,66,45,0.45)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          © A Família Bonaparte. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
