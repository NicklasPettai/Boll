import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, RADIUS, checkpoints, starLocations, goal, formatTime } from '../src/game.js';

const dt = 1 / 120;
const run = (game, seconds, input = {}) => {
  const events = [];
  for (let i = 0; i < Math.round(seconds / dt); i++) events.push(...game.step(dt, input));
  return events;
};

test('ball rests on the platform and moves with directional input', () => {
  const game = new Game();
  game.start();
  run(game, 1);
  assert.ok(Math.abs(game.ball.position.y - RADIUS) < 0.02);
  const start = game.ball.position.z;
  run(game, 1, { up: true });
  assert.ok(game.ball.position.z < start - 2);
  assert.equal(game.falls, 0);
});

test('braking materially reduces speed and pause freezes simulation', () => {
  const game = new Game();
  game.start();
  run(game, 0.5, { up: true });
  const speed = Math.abs(game.ball.velocity.z);
  run(game, 0.3, { brake: true });
  assert.ok(Math.abs(game.ball.velocity.z) < speed * 0.2);
  game.pause();
  const z = game.ball.position.z;
  const time = game.elapsed;
  run(game, 2, { up: true });
  assert.equal(game.ball.position.z, z);
  assert.equal(game.elapsed, time);
  game.resume();
  run(game, 0.25, { up: true });
  assert.ok(game.ball.position.z < z);
});

test('collecting a star twice counts once, and falling preserves it at checkpoint', () => {
  const game = new Game();
  game.start();
  game.placeBall(...starLocations[0]);
  const events = run(game, 0.1);
  assert.equal(events.filter(e => e.type === 'star').length, 1);
  assert.equal(run(game, 0.1).filter(e => e.type === 'star').length, 0);
  game.placeBall(checkpoints[0].x, checkpoints[0].z);
  assert.ok(run(game, 0.1).some(e => e.type === 'checkpoint'));
  game.ball.position.y = -10;
  assert.ok(run(game, dt).some(e => e.type === 'fall'));
  assert.equal(game.ball.position.x, checkpoints[0].x);
  assert.equal(game.ball.position.z, checkpoints[0].z);
  assert.equal(game.collected.size, 1);
  assert.equal(game.falls, 1);
});

test('goal requires all seven stars, victory and reset work', () => {
  const game = new Game();
  game.start();
  game.placeBall(goal.x, goal.z);
  assert.ok(run(game, dt).some(e => e.type === 'locked'));
  assert.equal(game.state, 'playing');
  for (const position of starLocations) {
    game.placeBall(...position);
    run(game, dt);
  }
  assert.equal(game.collected.size, 7);
  game.placeBall(goal.x, goal.z);
  assert.ok(run(game, dt).some(e => e.type === 'win'));
  assert.equal(game.state, 'won');
  const elapsed = game.elapsed;
  run(game, 1);
  assert.equal(game.elapsed, elapsed);
  game.reset();
  assert.equal(game.collected.size, 0);
  assert.equal(game.checkpoint, -1);
  assert.equal(game.elapsed, 0);
  assert.equal(game.state, 'intro');
});

test('rotating bars collide with the ball instead of letting it pass through', () => {
  const game = new Game();
  game.start();
  game.bars[0].angularVelocity.setZero();
  game.placeBall(1, -13.5);
  run(game, 0.5, { up: true });
  assert.ok(game.ball.position.z > -14.25, `Ball passed through bar: ${game.ball.position.z}`);
});

test('time formatting crosses minute boundary', () => {
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(65.9), '01:05');
});

test('the entire course can be completed through directional controls without teleporting', () => {
  const game = new Game();
  game.start();
  const route = [
    [0, 4], [0, -6], [0, -11.1], [-4.7, -11.1], [-4.7, -14], [-3, -14],
    [-4.7, -14], [-4.7, -18], [3, -18], [3, -24], [3, -29.7],
    [7.4, -29.7], [7.4, -33], [5, -33], [7.4, -33], [7.4, -37],
    [-0.5, -37], [-0.5, -43], [-0.5, -50], [-0.5, -52], [goal.x, goal.z],
  ];
  for (const [x, z] of route) {
    let reached = false;
    for (let i = 0; i < 120 * 60; i++) {
      const dx = x - game.ball.position.x;
      const dz = z - game.ball.position.z;
      if (Math.hypot(dx, dz) < 0.25 || game.state === 'won') { reached = true; break; }
      // A simple controller presses the same buttons as a player.
      const ax = dx * 3 - game.ball.velocity.x;
      const az = dz * 3 - game.ball.velocity.z;
      game.step(dt, {
        brake: Math.hypot(dx, dz) < 1.4,
        right: ax > 0.1, left: ax < -0.1, down: az > 0.1, up: az < -0.1,
      });
    }
    assert.ok(reached, `Could not reach ${x}, ${z}`);
  }
  assert.equal(game.state, 'won');
  assert.equal(game.collected.size, 7);
  assert.equal(game.checkpoint, 1);
  assert.equal(game.falls, 0);
});
