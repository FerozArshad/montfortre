import { describe, expect, it } from "vitest";
import { adaptSiteUrls, isProductionHostname, normalizeOrigin } from "../lib/siteOrigin";

describe("siteOrigin", () => {
  it("rewrites production origin to the current host", () => {
    const origin = "https://montfortre-live.vibepreview.com";
    expect(adaptSiteUrls("https://montfortre.com/", origin)).toBe(`${origin}/`);
    expect(adaptSiteUrls("https://montfortre.com/og-home.jpg", origin)).toBe(`${origin}/og-home.jpg`);
    expect(adaptSiteUrls("https://www.montfortre.com/services/", origin)).toBe(`${origin}/services/`);
  });

  it("does not rewrite email or third-party URLs", () => {
    const origin = "https://preview.example.com";
    expect(adaptSiteUrls("sm@montfortre.com", origin)).toBe("sm@montfortre.com");
    expect(adaptSiteUrls("https://assets.agentfire3.com/logo.png", origin)).toBe("https://assets.agentfire3.com/logo.png");
    expect(adaptSiteUrls("https://calendly.com/montfort", origin)).toBe("https://calendly.com/montfort");
  });

  it("treats www and apex as production hosts", () => {
    expect(isProductionHostname("montfortre.com")).toBe(true);
    expect(isProductionHostname("www.montfortre.com")).toBe(true);
    expect(isProductionHostname("montfortre-live.vibepreview.com")).toBe(false);
  });

  it("strips trailing slashes from origins", () => {
    expect(normalizeOrigin("https://staging.example.com/")).toBe("https://staging.example.com");
  });
});
