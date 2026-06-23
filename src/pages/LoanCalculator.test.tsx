import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarContext";
import LoanCalculator from "./LoanCalculator";

afterEach(cleanup);

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={["/loan"]}>
      <SidebarProvider>
        <LoanCalculator />
      </SidebarProvider>
    </MemoryRouter>,
  );

describe("LoanCalculator", () => {
  it("affiche la mensualité et le total payé", () => {
    renderPage();
    expect(screen.getByText(/Mensualité totale/)).toBeTruthy();
    expect(screen.getByText(/Total payé/)).toBeTruthy();
  });

  it("ne crashe pas quand un champ est vidé", () => {
    renderPage();
    const amount = screen.getByLabelText(
      "Montant du prêt (€)",
    ) as HTMLInputElement;
    fireEvent.change(amount, { target: { value: "" } });
    expect(amount.value).toBe("");
    expect(screen.getByText(/Mensualité totale/)).toBeTruthy();
  });
});
