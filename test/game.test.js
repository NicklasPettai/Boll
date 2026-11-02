import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, RADIUS, formatTime } from '../src/game.js';
import { generateLevel, onPlatform } from '../src/level.js';

const dt = 1 / 120;
const freshGame = () => new Game({ seed: 'regression-course' });
const run = (game, seconds, input = {}) => {
  const events = [];
  for (let i = 0; i < Math.round(seconds / dt); i++) events.push(...game.step(dt, input));
  return events;
};

function win(game) {
  for (const position of game.level.starLocations) {
    game.placeBall(...position);
    run(game, dt);
  }
  game.placeBall(game.level.goal.x, game.level.goal.z);
  return run(game, dt);
}

test('a seed reproduces a course, while different seeds change the actual layout', () => {
  assert.deepEqual(generateLevel('same', 3), generateLevel('same', 3));
  const layouts = new Set();
  for (let i = 0; i < 100; i++) {
    layouts.add(JSON.stringify(generateLevel(`variation-${i}`).platforms));
  }
  assert.equal(layouts.size, 100);
  assert.notDeepEqual(generateLevel('same', 1).platforms, generateLevel('same', 2).platforms);
});

test('2,000 generated courses have continuous safe routes and reachable objectives', () => {
  for (let seed = 0; seed < 2000; seed++) {
    const level = generateLevel(`geometry-${seed}`, seed % 30 + 1);
    const context = `seed ${seed}, level ${level.number}`;
    assert.ok(level.islands.length >= 4 && level.islands.length <= 6, context);
    assert.equal(level.starLocations.length, 2 * level.islands.length - 1, context);
    assert.equal(level.checkpoints.length, level.islands.length - 2, context);
    for (const p of level.platforms) {
      assert.ok([p.x, p.z, p.w, p.d, p.angle].every(Number.isFinite), context);
      assert.ok(p.w > RADIUS * 4 && p.d > 0, context);
    }
    for (const bridge of level.bridges) {
      assert.ok(level.islands.some(p => onPlatform(p, bridge.from.x, bridge.from.z, RADIUS)), context);
      assert.ok(level.islands.some(p => onPlatform(p, bridge.to.x, bridge.to.z, RADIUS)), context);
    }
    for (const [x, z] of [...level.starLocations, ...level.checkpoints.map(c => [c.x, c.z])]) {
      assert.ok(level.platforms.some(p => onPlatform(p, x, z, RADIUS + 0.2)), context);
      for (const bar of level.obstacles) {
        assert.ok(Math.hypot(x - bar.x, z - bar.z) > Math.hypot(bar.length / 2, 0.26) + RADIUS + 0.2, context);
      }
    }
    for (let j = 1; j < level.safeRoute.length; j++) {
      const a = level.safeRoute[j - 1], b = level.safeRoute[j];
      for (let t = 0; t <= 20; t++) {
        const x = a[0] + (b[0] - a[0]) * t / 20;
        const z = a[1] + (b[1] - a[1]) * t / 20;
        assert.ok(level.platforms.some(p => onPlatform(p, x, z, RADIUS + 0.1)), `${context}, route segment ${j}`);
        for (const bar of level.obstacles) {
          assert.ok(Math.hypot(x - bar.x, z - bar.z) > Math.hypot(bar.length / 2, 0.26) + RADIUS + 0.2, context);
        }
      }
    }
  }
});

test('ball rests on the platform and moves with directional input', () => {
  const game = freshGame();
  game.start();
  run(game, 1);
  assert.ok(Math.abs(game.ball.position.y - RADIUS) < 0.02);
  const start = game.ball.position.z;
  run(game, 1, { up: true });
  assert.ok(game.ball.position.z < start - 2);
  assert.equal(game.falls, 0);
});

test('braking materially reduces speed and pause freezes simulation', () => {
  const game = freshGame();
  game.start();
  run(game, 0.5, { up: true });
  const speed = Math.abs(game.ball.velocity.z);
  run(game, 0.3, { brake: true });
  assert.ok(Math.abs(game.ball.velocity.z) < speed * 0.2);
  game.pause();
  const z = game.ball.position.z;
  const time = game.elapsed;
  const level = game.level;
  run(game, 2, { up: true });
  assert.equal(game.ball.position.z, z);
  assert.equal(game.elapsed, time);
  assert.equal(game.level, level);
  game.resume();
  run(game, 0.25, { up: true });
  assert.ok(game.ball.position.z < z);
});

