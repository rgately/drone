var eq = require("./EventQueue.js");
var arDrone = require("ar-drone");

var client = arDrone.createClient();

client.disableEmergency();

let speed = 0.2;

eq.debug = true;

client.takeoff();
eq.delay(7000).attachMsg("delay for seven seconds");
eq.addEvent(forward, 1000, speed).attachMsg("going forward for one second");
eq.addEvent(backward, 1000, speed).attachMsg("going backward for one second");
eq.addEvent(right, 1000, speed).attachMsg("going right for one second");
eq.addEvent(left, 1000, speed).attachMsg("going left for one second");

eq.addEvent(function () {

	client.land(function () {

		console.log("Successful landing!");
		process.exit();
	});
}, 1000);



function counterClockwise(speed) {

	client.counterClockwise(speed);
}

function clockwise(speed) {
	
	client.clockwise(speed);
}

function down(speed) {
	
	client.down(speed);
}

function up(speed) {

	client.up(speed);
}

function animate(animation, duration) {

	client.animate(animation, duration);
} 

function left(speed) {

	client.left(speed);
}
 
function right(speed) {

	client.right(speed);
}

function backward(speed) {

	client.back(speed);
}

function forward(speed) {

	client.front(speed);
}
