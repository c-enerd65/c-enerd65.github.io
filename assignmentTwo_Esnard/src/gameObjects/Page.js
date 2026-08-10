class Page extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.scene.add.existing(this);
    }
}

export default Page;