export class Paddle {
  constructor(ctx, initialX, initialY) {
    this.ctx = ctx;
    this.color = "black";
    this.x = initialX;
    this.y = initialY;
    window.addEventListener("mousemove", (e) => this.move(e));
  }
  move(e) {
    this.x = e.clientX;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = "2";
    this.fillStyle = "";
    this.ctx.strokeStyle = "blue";
    this.ctx.rect(this.x, this.y, 100, 15);
    this.ctx.stroke();

    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(this.x, this.y, 100, 15);
  }
}
