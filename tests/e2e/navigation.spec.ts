import { test, expect } from "@playwright/test";

test.describe("Navigation – Dock", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("le Dock est visible en bas de page", async ({ page }) => {
    const dock = page.locator("[class*='fixed bottom']").first();
    await expect(dock).toBeVisible();
  });

  test("le lien interne #freelance dans le Hero fonctionne", async ({
    page,
  }) => {
    const freelanceLink = page.locator('a[href="#freelance"]').first();
    await expect(freelanceLink).toBeVisible();
    await freelanceLink.click();
    await expect(page.locator("#freelance")).toBeInViewport();
  });
});

test.describe("Navigation – scroll vers sections", () => {
  test("scroll vers #stack", async ({ page }) => {
    await page.goto("/");
    await page.locator("#stack").scrollIntoViewIfNeeded();
    await expect(page.locator("#stack")).toBeInViewport();
  });

  test("scroll vers #projects", async ({ page }) => {
    await page.goto("/");
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await expect(page.locator("#projects")).toBeInViewport();
  });

  test("scroll vers #freelance", async ({ page }) => {
    await page.goto("/");
    await page.locator("#freelance").scrollIntoViewIfNeeded();
    await expect(page.locator("#freelance")).toBeInViewport();
  });
});

test.describe("Liens externes – présence et attributs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("le lien Malt est présent avec target=_blank et rel=noopener", async ({
    page,
  }) => {
    const maltLink = page
      .locator('a[href*="malt.com"]')
      .first();
    await expect(maltLink).toBeVisible();
    await expect(maltLink).toHaveAttribute("target", "_blank");
    await expect(maltLink).toHaveAttribute("rel", /noopener/);
  });

  test("le lien GitHub (dock) est présent avec target=_blank", async ({
    page,
  }) => {
    const ghLink = page.locator('a[href*="github.com/zdossantos"]').first();
    await expect(ghLink).toBeVisible();
    await expect(ghLink).toHaveAttribute("target", "_blank");
  });

  test("le lien LinkedIn est présent avec target=_blank", async ({ page }) => {
    const liLink = page.locator('a[href*="linkedin.com"]').first();
    await expect(liLink).toBeVisible();
    await expect(liLink).toHaveAttribute("target", "_blank");
  });

  test("le lien mailto est présent", async ({ page }) => {
    const mailLink = page.locator('a[href^="mailto:"]').first();
    await expect(mailLink).toBeVisible();
  });
});
