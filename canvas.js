var c = document.getElementById("slate");
var ctx= c.getContext("2d");
ctx.fillStyle = "coral";
ctx.strokeStyle = "coral";

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

var state = "c";

var draw = function(e) {
    if( state == "c" ) {
	ctx.lineTo( e.offsetX, e.offsetY );
	ctx.moveTo( e.offsetX + 33, e.offsetY );
	ctx.arc( e.offsetX, e.offsetY, 33, 0, 2*Math.PI );
	ctx.moveTo( e.offsetX, e.offsetY );
	
	ctx.stroke();	
	ctx.fill();
    } else {
	ctx.fillRect( e.offsetX, e.offsetY, 66, 66 );
    }
    console.log( state );
}

var clr = function(e) {
    ctx.clearRect( 0, 0, 500, 500 );
    
    ctx.beginPath();
}

var tgl = function(e) {
    if( state == "c" ) {
	state = "r";
    } else {
	state = "c"
    }
    console.log( state );
}

c.addEventListener( "click", draw );
toggle.addEventListener( "click", tgl );
clear.addEventListener( "click", clr );
    
