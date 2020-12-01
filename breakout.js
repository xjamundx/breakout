import { Ball } from "./ball.js";
import { Bricks } from "./bricks.js";
import { Paddle } from "./paddle.js";

class Game {
  constructor(ctx) {
    this.paused = false;
    this.width = canvas.width;
    this.height = canvas.height;
    this.paddle = new Paddle(ctx, this.width / 2, this.height - 100);
    this.bricks = new Bricks(ctx, this.width / 5 - 10, 20);
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
    this.bricks.draw();
    this.paddle.draw();
    this.ball.draw();

    // you won, 🎉
    if (this.bricks.bricksLeft === 0) {
      this.done = true;
      this.paused = true;
      return;
    }

    // search for crashes
    this.detectCrash();

    if (!this.paused) {
      requestAnimationFrame(() => this.draw());
    }
  }
  detectCrash() {
    if (this.ball.y <= this.ball.radius) {
      this.ball.switchY();
      this.ball.y = this.ball.radius; // get it safely out of the way
    }

    if (
      this.ball.x - this.ball.radius <= 0 ||
      this.ball.x + this.ball.radius >= this.width
    ) {
      this.ball.switchX();
    }

    if (this.ball.y + this.ball.radius >= this.paddle.y) {
      if (
        this.ball.x + this.ball.radius >= this.paddle.x &&
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

    if (this.bricks.detectHit(this.ball.x, this.ball.y)) {
      this.ball.switchY();
    }
  }
}

const canvas = document.getElementById("game");
// canvas.width = Math.min(window.innerWidth - 10, 600);
// canvas.height = (canvas.width * 2) / 3;
const game = new Game(canvas.getContext("2d"));
game.draw();
canvas.addEventListener("click", () => {
  if (!game.done) game.pause();
});
