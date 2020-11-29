export class Bricks {
  constructor(ctx, width = 100, height = 20) {
    this.ctx = ctx;
    this.color = "green";
    this.width = width;
    this.height = height;
  }
  draw(x, y) {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, this.width, this.height);
  }
}
// Red rectangle
// ctx.beginPath();
// ctx.lineWidth = "6";
// ctx.strokeStyle = "red";
// ctx.rect(5, 5, 290, 140);
// ctx.stroke();

// // Green rectangle
// ctx.beginPath();
// ctx.lineWidth = "4";
// ctx.strokeStyle = "green";
// ctx.rect(30, 30, 50, 50);
// ctx.stroke();

// // Blue rectangle
// ctx.beginPath();
// ctx.lineWidth = "10";
// ctx.strokeStyle = "blue";
// ctx.fillRect(50, 50, 150, 80);
// ctx.stroke();

// ctx.fillStyle = "#888";
// ctx.fillRect(5, 5, 290, 140);

// ctx.fillStyle = "green";
// ctx.fillRect(30, 30, 50, 50);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 150, 80);
