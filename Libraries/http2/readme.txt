openssl genrsa -out private-key.pem 1024

openssl rsa -in private-key.pem -des3 -out encrypted-key.pem
- password for encypted-ley.pem: AdmiralBurns

- extract the public key from the file key.pem with this command:
openssl rsa -in private-key.pem -pubout -out pub-key.pem

- enc and dec a file:
openssl pkeyutl -encrypt -in plain.txt -inkey private-key.pem -out plain-encrypted.txt
openssl pkeyutl -decrypt -in plain-encrypted.txt -inkey private-key.pem -out plain-decrypted.txt

- create certificate
openssl req -key private-key.pem -new -x509 -days 365 -out marinov-dev.com.crt

openssl x509 -text -noout -in marinov-dev.com.crt