class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = new Array;
    }
    unite(rat){
        if(rat instanceof Rat){
            this.unitedRats.push(rat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let output = this.name;
        if(this.unitedRats.length >= 1){

            this.unitedRats.forEach(element => {
                output += "\n" + `##${element.name}`
            });
        }
        return output;
    }


}

    let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
