'use strict';

class User {
    constructor(name) {
        this.name = name;
        this.sayHi = this.sayHi.bind(this);
    }

    sayHi() {
        console.log('Hi!');
    }
}

let u1 = new User('Esabel');
u1.sayHi();