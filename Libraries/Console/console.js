console.clear();
console.time('timer1');

const { Console } = console;
const fs = require('fs');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
const count = 5;
logger.log('count: %d', count);
// In stdout.log: count 5

let consoleGreen = new Console({stdout: process.stdout, stderr: process.stderr, color: '\x1b[36m%s\x1b[0m'});

 consoleGreen.log('count')

 console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan

 // console assert

 console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();

console.count('something');
console.count('something');
console.count('something');
console.log(Array);
console.dir(Array, {showHidden: true, depth: 2});

let table = [ 
    {id: '', country: ''},
     {id: 0, country: 'Bulgaria'},
      {id: 1, country: 'Austria'},
       {id: 3, country: 'France'}
    ];

console.table(table);

console.timeEnd('timer1');

console.trace(console.log('Trace me!'));
// Assertion failed
