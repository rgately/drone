var eq = require("./EventQueue.js");


eq.debug = true;
eq.addEvent(console.log, 1000, "Hello!", "").attachMsg("Calling console.log");
eq.delay(1000).attachMsg("Wait for one second");
eq.addEvent(console.log, 1000, "Hello again!", "").attachMsg("Calling console.log");
eq.addEvent(console.log, 1000, "This is the final print call", "").attachMsg("Caling console.log");
