import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get s1tarted').click();
  await expect(page).toHaveTitle(/Getting started/);
});
