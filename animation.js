var canvas = document.getElementById("canvas");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var DVD = document.getElementById("dvd");
var context = canvas.getContext("2d");
context.fillStyle = "blue";
var shrink = false;
var requestID = 0;
var image = new Image();
image.src="dvd.jpg";

var circle_animate = function(){
    window.cancelAnimationFrame(requestID);
    var x = 10;
    var drawcircle = function(){
		context.clearRect(0,0,500,500);
		context.beginPath();
		context.arc(250,250,x,0, 2* Math.PI);
		context.fill();
		if(x  >= 250){
		    shrink = true;
		}
		if(x <= 0){
		    shrink = false;
		}
		if(shrink){
		    x--;
		}
		else{ x++;}
		requestID = window.requestAnimationFrame(drawcircle);
	};
    drawcircle();
}

var dvd_animate = function(){
	window.cancelAnimationFrame(requestID);
	var dx = Math.floor(Math.random() * 4 + 1);
  	var dy = Math.floor(Math.random() * 4 + 1);
  	var x = Math.floor(Math.random() * (500 - image.width * 2) + image.width + 1);
  	var y = Math.floor(Math.random() * (500 - image.height * 2) + image.height + 1);
  	var drawDVD = function() {
	    context.clearRect(0, 0, 500,500);
	  	context.beginPath();
	    context.drawImage(image,x,y);
		requestID = window.requestAnimationFrame(drawDVD);
	    if (Math.abs(y-500) < image.height + 1 || y < 1)
	      dy*=-1;
	    if (Math.abs(x-500) < image.width + 1 || x < 1)
	      dx*=-1;
	    x+=dx;
	    y+=dy;
	  } 
  drawDVD();
}
var end = function(){
		    context.clearRect(0, 0, 500,500);

    window.cancelAnimationFrame(requestID);
}

stop.addEventListener('click', end);
canvas.addEventListener('click',circle_animate);
circle.addEventListener('click',circle_animate);
dvd.addEventListener('click',dvd_animate);
