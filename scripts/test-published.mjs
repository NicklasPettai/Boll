import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const url = process.env.BOLL_SITE_URL || 'https://nicklaspettai.github.io/Boll/';
const browser = await chromium.launch({
  ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'],
});
await mkdir('test-results', { recursive: true });

try {
  for (const mobile of [false, true]) {
    const label = mobile ? 'mobile' : 'desktop';
    const context = await browser.newContext({
      viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
      isMobile: mobile,
      hasTouch: mobile,
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('requestfailed', request => errors.push(`${request.url()}: ${request.failure()?.errorText}`));
    page.on('response', response => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      assert.equal(response.status(), 200, `${label}: page returned HTTP ${response.status()}`);
      await expect(page.locator('#loading')).toBeHidden({ timeout: 30000 });
      await expect(page.locator('#error')).toBeHidden();
      await expect(page.locator('canvas')).toHaveCount(1);
      const seed = await page.locator('#app').getAttribute('data-seed');
      assert.ok(seed, 'The published page must contain the generated-course version.');
      await page.getByRole('button', { name: 'Nu rullar vi' }).click();
      await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overhead');
      if (mobile) {
        const forward = page.getByRole('button', { name: 'Rulla framåt' });
        await expect(forward).toBeVisible();
        await forward.dispatchEvent('pointerdown', { pointerId: 1, pointerType: 'touch' });
        await expect(page.locator('#stars')).toHaveText('1', { timeout: 15000 });
        await forward.dispatchEvent('pointerup', { pointerId: 1, pointerType: 'touch' });
        await page.getByRole('button', { name: 'Pausa spelet' }).click();
      } else {
        await page.keyboard.down('ArrowUp');
        await expect(page.locator('#stars')).toHaveText('1', { timeout: 15000 });
        await page.keyboard.up('ArrowUp');
        await page.keyboard.press('Escape');
      }
      await expect(page.getByRole('heading', { name: 'En liten paus.' })).toBeVisible();
      await page.getByRole('button', { name: 'Generera en ny bana' }).click();
      await expect(page.locator('#app')).not.toHaveAttribute('data-seed', seed);
      await expect(page.locator('#stars')).toHaveText('0');
      await expect(page.locator('#dialog')).toBeHidden();
      await page.getByRole('button', { name: 'Öppna inställningar' }).click();
      await page.getByRole('checkbox', { name: 'Tredjeperson', exact: true }).check();
      await page.getByRole('button', { name: 'Klart' }).click();
      await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
      await expect(page.locator('canvas')).toHaveAttribute('aria-label', /Mellanslag hoppar, Shift bromsar/);
      if (mobile) {
        await page.getByRole('button', { name: 'Hoppa', exact: true }).click();
      } else {
        await expect(page.locator('.controls-legend')).toContainText('Hoppa');
        await page.keyboard.press('Space');
      }
      await page.screenshot({ path: `test-results/published-${label}.png` });
      assert.deepEqual(errors, [], `${label}: browser or resource errors`);
      console.log(`PASS ${label}: ${page.url()} returns HTTP 200, plays overhead, collects a star and switches to third-person through Options.`);
    } catch (error) {
      await page.screenshot({ path: `test-results/published-${label}-failure.png` }).catch(() => {});
      console.error(`${label} failed at ${page.url()}:`, error);
      throw error;
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
