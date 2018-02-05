var c = document.getElementById("slate");
var ctx= c.getContext("2d");

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

var state = "c";

var draw = function(e) {
    ctx.beginPath();
    ctx.fillStyle = "coral";
    
    if( state == "c" ) {
	ctx.arc( e.offsetX, e.offsetY, 33, 0, 2*Math.PI );
	ctx.fill();
    } else {
	ctx.fillRect( e.offsetX, e.offsetY, 66, 66 );
    }
}

var clr = function(e) {
    ctx.clearRect( 0, 0, 500, 500 );
}

var tgl = function(e) {
    if( state = "c" ) {
	state = "r";
    } else {
	state = "c"
    }
}

c.addEventListener( "click", draw );
toggle.addEventListener( "click", tgl );
clear.addEventListener( "click", clr );
    
