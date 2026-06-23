import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

afterEach(cleanup);

const Boom = () => {
  throw new Error("boom");
};

describe("ErrorBoundary", () => {
  it("renders normal content when no child throws", () => {
    render(
      <ErrorBoundary>
        <p>contenu ok</p>
      </ErrorBoundary>,
    );
    expect(screen.getByText("contenu ok")).toBeTruthy();
  });

  it("renders the fallback when a child throws an error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );
    expect(screen.getByText(/une erreur est survenue/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /Recharger/i })).toBeTruthy();
    spy.mockRestore();
  });
});
