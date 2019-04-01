// Event

const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener
emitter.on('dosomething', function() {
    console.log('Listener called !');
    
});
// Raise an event : call event
emitter.emit('dosomething');