import Page from '../gameObjects/Page.js';

const TOTAL_DISPLAYED_WORDS = 5;

export class Letter extends Phaser.Scene {    
    constructor() {
        super('Letter');

        this.curr_letter = 0;
    }

    create() {
        this.letter_words = this.cache.json.get('available_words');
        this.page_container = new Page(this, 20, 20);

        console.log(this.letter_words.alpha.length);
    }

    startRandomWords() {
        for(let i = 0; i < TOTAL_DISPLAYED_WORDS; i++) {
            
            this.getNextLetter();
        }
    }

    getRandomWord(x, y) {
        this.getNextLetter();
    }

    getNextLetter() {
        this.curr_letter = (this.curr_letter + 1) % this.letter_words.alpha.length;
    }

}