
var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();
client.takeoff();


client.after(7000, function() {
  this.animate('flipBehind', 1000);
}).after(2000, function() {
  this.stop();
  this.land(function () {
    process.exit();
  });
});
