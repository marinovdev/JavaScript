'use strict';
const http = require('http');
const querystring = require('querystring');
const agent = new http.Agent({keepAlive: true});
const postData = querystring.stringify({
  'msg': 'Hello World!'
});
// wrong
let options2 = {
    // emits error event
    //createConnection: agent.createConnection(),
    headers: {
        'Content-Type': 'text/html',
        'Content-Length': Buffer.byteLength(postData)
    },
    host: '3.18.119.105',
    path: '/',
    method: 'GET',
    protocol: 'http:'
}

const options = {
  hostname: 'www.marinov-dev.com',
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'text/html', //application/x-www-form-urlencoded
    'Content-Length': Buffer.byteLength(postData)
  },
  timeout: 500
};

const req = http.request(options, (res) => {
  console.log('request fired!')
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});


req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();