//Main Game object
//Everything else will live inside here
var Game = {};
//Grab the canvas element
Game.canvas = document.getElementById('canvas');
//Set our context to be 2d
Game.ctx = Game.canvas.getContext('2d');

//Set some constants
Game.H = Game.canvas.height;
Game.W = Game.canvas.width;

Game.update = function() {
	//Lets paint the background
	//Set the fill style to be one of those not quite black but cool colors
	Game.ctx.fillStyle = '#273636';
	Game.ctx.fillRect(0,0,Game.W,Game.H);
};

Game.update();