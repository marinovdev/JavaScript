function result(){

    class Keyboard {
        constructor(manufacturer, responseTime  ){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;

        }
    }

    class Monitor{
        constructor(manufacturer, width, height ){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
            
        }
    } 

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;

        }
    } 

    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){

            if (new.target === Computer) {
                throw new Error;
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
            
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){

            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.weight = weight;
            this.color = color;
            this.battery = battery;

        }

        get battery(){
            return this._battery;
        }

        set battery(_battery){

            if(_battery.constructor.name === 'Battery'){
                this._battery = _battery;
            }
            else{
                throw new TypeError;
            }
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){

            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;

        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(_keyboard){

            if(_keyboard.constructor.name === 'Keyboard'){
                this._keyboard = _keyboard;
            }
            else{
                throw new TypeError;
            }
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(_monitor){

            if(_monitor.constructor.name === 'Monitor'){
                this._monitor = _monitor;
            }
            else{
                throw new TypeError;
            }
        }
    }

    return {Keyboard, Monitor, Battery, Computer, Laptop, Desktop};
}

module.exports = result();
// let classes = result();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;
// let Monitor = classes.Monitor;
// let Battery = classes.Battery;
// let Keyboard = classes.Keyboard;

// let keyboard = new Keyboard('Logitech',70);
// let monitor = new Monitor('Benq',28,18);

// //let laptop1 =  new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho");
// let desktop1 = new Desktop("JAR Computers",3.3,8,1,1,monitor);
// let desktop2 = new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor");

// console.log(keyboard);
// console.log(monitor);
// console.log('-----------------------');
// console.log(laptop1);
// console.log(desktop1);
// console.log(desktop2);
//laptop1.battery = 'error'; 

// let classes = result();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;
// let Monitor = classes.Monitor;
// let Battery = classes.Battery;
// let Keyboard = classes.Keyboard;

// let battery = new Battery('Energy',3);
// let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
// console.log(laptop.manufacturer)//.to.equal("Hewlett Packard",'Expected manufacturer did not match.');
// console.log(laptop.processorSpeed)//.to.be.closeTo(2.4,0.01,'Expected processor speed did not match.');
// console.log(laptop.ram)//.to.equal(4,'Expected RAM did not match.');
// console.log(laptop.hardDiskSpace)//.to.be.closeTo(0.5,0.05,'Expected hard disk space did not match.');
// console.log(laptop.weight)//.to.be.closeTo(3.12,0.01,'Expected weight did not match.');
// console.log(laptop.color)//.to.equal('Silver','Expected color did not match.');
// console.log(laptop.battery)//.to.equal(battery,'Expected battery did not match.');

