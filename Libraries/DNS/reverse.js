// reverse finds the domain associated with a given host 

const dns = require('dns');

dns.reverse('8.8.8.8', (err, addresses) => {
    console.log(addresses) //[ 'dns.google' ]
});

