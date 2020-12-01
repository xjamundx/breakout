export class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 250;
    this.radius = 5;
    this.color = "black";
    this.yDirection = 1; // heading down
    this.xDirection = 1; // heading right
    this.velocityX = 3;
    this.velocityY = 6;
    this.paused = false;
    this.updateFrequency = 20;
    this.move();
  }
  pause() {
    this.paused = !this.paused;
    clearTimeout(this.timer);
    if (!this.paused) {
      this.move();
    }
  }
  switchX() {
    this.xDirection = this.xDirection * -1; // flip it
  }
  switchY() {
    this.yDirection = this.yDirection * -1; // flip it
  }
  move() {
    this.x += this.velocityX * this.xDirection;
    this.y += this.velocityY * this.yDirection;
    this.timer = setTimeout(() => this.move(), this.updateFrequency);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
