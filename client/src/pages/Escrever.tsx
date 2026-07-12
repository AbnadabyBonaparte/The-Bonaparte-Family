import { useState } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { supabase } from "@/lib/supabase";

const today = new Date().toISOString().split("T")[0];

export default function Escrever() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [date, setDate] = useState(today);
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [published, setPublished] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    if (password === import.meta.env.VITE_JOURNAL_PASSWORD) {
      setAuthed(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from("journal_entries").insert({
      entry_date: date,
      location,
      text,
      image_url: imageUrl || null,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError("Erro ao publicar. Tente novamente.");
    } else {
      setPublished(true);
      setDate(today);
      setLocation("");
      setText("");
      setImageUrl("");
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <div className="page-shell flex flex-col">
      <Header />

      <PageHero
        eyebrow="Área reservada"
        title="Escrever"
        accent="no Journal"
        subtitle="Registre uma nova entrada da travessia."
        back={false}
      />

      <main className="flex-1 editorial-container py-16 md:py-24 max-w-2xl">
        {!authed ? (
          <form onSubmit={handleAuth} className="space-y-4 max-w-sm">
            <div>
              <label className="block font-sans text-sm text-muted-foreground mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                autoFocus
                required
              />
            </div>
            {authError && (
              <p className="text-sm text-destructive font-sans">Senha incorreta.</p>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Entrar
            </button>
          </form>
        ) : published ? (
          <div className="space-y-4">
            <p className="font-serif text-xl text-foreground">Publicado ✓</p>
            <div className="flex gap-4 font-sans text-sm">
              <button
                onClick={() => setPublished(false)}
                className="text-primary underline underline-offset-4"
              >
                Escrever outra entrada
              </button>
              <Link href="/journal">
                <a className="text-muted-foreground underline underline-offset-4">
                  Ver Journal
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-sm text-muted-foreground mb-2">
                  Data
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block font-sans text-sm text-muted-foreground mb-2">
                  Local
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Fazenda da bisavó · Amorinópolis, GO"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-sm text-muted-foreground mb-2">
                Texto
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={`${inputClass} font-serif text-base leading-relaxed resize-y`}
                style={{ minHeight: "200px" }}
                required
              />
            </div>

            <div>
              <label className="block font-sans text-sm text-muted-foreground mb-2">
                URL da foto <span className="text-muted-foreground/60">(opcional)</span>
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
                className={inputClass}
              />
            </div>

            {submitError && (
              <p className="text-sm text-destructive font-sans">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50 transition"
            >
              {submitting ? "Publicando…" : "Publicar"}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
