import { describe, it, expect } from "vitest";
import { books } from "../work";

describe("work data", () => {
  it("has books defined", () => {
    expect(books.length).toBeGreaterThan(0);
  });

  it("each book has title and theme", () => {
    books.forEach((b) => {
      expect(b.title).toBeTruthy();
      expect(b.theme).toBeTruthy();
    });
  });
});
