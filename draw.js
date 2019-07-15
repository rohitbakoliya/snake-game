var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
const scale =20;
var rows = canvas.height / scale;
var columns = canvas.width / scale;
var snake;
var fruit;
var dir = '';
(function setup() {
	snake = new Snake();
	fruit = new Fruit();
	fruit.pickLocation();
	//console.log(fruit);
	
	window.setInterval(() => {
		ctx.clearRect(0, 0 , canvas.width , canvas.height);
		fruit.draw();
		snake.draw();
		snake.update();

		if(snake.eat(fruit)){
			fruit.pickLocation();
		}

		snake.checkCollision();
		document.getElementById('score').innerText = 'Score: ' + snake.total;

	}, 250);

}());


window.addEventListener('keydown', ((event) =>{
	if(event.keyCode === 38 && dir != 'Down'){
		dir = 'Up';
	}
	else if(event.keyCode === 39 && dir != 'Left'){
		dir = 'Right';
	}
	else if(event.keyCode === 40 && dir != 'Up'){
		dir = "Down";
	}
	else if(event.keyCode === 37 && dir != 'Right'){
		dir = "Left";
	}
	//console.log(dir)
	snake.changeDir(dir);
}))





