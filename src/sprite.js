import { assetsDPR } from './game.js'

class Sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x * assetsDPR, y * assetsDPR, texture, frame)
    scene.add.existing(this)
  }

  setX(x) {
    super.setX(Math.round(x * assetsDPR))
  }

  setY(y) {
    super.setY(Math.round(y * assetsDPR))
  }
}

export default Sprite
