import { test, expect } from "@playwright/test";

test.describe("Projets – affichage des cartes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.locator("#projects").scrollIntoViewIfNeeded();
  });

  test('le titre "Mes Projets" est visible', async ({ page }) => {
    const heading = page.locator("#projects-heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Mes Projets");
  });

  test("au moins une carte projet est affichée", async ({ page }) => {
    // Attendre que les cartes soient rendues (React client:load)
    await page.waitForFunction(() => {
      const section = document.querySelector("#projects");
      return section && section.querySelectorAll("img").length > 0;
    });
    const cards = page.locator("#projects img");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("les titres de projets sont affichés", async ({ page }) => {
    await page.waitForFunction(() => {
      const section = document.querySelector("#projects");
      if (!section) return false;
      // Project cards use h2 headings
      const headings = section.querySelectorAll("h2");
      return headings.length > 1; // more than just the section heading
    });
    const titles = page.locator("#projects h2");
    const count = await titles.count();
    expect(count).toBeGreaterThan(1);
  });

  test("les liens GitHub des projets sont présents", async ({ page }) => {
    await page.waitForFunction(() => {
      const section = document.querySelector("#projects");
      if (!section) return false;
      return section.querySelectorAll('a[href*="github.com"]').length > 0;
    });
    const ghLinks = page.locator('#projects a[href*="github.com"]');
    const count = await ghLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("Freelance – section CTA", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.locator("#freelance").scrollIntoViewIfNeeded();
  });

  test('bouton "Voir mon profil Malt" est visible et cliquable', async ({
    page,
  }) => {
    const maltBtn = page
      .locator("#freelance a[href*='malt.com']")
      .first();
    await expect(maltBtn).toBeVisible();
    await expect(maltBtn).toBeEnabled();
  });

  test('bouton "Me contacter" (mailto) est visible', async ({ page }) => {
    const contactBtn = page.locator("#freelance a[href^='mailto:']").first();
    await expect(contactBtn).toBeVisible();
  });

  test("les 4 highlights de disponibilité sont affichés", async ({ page }) => {
    await page.waitForFunction(() => {
      const section = document.querySelector("#freelance");
      if (!section) return false;
      return section.querySelectorAll("h3").length >= 4;
    });
    const highlights = page.locator("#freelance h3");
    const count = await highlights.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });
});

test.describe("Stack – compétences", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.locator("#stack").scrollIntoViewIfNeeded();
  });

  test("le titre de la section Stack est visible", async ({ page }) => {
    const heading = page.locator("#stack-heading");
    await expect(heading).toBeVisible();
  });

  test("au moins une catégorie de compétence est affichée", async ({
    page,
  }) => {
    await page.waitForFunction(() => {
      const section = document.querySelector("#stack");
      if (!section) return false;
      return section.querySelectorAll("h3").length > 0;
    });
    const categories = page.locator("#stack h3");
    const count = await categories.count();
    expect(count).toBeGreaterThan(0);
  });
});
