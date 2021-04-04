const crypto = require('crypto');

let md5hash = crypto.createHash('md5')
                    .update('123456')
                    .digest('hex');
console.log(md5hash); //e10adc3949ba59abbe56e057f20f883e

let sha256Hash = crypto.createHmac('sha256', 'secret')
                        .update('123456')
                        .digest('hex');


console.log(sha256Hash); //4a83854cf6f0112b4295bddd535a9b3fbe54a3f90e853b59d42e4bed553c55a4

// cryping with aes-192
console.log('================================')
const algorithm = 'aes-192-cbc';
const password = 'password used to gernerate key';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = crypto.randomBytes(16); // returns Buffer
console.log('iv:')
console.log(iv); //<Buffer 38 67 22 b0 8c 40 5f 8e 89 4c 22 ef 0b 54 fb 07>
const cipher = crypto.createCipheriv(algorithm, key, iv);
console.dir(cipher, {showHidden: true, depth: 2});
let encrypted = '';

cipher.on('readeble', () => {
    let chunk;
    while(null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('hex');
    }
});

cipher.on('end', () => {
    console.log(encrypted);
});

cipher.write('some clear text data.')

cipher.end();

console.log(encrypted);
console.log('end');
