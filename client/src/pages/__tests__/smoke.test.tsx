import React, { Suspense } from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "../Home";
import Family from "../Family";
import Work from "../Work";
import Alfredo from "../Alfredo";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" switchable>
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
    </ThemeProvider>
  );
}

describe("page smoke tests", () => {
  it("Home renders without crashing", () => {
    const { container } = render(
      <Wrapper>
        <Home />
      </Wrapper>
    );
    expect(container).toBeTruthy();
  });

  it("Family renders without crashing", () => {
    const { container } = render(
      <Wrapper>
        <Family />
      </Wrapper>
    );
    expect(container).toBeTruthy();
  });

  it("Work renders without crashing", () => {
    const { container } = render(
      <Wrapper>
        <Work />
      </Wrapper>
    );
    expect(container).toBeTruthy();
  });

  it("Alfredo renders without crashing", () => {
    const { container } = render(
      <Wrapper>
        <Alfredo />
      </Wrapper>
    );
    expect(container).toBeTruthy();
  });
});
