export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" }); // Correct usage: key as a string
  }

  preload() {
    this.load.image("greenish", "assets/greenish.png");
  }

  create() {
    this.add.image(400, 300, "greenish");

    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("MenuScene");
      },
      this
    );
  }
}
