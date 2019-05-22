var arDrone = require("ar-drone");
var client = arDrone.createClient();

setTimeout(land, 30000);

var speed = 0.2;

client.animateLeds("fire", 10, 30000);
console.log("Begin takeoff!");
client.takeoff();/*function () {*/
  client.after(5000, function() {
    console.log("successful takeoff!");
    this.after(1000, function () {
    console.log("forward");
    this.front(speed);
  }).after (2000, function () {
    console.log("stop");
    this.stop();
  }).after(2000, function () {
    console.log("backward");
    this.back(speed);
  }).after(2000, function () {
    console.log("stop");
    this.stop();
  }).after(2000, function () {
    console.log("right");
    this.right(speed);
  }).after(2000, function () {
    console.log("stop");
    this.stop();
  }).after(2000, function () {
    console.log("left");
    this.left(speed);
  }).after(2000, function () {
    console.log("landing");
    this.stop();
    this.land(function () {
        console.log("Successful landing!");
        process.exit();
      });
    });
});

function land () {
  console.log("forced landing");
  client.land(function () {
    console.log("landed. Exiting");
    process.exit();
  });
}
