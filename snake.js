function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale*1;
	this.ySpeed = 0;
	this.total = 0;
	this.tail = [];
	this.draw = function(){
		//ctx.fillStyle = "#FFFFFF";
		for (let i = 0; i < this.tail.length; i++) {
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(this.tail[i].X , this.tail[i].Y , scale , scale);
			ctx.fillStyle = "#3e3e3e";
			ctx.strokeRect(this.tail[i].X , this.tail[i].Y , scale , scale);
		}
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x , this.y , scale , scale);//for current position
		ctx.fillStyle = "#3e3e3e";
		ctx.strokeRect(this.x , this.y , scale , scale);//for currenr position
	}

	this.update = function(){
		for (let i = 0; i < this.tail.length-1; i++) {
			this.tail[i] = this.tail[i+1];
		}
		this.tail[this.total-1] = 
		{X: this.x, Y: this.y};
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if(this.x >= canvas.width){
			this.x = 0;
		}
		if(this.y >= canvas.height){
			this.y = 0;
		}
		if(this.x < 0){
			this.x = canvas.width;
		}
		if(this.y < 0){
			this.y = canvas.height;
		}
	}

	this.changeDir = function(dir){
		//console.log(dir);
		if (dir == 'Up') {
			this.xSpeed = 0;
			this.ySpeed = -scale*1;
		}else if (dir === 'Right') {
			this.xSpeed = scale*1;
			this.ySpeed = 0;
		}else if (dir == 'Left') {
			this.xSpeed = -scale*1;
			this.ySpeed = 0;
		}else if (dir == 'Down') {
			this.xSpeed = 0;
			this.ySpeed = scale*1;
		}

	}

	this.eat = function(fruit){
		if(this.x === fruit.x && this.y === fruit.y){
			this.total++;
			return true;
		}
		return false;
	}

	this.checkCollision = function(){
		for (var i = 0; i < this.tail.length; i++) {
			if(this.x === this.tail[i].X && this.y === this.tail[i].Y){
				window.alert('Game Over! Your score is : ' + this.total);
				this.total = 0;
				this.tail = [];
			}
		}
	}
}