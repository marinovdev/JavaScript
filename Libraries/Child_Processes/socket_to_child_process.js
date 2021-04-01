// The child process is terminated with kill()

const spawn = require('child_process').spawn;

if(process.argv[2] === 'child'){
    console.log('child');
    var net = require('net');
    var pipe = new net.Socket({ fd: 3 });
    pipe.write('killme')
} else {
    var child = spawn(
    process.execPath,
     [ __filename, 'child'],
     { stdio: [null, null, null, 'pipe']}
     )
    
    child.stdio[3].on('data', function(data) {
        if(data.toString() === 'killme'){
            console.log('Process terminated');
            child.kill();
        }
    })
}


