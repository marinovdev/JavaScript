const EventEmitter = require('events');
const loginEvenEmmiter = new EventEmitter();

loginEvenEmmiter.on('login-user1', () => {
    console.log('user1 logged in.')
});

function logIn(user){
    loginEvenEmmiter.emit(`login-${user}`);
};

logIn('user1'); //user1 logged in.