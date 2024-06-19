import Phaser from "phaser";

import { Scene } from "phaser";

export class TitleSceen extends Scene {
  preload() {
    this.load.image("blueworld", "assets/bluePlanet.jpg");
    this.load.image("greenworld", "assets/planet.jpg");
  }

  create() {
    this.add.image(centerX, centerY, "greenworld");

    text.setOrigin(centerX, centerY);
  }
}
screenTop;
