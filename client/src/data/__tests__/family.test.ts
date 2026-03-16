import { describe, it, expect } from "vitest";
import { familyMembers, familyValues, pets } from "../family";

describe("family data", () => {
  it("has 4 family members", () => {
    expect(familyMembers).toHaveLength(4);
  });

  it("each member has name, role, description", () => {
    familyMembers.forEach((m) => {
      expect(m.name).toBeTruthy();
      expect(m.role).toBeTruthy();
      expect(m.description).toBeTruthy();
    });
  });

  it("has family values defined", () => {
    expect(familyValues.length).toBeGreaterThan(0);
  });

  it("has pets defined", () => {
    expect(pets.length).toBeGreaterThan(0);
    pets.forEach((p) => {
      expect(p.name).toBeTruthy();
    });
  });
});
