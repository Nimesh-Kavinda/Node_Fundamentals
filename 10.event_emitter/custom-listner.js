const EventEmitter = require('events');

class MyCustomeEmitter extends EventEmitter {
    constructor(){
        super();
        this.greeting = "Hello";
    }

    greet(name){
        this.emit('greeting', name);
    }
}

const myEmitter = new MyCustomeEmitter();

myEmitter.on('greeting', (name) => {
    console.log(`${myEmitter.greeting} ${name}`);
});

myEmitter.greet('Nimesh');

