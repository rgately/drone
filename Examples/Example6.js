var keypress = require('keypress');
var arDrone = require('ar-drone');

const FWD = 0;
const BKWD = 1;
const RIGHT = 2;
const LEFT = 3;
const STOP = 4;

var criticalEvent = false;
var end = false;
var client = arDrone.createClient();
var dir = STOP;

keypress(process.stdin);

console.log("Waiting for command!");

const reset = () => {
  console.log("called");

  dir = STOP;
};

const loop = () => {

    if(!criticalEvent) {
        switch(dir) {

          case FWD:
          client.front(0.5);
          break;
          case BKWD:
          client.back(0.5);
          break;
          case RIGHT:
          client.right(0.5);
          break;
          case LEFT:
          client.left(0.5);
          break;
          default:
          client.stop();
        }

    }

};

setInterval(reset, 300);
setInterval(loop, 10);

process.stdin.on('keypress', function (ch, key) {

  if (key && key.name == 'escape') {
    console.log('Quitting');
    criticalEvent = true;
    clearInterval(reset);
    clearInterval(loop);
    end = true;
    process.stdin.pause();

    client.stop();
    client.land();

    client.after(2000, function() {
      process.exit();
    });

    //client._udpControl.close();
  } else if (key && key.name == 'space') {
    console.log('Takeoff!');
    criticalEvent = true;
    client.takeoff(function () {
      console.log("Takeoff successful!");
      criticalEvent = false;
    });
  }else if (key && key.name == 'l') {
    console.log('Landing!');
    criticalEvent = true;
    client.stop();
    client.land(function () {
      criticalEvent = false;
    });
  } else if(key && key.name == 'w') {
      console.log('Forward!');
      dir = FWD;
    }else if (key && key.name == 'a') {
        console.log('Left!');
        dir = LEFT;
    }else if(key && key.name == 's') {
      console.log('Back!');
      dir = BKWD;
    }else if(key && key.name == 'd') {
        console.log('Right!');
        dir = RIGHT;
    }

});

/*while(!end) {

  if(!criticalEvent) {
      switch(dir) {

        case FWD:
        client.front(0.5);
        break;
        case BKWD:
        client.back(0.5);
        break;
        case RIGHT:
        client.right(0.5);
        break;
        case LEFT:
        client.let(0.5);
        break;
        default:
        client.stop();
      }

  }
}*/

process.stdin.setRawMode(true);
process.stdin.resume();
