//coded using tutorial by Scott Westover: https://www.youtube.com/watch?v=jWglIBp4usY$0

export function makeDraggable(gameObject, scene, startX, startY) {
    gameObject.setInteractive();
    
    function startDrag() {
        gameObject.off(Phaser.Input.Events.POINTER_DOWN, startDrag);
        gameObject.on(Phaser.Input.Events.POINTER_UP, stopDrag);
        gameObject.on(Phaser.Input.Events.POINTER_MOVE, onDrag);
    }

    function stopDrag() {
        gameObject.on(Phaser.Input.Events.POINTER_DOWN, startDrag);
        gameObject.off(Phaser.Input.Events.POINTER_UP, stopDrag);
        gameObject.off(Phaser.Input.Events.POINTER_MOVE, onDrag);
    }

    function onDrag(pointer) {
        scene.events.emit('word_moved', startX, startY);
        
        gameObject.x = pointer.x;
        gameObject.y = pointer.y;
    }

    function destroy() {
        gameObject.off(Phaser.Input.Events.POINTER_DOWN, startDrag);
        gameObject.off(Phaser.Input.Events.POINTER_UP, stopDrag);
        gameObject.off(Phaser.Input.Events.POINTER_MOVE, onDrag);
    }

    gameObject.on(Phaser.Input.Events.POINTER_DOWN, startDrag);
    gameObject.on(Phaser.GameObjects.Events.DESTROY, destroy);
}

export default makeDraggable;