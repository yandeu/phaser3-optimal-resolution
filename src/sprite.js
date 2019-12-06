import { assetsDPI } from './game.js'

class Sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x * assetsDPI, y * assetsDPI, texture, frame)
    scene.add.existing(this)
  }

  setX(x) {
    super.setX(Math.round(x * assetsDPI))
  }

  setY(y) {
    super.setY(Math.round(y * assetsDPI))
  }
}

export default Sprite
