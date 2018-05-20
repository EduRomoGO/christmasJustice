
var game = new Phaser.Game("100", "100", Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('mummy', '../static/resources/metalslug_mummy37x45.png', 37, 45, 18);
    game.load.spritesheet('fruits', '../static/resources/fruitnveg64wh37.png', 64, 37, 37);
    game.load.spritesheet('finishButton', '../static/resources/finish_sprite_sheet.png', 200, 70);
    game.load.spritesheet('mercyButton', '../static/resources/mercy_sprite_sheet.png', 200, 70);
    game.load.image('layout', '../static/resources/fondo_preguntas.png', 520, 800);
    game.load.image('cunado', '../static/resources/cunado_solo.png', 520, 800);
    game.load.image('botones', '../static/resources/botones.png', 520, 800);
}


var anim;
var loopText;
var punish;
var mercy;
var text;
var style;
var currentQuestion;

function create() {
    tilesprite = game.add.tileSprite(0, 0, 520, 800, 'layout');
    tilesprite.scale.set(2);
    speech = game.add.tileSprite(0, 100, 520, 800, 'botones');
    speech.scale.set(1.9);
    tilesprite = game.add.tileSprite(0, 55, 520, 800, 'cunado');
    tilesprite.scale.set(2);

    punish = game.add.button(85, 1340, 'finishButton', punishAction, this, 0, 1);
    mercy = game.add.button(545, 1340, 'mercyButton', mercyAction, this, 0, 1);

    mercy.scale.set(1.9);
    punish.scale.set(1.9);


    style = { font: "bold 48px", fill: "#010101", wordWrap: true, wordWrapWidth: 800, align: "center" };
    text = game.add.text(120, 900, '', style);

    getQuestion(text)
}

function createQuestion(questionText) {
    text.setText(questionText);
}

function punishAction() {
    if (validateAnswer(false)) {
        window.location.href = "#{ punishment_success_player_game_path(@player, @game)}";
    } else {
        window.location.href = "#{ turra_player_game_path(@player, @game)}";
    }
}

function mercyAction() {
    if (validateAnswer(true)) {
        window.location.href = "#{ player_game_path(@player, @game)}";
    } else {
        window.location.href = "#{ mercy_failure_player_game_path(@player, @game)}";
    }
}

function animationLooped(sprite, animation) {
    if (animation.loopCount === 1) {
        loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
    }
}


function validateAnswer(optionSelected) {
    return (optionSelected === currentQuestion.truth);
}

function update() {

}

function getQuestion(text) {
    // $.ajax({
    //     url: "#{new_player_game_question_path(@player, @game)}",
    //     success: function (response) {
    //         currentQuestion = response;
    //         createQuestion(currentQuestion.description);
    //     },
    //     error: function (response) { console.log("Adios", response) },
    //     dataType: "JSON"
    // })
    console.log('make question');
}