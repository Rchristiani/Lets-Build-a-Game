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

Game.init = function() {
	window.addEventListener('keydown',Game.keys.keyDown);
	window.addEventListener('keyup',Game.keys.keyUp);
	requestAnimationFrame(Game.update);
}
Game.update = function() {
	//Lets paint the background
	//Set the fill style to be one of those not quite black but cool colors
	Game.ctx.fillStyle = '#273636';
	//Paint the background 
	Game.ctx.fillRect(0,0,Game.W,Game.H);
	//Paint the player
	Game.player.paint();
	//Check is player keys
	Game.keys.checkKeys();

	Game.player.handleBullets.renderBullets();
	Game.player.handleBullets.updateBullets();

	requestAnimationFrame(Game.update);
};
//Player Object 
Game.player = {
	x: 0,
	y: 0,
	w: 64,
	h: 64,
	speed: 10,
	left: false,
	right: false,
	up: false,
	down: false,
	//Add an image
	img: new Image(),
	paint: function() {
		//Set the src
		this.img.src = 'imgs/player_ship.gif';
		//Draw the image
		Game.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
	}
}
//Empty array of bullets
Game.player.bullets = [];
//Bullet constructor
Game.Bullet = function(x,y){
	this.x = x + 60;
	this.y = y + 29;
	this.render = function() {
		Game.ctx.fillStyle = '#ffffff';
		Game.ctx.fillRect(this.x,this.y, 10, 4);
	};
	this.update = function() {
		this.x += 20;
	};
};
Game.player.handleBullets = {
	renderBullets: function() {
		for(var i = 0; i < Game.player.bullets.length; i++){
			Game.player.bullets[i].render();
		}
	},
	updateBullets: function() {
		for(var i = 0; i < Game.player.bullets.length; i++){
			Game.player.bullets[i].update();
		}
	}
};


//Movement Logic
Game.keys = {
	keyDown: function(e) {
		//37 is left
		//38 is up
		//39 is right
		//40 is Down
		if(e.keyCode === 37){
			Game.player.left = true;
			//Hand handleing for Player going beyond bounds
			Game.player.x -= Game.player.speed;
		}
		if(e.keyCode === 38){
			Game.player.up = true;
			Game.player.y -= Game.player.speed;
		}
		if(e.keyCode === 39){
			Game.player.right = true;	
			Game.player.x += Game.player.speed;
		}
		if(e.keyCode === 40){
			Game.player.down = true;
			Game.player.y += Game.player.speed;
		}
		if(e.keyCode === 32) {
			Game.player.bullets.push(new Game.Bullet(Game.player.x,Game.player.y));
		}
	},
	keyUp: function(e){
		if(e.keyCode === 37){
			Game.player.left = false;
		}
		if(e.keyCode === 38){
			Game.player.up = false;
		}
		if(e.keyCode === 39){
			Game.player.right = false;
		}
		if(e.keyCode === 40){
			Game.player.down = false;
		}
	},
	checkKeys: function(){
		if(Game.player.left === true){
			Game.player.x -= Game.player.speed;
		}
		if(Game.player.up === true){
			Game.player.y -= Game.player.speed;
		}
		if(Game.player.right === true){
			Game.player.x += Game.player.speed;
		}
		if(Game.player.down === true){
			Game.player.y += Game.player.speed;
		}
	}
}
Game.init();