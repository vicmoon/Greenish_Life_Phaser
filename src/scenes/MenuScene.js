export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  create() {
    this.add.text(
      100,
      300,
      "Hello, I am Greenish and this is my world! Help me find my red ball!",
      {
        fill: "#fff",
      }
    );
    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("GameScene"); // Transition to GameScene on click
      },
      this
    );
  }
}
