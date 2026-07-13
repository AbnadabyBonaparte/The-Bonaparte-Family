import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const today = new Date().toISOString().split("T")[0];

export default function Escrever() {
  // Auth (real Supabase session — the security boundary is server-side RLS)
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Entry form
  const [date, setDate] = useState(today);
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [published, setPublished] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setAuthReady(true);
      return;
    }
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setAuthReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setSigningIn(true);
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSigningIn(false);
    if (error) {
      setAuthError("Não foi possível entrar. Verifique e-mail e senha.");
    } else {
      setPassword("");
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(null);
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

  function renderBody() {
    // Journal not wired up yet — degrade gracefully, never crash.
    if (!isSupabaseConfigured) {
      return (
        <div className="premium-card p-10 text-center max-w-md">
          <p className="font-serif text-xl text-foreground">Journal indisponível</p>
          <p className="mt-2 text-muted-foreground">
            A publicação ainda não foi configurada. Volte em breve.
          </p>
        </div>
      );
    }

    // Waiting on the initial session check.
    if (!authReady) {
      return (
        <div className="premium-card animate-pulse space-y-3 p-6 max-w-sm">
          <div className="h-4 w-32 rounded bg-secondary" />
          <div className="h-10 w-full rounded bg-secondary" />
          <div className="h-10 w-full rounded bg-secondary" />
        </div>
      );
    }

    // Not authenticated — show the real sign-in form.
    if (!session) {
      return (
        <form onSubmit={handleSignIn} className="space-y-4 max-w-sm">
          <div>
            <label className="block font-sans text-sm text-muted-foreground mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              autoComplete="email"
              autoFocus
              required
            />
          </div>
          <div>
            <label className="block font-sans text-sm text-muted-foreground mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              autoComplete="current-password"
              required
            />
          </div>
          {authError && (
            <p className="text-sm text-destructive font-sans">{authError}</p>
          )}
          <button
            type="submit"
            disabled={signingIn}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50 transition"
          >
            {signingIn ? "Entrando…" : "Entrar"}
          </button>
        </form>
      );
    }

    // Authenticated — confirmation state.
    if (published) {
      return (
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
      );
    }

    // Authenticated — entry form.
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-between font-sans text-sm">
          <span className="text-muted-foreground">
            {session.user.email}
          </span>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-muted-foreground underline underline-offset-4"
          >
            Sair
          </button>
        </div>
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
    );
  }

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
        {renderBody()}
      </main>

      <Footer />
    </div>
  );
}
