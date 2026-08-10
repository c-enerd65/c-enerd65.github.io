class Word extends Phaser.GameObjects {
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
        const background = this.scene.add.rectangle(0, 0, 680, 880, '#000000');
        background.setOrigin(0, 0);

        this.word_text = this.scene.add.text(0, 0, `${this.word}`, {fontSize: '20px', fill: '#000'});
        this.add(background);
        this.add(this.word_text);
    }
}

export default Word;