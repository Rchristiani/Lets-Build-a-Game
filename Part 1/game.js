//Main Game object
//Everything else will live inside here
var Game = {};
//Grab the canvas element
Game.canvas = document.getElementById('canvas');
//Set our context to be 2d
Game.ctx = Game.canvas.getContext('2d');

//Set some constants
Game.H = 600;
Game.W = 800;
//Set the height and with of the canvas
Game.canvas.height = Game.H;
Game.canvas.width = Game.W;

Game.update = function() {
	//Lets paint the background
	//Set the fill style to be one of those not quite black but cool colors
	Game.ctx.fillStyle = '#273636';
	//Paint the background 
	Game.ctx.fillRect(0,0,Game.W,Game.H);
	//Paint the player
	Game.player.paint();

	requestAnimationFrame(Game.update);
};

//Player Object 
Game.player = {
	x: 0,
	y: 0,
	w: 64,
	h: 64,
	//Add an image
	img: new Image(),
	paint: function() {
		//Set the src
		this.img.src = 'imgs/player_ship.gif';
		//Draw the image
		Game.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
	}
}

//Call the update function
requestAnimationFrame(Game.update);