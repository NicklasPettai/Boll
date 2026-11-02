import { test, expect } from '@playwright/test';

test('desktop: renders 3D, starts, collects a star, pauses, and restarts', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#error')).toBeHidden();
  await expect(page.locator('canvas')).toBeVisible();
  await page.screenshot({ path: 'test-results/desktop-intro.png' });
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await page.keyboard.down('ArrowUp');
  await expect(page.locator('#stars')).toHaveText('1', { timeout: 12000 });
  await page.keyboard.up('ArrowUp');
  await page.keyboard.down('Space');
  await page.waitForTimeout(400);
  await page.keyboard.up('Space');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('heading', { name: 'En liten paus.' })).toBeVisible();
  const time = await page.locator('#timer').textContent();
  await page.waitForTimeout(1200);
  await expect(page.locator('#timer')).toHaveText(time);
  await page.getByRole('button', { name: 'Fortsätt rulla' }).click();
  await expect(page.locator('#dialog')).toBeHidden();
  await page.keyboard.press('KeyR');
  await expect(page.locator('#stars')).toHaveText('0');
  await page.screenshot({ path: 'test-results/desktop-playing.png' });
  expect(errors).toEqual([]);
});

test('mobile: touch controls move the ball and layout fits the viewport', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await page.screenshot({ path: 'test-results/mobile-intro.png' });
  await page.getByRole('button', { name: 'Nu rullar vi' }).tap();
  const forward = page.getByRole('button', { name: 'Rulla framåt' });
  await expect(forward).toBeVisible();
  await forward.dispatchEvent('pointerdown', { pointerId: 1, pointerType: 'touch' });
  await expect(page.locator('#stars')).toHaveText('1', { timeout: 12000 });
  await forward.dispatchEvent('pointerup', { pointerId: 1, pointerType: 'touch' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/mobile-playing.png' });
  await context.close();
});
