import React, { useEffect } from "react";
import Phaser from "phaser";
import { TitleScene } from "../scenes/TitleScene";
import { GameScene } from "../scenes/GameScene";
import { MenuScene } from "../scenes/MenuScene";

const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "phaser-container",
      scene: [TitleScene, MenuScene, GameScene],
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-container"></div>;
};

export default Game;
