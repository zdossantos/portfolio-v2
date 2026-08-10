import { test, expect } from "@playwright/test";

test.describe("Homepage – chargement et SEO", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("se charge avec le bon titre", async ({ page }) => {
    await expect(page).toHaveTitle(
      /Zacharie Dos Santos.*Développeur Freelance Fullstack/
    );
  });

  test("possède une meta description", async ({ page }) => {
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /.+/);
  });

  test("possède une balise canonical", async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /.+/);
  });

  test("possède les balises Open Graph", async ({ page }) => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /.+/
    );
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /.+/
    );
  });

  test("possède le JSON-LD Schema.org Person", async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    let foundPerson = false;
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      if (content?.includes('"@type":"Person"')) {
        foundPerson = true;
        break;
      }
    }
    expect(foundPerson).toBe(true);
  });

  test("aucune erreur JavaScript dans la console", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("aucune requête réseau en erreur (4xx/5xx)", async ({ page }) => {
    const failedRequests: string[] = [];
    page.on("response", (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} ${response.url()}`);
      }
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(failedRequests).toHaveLength(0);
  });
});

test.describe("Homepage – sections visibles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("section Hero est visible avec le h1", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Zacharie Dos Santos");
  });

  test("photo de profil se charge", async ({ page }) => {
    const profileImg = page.locator('img[src="/images/profile.webp"]').first();
    await expect(profileImg).toBeVisible();
    const naturalWidth = await profileImg.evaluate(
      (el: HTMLImageElement) => el.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("section Freelance est visible", async ({ page }) => {
    await page.locator("#freelance").scrollIntoViewIfNeeded();
    await expect(page.locator("#freelance")).toBeVisible();
    await expect(page.locator("#freelance")).toContainText("Freelance");
  });

  test("section Stack est visible", async ({ page }) => {
    const stack = page.locator("section").filter({ hasText: /Stack|technolog/i }).first();
    await stack.scrollIntoViewIfNeeded();
    await expect(stack).toBeVisible();
  });

  test("section Projets est visible", async ({ page }) => {
    const projects = page
      .locator("section")
      .filter({ hasText: /Projets|Portfolio/i })
      .first();
    await projects.scrollIntoViewIfNeeded();
    await expect(projects).toBeVisible();
  });
});
