// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // aciive sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

   // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// TEXT 
// var w, h, loopId, id, canvas, ctx, particles;

// 	var options = {
// 		particleColor: "rgba(255,255,255)",
// 		lineColor: "rgba(0,181,255)",
// 		particleAmount: 40,
// 		defaultRadius: 3,
// 		variantRadius: 3,
// 		defaultSpeed: 1,
// 		variantSpeed: 2,
// 		linkRadius: 200
// 	};

// 	var rgb = options.lineColor.match(/\d+/g);

// 	document.addEventListener("DOMContentLoaded", init);

// 	function init() {
// 		canvas = document.getElementById("canvas");
// 		ctx = canvas.getContext("2d");
// 		resizeReset();
// 		initialiseElements();
// 		startAnimation();
// 	}

// 	function resizeReset() {
// 		w = canvas.width = window.innerHeight;
// 		h = canvas.height = window.innerHeight;
// 	}

// 	function initialiseElements() {
// 		particles = [];
// 		for (var i = 0; i < options.particleAmount; i++) {
// 			particles.push(new Particle());
// 		}
// 	}

// 	function startAnimation() {
// 		loopId = requestAnimationFrame(animationLoop);
// 	}

// 	function animationLoop() {
// 		ctx.clearRect(0,0,w,h);
// 		drawScene();

// 		id = requestAnimationFrame(animationLoop);
// 	}

// 	function drawScene() {
// 		drawLine();
// 		drawParticle();
// 	}

// 	function drawParticle() {
// 		for (var i = 0; i < particles.length; i++) {
// 			particles[i].update();
// 			particles[i].draw();
// 		}
// 	}

// 	function drawLine() {
// 		for (var i = 0; i < particles.length; i++) {
// 			linkPoints(particles[i], particles);
// 		}
// 	}

// 	function linkPoints(point, hubs) {
// 		for (var i = 0; i < hubs.length; i++) {
// 			var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
// 			var opacity = 1 - distance / options.linkRadius;
// 			if (opacity > 0) {
// 				ctx.lineWidth = 0.5;
// 				ctx.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
// 				ctx.beginPath();
// 				ctx.moveTo(point.x, point.y);
// 				ctx.lineTo(hubs[i].x, hubs[i].y);
// 				ctx.closePath();
// 				ctx.stroke();
// 			}
// 		}
// 	}

// 	function checkDistance(x1, y1, x2, y2) {
// 		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// 	}

// 	Particle = function() {
// 		var _this = this;

// 		_this.x = Math.random() * w;
// 		_this.y = Math.random() * h;
// 		_this.color = options.particleColor;
// 		_this.radius = options.defaultRadius + Math.random() * options.variantRadius;
// 		_this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
// 		_this.directionAngle = Math.floor(Math.random() * 360);
// 		_this.vector = {
// 			x: Math.cos(_this.directionAngle) * _this.speed,
// 			y: Math.sin(_this.directionAngle) * _this.speed
// 		}

// 		_this.update = function() {
// 			_this.border();
// 			_this.x += _this.vector.x;
// 			_this.y += _this.vector.y;
// 		}

// 		_this.border = function() {
// 			if (_this.x >= w || _this.x <= 0) {
// 				_this.vector.x *= -1;
// 			}
// 			if (_this.y >= h || _this.y <= 0) {
// 				_this.vector.y *= -1;
// 			}
// 			if (_this.x > w) _this.x = w;
// 			if (_this.y > h) _this.y = h;
// 			if (_this.x < 0) _this.x = 0;
// 			if (_this.y < 0) _this.y = 0;
// 		}

// 		_this.draw = function() {
// 			ctx.beginPath();
// 			ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
// 			ctx.closePath();
// 			ctx.fillStyle = _this.color;
// 			ctx.fill();
// 		}
// 	}

// #canvas
var requestAnimationFrame = window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { return setTimeout(callback, 1000 / 60); };

var w, h, loopId, canvas, ctx, particles;
var tid, delay = 200;
var options = {
	particleColor: "rgb(200,200,200)",
	lineColor: "rgb(200,200,200)",
	particleAmount: 40,
	defaultSpeed: 2,
	variantSpeed: 2,
	defaultRadius: 4,
	variantRadius: 4,
	linkRadius: 400
};
var rgb = options.lineColor.match(/\d+/g);

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", deBouncer);

function deBouncer() {
	clearTimeout(tid);
	tid = setTimeout(resizeReset, delay);
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	resizeReset();
	initialiseElements();
	startAnimation();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function initialiseElements() {
	particles = [];
	for (var i = 0; i < options.particleAmount; i++) {
		particles.push(new Particle());
	}
}

function startAnimation() {
	loopId = requestAnimationFrame(animationLoop);
}

function animationLoop() {
	// clear
	ctx.clearRect(0, 0, w, h);
	// Draw & Move
	drawScene();
	
	id = requestAnimationFrame(animationLoop);
}

function drawScene() {
	drawParticle();
	drawLine();
}

function drawParticle() {
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].draw();
	}
}

function drawLine() {
	for (var i = 0; i < particles.length; i++) {
		linkPoints(particles[i], particles);
	}
}

function checkDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function linkPoints(point, hubs) {
	for (var i = 0; i < hubs.length; i++) {
		var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
		var opacity = 1 - distance / options.linkRadius;
		if (opacity > 0) {
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
			ctx.beginPath();
			ctx.moveTo(point.x, point.y);
			ctx.lineTo(hubs[i].x, hubs[i].y);
			ctx.closePath();
			ctx.stroke();
		}
	}
}

Particle = function() {
	var _this = this;
	
	_this.x = Math.random() * w;
	_this.y = Math.random() * h;
	_this.color = options.particleColor;
	_this.radius = options.defaultRadius + Math.random() * options.variantRadius;
	_this.directionAngle = Math.floor(Math.random() * 360);	
	_this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;	
	_this.vector = {
		x: Math.cos(_this.directionAngle) * _this.speed,
		y: Math.sin(_this.directionAngle) * _this.speed
	};
	
	_this.update = function() {
		_this.border();
		_this.x += _this.vector.x;
		_this.y += _this.vector.y;
	};
	
	_this.border = function() {
		if (_this.x >= w || _this.x <= 0) {
			_this.vector.x *= -1;
		}
		if (_this.y >= h || _this.y <= 0) {
			_this.vector.y *= -1;
		}
		if (_this.x > w) _this.x = w;
		if (_this.y > h) _this.y = h;
		if (_this.x < 0) _this.x = 0;
		if (_this.y < 0) _this.y = 0;
	};
	
	_this.draw = function() {
		ctx.beginPath();
		ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = _this.color;
		ctx.fill();
	};
};

//  cursor canva
