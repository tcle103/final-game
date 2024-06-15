class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings


    }

    preload() {
        this.load.setPath("./assets/");

        this.load.image("sky", "sky.png");
        this.load.image("bg1", "bg1.png");
        this.load.image("bg2", "bg2.png");
        this.load.image("ground", "ground.png");
        this.load.image("foreground", "foreground.png");

        this.load.bitmapFont("pixel", "font_0.png", "font.fnt");

        this.load.image("textbox", "textbox.png");

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

        my.sprite.textbox = this.add.sprite(400, 450, "textbox");
        my.sprite.textbox.setScale(10);
        
        my.sprite.menuHover = this.add.sprite(335, 680, "hover");
        my.sprite.menuHover.setScale(7);
        my.sprite.menuHover.visible = false;
        my.sprite.menu = this.add.sprite(335, 680, "button");
        my.sprite.menu.setScale(7);
        this.menu = this.add.bitmapText(335, 485, "pixel", "menu", 60);
        this.menu.setTint(0x373130);

        this.txt = this.add.bitmapText(215, 175, "pixel", "credits\n\nconcept and code by tien le!\nall graphical assets by kenney \nat kenney.nl", 28, 1);
        this.txt.setTint(0x373130);

        my.sprite.menu.setInteractive();
        my.sprite.menu.on('pointerover', () => { my.sprite.menuHover.visible = true; });
        my.sprite.menu.on('pointerout', () => { my.sprite.menuHover.visible = false; });
        my.sprite.menu.on('pointerdown', () => 
            {
                this.scene.start("titleScene");
            })
    }

    update() {
        let my = this.my;

    }
}