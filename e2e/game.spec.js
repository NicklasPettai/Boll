import { test, expect } from '@playwright/test';

test('desktop: renders 3D, starts, collects a star, pauses, and restarts', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#error')).toBeHidden();
  await expect(page.locator('canvas')).toBeVisible();
  const initialSeed = await page.locator('#app').getAttribute('data-seed');
  const initialLayout = await page.evaluate(async () => (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.level.platforms);
  await expect(page.locator('canvas')).toHaveCount(1);
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
  await expect(page.locator('#app')).not.toHaveAttribute('data-seed', initialSeed);
  const newLayout = await page.evaluate(async () => (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.level.platforms);
  expect(newLayout).not.toEqual(initialLayout);
  await expect(page.locator('#level-number')).toHaveText('01');
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
  const seed = await page.locator('#app').getAttribute('data-seed');
  await page.getByRole('button', { name: 'Pausa spelet' }).tap();
  await page.getByRole('button', { name: 'Generera en ny bana' }).tap();
  await expect(page.locator('#app')).not.toHaveAttribute('data-seed', seed);
  await expect(page.locator('#stars')).toHaveText('0');
  await expect(page.locator('#dialog')).toBeHidden();
  await expect(forward).toBeVisible();
  await context.close();
});

test('winning advances to a different course and updates the HUD and star target', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  const level = await page.evaluate(async () => (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.level);
  await expect(page.locator('#star-total')).toHaveText(`/ ${level.starLocations.length}`);

  // Exercise the renderer's collection/win events here. Complete physical runs
  // without teleporting are covered for 32 seeds in the physics test suite.
  for (const [index, position] of level.starLocations.entries()) {
    await page.evaluate(async ([x, z]) => {
      (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.placeBall(x, z);
    }, position);
    await expect(page.locator('#stars')).toHaveText(String(index + 1));
  }
  await page.evaluate(async ({ x, z }) => {
    (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.placeBall(x, z);
  }, level.goal);
  await expect(page.getByRole('button', { name: 'Nästa bana' })).toBeVisible();
  await expect(page.locator('#dialog-kicker')).toHaveText('BANA 1 AVKLARAD');
  await expect(page.locator('#dialog-text')).toContainText(`${level.starLocations.length} av ${level.starLocations.length} stjärnor`);
  await page.screenshot({ path: 'test-results/generated-victory.png' });
  await page.getByRole('button', { name: 'Nästa bana' }).click();
  await expect(page.locator('#dialog')).toBeHidden();
  await expect(page.locator('#app')).toHaveAttribute('data-level', '2');
  await expect(page.locator('#app')).not.toHaveAttribute('data-seed', level.seed);
  await expect(page.locator('#level-number')).toHaveText('02');
  await expect(page.locator('#stars')).toHaveText('0');
  const next = await page.evaluate(async () => (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.level);
  await expect(page.locator('#star-total')).toHaveText(`/ ${next.starLocations.length}`);
  await expect(page.locator('#best')).toHaveText('LÄNGSTA RESA: 1 BANA');
  await page.screenshot({ path: 'test-results/generated-next-course.png' });
  expect(errors).toEqual([]);
});

test('reload and repeated new-course generation keep producing playable fresh layouts', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  const initial = await page.locator('#app').getAttribute('data-seed');
  await page.reload();
  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#app')).not.toHaveAttribute('data-seed', initial);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  const seeds = new Set();
  for (let i = 0; i < 8; i++) {
    const seed = await page.locator('#app').getAttribute('data-seed');
    expect(seeds.has(seed)).toBe(false);
    seeds.add(seed);
    await page.keyboard.press('KeyR');
    await expect(page.locator('#app')).not.toHaveAttribute('data-seed', seed);
    await expect(page.locator('#error')).toBeHidden();
    await expect(page.locator('canvas')).toHaveCount(1);
  }
  await page.keyboard.down('ArrowUp');
  await expect(page.locator('#stars')).toHaveText('1', { timeout: 12000 });
  await page.keyboard.up('ArrowUp');
  expect(errors).toEqual([]);
});
