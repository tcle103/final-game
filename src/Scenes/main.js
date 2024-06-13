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

        this.load.image("sky", "sky.png");
        this.load.image("bg1", "bg1.png");
        this.load.image("bg2", "bg2.png");
        this.load.image("ground","ground.png");
        this.load.image("foreground", "foreground.png");

        this.load.image("car", "rounded_red_edited.png");
        
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        my.sprite.sky = this.add.sprite(3780, 310, "sky");
        my.sprite.sky.setScale(10);

        my.sprite.bg1 = this.add.sprite(3780, 310, "bg1");
        my.sprite.bg1.setScale(10);

        my.sprite.bg2 = this.add.sprite(3780, 310, "bg2");
        my.sprite.bg2.setScale(10);

        my.sprite.ground = this.add.sprite(3780, 310, "ground");
        my.sprite.ground.setScale(10);

        my.sprite.fground = this.add.sprite(3780, 310, "foreground");
        my.sprite.fground.setScale(10);

        my.sprite.car = this.add.sprite(400, 360, "car");
        my.sprite.car.setScale(10);

        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if ((this.dKey.isDown || this.rightKey.isDown)) {
            my.sprite.ground.x -= 1.5;
            my.sprite.bg2.x -= 1.3;
            my.sprite.bg1.x -= 1;
            my.sprite.sky.x -= 0.4;
            my.sprite.fground -= 3;
        }

    }

}