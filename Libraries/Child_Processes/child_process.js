// each child process brings separate context. This code is example for this

const spawn = require('child_process').spawn;

let bears = 0;

bears += 1;

if(process.argv[2] === 'child'){
    console.log('child', bears);
} else {
    spawn(process.execPath, [__filename, 'child'], {stdio: 'inherit'})
    console.log('parent', bears);
}


