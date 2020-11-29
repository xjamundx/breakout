import { Ball } from "./ball.js";
import { Bricks } from "./bricks.js";
import { Paddle } from "./paddle.js";

const bricks = [
  [10, 100],
  [10, 125],
  [10, 150],

  [125, 100],
  [125, 125],
  [125, 150],

  [240, 100],
  [240, 125],
  [240, 150],

  [355, 100],
  [355, 125],
  [355, 150],

  [470, 100],
  [470, 125],
  [470, 150],
];

class Game {
  constructor(ctx) {
    this.paused = false;
    this.width = canvas.width;
    this.height = canvas.height;
    this.brick = new Bricks(ctx, this.width / 5 - 10, 20);
    this.paddle = new Paddle(ctx, this.width / 2 - 75, this.height - 20);
    this.ball = new Ball(ctx);
    this.ctx = ctx;
    this.done = false;
  }
  pause() {
    this.paused = !this.paused;
    this.ball.pause();
    if (!this.paused) {
      this.draw();
    }
  }
  draw() {
    // clear everything
    this.ctx.clearRect(0, 0, this.width, this.height);

    // draw everything
    for (let [x, y] of bricks) {
      this.brick.draw(x, y);
    }
    this.paddle.draw();
    this.ball.draw();

    // search for crashes
    this.detectCrash();

    if (!this.paused) {
      requestAnimationFrame(() => this.draw());
    }
  }
  detectCrash() {
    if (this.ball.y <= this.ball.height / 2) {
      this.ball.switchY();
      this.ball.y = this.ball.height; // get it safely out of the way
    }

    if (this.ball.x <= 0 || this.ball.x + this.ball.width >= this.width) {
      this.ball.switchX();
    }

    if (this.ball.y + this.ball.height >= this.paddle.y) {
      if (
        this.ball.x + this.ball.width >= this.paddle.x &&
        this.ball.x < this.paddle.x + this.paddle.width
      ) {
        // supposedly we've hit the paddle
        this.ball.y -= 5; // move it safely back up
        this.ball.switchY();
      } else if (this.ball.y >= this.paddle.y) {
        // you've hit the ground
        this.done = true;
        this.paused = true;
        return;
      }
    }
  }
}

const canvas = document.getElementById("game");
const game = new Game(canvas.getContext("2d"));
game.draw();
canvas.addEventListener("click", () => {
  if (!game.done) game.pause();
});
