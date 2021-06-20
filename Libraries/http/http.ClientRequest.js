'use strict';
const http = require('http');
const server =  http.createServer((req, res) => { // returns instance of http.ClientRequest
    res.write('Server is running...');
});

server.on('connect', () => {
    console.log('connect');
});

server.on('data', () => {
    console.log('data');
});

server.on('response', () => {
    console.log('response');
});

server.listen('3000', 'localhost', () => {
    console.log('Server started!')
})