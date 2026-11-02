import { _electron as electron } from '@playwright/test';
import assert from 'node:assert/strict';

// Run after `npm run build`. Linux needs a display (DISPLAY or xvfb-run).
// Container-only launch flags never affect the distributed Windows executable.
const app = await electron.launch({
  args: [
    '.',
    ...(process.env.BOLL_CONTAINER_TEST ? [
      '--no-sandbox', '--disable-dev-shm-usage',
      '--enable-unsafe-swiftshader', '--use-angle=swiftshader',
    ] : []),
  ],
});

try {
  const page = await app.firstWindow();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Reload while offline so startup and gameplay must use packaged local resources.
  await app.context().setOffline(true);
  await page.reload();
  await page.locator('#loading').waitFor({ state: 'hidden' });
  assert.equal(await page.locator('#error').isVisible(), false);
  assert.ok(page.url().startsWith('file://'));
  assert.equal(await page.locator('canvas').count(), 1);
  const preferences = await app.evaluate(({ BrowserWindow }) => {
    const prefs = BrowserWindow.getAllWindows()[0].webContents.getLastWebPreferences();
    return { sandbox: prefs.sandbox, contextIsolation: prefs.contextIsolation, nodeIntegration: prefs.nodeIntegration };
  });
  assert.deepEqual(preferences, { sandbox: true, contextIsolation: true, nodeIntegration: false });
  assert.equal(await page.evaluate(() => typeof window.require), 'undefined');
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await page.keyboard.down('ArrowUp');
  await page.waitForFunction(() => document.getElementById('stars').textContent === '1');
  await page.keyboard.up('ArrowUp');
  await page.keyboard.press('Escape');
  await page.getByRole('heading', { name: 'En liten paus.' }).waitFor();
  await page.getByRole('button', { name: 'Fortsätt rulla' }).click();
  await page.keyboard.press('KeyR');
  await page.waitForFunction(() => document.getElementById('stars').textContent === '0');
  assert.equal(await page.locator('#stars').textContent(), '0');
  await page.locator('.brand').click();
  await page.getByRole('button', { name: 'Nu rullar vi' }).waitFor();
  assert.equal(await page.locator('#error').isVisible(), false);
  assert.deepEqual(errors, []);
  console.log('PASS: desktop starts offline from file://, collects stars, pauses, restarts, and reloads. Renderer isolation verified.');
} finally {
  await app.close();
}
