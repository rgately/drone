var keypress = require('keypress');

keypress(process.stdin)

console.log("Press the C key to print a message. Press Escape to exit.");

process.stdin.on('keypress', function (chunk, key) {

  if(key.name == "c") console.log("You pressed C!");
  else if (key.name == "escape") {
    console.log("exiting...");
    process.exit();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
