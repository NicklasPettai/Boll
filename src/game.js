import * as CANNON from 'cannon-es';
import { RADIUS, createSeed, generateLevel } from './level.js';
export { RADIUS } from './level.js';

const JUMP_SPEED = 8.5;
const JUMP_BUFFER = 0.12;

export class Game {
  constructor(options) {
    this.reset(options);
  }

  reset({ seed = this.level?.seed ?? createSeed(), number = this.level?.number ?? 1 } = {}) {
    this.level = generateLevel(seed, number);
    this.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -22, 0) });
    this.world.allowSleep = false;
    const ground = new CANNON.Material('ground');
    const ball = new CANNON.Material('ball');
    this.world.addContactMaterial(new CANNON.ContactMaterial(ground, ball, {
      friction: 0.25, restitution: 0.08, contactEquationStiffness: 1e8,
    }));
    for (const p of this.level.platforms) {
      const body = new CANNON.Body({ mass: 0, material: ground });
      body.addShape(new CANNON.Box(new CANNON.Vec3(p.w / 2, 0.5, p.d / 2)));
      body.position.set(p.x, -0.5, p.z);
      body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), p.angle);
      this.world.addBody(body);
    }
    this.bars = this.level.obstacles.map(o => {
      const body = new CANNON.Body({ type: CANNON.Body.KINEMATIC, material: ground });
      body.addShape(new CANNON.Box(new CANNON.Vec3(o.length / 2, 0.28, 0.26)));
      body.position.set(o.x, 0.65, o.z);
      body.angularVelocity.set(0, o.speed, 0);
      body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), o.angle);
      this.world.addBody(body);
      return body;
    });
    this.ball = new CANNON.Body({
      mass: 1, material: ball, shape: new CANNON.Sphere(RADIUS),
      linearDamping: 0.45, angularDamping: 0.35,
    });
    this.world.addBody(this.ball);
    this.state = 'intro';
    this.elapsed = 0;
    this.collected = new Set();
    this.checkpoint = -1;
    this.falls = 0;
    this.simTime = 0;
    this.respawnTimer = 0;
    this.goalHintAt = null;
    this.jumpHeld = false;
    this.placeBall(this.level.spawn.x, this.level.spawn.z);
  }

  newLevel({ number = this.level.number } = {}) {
    let seed;
    do { seed = createSeed(); } while (seed === this.level.seed);
    this.reset({ seed, number });
  }

  nextLevel() {
    if (this.state !== 'won') return false;
    this.newLevel({ number: this.level.number + 1 });
    return true;
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
    this.grounded = false;
    this.jumpBuffer = 0;
  }

  start() { if (this.state === 'intro') this.state = 'playing'; }
  pause() {
    if (this.state === 'playing') {
      this.state = 'paused';
      this.jumpBuffer = 0;
    }
  }
  resume() { if (this.state === 'paused') this.state = 'playing'; }

  step(dt, input = {}) {
    const events = [];
    if (this.state !== 'playing') return events;
    this.elapsed += dt;
    this.simTime += dt;
    this.respawnTimer = Math.max(0, this.respawnTimer - dt);
    const jumpPressed = input.jumpPressed || (input.jump && !this.jumpHeld);
    this.jumpHeld = !!input.jump;
    this.jumpBuffer = jumpPressed ? JUMP_BUFFER : Math.max(0, this.jumpBuffer - dt);
    if (this.grounded && this.jumpBuffer > 0) {
      this.ball.velocity.y = JUMP_SPEED;
      this.grounded = false;
      this.jumpBuffer = 0;
      events.push({ type: 'jump' });
    }
    let dx = input.moveX ?? (Number(!!input.right) - Number(!!input.left));
    let dz = input.moveZ ?? (Number(!!input.down) - Number(!!input.up));
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
    // Cannon normals point from bi to bj. Only an upward support contact permits
    // jumping; touching the side of a platform or being in midair does not.
    this.grounded = this.ball.velocity.y <= 1 && this.world.contacts.some(contact => {
      if (!contact.enabled) return false;
      if (contact.bi === this.ball) return -contact.ni.y > 0.6;
      if (contact.bj === this.ball) return contact.ni.y > 0.6;
      return false;
    });
    const p = this.ball.position;
    if (p.y < -9) {
      const spawn = this.checkpoint >= 0 ? this.level.checkpoints[this.checkpoint] : this.level.spawn;
      this.placeBall(spawn.x, spawn.z);
      this.falls++;
      this.respawnTimer = 1;
      events.push({ type: 'fall' });
      return events;
    }
    if (p.y < 0 || p.y > 2) return events;
    this.level.starLocations.forEach(([x, z], i) => {
      if (!this.collected.has(i) && Math.hypot(p.x - x, p.z - z) < 1.1) {
        this.collected.add(i);
        events.push({ type: 'star', index: i });
      }
    });
    this.level.checkpoints.forEach((c, i) => {
      if (i > this.checkpoint && Math.hypot(p.x - c.x, p.z - c.z) < 1.5) {
        this.checkpoint = i;
        events.push({ type: 'checkpoint', index: i });
      }
    });
    const { goal, starLocations } = this.level;
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
