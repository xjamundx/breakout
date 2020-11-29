export class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 75;
    this.width = 15;
    this.color = "black";
    this.height = this.width;
    this.yDirection = 1; // heading down
    this.xDirection = 1; // heading right
    this.velocityX = 1.5;
    this.velocityY = 6;
    this.paused = false;
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
    this.timer = setTimeout(() => this.move(), 20);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
