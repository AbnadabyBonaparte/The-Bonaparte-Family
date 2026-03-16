import { describe, it, expect } from "vitest";
import { countries, checkpoints } from "../expedition";

describe("expedition data", () => {
  it("has countries defined", () => {
    expect(countries.length).toBeGreaterThan(0);
  });

  it("each country is non-empty string", () => {
    countries.forEach((c) => {
      expect(typeof c).toBe("string");
      expect(c.length).toBeGreaterThan(0);
    });
  });

  it("has checkpoints defined", () => {
    expect(checkpoints.length).toBeGreaterThan(0);
  });

  it("each checkpoint has country, window, goal", () => {
    checkpoints.forEach((cp) => {
      expect(cp.country).toBeTruthy();
      expect(cp.window).toBeTruthy();
      expect(cp.goal).toBeTruthy();
    });
  });
});
