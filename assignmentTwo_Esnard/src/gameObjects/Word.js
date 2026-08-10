const PADDING = 10;
const CLICK_PADDING = 1.75;

class Word extends Phaser.GameObjects.Container {
    constructor(scene, x, y, word) {
        super(scene, x, y)

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.word = word;

        this.createWordSlip(); 

        this.moved = false;

        this.scene.add.existing(this);
    }

    createWordSlip() {
        this.word_text = this.scene.add.text(0, 0, `${this.word}`, {fontFamily: 'FSEX', fontSize: '12px', fill: '#000'});
        this.word_text.setOrigin(0.6);

        let word_paddingX = this.word_text.width + PADDING;
        let word_paddingY = this.word_text.height + PADDING;
        
        const background = this.scene.add.rectangle(0, 0, word_paddingX, word_paddingY, 0xFFF6EA);
        background.setOrigin(0.5);

        let click_paddingX = word_paddingX * CLICK_PADDING;
        let click_paddingY = word_paddingY * CLICK_PADDING;

        //const debug_bg = this.scene.add.rectangle(0, 0, click_paddingX, click_paddingY, 0x000000);

        this.word_text.setPosition(background.x + PADDING / 4.4, background.y + PADDING / 4.5);

        //this.add(debug_bg);
        
        this.add(background)
            .add(this.word_text)
            .setSize(click_paddingX, click_paddingY);
        
        this.makeDraggable(this.x, this.y);
    }

    /*
        makeDraggable() coded referencing 
        tutorial by Scott Westover:
            https://www.youtube.com/watch?v=jWglIBp4usY$0 
    */

    makeDraggable(startX, startY) {
        this.setInteractive();

        function startDrag() {
            this.off(Phaser.Input.Events.POINTER_DOWN, startDrag);
            this.on(Phaser.Input.Events.POINTER_UP, stopDrag);
            this.on(Phaser.Input.Events.POINTER_MOVE, onDrag);
        }

        function stopDrag() {
            this.on(Phaser.Input.Events.POINTER_DOWN, startDrag);
            this.off(Phaser.Input.Events.POINTER_UP, stopDrag);
            this.off(Phaser.Input.Events.POINTER_MOVE, onDrag);

            if(!this.moved) {
                this.scene.events.emit('word_moved', startX, startY);
                this.moved = true;
            }
        }

        function onDrag(pointer) {
            this.x = pointer.x;
            this.y = pointer.y;
        }

        this.on(Phaser.Input.Events.POINTER_DOWN, startDrag);
    }
}

export default Word;