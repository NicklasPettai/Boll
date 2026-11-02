import { RADIUS } from './level.js';

const settings = mobile => mobile
  ? { distance: 9, height: 3.8 }
  : { distance: 7.5, height: 3 };

/** A horizontal travel heading, independent of the sphere's rolling rotation. */
export class ChaseCamera {
  constructor() {
    this.reset({ x: 0, y: RADIUS, z: 7 });
  }

  reset(ball, direction = { x: 0, z: -1 }, mobile = false) {
    this.yaw = Math.hypot(direction.x, direction.z) > 0.001
      ? Math.atan2(-direction.x, -direction.z) : 0;
    this.viewYaw = this.yaw;
    this.inputX = this.inputZ = null;
    this.inputYaw = this.yaw;
    this.focusY = Math.max(RADIUS, ball.y);
    const { distance, height } = settings(mobile);
    this.position = {
      x: ball.x + Math.sin(this.yaw) * distance,
      y: this.focusY + height,
      z: ball.z + Math.cos(this.yaw) * distance,
    };
    this.target = {
      x: ball.x - Math.sin(this.yaw) * 2.6,
      y: this.focusY + 0.2,
      z: ball.z - Math.cos(this.yaw) * 2.6,
    };
  }

  movement(input) {
    let x = Number(!!input.right) - Number(!!input.left);
    let z = Number(!!input.down) - Number(!!input.up);
    if (x !== this.inputX || z !== this.inputZ) {
      this.inputX = x;
      this.inputZ = z;
      this.inputYaw = this.viewYaw;
    }
    // Keep a held direction steady as the camera catches up. Resampling the
    // rotating view every step would steer a held sideways key into a circle.
    const length = Math.hypot(x, z) || 1;
    x /= length;
    z /= length;
    return {
      moveX: Math.cos(this.inputYaw) * x + Math.sin(this.inputYaw) * z,
      moveZ: -Math.sin(this.inputYaw) * x + Math.cos(this.inputYaw) * z,
    };
  }

  update(ball, velocity, dt, mobile = false) {
    dt = Math.min(Math.max(dt, 0), 0.1);
    if (Math.hypot(velocity.x, velocity.z) > 0.45) {
      const desired = Math.atan2(-velocity.x, -velocity.z);
      const delta = Math.atan2(Math.sin(desired - this.yaw), Math.cos(desired - this.yaw));
      this.yaw += delta * (1 - Math.exp(-5 * dt));
    }
    this.focusY += (Math.max(RADIUS, ball.y) - this.focusY) * (1 - Math.exp(-7 * dt));
    const { distance, height } = settings(mobile);
    const follow = 1 - Math.exp(-8 * dt);
    this.position.x += (ball.x + Math.sin(this.yaw) * distance - this.position.x) * follow;
    this.position.y += (this.focusY + height - this.position.y) * follow;
    this.position.z += (ball.z + Math.cos(this.yaw) * distance - this.position.z) * follow;
    this.target.x = ball.x - Math.sin(this.yaw) * 2.6;
    this.target.y = this.focusY + 0.2;
    this.target.z = ball.z - Math.cos(this.yaw) * 2.6;
    this.viewYaw = Math.atan2(
      this.position.x - this.target.x,
      this.position.z - this.target.z,
    );
  }
}
