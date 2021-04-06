const fs = require('fs');
const dir = new fs.readdirSync('./'); //error
console.log(dir);

let result;

while(d = dir.readSync()) {
    result = d;
}

console.log(result)