######################### Those set of commands have been executed in my Wind 10 x64 env
openssl genrsa -out private-key.pem 1024

openssl rsa -in private-key.pem -des3 -out encrypted-key.pem
# password for encypted-ley.pem: AdmiralBurns

# extract the public key from the file private-key.pem with this command:
openssl rsa -in private-key.pem -pubout -out pub-key.pem

# enc and dec a file:
openssl pkeyutl -encrypt -in plain.txt -inkey private-key.pem -out plain-encrypted.txt
openssl pkeyutl -decrypt -in plain-encrypted.txt -inkey private-key.pem -out plain-decrypted.txt

# create certificate
openssl req -key private-key.pem -new -x509 -days 365 -out marinov-dev.com.crt

openssl x509 -text -noout -in marinov-dev.com.crt

######################### Those set of commands have been executed in my ubuntu 20.04 env
# install certificate on the webhost with cerbot
# instructions for nginx server for ubuntu 20.04:
https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx

sudo snap install --classic certbot

# Execute the following instruction on the command line on the machine to ensure that the certbot # command can be run.
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# If you're feeling more conservative and would like to make the changes to your Nginx configuration by # hand, run this command.
sudo certbot certonly --nginx