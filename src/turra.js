var text;
var game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('final', '../static/resources/final_has_perdido.png', 289, 187);
}

var anim;
var loopText;
var punish;
var mercy;
var text;
var style;
var currentQuestion;

function create() {
    tilesprite = game.add.tileSprite(0, 0, 289, 187, 'final');
    tilesprite.scale.set(3.5);
}

function update() {

}