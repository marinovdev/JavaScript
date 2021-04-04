const dns = require('dns');

dns.resolveAny('google.com', (err, records) => {
    if (err) throw err;
    console.log(records);
})

