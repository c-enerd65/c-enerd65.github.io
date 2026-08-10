export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.loadJSON();
    }

    create() {
        this.scene.stop('Start');
        this.scene.start('Letter');
    }

    loadFonts() {

    }

    loadJSON() {
        this.load.json('available_words', 'assets/json/alphabet.json');
    }    
}
