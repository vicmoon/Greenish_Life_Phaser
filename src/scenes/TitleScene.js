export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  preload() {
    this.load.image("greenish", "assets/greenish.png");
  }

  create() {
    this.add.image(400, 300, "greenish");
    this.add.text(100, 300, "I'm Greenish", {
      fill: "#fff",
    });

    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("GameScene");
      },
      this
    );
  }
}
