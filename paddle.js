export class Paddle {
  constructor(ctx, initialX, initialY) {
    this.ctx = ctx;
    this.color = "navy";
    this.x = initialX;
    this.y = initialY;
    this.width = 100;
    this.height = 15;
    window.addEventListener("mousemove", (e) => this.move(e));
  }
  move(e) {
    this.x = e.clientX;
  }
  draw() {
    // this.ctx.beginPath();
    // this.ctx.lineWidth = "2";
    // this.fillStyle = "";
    // this.ctx.strokeStyle = this.color;
    // this.ctx.rect(this.x, this.y, this.width, this.height);
    // this.ctx.stroke();

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
