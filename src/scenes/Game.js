import Phaser from "phaser";
import { Scene } from "phaser";

export class Game extends Scene {
  create() {
    this.add.circle(400, 250, 10);
    // this.add.text(400, 250, "Time to play Greenish!");
    this.greenish = game.add.sprite(100, 200, "greenish");
  }
}
