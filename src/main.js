import Phaser from "phaser";

import { TitleScene } from "./scenes/TitleScene";
import { GameScene } from "./scenes/GameScene";
import { MenuScene } from "./scenes/MenuScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "phaser-container",
  scene: [MenuScene, TitleScene, GameScene],
};

const game = new Phaser.Game(config);
