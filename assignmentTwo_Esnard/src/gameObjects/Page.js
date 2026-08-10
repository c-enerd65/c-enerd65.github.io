class Page extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.createBlankPage();
        this.scene.add.existing(this);
    }

    createBlankPage() {
        const background = this.scene.add.rectangle(0, 0, 640, 840, 0x000000);
        background.setOrigin(0);

        this.add(background);
    }
}

export default Page;