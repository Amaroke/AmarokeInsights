import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Term from "./Term";

afterEach(cleanup);

describe("Term", () => {
  it("affiche le titre du terme", () => {
    render(<Term id="ETF" />);
    expect(screen.getByRole("button", { name: /ETF/ })).toBeTruthy();
  });

  it("révèle la définition au clic et expose aria-expanded", async () => {
    render(<Term id="ETF" />);
    const trigger = screen.getByRole("button", { name: /ETF/ });
    expect(trigger.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(await screen.findByText(/Exchange Traded Fund/)).toBeTruthy();
  });
});
