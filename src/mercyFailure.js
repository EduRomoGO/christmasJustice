var text;
var game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('risa', '../static/resources/risa.png', 1040, 740, 2);
    game.load.spritesheet('button', '../static/resources/button_sprite_sheet.png', 193, 71);
}

var mummy;
var anim;
var loopText;
var punish;
var mercy;
// var text;
var style;
var currentQuestion;

function create() {
    risa = game.add.sprite(0, 0, 'risa', 18);
    risa.scale.set(1);
    risa.smoothed = false;
    anim = risa.animations.add('walk');
    anim.onLoop.add(animationLooped, this);
    // text = game.add.text(30, 350, 'Fallaste burlancaster', style);

    anim.play(5, true);
}

function animationLooped(sprite, animation) {
    if (animation.loopCount === 10) {
        style = { font: "bold 24px fedra", fill: "#fff", wordWrap: true, wordWrapWidth: 490, align: "center" };
        nextAction();
    }
}

function nextAction() {
    window.location.href = "#{ turra_player_game_path(@player, @game)}";
}


function update() {

}