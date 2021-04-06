
console.log('before nextTick()');

process.nextTick( () => {
    console.log('After nextTick()');
});

const { once, EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

once(eventEmitter, 'event1');
eventEmitter.prependOnceListener('event1', () => {
    console.log('event1 shooted out!')
});

process.nextTick( () => {
    eventEmitter.emit('event1')
})