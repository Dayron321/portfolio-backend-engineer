import { test, expect } from '@playwright/test';

test.describe('Portafolio E2E', () => {
  test('La página principal carga y muestra el título correcto', async ({ page }) => {
    // Visitar la página Home
    await page.goto('/');

    // Verificar el título principal
    await expect(page.locator('h1')).toContainText('Dayron');

    // Verificar que el subtítulo esté presente
    await expect(page.locator('text=Backend Developer | QA Automation | CI/CD')).toBeVisible();
  });

  test('La navegación funciona correctamente entre rutas', async ({ page }) => {
    // Visitar la página Home
    await page.goto('/');

    // Hacer clic en "Ver Casos de Estudio" en el hero
    await page.click('text=Ver Casos de Estudio');

    // Debe llevarnos a /projects
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.locator('h1')).toContainText('Casos de Estudio');

    // Navegar usando el navbar hacia "About"
    await page.click('nav >> text=About');
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1')).toContainText('Sobre Mí');
  });
});
