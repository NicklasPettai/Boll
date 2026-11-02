export const RADIUS = 0.55;

export function createSeed() {
  const values = new Uint32Array(2);
  globalThis.crypto.getRandomValues(values);
  return [...values].map(value => value.toString(16).padStart(8, '0')).join('');
}

// Seeded randomness lets a reported course be reproduced in tests.
function randomFrom(seed) {
  let state = 2166136261;
  for (const char of seed) state = Math.imul(state ^ char.charCodeAt(0), 16777619);
  return () => {
    let value = state += 0x6d2b79f5;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

export function onPlatform(platform, x, z, margin = 0) {
  const dx = x - platform.x;
  const dz = z - platform.z;
  const angle = platform.angle || 0;
  const localX = Math.cos(angle) * dx - Math.sin(angle) * dz;
  const localZ = Math.sin(angle) * dx + Math.cos(angle) * dz;
  return Math.abs(localX) <= platform.w / 2 - margin &&
    Math.abs(localZ) <= platform.d / 2 - margin;
}

export function generateLevel(seed = createSeed(), number = 1) {
  seed = String(seed);
  number = Math.max(1, Math.floor(number));
  const random = randomFrom(`${seed}:${number}`);
  const between = (min, max) => min + random() * (max - min);
  const difficulty = Math.min((number - 1) / 10, 1);
  const count = Math.min(6, 4 + Math.floor(random() * 2) + Math.floor((number - 1) / 5));
  const islands = [{ x: 0, z: 4, w: 11, d: 12, angle: 0, kind: 'island' }];

  for (let i = 1; i < count; i++) {
    const previous = islands[i - 1];
    const w = between(11.5, 14.5);
    const d = between(11.5, 14);
    let shift = between(-7, 7);
    if (Math.abs(shift) < 2) shift = shift < 0 ? -2 : 2;
    islands.push({
      x: Math.max(-13, Math.min(13, previous.x + shift)),
      z: previous.z - previous.d / 2 - between(6, 10) - d / 2,
      w, d, angle: 0, kind: 'island',
    });
  }

  const bridges = islands.slice(1).map((island, i) => {
    const previous = islands[i];
    // Both ends overlap an island. Anchor margins also leave room for the ball.
    const from = { x: previous.x + between(-1.4, 1.4), z: previous.z - previous.d / 2 + 1.6 };
    const to = { x: island.x + between(-1.4, 1.4), z: island.z + island.d / 2 - 1.6 };
    return {
      x: (from.x + to.x) / 2, z: (from.z + to.z) / 2,
      w: between(3.6, 4.3) - difficulty * 0.4,
      d: Math.hypot(from.x - to.x, from.z - to.z),
      angle: Math.atan2(from.x - to.x, from.z - to.z),
      kind: 'bridge', from, to,
    };
  });

  const platforms = islands.flatMap((island, i) => bridges[i] ? [island, bridges[i]] : [island]);
  const spawn = { x: 0, z: 7 };
  const last = islands.at(-1);
  const goal = { x: last.x + between(-1.5, 1.5), z: last.z - last.d / 2 + 2.5 };
  const starLocations = [[0, 4]];
  const checkpoints = [];
  const obstacles = [];
  // A continuous route around each obstacle's entire swept area is reserved.
  // It is also driven through the real physics engine in the test suite.
  const safeRoute = [[spawn.x, spawn.z], starLocations[0]];

  bridges.forEach((bridge, i) => {
    const island = islands[i + 1];
    starLocations.push([bridge.x, bridge.z]);
    safeRoute.push([bridge.from.x, bridge.from.z], [bridge.x, bridge.z], [bridge.to.x, bridge.to.z]);

    if (i === bridges.length - 1) {
      const star = [island.x + between(-1.8, 1.8), island.z + 1.2];
      starLocations.push(star);
      safeRoute.push(star, [goal.x, goal.z]);
      return;
    }

    const side = random() < 0.5 ? -1 : 1;
    const sideX = island.x + side * (island.w / 2 - 1.3);
    const backZ = island.z + island.d / 2 - 1.3;
    const frontZ = island.z - island.d / 2 + 1.3;
    const star = [sideX, island.z + between(-0.6, 0.6)];
    const checkpoint = { x: bridges[i + 1].from.x, z: frontZ };
    starLocations.push(star);
    checkpoints.push(checkpoint);
    obstacles.push({
      x: island.x, z: island.z,
      length: between(5, Math.min(7, Math.min(island.w, island.d) - 5)),
      speed: (random() < 0.5 ? -1 : 1) * between(0.45, 0.8 + difficulty * 0.3),
      angle: between(0, Math.PI * 2),
    });
    safeRoute.push([bridge.to.x, backZ], [sideX, backZ], star, [sideX, frontZ], [checkpoint.x, checkpoint.z]);
  });

  return { seed, number, platforms, islands, bridges, spawn, goal, starLocations, checkpoints, obstacles, safeRoute };
}
