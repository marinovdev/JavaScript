// The fact that the event is triggered before adding the listener has a subtle but important side 
// effect: any additional listeners registered to the same name within the 'newListener' callback 
// are inserted before the listener that is in the process of being added.


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A