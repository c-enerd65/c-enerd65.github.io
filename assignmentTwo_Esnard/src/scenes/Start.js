export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.loadJSON();
        this.loadFonts();
    }

    create() {
        this.scene.stop('Start');
        this.scene.start('Letter');
    }

    loadFonts() {
        this.load.font('FSEX', 'assets/fonts/FSEX302.ttf');
    }

    loadJSON() {
        this.load.json('available_words', 'assets/json/alphabet.json');
    }    
}
