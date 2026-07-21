// Checkout central da Família — Banco do Universo (Supabase casa-bonaparte).
// A vitrine SÓ EXIBE e redireciona (Lei dos Tronos): quem cria a sessão do Stripe
// é a Edge Function central `familia-checkout`; quem grava membro/apoio é o webhook
// central. Nenhuma chave secreta aqui — a URL da função é pública por natureza.
// Override opcional via env do Vercel: VITE_FAMILIA_CHECKOUT_URL.

export const FAMILIA_CHECKOUT_URL: string =
  (import.meta.env.VITE_FAMILIA_CHECKOUT_URL as string | undefined) ??
  "https://ospnhmyjsyysirrithfr.supabase.co/functions/v1/familia-checkout";

export type CheckoutPayload =
  | { kind: "membro"; tier: "apoiador" | "viajante" | "fundador" }
  | { kind: "apoio"; valor_centavos: number };

/** Cria a sessão de Checkout no central e devolve a URL (ou null em falha). */
export async function criarCheckout(payload: CheckoutPayload): Promise<string | null> {
  try {
    const r = await fetch(FAMILIA_CHECKOUT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) return null;
    const j = await r.json().catch(() => null);
    return j && typeof j.url === "string" ? j.url : null;
  } catch {
    return null;
  }
}
