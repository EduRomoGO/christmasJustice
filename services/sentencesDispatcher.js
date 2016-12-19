'use strict';

const sentences = [
	{
    	description: "¡Que buena opinion! La respeto aunque no la comparto",
    	truth: true
	},
	{
	    description: "La verdad es que de esto no entiendo mucho",
	    truth: true
	},
	{
	    description: "Una llamada no se rastrea en menos de media hora, que lo se yo",
	    truth: true
	},
	{
	    description: "El jamon no se corta asi. Quita",
	    truth: false
	},
	{
	    description: "Pues yo aqui siempre aparco a la primera",
	    truth: false
	},
	{
	    description: "Luego te enseño donde puedes comprar unas gambas buenas de verdad",
	    truth: false
	}
];

function getRandomNum(min, range) {
	return Math.floor(Math.random() * range) + min;
}

module.exports = {
	dispatchSentence: function () {
		return sentences[getRandomNum(1, 6)];
	}
};