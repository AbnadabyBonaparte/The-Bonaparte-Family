import { describe, it, expect } from "vitest";
import { countries, checkpoints } from "../expedition";

describe("expedition data", () => {
  it("has countries defined", () => {
    expect(countries.length).toBeGreaterThan(0);
  });

  it("each country has name, flag and window as non-empty strings", () => {
    countries.forEach((c) => {
      expect(typeof c.name).toBe("string");
      expect(c.name.length).toBeGreaterThan(0);
      expect(typeof c.flag).toBe("string");
      expect(c.flag.length).toBeGreaterThan(0);
      expect(typeof c.window).toBe("string");
      expect(c.window.length).toBeGreaterThan(0);
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
