import { Ball } from "./ball.js";
import { Brick } from "./brick.js";
import { Paddle } from "./paddle.js";

const bricks = [
  [10, 100],
  [10, 125],
  [10, 150],

  [120, 100],
  [120, 125],
  [120, 150],

  [230, 100],
  [230, 125],
  [230, 150],

  [340, 100],
  [340, 125],
  [340, 150],

  [450, 100],
  [450, 125],
  [450, 150],

  [560, 100],
  [560, 125],
  [560, 150],
];

class Game {
  constructor(ctx) {
    this.paused = false;
    this.width = canvas.width;
    this.height = canvas.height;
    this.brick = new Brick(ctx);
    this.paddle = new Paddle(ctx, this.width / 2 - 75, this.height - 20);
    this.ball = new Ball(ctx);
    this.ctx = ctx;
  }
  draw() {
    if (this.paused) return;

    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let [x, y] of bricks) {
      this.brick.draw(x, y);
    }
    this.paddle.draw();
    this.ball.draw();

    console.log("drawing");
    requestAnimationFrame(() => this.draw());
  }
}

const canvas = document.getElementById("game");
const game = new Game(canvas.getContext("2d"));
game.draw();
