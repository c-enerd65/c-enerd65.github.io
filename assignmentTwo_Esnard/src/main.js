import { Start } from './scenes/Start.js';
import { Letter } from './scenes/Letter.js';

const config = {
    type: Phaser.AUTO,
    title: 'A Love Letter',
    description: '',
    parent: 'game-container',
    width: 720,
    height: 1080,
    backgroundColor: '#FFF6EA',
    pixelArt: false,
    scene: [
        Start, 
        Letter
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            