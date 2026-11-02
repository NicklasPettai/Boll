import { test, expect } from '@playwright/test';

async function ready(page) {
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#error')).toBeHidden();
}

async function state(page) {
  return page.evaluate(async () => {
    const { game, camera } = await import(document.querySelector('script[src*="/src/main.js"]').src);
    const p = game.ball.position;
    return {
      status: game.state,
      seed: game.level.seed,
      level: game.level.number,
      stars: game.collected.size,
      elapsed: game.elapsed,
      ball: { x: p.x, y: p.y, z: p.z },
      velocity: { x: game.ball.velocity.x, z: game.ball.velocity.z },
      offset: { x: camera.position.x - p.x, y: camera.position.y - p.y, z: camera.position.z - p.z },
      fov: camera.fov,
    };
  });
}

async function openOptions(page) {
  await page.getByRole('button', { name: 'Öppna inställningar', exact: true }).click();
  await expect(page.locator('#options-dialog')).toBeVisible();
  return page.getByRole('checkbox', { name: 'Tredjeperson', exact: true });
}

async function closeOptions(page) {
  await page.locator('#options-dialog').getByRole('button', { name: /^Klart/ }).click();
  await expect(page.locator('#options-dialog')).not.toBeVisible();
}

test('default overhead view uses the earlier camera and world-axis movement', async ({ page }) => {
  await ready(page);
  const checkbox = await openOptions(page);
  await expect(checkbox).not.toBeChecked();
  await closeOptions(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overhead');
  let view = await state(page);
  expect(view.offset.y).toBeGreaterThan(10);
  expect(view.offset.y).toBeLessThan(13);
  expect(view.offset.z).toBeCloseTo(17, 0);
  expect(Math.abs(view.offset.x)).toBeLessThan(0.2);
  expect(view.fov).toBe(42);
  await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyD');
  await expect.poll(async () => (await state(page)).velocity.x).toBeGreaterThan(0.3);
  expect(Math.abs((await state(page)).velocity.z)).toBeLessThan(0.15);
  await page.keyboard.up('KeyD');
  await expect.poll(async () => Math.abs((await state(page)).velocity.x)).toBeLessThan(0.1);
  await page.keyboard.down('KeyW');
  await expect.poll(async () => (await state(page)).velocity.z).toBeLessThan(-0.3);
  view = await state(page);
  expect(Math.abs(view.velocity.x)).toBeLessThan(0.15);
  expect(Math.abs(view.offset.x)).toBeLessThan(0.3);
  expect(view.fov).toBe(42);
  await page.keyboard.up('KeyW');
  await page.keyboard.up('ShiftLeft');
  await page.screenshot({ path: 'test-results/options-overhead-gameplay.png' });
});

test('options checkbox supports Space and Escape and persists both camera choices', async ({ page }) => {
  await ready(page);
  const initial = await state(page);
  const checkbox = await openOptions(page);
  await checkbox.focus();
  await page.keyboard.press('Space');
  await expect(checkbox).toBeChecked();
  await page.keyboard.press('KeyR');
  expect((await state(page)).seed).toBe(initial.seed);
  expect((await state(page)).status).toBe('intro');
  expect((await state(page)).elapsed).toBe(0);
  await page.screenshot({ path: 'test-results/options-desktop.png' });
  await page.keyboard.press('Escape');
  await expect(page.locator('#options-dialog')).not.toBeVisible();
  await expect(page.locator('#dialog')).toBeHidden();
  expect(await page.evaluate(() => localStorage.getItem('boll-camera-mode'))).toBe('third-person');
  await page.reload();
  await expect(page.locator('#loading')).toBeHidden();
  await expect(await openOptions(page)).toBeChecked();
  await closeOptions(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
  expect((await state(page)).offset.y).toBeLessThan(5);
  await (await openOptions(page)).uncheck();
  await closeOptions(page);
  expect(await page.evaluate(() => localStorage.getItem('boll-camera-mode'))).toBe('overhead');
  await page.reload();
  await expect(page.locator('#loading')).toBeHidden();
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overhead');
  expect((await state(page)).fov).toBe(42);
});

test('in-game options pause time and change views without resetting progress or retaining input', async ({ page }) => {
  await ready(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await page.keyboard.down('ArrowUp');
  await expect(page.locator('#stars')).toHaveText('1', { timeout: 12000 });
  await page.keyboard.up('ArrowUp');
  await page.keyboard.down('ShiftLeft');
  await expect.poll(async () => Math.abs((await state(page)).velocity.z)).toBeLessThan(0.05);
  await page.keyboard.up('ShiftLeft');
  const checkbox = await openOptions(page);
  const paused = await state(page);
  expect(paused.status).toBe('paused');
  await page.keyboard.down('KeyD');
  await checkbox.check();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
  await page.waitForTimeout(250);
  const changed = await state(page);
  expect(changed.elapsed).toBe(paused.elapsed);
  expect(changed.ball).toEqual(paused.ball);
  expect(changed.seed).toBe(paused.seed);
  expect(changed.level).toBe(paused.level);
  expect(changed.stars).toBe(1);
  await closeOptions(page);
  await expect.poll(async () => (await state(page)).status).toBe('playing');
  await page.waitForTimeout(200);
  expect(Math.abs((await state(page)).velocity.x)).toBeLessThan(0.1);
  await page.keyboard.up('KeyD');
  await (await openOptions(page)).uncheck();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overhead');
  await closeOptions(page);
  await expect.poll(async () => (await state(page)).status).toBe('playing');
  const overhead = await state(page);
  expect(overhead.status).toBe('playing');
  expect(overhead.seed).toBe(paused.seed);
  expect(overhead.stars).toBe(1);
  expect(overhead.elapsed).toBeGreaterThanOrEqual(paused.elapsed);
  expect(overhead.fov).toBe(42);
});

test('options opened from the pause menu return to pause instead of resuming', async ({ page }) => {
  await ready(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await page.keyboard.press('Escape');
  await expect(page.locator('#dialog')).toBeVisible();
  const before = await state(page);
  await page.locator('#dialog').getByRole('button', { name: 'Inställningar', exact: true }).click();
  await expect(page.locator('#options-dialog')).toBeVisible();
  await expect(page.locator('#dialog')).toBeHidden();
  await page.getByRole('checkbox', { name: 'Tredjeperson', exact: true }).check();
  await page.keyboard.press('Escape');
  await expect(page.locator('#options-dialog')).not.toBeVisible();
  await expect(page.locator('#dialog')).toBeVisible();
  const after = await state(page);
  expect(after.status).toBe('paused');
  expect(after.elapsed).toBe(before.elapsed);
  expect(after.seed).toBe(before.seed);
  await page.getByRole('button', { name: 'Fortsätt rulla' }).click();
  await expect.poll(async () => (await state(page)).status).toBe('playing');
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
});

test('mobile options switch from overhead to third-person while preserving playable touch controls', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await ready(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).tap();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overhead');
  await page.getByRole('button', { name: 'Öppna inställningar', exact: true }).tap();
  const checkbox = page.getByRole('checkbox', { name: 'Tredjeperson', exact: true });
  await expect(checkbox).not.toBeChecked();
  await checkbox.tap();
  await expect(checkbox).toBeChecked();
  await page.screenshot({ path: 'test-results/options-mobile.png' });
  await page.locator('#options-dialog').getByRole('button', { name: /^Klart/ }).tap();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
  await expect.poll(async () => (await state(page)).status).toBe('playing');
  await expect(page.getByRole('button', { name: 'Rulla framåt' })).toBeVisible();
  const jump = page.getByRole('button', { name: 'Hoppa', exact: true });
  await jump.tap();
  await expect.poll(async () => (await state(page)).ball.y, { intervals: [25] }).toBeGreaterThan(1.3);
  expect((await state(page)).offset.y).toBeLessThan(5);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
  await context.close();
});
