import { test, expect } from '@playwright/test';

async function selectThirdPerson(page) {
  await page.getByRole('button', { name: 'Öppna inställningar' }).click();
  await page.getByRole('checkbox', { name: 'Tredjeperson', exact: true }).check();
  await page.getByRole('button', { name: 'Klart' }).click();
}

async function view(page) {
  return page.evaluate(async () => {
    const { game, camera } = await import(document.querySelector('script[src*="/src/main.js"]').src);
    const forward = camera.getWorldDirection(camera.position.clone());
    const p = game.ball.position;
    return {
      offset: { x: camera.position.x - p.x, y: camera.position.y - p.y, z: camera.position.z - p.z },
      position: camera.position.toArray(),
      rotation: camera.quaternion.toArray(),
      forward: { x: forward.x, z: forward.z },
      velocity: { x: game.ball.velocity.x, z: game.ball.velocity.z },
      ball: { x: p.x, y: p.y, z: p.z },
      fov: camera.fov,
    };
  });
}

test('camera follows close behind, turns without steering a held key in circles, and resets', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'overview');
  await selectThirdPerson(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-camera', 'third-person');
  let state = await view(page);
  expect(state.offset.z).toBeGreaterThan(6);
  expect(state.offset.z).toBeLessThan(10);
  expect(state.offset.y).toBeGreaterThan(2.5);
  expect(state.offset.y).toBeLessThan(4.5);
  expect(Math.abs(state.offset.x)).toBeLessThan(0.2);
  await expect(page.locator('#intro')).toHaveCSS('opacity', '0');
  await page.screenshot({ path: 'test-results/camera-behind-desktop.png' });

  // Slow movement keeps the ball on the starting island while the view turns.
  await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyD');
  await expect.poll(async () => (await view(page)).offset.x, { timeout: 8000 }).toBeLessThan(-6);
  await expect.poll(async () => Math.abs((await view(page)).offset.z)).toBeLessThan(1.3);
  state = await view(page);
  expect(state.forward.x).toBeGreaterThan(0.85);
  expect(Math.abs(state.velocity.z)).toBeLessThan(0.2);
  await page.waitForTimeout(300);
  expect(Math.abs((await view(page)).velocity.z)).toBeLessThan(0.2);
  await page.keyboard.up('KeyD');
  await page.keyboard.down('KeyW');
  await expect.poll(async () => (await view(page)).velocity.x).toBeGreaterThan(0.3);
  expect(Math.abs((await view(page)).velocity.z)).toBeLessThan(0.3);
  await page.keyboard.up('KeyW');
  await page.keyboard.up('ShiftLeft');
  await page.keyboard.press('Escape');
  await expect(page.locator('#dialog')).toBeVisible();
  const paused = await view(page);
  await page.waitForTimeout(250);
  expect((await view(page)).position).toEqual(paused.position);
  expect((await view(page)).rotation).toEqual(paused.rotation);
  await page.getByRole('button', { name: 'Fortsätt rulla' }).click();
  await page.keyboard.press('KeyR');
  await expect.poll(async () => Math.abs((await view(page)).offset.x)).toBeLessThan(0.2);
  expect((await view(page)).offset.z).toBeGreaterThan(6);
  expect((await view(page)).offset.y).toBeLessThan(4.5);
  expect(errors).toEqual([]);
});

test('respawning places the camera behind the checkpoint facing its outgoing bridge', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await selectThirdPerson(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).click();
  await page.evaluate(async () => {
    const { game } = await import(document.querySelector('script[src*="/src/main.js"]').src);
    const cp = game.level.checkpoints[0];
    game.placeBall(cp.x, cp.z);
  });
  await expect.poll(() => page.evaluate(async () => {
    return (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.checkpoint;
  })).toBe(0);
  const direction = await page.evaluate(async () => {
    const { game } = await import(document.querySelector('script[src*="/src/main.js"]').src);
    game.ball.position.y = -10;
    const b = game.level.bridges[1];
    const length = Math.hypot(b.to.x - b.from.x, b.to.z - b.from.z);
    return { x: (b.to.x - b.from.x) / length, z: (b.to.z - b.from.z) / length };
  });
  await expect.poll(() => page.evaluate(async () => {
    return (await import(document.querySelector('script[src*="/src/main.js"]').src)).game.falls;
  })).toBe(1);
  const state = await view(page);
  expect(state.offset.x * direction.x + state.offset.z * direction.z).toBeLessThan(-6);
  expect(state.forward.x * direction.x + state.forward.z * direction.z).toBeGreaterThan(0.9);
  expect(state.offset.y).toBeLessThan(4.5);
});

test('mobile uses a trailing view with room for touch controls and jumping', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('#loading')).toBeHidden();
  await selectThirdPerson(page);
  await page.getByRole('button', { name: 'Nu rullar vi' }).tap();
  const state = await view(page);
  expect(state.offset.z).toBeGreaterThan(8);
  expect(state.offset.z).toBeLessThan(11);
  expect(state.offset.y).toBeLessThan(5);
  expect(state.fov).toBeGreaterThan(54);
  await expect(page.getByRole('button', { name: 'Rulla framåt' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hoppa', exact: true })).toBeVisible();
  await page.screenshot({ path: 'test-results/camera-behind-mobile.png' });
  await page.getByRole('button', { name: 'Hoppa', exact: true }).tap();
  await expect.poll(async () => (await view(page)).ball.y, { intervals: [25] }).toBeGreaterThan(1.3);
  expect((await view(page)).offset.z).toBeGreaterThan(8);
  expect((await view(page)).offset.y).toBeGreaterThan(2);
  await context.close();
});
