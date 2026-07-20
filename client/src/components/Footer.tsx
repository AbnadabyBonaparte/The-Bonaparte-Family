import { Link } from "wouter";

export default function Footer() {
  const worldLinkStyle = {
    fontSize: "0.72rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "color-mix(in oklab, var(--muted-foreground) 85%, transparent)",
    textDecoration: "none",
    transition: "color 220ms ease",
  };
  const restColor = "color-mix(in oklab, var(--muted-foreground) 85%, transparent)";
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
              <a href="https://www.youtube.com/@FamíliaBonaparte" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                YouTube →
              </a>
              <a href="https://www.instagram.com/familiabonaparte" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                Instagram →
              </a>
              <a href="https://www.tiktok.com/@familiabonaparteoficial" target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary text-sm">
                TikTok →
              </a>
              <a href="mailto:familiabonaparteoficial@gmail.com"
                 className="text-muted-foreground hover:text-primary text-sm">
                Email →
              </a>
            </div>
            <p className="mt-3 text-muted-foreground">Desenvolvido por ALSHAM Global Commerce</p>
          </div>
        </div>
        {/* Fronteira dos mundos — canon: Casa é a Bifröst (o caminho de volta) e os
            tronos irmãos são as portas. Satélites (Pulso, Ascension/Select…) orbitam a
            ALSHAM: vivem atrás da porta ALSHAM Global, não entram na fachada como par.
            Podcast é Matusalém (raiz de mídia), não porta. */}
        <div className="mt-8 border-t border-border pt-8 grid gap-8 sm:grid-cols-2">
          {/* Universo Bonaparte — a Casa (Bifröst) + os tronos irmãos */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Universo Bonaparte
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "Casa Bonaparte", url: "https://casabonaparte.com.br" },
                { label: "A Família",      current: true },
                { label: "Aby Bonaparte",  url: "https://abnadabybonaparte.alshamglobal.com.br" },
                { label: "Livraria",       url: "https://livraria.casabonaparte.com.br" },
                { label: "Bazar",          url: "https://bazar.casabonaparte.com.br" },
              ].map((link) =>
                link.current ? (
                  <span key={link.label} style={{ ...worldLinkStyle, color: "var(--accent)", cursor: "default" }}>
                    {link.label} · você está aqui
                  </span>
                ) : (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={worldLinkStyle}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = restColor; }}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
          {/* Ecossistema ALSHAM — a porta da tecnologia; os satélites vivem atrás dela */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Ecossistema ALSHAM
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="https://alshamglobal.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={worldLinkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = restColor; }}
              >
                ALSHAM Global
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          © A Família Bonaparte. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
