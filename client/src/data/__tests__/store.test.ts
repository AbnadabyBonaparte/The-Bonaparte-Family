import { describe, it, expect } from "vitest";
import { products } from "../store";

describe("store data", () => {
  it("has products defined", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("each product has name, price, description", () => {
    products.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.price).toBeTruthy();
      expect(p.description).toBeTruthy();
    });
  });
});
