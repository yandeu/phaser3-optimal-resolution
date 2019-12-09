import MainScene from './mainScene.js'

const roundHalf = num => Math.round(num * 2) / 2

// is the user not happy with 'best',
// simply set the graphics to 'medium'
// (maybe store the settings in LocalStorage)
const graphicsSettings = { best: 1, medium: 0.75, low: 0.5 }
const DPR = window.devicePixelRatio * graphicsSettings.best
const { width, height } = window.screen

// base resolution is 360x640 @4
const WIDTH = Math.round(Math.max(width, height) * DPR)
const HEIGHT = Math.round(Math.min(width, height) * DPR)

// will be 1, 1.5, 2, 2.5, 3, 3.5 or 4
export const assetsDPR = roundHalf(Math.min(Math.max(HEIGHT / 360, 1), 4))

console.log('DPR = ', DPR)
console.log('assetsDPR = ', assetsDPR)
console.log('WIDTH = ', WIDTH)
console.log('HEIGHT = ', HEIGHT)

const config = {
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: WIDTH,
    height: HEIGHT
  },
  scene: [MainScene]
}

window.addEventListener('load', () => {
  new Phaser.Game(config)
})
