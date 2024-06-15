class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings


    }

    preload() {
        this.load.setPath("./assets/");

        this.load.image("sky", "sky.png");
        this.load.image("bg1", "bg1.png");
        this.load.image("bg2", "bg2.png");
        this.load.image("ground", "ground.png");
        this.load.image("foreground", "foreground.png");

        this.load.image("car", "rounded_red_edited.png");
        this.load.image("car1", "rounded_red_edited_2.png");

        this.load.bitmapFont("pixel", "font_0.png", "font.fnt");

        this.load.image("textbox1", "textbox1.png");

        this.load.image("button", "button.png");
        this.load.image("hover", "buttonhover.png");
    }

    create() {
        let my = this.my; // alias for readability

        my.sprite.sky = this.add.sprite(3780, 310, "sky");
        my.sprite.sky.setScale(10);

        my.sprite.bg1 = this.add.sprite(3500, 310, "bg1");
        my.sprite.bg1.setScale(10);

        my.sprite.bg2 = this.add.sprite(3600, 310, "bg2");
        my.sprite.bg2.setScale(10);

        my.sprite.ground = this.add.sprite(2000, 310, "ground");
        my.sprite.ground.setScale(10);

        my.sprite.fground = this.add.sprite(2100, 310, "foreground");
        my.sprite.fground.setScale(10);

        my.sprite.car = this.add.sprite(400, 360, "car");
        my.sprite.car.setScale(10);

        my.sprite.textbox1 = this.add.sprite(400, 360, "textbox1");
        my.sprite.textbox1.setScale(10);

        my.sprite.credHover = this.add.sprite(500, 680, "hover");
        my.sprite.credHover.setScale(7);
        my.sprite.credHover.visible = false;
        my.sprite.credits = this.add.sprite(500, 680, "button");
        my.sprite.credits.setScale(7);
        this.credits = this.add.bitmapText(465, 485, "pixel", "credits", 60);
        this.credits.setTint(0x373130);
        
        my.sprite.playHover = this.add.sprite(200, 680, "hover");
        my.sprite.playHover.setScale(7);
        my.sprite.playHover.visible = false;
        my.sprite.play = this.add.sprite(200, 680, "button");
        my.sprite.play.setScale(7);
        this.play = this.add.bitmapText(200, 485, "pixel", "play", 60);
        this.play.setTint(0x373130);
        
        

        this.anims.create({
            key: "drive",
            frames: [
                { key: "car" },
                { key: "car1" },
            ],
            frameRate: 2,
            repeat: -1
        });
        my.sprite.car.play("drive");

        this.txt = this.add.bitmapText(215, 90, "pixel", "forest drive", 70);
        this.txt.setTint(0x373130);

        my.sprite.play.setInteractive();
        my.sprite.play.on('pointerover', () => { my.sprite.playHover.visible = true; });
        my.sprite.play.on('pointerout', () => { my.sprite.playHover.visible = false; });
        my.sprite.play.on('pointerdown', () => 
            {
                this.scene.start("mainScene");
            })

        my.sprite.credits.setInteractive();
        my.sprite.credits.on('pointerover', () => { my.sprite.credHover.visible = true; });
        my.sprite.credits.on('pointerout', () => { my.sprite.credHover.visible = false; });
        my.sprite.credits.on('pointerdown', () => 
            {
                this.scene.start("creditsScene");
            })
    }

    update() {
        let my = this.my;

    }
}