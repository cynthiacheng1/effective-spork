var canvas = document.getElementById("canvas");
var stop = document.getElementById("stop");
var context = canvas.getContext("2d");
context.fillStyle = "blue";
var shrink = false;
var requestID;
var animate = function(){
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
var end = function(){
    window.cancelAnimationFrame(requestID);
}
stop.addEventListener('click', end);
canvas.addEventListener('click',animate);
