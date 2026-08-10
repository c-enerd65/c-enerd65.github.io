import Page from '../gameObjects/Page.js';
import Word from '../gameObjects/Word.js';

const TOTAL_DISPLAYED_WORDS = 5;

const WORDPOOL_X = 95;
const WORDPOOL_Y = 980;
const WORDPOOL_SPACING = 125;

export class Letter extends Phaser.Scene {    
    constructor() {
        super('Letter');

        this.curr_letter = 0;
    }

    create() {
        this.letter_words = this.cache.json.get('available_words');
        this.page_container = new Page(this, 40, 40);

        this.startRandomWords();
        this.wordMoveEvent();    
    }

    startRandomWords() {
        for(let i = 0; i < TOTAL_DISPLAYED_WORDS; i++) {
            this.getWord(WORDPOOL_X + (i * WORDPOOL_SPACING), WORDPOOL_Y);
            this.getNextLetter();
        }
    }

    wordMoveEvent() {
        this.events.on('word_moved', (replace_x, replace_y) => {
            this.replaceWord(replace_x, replace_y);
        });
    }

    replaceWord(x, y) {
        this.getWord(x, y);
        this.getNextLetter();
    }

    getWord(x, y) {
        this.word = this.letter_words.alpha[this.curr_letter].wordpool[Phaser.Math.Between(0, this.letter_words.alpha[this.curr_letter].wordpool.length - 1)];

        return new Word(this, x, y, this.word);
    }

    getNextLetter() {
        this.curr_letter = (this.curr_letter + 1) % this.letter_words.alpha.length;
    }

}