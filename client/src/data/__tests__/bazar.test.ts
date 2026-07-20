import { describe, it, expect } from "vitest";
import { BAZAR_URL, BAZAR_COLLECTIONS } from "../bazar";

const collections = Object.values(BAZAR_COLLECTIONS);

describe("bazar central", () => {
  it("aponta pro domínio canônico do Bazar", () => {
    expect(BAZAR_URL).toBe("https://bazar.casabonaparte.com.br");
  });

  it("tem coleções temáticas definidas", () => {
    expect(collections.length).toBeGreaterThan(0);
  });

  // Lei do Bazar #2 — sem preço à mão. Guarda contra reintroduzir preço na vitrine.
  it("nenhuma categoria carrega preço", () => {
    collections.forEach((collection) => {
      collection.categories.forEach((cat) => {
        expect(cat).not.toHaveProperty("price");
        expect(JSON.stringify(cat)).not.toMatch(/R\$|price/i);
      });
    });
  });

  // Lei dos Tronos — todo link de coleção resolve pro Bazar central (nunca loja local).
  it("toda coleção aponta pro Bazar central", () => {
    collections.forEach((collection) => {
      expect(collection.href).toContain("bazar.casabonaparte.com.br");
    });
  });
});
