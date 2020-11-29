export class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 75;
    this.width = 15;
    this.color = "black";
    this.move();
  }
  move() {
    this.x += 0.5;
    this.y += 2;
    this.draw();
    setTimeout(() => this.move(), 20);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
