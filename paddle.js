export class Paddle {
  constructor(ctx, initialX, initialY) {
    this.ctx = ctx;
    this.color = "navy";
    this.x = initialX;
    this.y = initialY;
    this.width = 100;
    this.height = 15;
    window.addEventListener("touchmove", (e) => this.move(e));
    window.addEventListener("mousemove", (e) => this.move(e));
  }
  move(e) {
    this.x = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
