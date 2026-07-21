import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { supabase, type JournalEntry } from "@/lib/supabase";
import { BookText } from "lucide-react";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${day} de ${months[month - 1]} de ${year}`;
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("journal_entries")
      .select("*")
      .order("entry_date", { ascending: false })
      .then(({ data, error: err }) => {
        // Diário ainda não semeado / backend não configurado → estado honesto
        // "em breve", nunca uma tela de erro assustadora. (decisão do dono)
        if (err) console.warn("[journal] sem entradas por ora:", err.message);
        setEntries(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-shell flex flex-col">
      <Header />

      <PageHero
        image="/brand/atmosphere-journal.webp"
        eyebrow="Diário de bordo"
        title="Journal"
        accent="a vida sem filtro"
        subtitle="Registros da estrada, do sítio e da travessia — escritos enquanto acontecem."
      />

      <main className="flex-1 editorial-container py-16 md:py-24 max-w-3xl">
        {loading && (
          <div className="space-y-6">
            {[1, 2].map((n) => (
              <div key={n} className="premium-card animate-pulse space-y-3 p-6">
                <div className="h-4 w-32 rounded bg-secondary" />
                <div className="h-3 w-48 rounded bg-secondary" />
                <div className="h-24 w-full rounded bg-secondary" />
              </div>
            ))}
          </div>
        )}

        {!loading && entries.length === 0 && (
          <div className="premium-card p-12 text-center">
            <div className="icon-chip mx-auto mb-5">
              <BookText className="h-5 w-5" />
            </div>
            <p className="font-serif text-2xl text-foreground">O diário começa aqui</p>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
              Ainda não há entradas publicadas. Cada parada da expedição será registrada
              neste espaço — volte em breve.
            </p>
          </div>
        )}

        {!loading && entries.length > 0 && (
          <ol className="space-y-0">
            {entries.map((entry, idx) => (
              <li key={entry.id}>
                <article className="py-10 md:py-14">
                  <time
                    dateTime={entry.entry_date}
                    className="block font-sans text-sm text-muted-foreground mb-1"
                  >
                    {formatDate(entry.entry_date)}
                  </time>

                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                    {entry.location}
                  </p>

                  {entry.image_url && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src={entry.image_url}
                        alt={`Foto — ${entry.location}`}
                        className="w-full object-cover"
                        style={{ aspectRatio: "16/9" }}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line">
                    {entry.text}
                  </div>
                </article>

                {idx < entries.length - 1 && (
                  <hr className="border-border" />
                )}
              </li>
            ))}
          </ol>
        )}
      </main>

      <Footer />
    </div>
  );
}
