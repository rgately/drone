var queue = require("./EventQueue.js");
var arDrone = require("ar-drone");

var speed = 0.4;

client = arDrone.createClient();

client.disableEmergency();

queue.debug = true;

client.takeoff();
queue.delay(5000);
queue.addEvent(fwd, 2000, "going forward for 2 seconds", speed);
queue.addEvent(stop, 1000, "stopping for 1 second");
queue.addEvent(right, 2000, "going right for 2 seconds", speed);
queue.addEvent(stop, 1000, "stopping for 1 second");
queue.addEvent(back, 2000, "going back for 2 seconds", speed);
queue.addEvent(stop, 1000, "stopping for 1 second");
queue.addEvent(left, 2000, "going left for 2 seconds", speed);
queue.addEvent(stop, 1000, "stopping for 1 second");
queue.addEvent(function () {
  client.land();
}, 5000, "landing...");
queue.addEvent(process.exit,0,"exiting...");

function animate(flightAnimation, duration) {client.animate(flightAnimation, duration);}
function fwd(speed) {client.front(speed);}
function back(speed) {client.back(speed);}
function right(speed) {client.right(speed);}
function left(speed) {client.left(speed);}
function stop() {client.stop();}
function up(speed) {client.up(speed);}
function down(speed) {client.down(speed);}
function clockwise(speed) {client.clockwise(speed);}
function counterClockwise(speed) {client.counterClockwise(speed);}
