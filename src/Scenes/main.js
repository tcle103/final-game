class Main extends Phaser.Scene {
    constructor() {
        super("mainScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        // Create variables to hold constant values for sprite locations
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Shape Characters"
        this.load.setPath("./assets/");
        
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

    }

}