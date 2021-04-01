let msg = 'Child Processes Api Demo';

process.stdout.write(msg + '\n');

// write the content of this script to the console

let fs = require('fs');

fs.createReadStream(__filename).pipe(process.stdout);