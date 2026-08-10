import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
];

for (const viewport of VIEWPORTS) {
  test.describe(`Responsive – ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    test("la page se charge sans overflow horizontal", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
    });

    test("le h1 est visible", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("h1")).toBeVisible();
    });

    test("la photo de profil est visible", async ({ page }) => {
      await page.goto("/");
      await expect(
        page.locator('img[src="/images/profile.webp"]').first()
      ).toBeVisible();
    });

    test("le Dock est visible", async ({ page }) => {
      await page.goto("/");
      const dock = page.locator("[class*='fixed bottom']").first();
      await expect(dock).toBeVisible();
    });
  });
}
