function makeArr(originalTxt) {
    

    let arr = [];

    for (let i = 0; i < originalTxt.length; ++i) {
        if (originalTxt[i] != "\n") {
            arr.push(originalTxt[i]);
        }
    }

    return arr;
}


class Main extends Phaser.Scene {
    constructor() {
        super("mainScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings

        this.originalTxt = `6/10/24>\n>\ni took a drive in the forest today>\nto take my mind off my finals>\n>\ni'm pretty tired. sometimes it feels like>\ni've just been born tired>\n>\n...\ni like driving.>\ni like how>\nthe way 'forward'>\nis always just>\nthe road that's right in front of me>\n>\ni had a thought>\nthat if i just kept driving>\neverything will just shrink away in the distance>\n>\n...>\ni had another thought>\nthat here is a pretty special place to be>\nthat not just everywhere>\nthere is so much green>\nand so much love>\nfor every inch of it>\n>\n...>\ni saw a frog today>\nit was really cute>\ni normally hear them>\nbut i don't think i've seen one before>\n>\nhe was just hopping around>\nmaybe he was enjoying the sun>\nthe joy of feeling warmth.>\n>\n...>\ni thought then that>\nit was time i go back to my dorm>\nnext time>\ni'll take a walk in the sunshine instead`;

        this.originalTxtArr = makeArr(this.originalTxt);

        console.log(this.originalTxtArr);

        this.userEntry = [];

        this.counter = 0;
        this.counter1 = 0;
        this.flip = false;

        this.speed = 0;

        this.indexCount = 0;
        this.charLineCount = 0;

        this.correctCount = 0;

        this.go = false;

        this.correctColor = 0x373130;
        this.defaultColor = 0xffffff;
        this.cursorColor = 0x9a8a87;
        this.wrongColor = 0xfa6ea2;
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
        this.load.image("car1", "rounded_red_edited_2.png");

        this.load.image("textbox", "textbox.png");
        this.load.image("mask", "mask.png");

        this.load.bitmapFont("pixel", "font_0.png", "font.fnt");

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

        my.sprite.textbox = this.add.sprite(400, 325, "textbox");
        my.sprite.mask = this.add.sprite(400, 325, "mask");
        my.sprite.textbox.setScale(10);
        my.sprite.mask.setScale(10);
        my.sprite.mask.visible = false;

        this.txt = this.add.bitmapText(180, 60, "pixel", this.originalTxt);
        this.txt.maxWidth = 480;
        this.txtmask = this.txt.createBitmapMask(my.sprite.mask);
        this.txt.setMask(this.txtmask);
        this.txt.setTint(this.defaultColor);

        this.anims.create({key: "drive", 
                            frames: [
                                {key: "car"},
                                {key: "car1"},
                            ],
                            frameRate: 2,
                            repeat: -1 });

        this.input.keyboard.addCapture('SPACE,FORWARD_SLASH');

        this.input.keyboard.on("keydown-A", (e) => {
            this.userEntry.push("a"); 
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-B", (e) => {
            this.userEntry.push("b");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-C", (e) => {
            this.userEntry.push("c");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-D", (e) => {
            this.userEntry.push("d");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-E", (e) => {
            this.userEntry.push("e");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-F", (e) => {
            this.userEntry.push("f");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-G", (e) => {
            this.userEntry.push("g");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-H", (e) => {
            this.userEntry.push("h");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-I", (e) => {
            this.userEntry.push("i");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-J", (e) => {
            this.userEntry.push("j");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-K", (e) => {
            this.userEntry.push("k");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-L", (e) => {
            this.userEntry.push("l");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-M", (e) => {
            this.userEntry.push("m");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-N", (e) => {
            this.userEntry.push("n");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-O", (e) => {
            this.userEntry.push("o");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-P", (e) => {
            this.userEntry.push("p");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-Q", (e) => {
            this.userEntry.push("q");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-R", (e) => {
            this.userEntry.push("r");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-S", (e) => {
            this.userEntry.push("s");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-T", (e) => {
            this.userEntry.push("t");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-U", (e) => {
            this.userEntry.push("u");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-V", (e) => {
            this.userEntry.push("v");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-W", (e) => {
            this.userEntry.push("w");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-X", (e) => {
            this.userEntry.push("x");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-Y", (e) => {
            this.userEntry.push("y");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-Z", (e) => {
            this.userEntry.push("z");
            this.movement();
            ++this.indexCount;
        });

        this.input.keyboard.on("keydown-ONE", (e) => {
            this.userEntry.push("1");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-TWO", (e) => {
            this.userEntry.push("2");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-THREE", (e) => {
            this.userEntry.push("3");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-FOUR", (e) => {
            this.userEntry.push("4");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-FIVE", (e) => {
            this.userEntry.push("5");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-SIX", (e) => {
            this.userEntry.push("6");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-SEVEN", (e) => {
            this.userEntry.push("7");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-EIGHT", (e) => {
            this.userEntry.push("8");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-NINE", (e) => {
            this.userEntry.push("9");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-ZERO", (e) => {
            this.userEntry.push("0");
            this.movement();
            ++this.indexCount;
        });

        this.input.keyboard.on("keydown-FORWARD_SLASH", (e) => {
            this.userEntry.push("/");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-PERIOD", (e) => {
            this.userEntry.push(".");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-SPACE", (e) => {
            this.userEntry.push(" ");
            this.movement();
            ++this.indexCount;
        });
        this.input.keyboard.on("keydown-ENTER", (e) => {
            this.userEntry.push(">");
            this.movement();
            ++this.indexCount;
        })
        this.input.keyboard.on("keydown-BACKSPACE", (e) => {
            this.userEntry.pop();
            this.txt.setCharacterTint(this.indexCount, 1, true, this.defaultColor); 
            --this.indexCount;
            this.movement();
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        console.log(my.sprite.car.anims.getFrameName());

        my.sprite.ground.x -= this.speed;
        my.sprite.bg2.x -= 2 * this.speed / 3
        my.sprite.bg1.x -= this.speed / 3;
        my.sprite.sky.x -= this.speed / 6;
        my.sprite.fground -= 2 * this.speed;

        ++this.counter;
        ++this.counter1;

        if (this.go == false && this.speed > 0 && this.counter >= 10) {
            this.speed -= 0.5;
            this.counter = 0;
        }
        if (this.go == true && this.counter >= 30) {
            this.go = false;
            my.sprite.car.anims.pause(this.anims.get("drive").frames[0]);
        }

        if (this.counter1 >= 10) {
            if (this.flip) {
                this.txt.setCharacterTint(this.indexCount, 1, true, this.defaultColor);
                this.flip = false;
            }
            else {
                this.txt.setCharacterTint(this.indexCount, 1, true, this.cursorColor);
                this.flip = true;
            }
            this.counter1 = 0;
        }

    }

    movement() {
        let my = this.my;


        if (this.indexCount >= this.correctCount) {
            console.log(this.correctCount);
            if (this.userEntry[this.indexCount] == this.originalTxtArr[this.indexCount]) {
                ++this.correctCount;
                this.go = true;
                my.sprite.car.play("drive", true);
                this.txt.setCharacterTint(this.indexCount, 1, true, this.correctColor);
                if (this.speed < 1.5) {
                    this.speed += 0.5;
                }
            }
            if (this.userEntry[this.indexCount] != this.originalTxtArr[this.indexCount]) {
                this.txt.setCharacterTint(this.indexCount, 1, true, this.wrongColor);
            }
        }
        else {
            
        }

        console.log(this.userEntry);

        
    }

}