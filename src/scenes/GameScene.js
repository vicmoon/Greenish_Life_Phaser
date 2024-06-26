import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("greenish", "assets/greenish.png");
    this.load.image("ball", "assets/ball.png");
    this.load.image("background", "assets/background.png");
  }

  create() {
    this.add.image(400, 300, "ball");
    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("MenuScene");
      },
      this
    );
  }
}
