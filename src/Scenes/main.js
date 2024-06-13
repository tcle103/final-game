class Main extends Phaser.Scene {
    constructor() {
        super("mainScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings

        this.userEntry = [];

        this.counter = 0;

        this.speed = 0;

        this.go = false;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Shape Characters"
        this.load.setPath("./assets/");

        this.load.image("sky", "sky.png");
        this.load.image("bg1", "bg1.png");
        this.load.image("bg2", "bg2.png");
        this.load.image("ground", "ground.png");
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

        this.input.keyboard.addCapture('SPACE,FORWARD_SLASH');

        this.input.keyboard.on("keydown-A", (e) => {
            this.userEntry.push("a");
            this.movement();
        });
        this.input.keyboard.on("keydown-B", (e) => {
            this.userEntry.push("b");
            this.movement();
        });
        this.input.keyboard.on("keydown-C", (e) => {
            this.userEntry.push("c");
            this.movement();
        });
        this.input.keyboard.on("keydown-D", (e) => {
            this.userEntry.push("d");
            this.movement();
        });
        this.input.keyboard.on("keydown-E", (e) => {
            this.userEntry.push("e");
            this.movement();
        });
        this.input.keyboard.on("keydown-F", (e) => {
            this.userEntry.push("f");
            this.movement();
        });
        this.input.keyboard.on("keydown-G", (e) => {
            this.userEntry.push("g");
            this.movement();
        });
        this.input.keyboard.on("keydown-H", (e) => {
            this.userEntry.push("h");
            this.movement();
        });
        this.input.keyboard.on("keydown-I", (e) => {
            this.userEntry.push("i");
            this.movement();
        });
        this.input.keyboard.on("keydown-J", (e) => {
            this.userEntry.push("j");
            this.movement();
        });
        this.input.keyboard.on("keydown-K", (e) => {
            this.userEntry.push("k");
            this.movement();
        });
        this.input.keyboard.on("keydown-L", (e) => {
            this.userEntry.push("l");
            this.movement();
        });
        this.input.keyboard.on("keydown-M", (e) => {
            this.userEntry.push("m");
            this.movement();
        });
        this.input.keyboard.on("keydown-N", (e) => {
            this.userEntry.push("n");
            this.movement();
        });
        this.input.keyboard.on("keydown-O", (e) => {
            this.userEntry.push("o");
            this.movement();
        });
        this.input.keyboard.on("keydown-P", (e) => {
            this.userEntry.push("p");
            this.movement();
        });
        this.input.keyboard.on("keydown-Q", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-R", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-X", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-T", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-U", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-V", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-W", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-X", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-Y", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-Z", (e) => {
            this.movement();
        });

        this.input.keyboard.on("keydown-ONE", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-TWO", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-THREE", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-FOUR", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-FIVE", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-SIX", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-SEVEN", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-EIGHT", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-NINE", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-ZERO", (e) => {
            this.movement();
        });

        this.input.keyboard.on("keydown-FORWARD_SLASH", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-PERIOD", (e) => {
            this.movement();
        });
        this.input.keyboard.on("keydown-SPACE", (e) => {
            this.movement();
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        my.sprite.ground.x -= this.speed;
        my.sprite.bg2.x -= 2*this.speed/3
        my.sprite.bg1.x -= this.speed/3;
        my.sprite.sky.x -= this.speed/6;
        my.sprite.fground -= 2*this.speed;

        ++this.counter;

        if (this.go == false && this.speed > 0 && this.counter >= 33) {
            this.speed -= 0.5;
            this.counter = 0;
        }
        if (this.go == true && this.counter >= 33) {
            this.go = false;
        }

    }

    movement() {
        let my = this.my;

        this.go = true;

        if (this.speed < 1.5) {
            this.speed += 0.5;
        }
    }

}