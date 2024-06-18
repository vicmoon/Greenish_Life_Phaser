import Phaser from "phaser";

import { TitleSceen } from "./scenes/TitleSceen";
import { Game } from "./scenes/Game";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("greenish", "assets/greenish.png");
  this.load.image("world", "assets/bluePlanet.jpg");
}

function create() {
  this.add.image(400, 300, "world");
  this.add.image(400, 300, "greenish");
}

function update() {}

// game.scene.add("titlescreen", TitleSceen);
// game.scene.add("game", Game);

game.scene.start("game");
