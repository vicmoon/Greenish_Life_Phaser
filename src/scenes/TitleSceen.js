import Phaser from "phaser";

import { Scene } from "phaser";

export class TitleSceen extends Scene {
  preload() {}

  create() {
    const text = this.add.text(400, 250, "Hello, I'm Greenish!");
    text.setOrigin(0.5, 0.5);
  }
}
