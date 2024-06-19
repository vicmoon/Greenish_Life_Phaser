import Phaser from "phaser";
import { Scene } from "phaser";

export class Game extends Scene {
  create() {
    this.add.text(340, 400, "I'm Greenish and I have a ball!", {
      fontSize: "15px",
    });
    const ball = this.add.circle(390, 275, 10, 0xff0000, 1);
    this.physics.add.existing(ball);
    ball.body.setCollideWorldBounds(true, 1, 1);
    ball.body.setVelocity(200, 200);
  }
}
