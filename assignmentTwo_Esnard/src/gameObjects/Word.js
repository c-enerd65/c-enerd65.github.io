const PADDING = 10;

class Word extends Phaser.GameObjects.Container {
    constructor(scene, x, y, word) {
        super(scene, x, y)

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.word = word;

        this.createWordSlip();
        this.scene.add.existing(this);
    }

    createWordSlip() {
        this.word_text = this.scene.add.text(0, 0, `${this.word}`, {align: 'center', fontSize: '12px', fill: '#000'});
        this.word_text.setOrigin(0);

        let word_paddingX = this.word_text.width + PADDING;
        let word_paddingY = this.word_text.height + PADDING;
        
        const background = this.scene.add.rectangle(0, 0, word_paddingX, word_paddingY, 0xC30F16);
        background.setOrigin(0);
        
        this.word_text.setPosition(background.x + PADDING / 2, background.y + PADDING / 2);

        this.add(background);
        this.add(this.word_text);
    }
}

export default Word;