test('collecting a star twice counts once, and falling keeps the course and checkpoint', () => {
  const game = freshGame();
  game.start();
  const level = game.level;
  game.placeBall(...level.starLocations[0]);
  assert.equal(run(game, 0.1).filter(e => e.type === 'star').length, 1);
  assert.equal(run(game, 0.1).filter(e => e.type === 'star').length, 0);
  const checkpoint = level.checkpoints[0];
  game.placeBall(checkpoint.x, checkpoint.z);
  assert.ok(run(game, 0.1).some(e => e.type === 'checkpoint'));
  game.ball.position.y = -10;
  assert.ok(run(game, dt).some(e => e.type === 'fall'));
  assert.equal(game.ball.position.x, checkpoint.x);
  assert.equal(game.ball.position.z, checkpoint.z);
  assert.equal(game.collected.size, 1);
  assert.equal(game.falls, 1);
  assert.equal(game.level, level);
});

test('falling before a checkpoint returns to the original spawn on the same level', () => {
  const game = freshGame();
  game.start();
  const level = game.level;
  game.ball.position.y = -10;
  run(game, dt);
  assert.equal(game.ball.position.x, level.spawn.x);
  assert.equal(game.ball.position.z, level.spawn.z);
  assert.equal(game.level, level);
});

test('goal requires every star, including on longer generated courses', () => {
  for (const number of [1, 5, 12]) {
    const game = new Game({ seed: 'goal-count', number });
    game.start();
    game.placeBall(game.level.goal.x, game.level.goal.z);
    assert.ok(run(game, dt).some(e => e.type === 'locked'));
    assert.equal(game.state, 'playing');
    for (const position of game.level.starLocations.slice(0, -1)) {
      game.placeBall(...position);
      run(game, dt);
    }
    game.placeBall(game.level.goal.x, game.level.goal.z);
    run(game, dt);
    assert.equal(game.state, 'playing');
    assert.ok(win(game).some(e => e.type === 'win'));
    assert.equal(game.collected.size, game.level.starLocations.length);
    assert.equal(game.state, 'won');
    const elapsed = game.elapsed;
    run(game, 1);
    assert.equal(game.elapsed, elapsed);
  }
});

test('next course advances only after winning and resets objectives and physics', () => {
  const game = freshGame();
  const previous = game.level;
  assert.equal(game.nextLevel(), false);
  game.start();
  win(game);
  assert.equal(game.nextLevel(), true);
  assert.equal(game.level.number, previous.number + 1);
  assert.notEqual(game.level.seed, previous.seed);
  assert.notDeepEqual(game.level.platforms, previous.platforms);
  assert.equal(game.collected.size, 0);
  assert.equal(game.checkpoint, -1);
  assert.equal(game.elapsed, 0);
  assert.equal(game.falls, 0);
  assert.equal(game.state, 'intro');
  assert.equal(game.ball.position.z, game.level.spawn.z);
});

test('generating new courses never reuses the previous seed or accumulates colliders', () => {
  const game = freshGame();
  const seeds = new Set([game.level.seed]);
  for (let i = 0; i < 50; i++) {
    game.start();
    game.collected.add(0);
    game.newLevel();
    assert.ok(!seeds.has(game.level.seed));
    seeds.add(game.level.seed);
    assert.equal(game.level.number, 1);
    assert.equal(game.collected.size, 0);
    assert.equal(game.world.bodies.length, game.level.platforms.length + game.level.obstacles.length + 1);
  }
});

test('reset can reproduce the current course for debugging', () => {
  const game = freshGame();
  const level = game.level;
  game.start();
  run(game, 1, { up: true });
  game.reset();
  assert.deepEqual(game.level, level);
  assert.equal(game.elapsed, 0);
  assert.equal(game.state, 'intro');
});

test('rotating bars collide with the ball instead of letting it pass through', () => {
  const game = freshGame();
  game.start();
  const bar = game.level.obstacles[0];
  game.bars[0].angularVelocity.setZero();
  game.bars[0].quaternion.set(0, 0, 0, 1);
  game.placeBall(bar.x + 1, bar.z + 1.5);
  run(game, 0.5, { up: true });
  assert.ok(game.ball.position.z > bar.z + 0.75);
});

test('32 different generated courses can be completed through real physics and directional controls', () => {
  for (let seed = 0; seed < 32; seed++) {
    const game = new Game({ seed: `drive-${seed}`, number: seed % 12 + 1 });
    game.start();
    for (const [x, z] of game.level.safeRoute) {
      let reached = false;
      for (let i = 0; i < 120 * 30; i++) {
        const dx = x - game.ball.position.x;
        const dz = z - game.ball.position.z;
        if (Math.hypot(dx, dz) < 0.24 || game.state === 'won') { reached = true; break; }
        const ax = dx * 3 - game.ball.velocity.x;
        const az = dz * 3 - game.ball.velocity.z;
        game.step(dt, {
          brake: Math.hypot(dx, dz) < 1.4,
          right: ax > 0.1, left: ax < -0.1, down: az > 0.1, up: az < -0.1,
        });
        assert.equal(game.falls, 0, `Fell on seed ${seed} heading to ${x}, ${z}`);
      }
      assert.ok(reached, `Could not reach ${x}, ${z} on seed ${seed}`);
    }
    assert.equal(game.state, 'won', `No victory on seed ${seed}`);
    assert.equal(game.collected.size, game.level.starLocations.length);
    assert.equal(game.checkpoint, game.level.checkpoints.length - 1);
    assert.equal(game.falls, 0);
  }
});

