var keypress = require('keypress');

keypress(process.stdin)

console.log("Press the C key to print a message. Press Escape to exit.");

process.stdin.on('keypress', function (chunk, key) {

  if(chunk == "hello") console.log("hello");
});
