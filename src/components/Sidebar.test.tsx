import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarContext";
import Sidebar from "./Sidebar";

afterEach(cleanup);
beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("sidebarIsOpen", "true");
});

const renderSidebar = (route = "/basics") =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
    </MemoryRouter>,
  );

describe("Sidebar", () => {
  it("affiche les sections normales mais masque les sections avancées par défaut", () => {
    renderSidebar();
    expect(screen.getByText("Bases du Trading")).toBeTruthy();
    expect(screen.queryByText("Stratégies de Trading")).toBeNull();
  });

  it("révèle les sections avancées après activation du mode avancé", () => {
    renderSidebar();
    fireEvent.click(
      screen.getByRole("button", {
        name: /Activer ou désactiver le mode avancé/i,
      }),
    );
    expect(screen.getByText("Stratégies de Trading")).toBeTruthy();
    expect(screen.getByText("Optimisation Fiscale")).toBeTruthy();
  });
});
