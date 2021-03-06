function preload(game) {
    game.load.spritesheet('risa', '../static/resources/risa.png', 1040, 740, 2);
    game.load.spritesheet('button', '../static/resources/button_sprite_sheet.png', 193, 71);
    game.load.image('looserFinal', '../static/resources/final_has_perdido.png', 289, 187);
}

const setLooserFinal = game => {
    const looserFinalSprite = game.add.sprite(0, 0, 'looserFinal');
    looserFinalSprite.scale.set(3.5);
}

const addText = game => {
    const textStyle = { font: "bold 48px", fill: "#fff", wordWrap: true, wordWrapWidth: 490, align: "center" };
    game.add.text(200, 900, 'Fallaste burlancaster!!', textStyle);
}

let laugh;

const mercyFailure = game => {
    addText(game);

    laugh = game.add.sprite(-300, 100, 'risa');
    const laughAnimation = laugh.animations.add('laughAnimation');
    laughAnimation.onLoop.add(animationLooped, this, null, game);
    laughAnimation.onComplete.add(laughStopped, this, null, game);

    laughAnimation.play(5, true, true);
}

const laughStopped = (sprite, animation, game) => {
    // animation.stop();
    // sprite.destroy();
    setLooserFinal(game);
};

function animationLooped(sprite, animation, game) {
    if (animation.loopCount >= 4) {
        animation.loop = false;
    }
}

function update() {}

export {
    addText,
    mercyFailure,
    preload,
};