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
  it("shows normal sections but hides advanced sections by default", () => {
    renderSidebar();
    expect(screen.getByText("Fondamentaux")).toBeTruthy();
    expect(screen.queryByText("Bases du Trading")).toBeNull();
    expect(screen.queryByText("Cryptomonnaies")).toBeNull();
  });

  it("reveals advanced sections after enabling advanced mode", () => {
    renderSidebar();
    fireEvent.click(
      screen.getByRole("button", {
        name: /Activer ou désactiver le mode avancé/i,
      }),
    );
    expect(screen.getByText("Bases du Trading")).toBeTruthy();
    expect(screen.getByText("Cryptomonnaies")).toBeTruthy();
    expect(screen.getByText("Stratégies de Trading")).toBeTruthy();
    expect(screen.getByText("Optimisation Fiscale")).toBeTruthy();
  });
});
