// Node.js program to demonstrate the 
// new agent({}) method 
  
// Importing http module
const http = require('http');
// Importing agentkeepalive module
//const Agent = require('agentkeepalive');
// Creating new agent
//const keepAliveAgent = new Agent({});
  
// Options object
const options = {
  host: 'geeksforgeeks.org',
  port: 80,
  path: '/',
  method: 'GET',
};
  
// Requesting via http server module
const req = http.request(options, (res) => {
  // console.log(require('util').inspect(res, depth=0));
  // Printing statuscode
  console.log('StatusCode: ', res.statusCode);
  // Printing headers
  console.log('Headers: ', res.headers);
});
  
// Printing agent options
console.log('Agent Options: ', req.agent.options);
// console.log(req.agent.sockets);
req.end();