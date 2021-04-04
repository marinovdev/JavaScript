const debuglog = require('util').debuglog('example');
debuglog('You can only see these messages by setting NODE_DEBUG=example!');

const fs = require('fs');

function deeplyNested() {
  fs.readFile('/');
}

deeplyNested();