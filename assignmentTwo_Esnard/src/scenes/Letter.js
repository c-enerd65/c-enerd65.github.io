import Page from '../gameObjects/Page.js';
import Word from '../gameObjects/Word.js';

const TOTAL_DISPLAYED_WORDS = 5;

export class Letter extends Phaser.Scene {    
    constructor() {
        super('Letter');

        this.curr_letter = 0;
    }

    create() {
        this.letter_words = this.cache.json.get('available_words');
        this.page_container = new Page(this, 20, 20);

        this.startRandomWords();    
    }

    startRandomWords() {
        for(let i = 0; i < TOTAL_DISPLAYED_WORDS; i++) {
            this.word = this.letter_words.alpha[this.curr_letter].wordpool[Phaser.Math.Between(0, this.letter_words.alpha[this.curr_letter].wordpool.length - 1)]

            var word_choice = new Word(this, 75 + (i * 125), 980, this.word);
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