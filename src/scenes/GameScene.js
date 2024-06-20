import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("greenish", "assets/greenish.png");
  }

  create() {
    this.add.image(400, 300, "greenish");
  }
}