test('time formatting crosses minute boundary', () => {
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(65.9), '01:05');
});

test('jump launches the ball, lands, and requires a new press for another jump', () => {
  const game = freshGame();
  game.start();
  run(game, 0.3);
  assert.equal(game.grounded, true);
  const events = run(game, 0.25, { jump: true });
  assert.equal(events.filter(e => e.type === 'jump').length, 1);
  assert.ok(game.ball.position.y > RADIUS + 1, 'Jump should visibly lift the ball.');
  assert.equal(game.grounded, false);
  const held = run(game, 1.5, { jump: true });
  assert.equal(held.filter(e => e.type === 'jump').length, 0);
  assert.equal(game.grounded, true);
  assert.ok(Math.abs(game.ball.position.y - RADIUS) < 0.03);
  run(game, dt, { jump: false });
  assert.ok(run(game, dt, { jump: true }).some(e => e.type === 'jump'));
});

test('an additional press while airborne cannot double jump', () => {
  const game = freshGame();
  game.start();
  run(game, 0.3);
  run(game, dt, { jump: true });
  run(game, 0.1);
  const velocity = game.ball.velocity.y;
  assert.equal(run(game, dt, { jump: true }).filter(e => e.type === 'jump').length, 0);
  assert.ok(game.ball.velocity.y < velocity);
  assert.equal(run(game, 1.5, { jump: true }).filter(e => e.type === 'jump').length, 0);
  assert.equal(game.grounded, true);
});

test('a quick tap before the first landing is buffered instead of lost', () => {
  const game = freshGame();
  game.start();
  const events = run(game, dt, { jumpPressed: true });
  events.push(...run(game, 0.2));
  assert.equal(events.filter(e => e.type === 'jump').length, 1);
  assert.ok(game.ball.position.y > RADIUS + 0.5);
});

test('there is no jump support in the void and respawning does not auto-jump', () => {
  const game = freshGame();
  game.start();
  run(game, 0.3);
  game.placeBall(100, game.level.spawn.z);
  assert.equal(run(game, 0.3, { jump: true }).filter(e => e.type === 'jump').length, 0);
  assert.ok(game.ball.position.y < 0);
  game.ball.position.y = -10;
  const respawn = run(game, dt, { jump: true });
  assert.ok(respawn.some(e => e.type === 'fall'));
  assert.equal(run(game, 1, { jump: true }).filter(e => e.type === 'jump').length, 0);
  assert.equal(game.grounded, true);
  run(game, dt);
  assert.ok(run(game, dt, { jump: true }).some(e => e.type === 'jump'));
});

test('pause discards a pending jump and new courses reset jumping state', () => {
  const game = freshGame();
  game.start();
  // Initial spawn is just above the ground, so this press is pending.
  run(game, dt, { jumpPressed: true });
  game.pause();
  const y = game.ball.position.y;
  assert.equal(run(game, 1, { jump: true }).filter(e => e.type === 'jump').length, 0);
  assert.equal(game.ball.position.y, y);
  game.resume();
  assert.equal(run(game, 0.5).filter(e => e.type === 'jump').length, 0);
  run(game, dt, { jump: true });
  game.newLevel();
  assert.equal(game.jumpBuffer, 0);
  assert.equal(game.jumpHeld, false);
  assert.equal(game.grounded, false);
  assert.equal(game.ball.velocity.y, 0);
});

test('jumping clears a bar that blocks rolling along the same path', () => {
  const positions = [];
  for (const jump of [false, true]) {
    const game = freshGame();
    game.start();
    const bar = game.level.obstacles[0];
    game.bars[0].angularVelocity.setZero();
    game.bars[0].quaternion.set(0, 0, 0, 1);
    game.placeBall(bar.x, bar.z + 2);
    run(game, 0.2);
    game.ball.velocity.z = -5;
    run(game, 0.6, { up: true, jump });
    positions.push(game.ball.position.z - bar.z);
    assert.equal(game.falls, 0);
  }
  assert.ok(positions[0] > 0.7, `Rolling should be blocked by the bar: ${positions[0]}`);
  assert.ok(positions[1] < -1.2, `Jumping should clear the bar: ${positions[1]}`);
});
