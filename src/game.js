import MainScene from './mainScene.js'

const roundHalf = num => Math.round(num * 2) / 2

/**
 * The base resolution of this game is 360x640 @4.
 * Means you should draw all your assets in a resolution of 1440x2560 or 2560x1440
 * and pack and scale them down with a TexturePacker like https://www.codeandweb.com/texturepacker
 */

// is the user not happy with 'best',
// simply set the graphics to 'medium'
// (maybe store the settings in LocalStorage)
const graphicsSettings = { best: 1, medium: 0.75, low: 0.5 }
const DPR = window.devicePixelRatio * graphicsSettings.best
const { width, height } = window.screen

// Set width and height.
const WIDTH = Math.round(Math.max(width, height) * DPR)
const HEIGHT = Math.round(Math.min(width, height) * DPR)

// Need a fixed screen ratio for your game
// because it is to hard to make it responsive?
// Simply lock the screen ratio by adapting the code as follow.
// (On a desktop PC it should show all assets in @4)
// const isMobile = () => Math.min(screen.width, screen.height) <= 480
// const WIDTH = 640 * (isMobile() ? DPR : 4)
// const HEIGHT = 360 * (isMobile() ? DPR : 4)

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
