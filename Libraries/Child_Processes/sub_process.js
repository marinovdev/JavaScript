const {exec, spawn} = require('child_process');

let cmd = spawn('grep', ['ssh']);
  
cmd.on('message', (m) => {
    console.log('CHILD got message:', m);
  });
  
  // Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
  cmd.send({ foo: 'bar', baz: NaN });