import React, { Suspense } from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "../Home";

// Reproduz o bug real do dono: clica num plano → "Abrindo…" → redireciona pro
// Stripe → pessoa VOLTA pelo navegador → bfcache restaura a página congelada.
// O pageshow(persisted=true) deve RESETAR o estado: botões clicáveis de novo,
// e dá pra abrir OUTRO plano em seguida — sem F5.

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" switchable>
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
    </ThemeProvider>
  );
}

function dispatchBfcacheRestore() {
  // jsdom não tem PageTransitionEvent; um Event com persisted=true é o que o
  // navegador entrega na restauração do bfcache.
  const ev = new Event("pageshow");
  Object.defineProperty(ev, "persisted", { value: true });
  window.dispatchEvent(ev);
}

describe("checkout — volta do Stripe (bfcache)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // fetch pendurado = página congelada no meio do "Abrindo…" (como o bfcache faz)
    fetchMock = vi.fn(() => new Promise(() => {}));
    vi.stubGlobal("fetch", fetchMock);
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("pageshow(persisted) destrava os botões e permite abrir outro plano sem F5", async () => {
    const { getByText, getAllByText } = render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    // 1) Clica num plano → todos os botões de checkout congelam em "Abrindo…"
    fireEvent.click(getByText("Quero ser Viajante →"));
    await waitFor(() => {
      expect(getAllByText("Abrindo…").length).toBeGreaterThan(0);
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    // 2) Volta do Stripe pelo botão do navegador (restauração do bfcache)
    dispatchBfcacheRestore();

    // 3) Botões voltaram ao normal — sem F5
    await waitFor(() => {
      expect(getByText("Quero ser Apoiador →")).toBeTruthy();
      expect(getByText("Quero ser Viajante →")).toBeTruthy();
      expect(getByText("Quero ser Fundador →")).toBeTruthy();
    });

    // 4) E dá pra abrir OUTRO plano em seguida (novo checkout dispara)
    fireEvent.click(getByText("Quero ser Fundador →"));
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });
  });

  it("apoio avulso também destrava após a volta do bfcache", async () => {
    const { getByText, getAllByText } = render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    fireEvent.click(getByText("R$ 50"));
    await waitFor(() => {
      expect(getAllByText("Abrindo…").length).toBeGreaterThan(0);
    });

    dispatchBfcacheRestore();

    await waitFor(() => {
      expect(getByText("Quero ser Viajante →")).toBeTruthy();
    });
    fireEvent.click(getByText("R$ 20"));
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });
  });
});
