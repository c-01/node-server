// Event

const EventEmitter = require('events');

const emitter = new EventEmitter();

//@ events arguments
// register a listener
emitter.on('dosomething1', function(arg) {
    console.log('Listener called !', arg);
    
});

//@ arrow functions
emitter.on('dosomething', (arg) => { // ECMAScript 6
    console.log('Listener called !', arg);
    
});

// Raise an event : call event
emitter.emit('dosomething', { id: 1, url: 'http://xxx'});