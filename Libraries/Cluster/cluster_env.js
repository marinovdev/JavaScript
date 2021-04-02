const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    for (let index = 0; index < numCPUs; index++) {
        let clusterInstance = cluster.fork({value: 'value'});
        let env = {pid: clusterInstance.process.pid}
        clusterInstance.process.env = env;
        clusterInstance.send(`Welcome, ${clusterInstance.process.env.pid}`);
    }
} else if (cluster.isWorker){
    process.on('message', (msg) => {
        console.log(msg);
        console.log(process.argv)
    })
}


// Welcome, 14704
// Welcome, 6468

