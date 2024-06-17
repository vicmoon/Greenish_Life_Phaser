import Phaser from "phaser";

import { TitleSceen } from "./scenes/TitleSceen";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
};

const game = new Phaser.Game(config);
game.scene.add("titlescreen", TitleSceen);
game.scene.start("titlescreen");
