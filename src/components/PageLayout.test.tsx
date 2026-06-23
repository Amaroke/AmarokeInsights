import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  type RenderResult,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarContext";
import PageLayout from "./PageLayout";

afterEach(cleanup);

const renderWithProviders = (
  ui: React.ReactNode,
  route = "/basics",
): RenderResult =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <SidebarProvider>{ui}</SidebarProvider>
    </MemoryRouter>,
  );

describe("PageLayout", () => {
  it("rend le contenu enfant", () => {
    renderWithProviders(
      <PageLayout title="Les bases">
        <p>contenu page</p>
      </PageLayout>,
    );
    expect(screen.getByText("contenu page")).toBeTruthy();
  });

  it("définit le titre du document (suffixé par le nom du site)", async () => {
    renderWithProviders(
      <PageLayout title="Les bases" description="desc">
        <p>x</p>
      </PageLayout>,
    );
    await waitFor(() =>
      expect(document.title).toBe("Les bases | AmarokeInsights"),
    );
  });

  it("ne suffixe pas le titre quand il vaut déjà le nom du site", async () => {
    renderWithProviders(
      <PageLayout title="AmarokeInsights">
        <p>x</p>
      </PageLayout>,
      "/",
    );
    await waitFor(() => expect(document.title).toBe("AmarokeInsights"));
  });
});
