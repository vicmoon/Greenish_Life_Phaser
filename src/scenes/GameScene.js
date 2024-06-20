import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("greenish", "assets/greenish.png");
    this.load.image("night", "assets/night.jpg");
  }

  create() {
    this.add.image(100, 500, "greenish");
    this.add.image(400, 300, "night");
  }
}
