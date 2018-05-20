var text;
var game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('shoot', '../static/resources/shoot.png', 1040, 740, 12);
    game.load.spritesheet('button', '../static/resources/button_sprite_sheet.png', 193, 71);
    game.load.spritesheet('mercyButton', '../static/resources/mercy_sprite_sheet.png', 200, 70);
}

var anim;
var loopText;
var punish;
var mercy;
var text;
var style;
var currentQuestion;

function create() {
    shoot = game.add.sprite(10, 10, 'shoot', 2);
    shoot.scale.set(1);
    shoot.smoothed = false;
    anim = shoot.animations.add('walk');
    anim.onComplete.add(function () {
        style = { font: "bold 24px fedra", fill: "#fff", wordWrap: true, wordWrapWidth: 490, align: "center" };
        window.location.href = "#{ player_game_path(@player, @game)}";
    }, this);
    anim.play(8, false);
}

function nextAction() {
}


function update() {

}