export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" }); // Correct usage: key as a string
  }

  preload() {
    this.load.image("blueworld", "assets/background.jpg");
  }

  create() {
    this.add.image(400, 300, "blueworld");

    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("MenuScene");
      },
      this
    );
  }
}
