export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  create() {
    this.add.text(400, 300, "Press space to start", {
      fill: "#fff",
      className: "menu-text",
    });
    this.input.once(
      "pointerdown",
      () => {
        this.scene.start("TitleScene");
      },
      this
    );
  }
}
