// Awaiting multiple events emitted on process.nextTick()#

/* There is an edge case worth noting when using the events.once() function to await multiple events
 emitted on in the same batch of process.nextTick() operations, or whenever multiple events are 
 emitted synchronously. Specifically, because the process.nextTick() queue is drained before the 
 Promise microtask queue, and because EventEmitter emits all events synchronously, it is possible
  for events.once() to miss an event. */

const { EventEmitter, once } = require('events');

const myEE = new EventEmitter();

async function foo() {
  await once(myEE, 'bar');
  console.log('bar');

  // This Promise will never resolve because the 'foo' event will
  // have already been emitted before the Promise is created.
  await once(myEE, 'foo');
  console.log('foo');
}

process.nextTick(() => {
  myEE.emit('bar');
  myEE.emit('foo');
});

foo().then(() => console.log('done')); //bar