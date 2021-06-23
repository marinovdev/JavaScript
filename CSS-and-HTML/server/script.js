'use strict'
var headers = new Headers();
headers.append('Content-Type', 'text/xml');
headers.append('Vary', 'Accept-Language');
console.log(headers);

for (var key of headers.keys()) {
    //const element = array[i];
    console.log(headers.get(key));

    if (key == 'Host') {
        let host = document.getElementById('host');
        let hostVal = headers.get('Host');
        host.innerHTML = hostVal;
    }

    if (key == 'X-Real-IP') {
        let remote = document.getElementById('remote');
        let remoteVal = headers.get('X-Real-IP');
        remote.innerHTML = remoteVal;
    }
}
