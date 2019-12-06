import { assetsDPI } from './game.js'
import Sprite from './sprite.js'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    this.load.atlas('atlas', `src/atlas/atlas-@${assetsDPI}.png`, `src/atlas/atlas-@${assetsDPI}.json`)
  }

  create() {
    let { width, height } = this.cameras.main
    width /= assetsDPI
    height /= assetsDPI

    // these assets are from https://www.kenney.nl/assets/toon-characters-1
    const zombie = new Sprite(this, width / 3, height, 'atlas', 'zombie').setOrigin(0.5, 1)
    const robot = new Sprite(this, width / 3, height, 'atlas', 'robot').setOrigin(0.5, 1)
    robot.setX(width - 100)
  }
}
