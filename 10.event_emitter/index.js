const EventEmitter = require("events");

const myFirstEvent = new EventEmitter();

// register a listener

myFirstEvent.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

myFirstEvent.emit("greet", "Nimesh");