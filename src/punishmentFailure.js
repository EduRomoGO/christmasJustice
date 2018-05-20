var text;
var game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('fruits', '../static/resources/fruitnveg64wh37.png', 64, 37, 37);
    game.load.spritesheet('button', '../static/resources/button_sprite_sheet.png', 193, 71);
}

var mummy;
var anim;
var loopText;
var punish;
var mercy;
var text;
var style;
var currentQuestion;

function create() {
    fruits = game.add.sprite(20, 100, 'fruits', 8);
    fruits.scale.set(4);
    fruits.smoothed = false;
    anim = fruits.animations.add('walk');
    anim.onLoop.add(animationLooped, this);
    style = { font: "bold 24px", fill: "#fff", wordWrap: true, wordWrapWidth: 490, align: "center" };
    text = game.add.text(30, 350, 'Fracaso', style);

    anim.play(10, true);
}

function animationLooped(sprite, animation) {
    if (animation.loopCount === 1) {
        animation.loop = false;
        nextAction();
    }
}

function nextAction() {
    window.location.href = "#{ cruz_player_game_path(@player, @game)}";
}


function update() {

}