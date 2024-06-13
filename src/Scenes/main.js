function makeArr() {
    let originalTxt = `6/10/24\n
        \n
        i took a drive in the forest today\n
        to take my mind off my finals\n
        \n
        i'm pretty tired. sometimes it feels like\n
        i've just been born tired\n
        \n
        ...\n
        i like driving.\n
        i like how\n
        the way 'forward'\n
        is always just\n
        the road that's right in front of me\n
        \n
        i had a thought\n
        that if i just kept driving\n
        everything will just shrink away in the distance\n
        \n
        ...\n
        i had another thought\n
        that here is a pretty special place to be\n
        that not just everywhere\n
        there is so much green\n
        and so much love\n
        for every inch of it\n
        
        ...\n
        i saw a frog today\n
        it was really cute\n
        i normally hear them\n
        but i don't think i've seen one before\n
        
        he was just hopping around\n
        maybe he was enjoying the sun\n
        the joy of feeling warmth.\n
        
        ...\n
        i thought then that\n
        it was time i go back to my dorm\n
        next time\n
        i'll take a walk in the sunshine instead
        `;

    let arr = [];

    for (let i = 0; i < originalTxt.length; ++i) {
        arr.push(originalTxt[i]);
    }

    return arr;
}


class Main extends Phaser.Scene {
    constructor() {
        super("mainScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings

        this.originalTxtArr = makeArr();

        console.log(this.originalTxtArr);

        this.userEntry = [];

        this.counter = 0;

        this.speed = 0;

        this.indexCount = -1;

        this.correctCount = 0;

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
        this.load.image("car1", "rounded_red_edited_2.png");

        this.load.image("textbox", "textbox.png");

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
        my.sprite.textbox.setScale(10);

        this.input.keyboard.addCapture('SPACE,FORWARD_SLASH');

        this.input.keyboard.on("keydown-A", (e) => {
            this.userEntry.push("a"); 
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-B", (e) => {
            this.userEntry.push("b");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-C", (e) => {
            this.userEntry.push("c");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-D", (e) => {
            this.userEntry.push("d");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-E", (e) => {
            this.userEntry.push("e");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-F", (e) => {
            this.userEntry.push("f");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-G", (e) => {
            this.userEntry.push("g");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-H", (e) => {
            this.userEntry.push("h");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-I", (e) => {
            this.userEntry.push("i");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-J", (e) => {
            this.userEntry.push("j");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-K", (e) => {
            this.userEntry.push("k");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-L", (e) => {
            this.userEntry.push("l");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-M", (e) => {
            this.userEntry.push("m");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-N", (e) => {
            this.userEntry.push("n");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-O", (e) => {
            this.userEntry.push("o");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-P", (e) => {
            this.userEntry.push("p");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-Q", (e) => {
            this.userEntry.push("q");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-R", (e) => {
            this.userEntry.push("r");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-S", (e) => {
            this.userEntry.push("s");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-T", (e) => {
            this.userEntry.push("t");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-U", (e) => {
            this.userEntry.push("u");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-V", (e) => {
            this.userEntry.push("v");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-W", (e) => {
            this.userEntry.push("w");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-X", (e) => {
            this.userEntry.push("x");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-Y", (e) => {
            this.userEntry.push("y");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-Z", (e) => {
            this.userEntry.push("z");
            ++this.indexCount;
            this.movement();
        });

        this.input.keyboard.on("keydown-ONE", (e) => {
            this.userEntry.push("1");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-TWO", (e) => {
            this.userEntry.push("2");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-THREE", (e) => {
            this.userEntry.push("3");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-FOUR", (e) => {
            this.userEntry.push("4");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-FIVE", (e) => {
            this.userEntry.push("5");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-SIX", (e) => {
            this.userEntry.push("6");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-SEVEN", (e) => {
            this.userEntry.push("7");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-EIGHT", (e) => {
            this.userEntry.push("8");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-NINE", (e) => {
            this.userEntry.push("9");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-ZERO", (e) => {
            this.userEntry.push("0");
            ++this.indexCount;
            this.movement();
        });

        this.input.keyboard.on("keydown-FORWARD_SLASH", (e) => {
            this.userEntry.push("/");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-PERIOD", (e) => {
            this.userEntry.push(".");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-SPACE", (e) => {
            this.userEntry.push(" ");
            ++this.indexCount;
            this.movement();
        });
        this.input.keyboard.on("keydown-ENTER", (e) => {
            this.userEntry.push("\n");
            ++this.indexCount;
            this.movement();
        })
        this.input.keyboard.on("keydown-BACKSPACE", (e) => {
            this.userEntry.pop(); 
            --this.indexCount;
            this.movement();
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        my.sprite.ground.x -= this.speed;
        my.sprite.bg2.x -= 2 * this.speed / 3
        my.sprite.bg1.x -= this.speed / 3;
        my.sprite.sky.x -= this.speed / 6;
        my.sprite.fground -= 2 * this.speed;

        ++this.counter;

        if (this.go == false && this.speed > 0 && this.counter >= 10) {
            this.speed -= 0.5;
            this.counter = 0;
        }
        if (this.go == true && this.counter >= 30) {
            this.go = false;
        }

    }

    movement() {
        let my = this.my;


        if (this.indexCount >= this.correctCount) {
            console.log(this.correctCount);
            if (this.userEntry[this.indexCount] == this.originalTxtArr[this.indexCount]) {
                ++this.correctCount;
                this.go = true;
                if (this.speed < 1.5) {
                    this.speed += 0.5;
                }
            }
        }
        else {

        }

        console.log(this.userEntry);

        
    }

}