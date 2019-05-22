var keypress = require('keypress');
var arDrone = require('ar-drone');

var client = arDrone.createClient();

var speed = 1;

var inAir = false;

keypress(process.stdin);

client.disableEmergency();

console.log("Waiting for command!");

process.stdin.on('keypress', function (ch, key) {

  if (key && key.name == 'escape') {
    console.log('Quitting')
    process.stdin.pause();

    client.stop();
    client.land();

    client.after(2000, function() {
      process.exit();
    });

    //client._udpControl.close();
  } else if (key && key.name == 'space') {

    if(!inAir) {
        console.log('Takeoff!');
        client.takeoff(function () {
        console.log("Takeoff successful!");
        inAir = true;
      });
    }else client.stop();

  }

  if(inAir) {

    if (key && key.name == 'l') {
      console.log('Landing!');
      client.stop();
      client.land(function (){
        inAir = false;
      });
    } else if(key && key.name == 'w') {
        console.log('Forward!');
        client.front(speed);
      }else if (key && key.name == 'a') {
        console.log('Left!');
        client.left(speed);
      }else if(key && key.name == 's') {
        console.log('Back!');
        client.back(speed);
      }else if(key && key.name == 'd') {
        console.log('Right!');
        client.right(speed);
      }else if (key && key.name == 'q') {
        console.log("counterClockwise");
        client.counterClockwise(1);
      }else  if (key && key.name == 'e') {
        console.log("clockwise");
        client.clockwise(1);
      }
  }

});

process.stdin.setRawMode(true);
process.stdin.resume();
