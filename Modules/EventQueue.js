
var previousDuration = 0;
var currentDuration = 0;
var isFirst = true;
var eventNumber = 0;
var totalTime = 0;

exports.debug = false;

exports.addEvent = function (event, duration, msg) {

    currentDuration = duration;

    if (this.debug) setTimeout(msgPrinter, previousDuration + totalTime, `Calling event number ${eventNumber}, \"${msg}\" with argument \"${arguments[3]}\"`);

    setTimeout(event, previousDuration + totalTime, arguments[3], arguments[4]);
    totalTime += previousDuration;
    eventNumber++;
    previousDuration = currentDuration;
}

exports.delay = function (duration) {
  if(this.debug) msgPrinter(`delay for ${duration} milliseconds`);
  totalTime += duration;
}

function msgPrinter (msg) {
  console.log(msg);
}
