// this is a load balancer implemented with the cluster api
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`This is master process: ${process.pid}`);
    for (let index = 0; index < numCPUs; index++) {
        cluster.fork();
        
    }
} else {
    http.createServer((req, res) => {
        let message = `This is worker process: ${process.pid}`;
        console.log(message);
        res.end(message);
    }).listen(3000);
}