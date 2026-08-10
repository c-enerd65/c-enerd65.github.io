import Page from '../gameObjects/Page.js';

export class Letter extends Phaser.Scene {    
    constructor() {
        super('Letter');
    }

    create() {
        this.letter_words = this.cache.json.get('available_words');
        
        this.page_container = new Page(this, 20, 20);
        const background = this.add.rectangle(0, 0, 680, 880, '#000000');
        background.setOrigin(0 , 0);

        this.page_container.add(background);
    }
}