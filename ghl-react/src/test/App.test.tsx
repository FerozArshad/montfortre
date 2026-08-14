import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App";
import Home from "../pages/Home";
import IdxSales from "../pages/IdxSales";
import TwoFamilyHouseForSaleNyc from "../pages/TwoFamilyHouseForSaleNyc";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.getElementById("root") ?? document.body).toBeTruthy();
  });
});

describe("converted pages", () => {
  it("home renders a TSX H1", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/avoid overpaying/i);
  });

  it("two-family page keeps two H1s from the original design", () => {
    render(
      <BrowserRouter>
        <TwoFamilyHouseForSaleNyc />
      </BrowserRouter>,
    );
    expect(document.querySelectorAll("h1")).toHaveLength(2);
  });

  it("IDX sales page renders the search layout", () => {
    render(
      <BrowserRouter>
        <IdxSales />
      </BrowserRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Homes For Sale");
    expect(document.querySelector("iframe")?.getAttribute("src")).toContain("olridx.com/Search/Sales");
  });
});
