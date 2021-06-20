const http = require('http');
const agent = new http.Agent();

let result = agent.getName({
    host: '184.168.131.241',
    port: '3000',
    localAddress: '192.168.1.14',
    family: undefined
});

console.log(result); //184.168.131.241:3000:192.168.1.14

