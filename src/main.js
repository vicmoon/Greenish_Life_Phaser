import Phaser from "phaser";

import { TitleSceen } from "./scenes/TitleSceen";
import { Game } from "./scenes/Game";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("greenish", "assets/greenish.png");
  this.load.image("blueworld", "assets/bluePlanet.jpg");
  this.load.image("greenworld", "assets/planet.jpg");
}

function create() {
  const centerX = this.cameras.main.centerX;
  const centerY = this.cameras.main.centerY;
  this.add.image(centerX, centerY, "greenworld");
  this.add.image(centerX, centerY, "greenish");
}

function update() {}

// game.scene.add("titlescreen", TitleSceen);
// game.scene.add("game", Game);

game.scene.start("game");

// Resize the game when the window is resized
window.addEventListener("resize", () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
