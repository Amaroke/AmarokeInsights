import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Term from "../ui/Term";

afterEach(cleanup);

describe("Term", () => {
  it("displays the term title", () => {
    render(<Term id="ETF" />);
    expect(screen.getByRole("button", { name: /ETF/ })).toBeTruthy();
  });

  it("reveals the definition on click and exposes aria-expanded", async () => {
    render(<Term id="ETF" />);
    const trigger = screen.getByRole("button", { name: /ETF/ });
    expect(trigger.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(await screen.findByText(/Exchange Traded Fund/)).toBeTruthy();
  });

  it("renders the definition outside the page stacking context, above the layout", async () => {
    const { container } = render(
      <div style={{ transform: "translateZ(0)" }}>
        <Term id="ETF" />
      </div>,
    );

    fireEvent.click(screen.getByRole("button", { name: /ETF/ }));

    const tooltip = await screen.findByRole("tooltip");
    expect(container.contains(tooltip)).toBe(false);
    expect(tooltip.parentElement).toBe(document.body);
    expect(tooltip.className).toMatch(/\bz-400\b/);
  });
});
