import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="editorial-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-serif">The Bonaparte Family</h3>
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
            <p className="text-muted-foreground">Instagram • YouTube (em breve)</p>
            <p className="mt-3 text-muted-foreground">Desenvolvido por ALSHAM Global Commerce</p>
          </div>
        </div>
        {/* Universo Bonaparte — caminho de minhoca */}
        <div className="mt-8 border-t border-border pt-8 flex flex-wrap justify-center gap-6">
          {[
            { label: "Casa Bonaparte",     url: "https://casabonaparte.com.br" },
            { label: "Livraria Bonaparte", url: "https://livraria.casabonaparte.com.br" },
            { label: "Abnadaby Músico",    url: "https://abnadabybonaparte.alshamglobal.com.br" },
            { label: "ALSHAM Global",      url: "https://alshamglobal.com.br" },
          ].map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          © The Bonaparte Family. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
