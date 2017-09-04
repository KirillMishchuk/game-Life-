var canvas = document.querySelector('#c1');
var ctx = canvas.getContext('2d');
var field = [];
var count = 0;
var timer;

canvas.onclick = function(event) {
	var x = event.offsetX;
	var y = event.offsetY;
	console.log(x);
	console.log(y);
	x = Math.floor(x / 10);
	y = Math.floor(y / 10);
	field[y][x] = 1;
	console.log(field);
	drawOnField();
	
}

function onField() {
	var m = 30, n = 30;
	for (i = 0; i < m; i++) {
		field[i] = [];
		for (var j = 0; j < n; j++) {
			field[i][j] = 0; 			
		}		
	}
}

onField();

function drawOnField() {
	ctx.clearRect(0, 0 , 300, 300);
	for (var i = 0; i < 30; i++) {
		for (var j = 0; j < 30; j++) {
			if (field[i][j] === 1) {
				ctx.fillRect(j * 10, i * 10, 10, 10); 
			}
		}		
	}
}

function startLife () {
	var mas2 = [];
	for (i = 0; i < 30; i++) {
		mas2[i] = [];
		for (var j = 0; j < 30; j++) {
		var neighbours = 0;
		if (field[fpm(i) - 1][j] === 1) neighbours++; //up
		if (field[fpp(i) + 1][j] === 1) neighbours++; //bottom
		if (field[i][fpp(j) + 1] === 1) neighbours++; //right
		if (field[i][fpm(j) - 1] === 1) neighbours++; //left

		if (field[fpm(i) - 1][fpp(j) + 1] === 1) neighbours++;
		if (field[fpp(i) + 1][fpp(j) + 1] === 1) neighbours++;
		if (field[fpp(i) + 1][fpm(j) - 1] === 1) neighbours++;
		if (field[fpm(i) - 1][fpm(j) - 1] === 1) neighbours++;

		(neighbours === 2 || neighbours === 3) ? mas2[i][j]	= 1 : mas2[i][j]	= 0;
		}
	}
		field = mas2;
		drawOnField();
		count++;
		document.querySelector('#count').innerHTML = count;
		timer = setTimeout(startLife, 300);
}

function fpm(i) {
	if (i === 0) {
		return 30;
	}
	else {
		return i;
	}
}

function fpp(i) {
	if (i === 29) {
		return -1;
	}
	else {
		return i;
	}
}

document.querySelector('#start').onclick = startLife;




























