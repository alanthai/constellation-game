import Phaser from 'phaser';
import phaserDude from './assets/phaser-dude.png';
import phaserAnim from './assets/dude.png';
import star from './assets/star.png';
import { range } from './utilities/range';
import { random } from './utilities/random';

class ConstellationGame extends Phaser.Scene {
  preload() {
    this.load.image('phaser-dude', phaserDude);
    this.load.image('star', star);
    this.load.spritesheet('dude', phaserAnim, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, 'star');

    this.createDudes();
  }

  private createDudes() {
    const dudes = range(10).map(() => {
      const x = random(50, 600);
      const y = random(50, 600);
      const dude = this.physics.add.image(x, y, 'phaser-dude');

      const vx = random(50, 200);
      const vy = random(50, 200);
      dude.setVelocity(vx, vy);
      dude.setBounce(1, 1);
      dude.setCollideWorldBounds(true);

      return dude;
    });

    this.physics.add.collider(dudes, dudes);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  scene: ConstellationGame,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      // gravity
    },
  },
};

const game = new Phaser.Game(config);
