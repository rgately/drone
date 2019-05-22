var eq = require("./EventQueue.js");
var arDrone = require("ar-drone");

var client = arDrone.createClient();
client.disableEmergency();
client.takeoff();

eq.debug=true;
eq.delay(3000);
eq.delay(5000).attachMsg("delay for 5 seconds");
eq.addEvent(fwd, 1000, 0.3).attachMsg("going forward for one second");
eq.addEvent(stop, 200);
eq.addEvent(animate, 2000, "yawDance", 3000).attachMsg("yawDance for 3 second");
eq.addEvent(animate, 3000, "wave", 2000).attachMsg("wave for 2 second");
eq.addEvent(animate, 3000, "thetaDance", 2000).attachMsg("thetaDance for 2 second");
eq.addEvent(animate, 3000, "vzDance", 2000).attachMsg("vzDance for 2 second");
eq.addEvent(animate, 3000, "flipAhead", 3000).attachMsg("flipAhead for 3 second");


eq.addEvent(function(){
        console.log("Begin landing sequence!");
       client.land(function(){
              console.log("successful landing!");
              process.exit();
       });
}, 1000);


function stop () {

	client.stop();

}

function animate(animation, duration) {

  client.animate(animation, duration);
}

function fwd(speed){

        client.front(speed);
}
