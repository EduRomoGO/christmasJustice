const game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('risa', '../static/resources/risa.png', 1040, 740, 2);
    game.load.spritesheet('button', '../static/resources/button_sprite_sheet.png', 193, 71);
    game.load.image('looserFinal', '../static/resources/final_has_perdido.png', 289, 187);
}

let laugh;

const setLooserFinal = () => {
    const tilesprite = game.add.tileSprite(0, 0, 289, 187, 'looserFinal');
    tilesprite.scale.set(3.5);
}

const addText = () => {
    const textStyle = { font: "bold 48px", fill: "#fff", wordWrap: true, wordWrapWidth: 490, align: "center" };
    game.add.text(200, 900, 'Fallaste burlancaster!!', textStyle);
}

function create() {
    addText();

    laugh = game.add.sprite(-300, 100, 'risa');
    const laughAnimation = laugh.animations.add('laugh', null, 5, true);
    laughAnimation.onLoop.add(animationLooped, this);

    laughAnimation.play();
}

function animationLooped(sprite, animation) {
    if (animation.loopCount >= 3) {
        // animation.stop();
        sprite.destroy();
        // setLooserFinal();
    }
}

function update() {}