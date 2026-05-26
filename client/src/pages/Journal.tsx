import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { supabase, type JournalEntry } from "@/lib/supabase";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("journal_entries")
      .select("*")
      .order("entry_date", { ascending: false })
      .then(({ data, error: err }) => {
        if (err) setError("Não foi possível carregar as entradas.");
        else setEntries(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 editorial-container py-12 md:py-20">
        <header className="mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Journal Bonaparte
          </h1>
          <p className="text-muted-foreground text-lg font-sans">
            A vida acontecendo. Sem filtro.
          </p>
        </header>

        {loading && (
          <div className="space-y-8">
            {[1, 2].map((n) => (
              <div key={n} className="animate-pulse space-y-3">
                <div className="h-4 bg-secondary rounded w-32" />
                <div className="h-3 bg-secondary rounded w-48" />
                <div className="h-24 bg-secondary rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-muted-foreground font-sans">{error}</p>
        )}

        {!loading && !error && entries.length === 0 && (
          <p className="text-muted-foreground font-sans">Nenhuma entrada ainda.</p>
        )}

        {!loading && !error && entries.length > 0 && (
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
