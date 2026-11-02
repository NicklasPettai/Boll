import * as CANNON from 'cannon-es';

export const RADIUS = 0.55;
export const platforms = [
  { x: 0, z: 4, w: 11, d: 12, kind: 'island' },
  { x: 0, z: -6, w: 3.6, d: 8, kind: 'bridge' },
  { x: 0, z: -15, w: 12, d: 10, kind: 'island' },
  { x: 3, z: -24.5, w: 3.5, d: 9, kind: 'bridge' },
  { x: 3, z: -34, w: 11, d: 10, kind: 'island' },
  { x: -0.5, z: -43.5, w: 3.5, d: 9, kind: 'bridge' },
  { x: -0.5, z: -53, w: 13, d: 10, kind: 'island' },
];
export const starLocations = [
  [0, 4], [0, -6], [-3, -14], [3, -24], [5, -33], [-0.5, -43], [-0.5, -52],
];
export const checkpoints = [{ x: 3, z: -18 }, { x: -0.5, z: -37 }];
export const obstacles = [
  { x: 0, z: -15, length: 7, speed: 0.65 },
  { x: 3, z: -33.5, length: 6, speed: -0.85 },
];
export const goal = { x: -0.5, z: -55.5 };

export class Game {
  constructor() {
    this.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -22, 0) });
    this.world.allowSleep = false;
    const ground = new CANNON.Material('ground');
    const ball = new CANNON.Material('ball');
    this.world.addContactMaterial(new CANNON.ContactMaterial(ground, ball, {
      friction: 0.25, restitution: 0.08, contactEquationStiffness: 1e8,
    }));
    for (const p of platforms) {
      const body = new CANNON.Body({ mass: 0, material: ground });
      body.addShape(new CANNON.Box(new CANNON.Vec3(p.w / 2, 0.5, p.d / 2)));
      body.position.set(p.x, -0.5, p.z);
      this.world.addBody(body);
    }
    this.bars = obstacles.map(o => {
      const body = new CANNON.Body({ type: CANNON.Body.KINEMATIC, material: ground });
      body.addShape(new CANNON.Box(new CANNON.Vec3(o.length / 2, 0.28, 0.26)));
      body.position.set(o.x, 0.65, o.z);
      body.angularVelocity.set(0, o.speed, 0);
      this.world.addBody(body);
      return body;
    });
    this.ball = new CANNON.Body({
      mass: 1, material: ball, shape: new CANNON.Sphere(RADIUS),
      linearDamping: 0.45, angularDamping: 0.35,
    });
    this.world.addBody(this.ball);
    this.reset();
  }

  reset() {
    this.state = 'intro';
    this.elapsed = 0;
    this.collected = new Set();
    this.checkpoint = -1;
    this.falls = 0;
    this.simTime = 0;
    this.respawnTimer = 0;
    this.goalHintAt = null;
    this.placeBall(0, 7);
    this.bars.forEach(b => b.quaternion.set(0, 0, 0, 1));
  }

  placeBall(x, z) {
    this.ball.position.set(x, RADIUS + 0.03, z);
    this.ball.previousPosition.copy(this.ball.position);
    this.ball.interpolatedPosition.copy(this.ball.position);
    this.ball.velocity.setZero();
    this.ball.angularVelocity.setZero();
    this.ball.force.setZero();
    this.ball.torque.setZero();
    this.ball.quaternion.set(0, 0, 0, 1);
    this.ball.aabbNeedsUpdate = true;
  }

  start() { if (this.state === 'intro') this.state = 'playing'; }
  pause() { if (this.state === 'playing') this.state = 'paused'; }
  resume() { if (this.state === 'paused') this.state = 'playing'; }

  step(dt, input = {}) {
    const events = [];
    if (this.state !== 'playing') return events;
    this.elapsed += dt;
    this.simTime += dt;
    this.respawnTimer = Math.max(0, this.respawnTimer - dt);
    let dx = Number(!!input.right) - Number(!!input.left);
    let dz = Number(!!input.down) - Number(!!input.up);
    const length = Math.hypot(dx, dz);
    if (length) { dx /= length; dz /= length; }
    const damping = Math.exp(-(input.brake ? 9 : 0.28) * dt);
    this.ball.velocity.x *= damping;
    this.ball.velocity.z *= damping;
    const maxSpeed = input.brake ? 2 : 7;
    const acceleration = input.brake ? 9 : 16;
    this.ball.velocity.x += dx * acceleration * dt;
    this.ball.velocity.z += dz * acceleration * dt;
    const speed = Math.hypot(this.ball.velocity.x, this.ball.velocity.z);
    if (speed > maxSpeed) {
      this.ball.velocity.x *= maxSpeed / speed;
      this.ball.velocity.z *= maxSpeed / speed;
    }
    this.world.step(dt);
    const p = this.ball.position;
    if (p.y < -9) {
      const spawn = this.checkpoint >= 0 ? checkpoints[this.checkpoint] : { x: 0, z: 7 };
      this.placeBall(spawn.x, spawn.z);
      this.falls++;
      this.respawnTimer = 1;
      events.push({ type: 'fall' });
      return events;
    }
    if (p.y < 0 || p.y > 2) return events;
    starLocations.forEach(([x, z], i) => {
      if (!this.collected.has(i) && Math.hypot(p.x - x, p.z - z) < 1.1) {
        this.collected.add(i);
        events.push({ type: 'star', index: i });
      }
    });
    checkpoints.forEach((c, i) => {
      if (i > this.checkpoint && Math.hypot(p.x - c.x, p.z - c.z) < 1.5) {
        this.checkpoint = i;
        events.push({ type: 'checkpoint', index: i });
      }
    });
    if (Math.hypot(p.x - goal.x, p.z - goal.z) < 1.3) {
      if (this.collected.size === starLocations.length) {
        this.state = 'won';
        events.push({ type: 'win' });
      } else if (!this.goalHintAt || this.elapsed - this.goalHintAt > 5) {
        this.goalHintAt = this.elapsed;
        events.push({ type: 'locked' });
      }
    }
    return events;
  }
}

export function formatTime(seconds) {
  const total = Math.floor(seconds);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}
