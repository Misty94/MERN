class Athlete {
    // attributes/member variables: what the class HAS
    constructor(name, country, sport, awards){
        
        this.name = name;
        this.country = country;
        this.sport = sport;
        this.awards = awards;
        this.energyLevel = 100;
        this.salary = 10000;
    }

    // methods: what the class can DO
    sayName(){
        console.log("Hi my name is " + this.name)
    }

    playSport(){
        this.energyLevel -= 75;
    }

    displayStats(){
        console.log(`${this.name}'s energy level is ${this.energyLevel} and they have ${this.awards} awards.`);
    }

    takeIceBath(){
        this.energyLevel = 100;
    }
}

let mack = new Athlete("Brittney Spears", "USA", "Singer", 2);

mack.sayName();
mack.playSport();
mack.displayStats();
mack.takeIceBath();
mack.displayStats();

// Inheriting a class
class Swimmer extends Athlete {
    constructor(name, country, lapSpeed, awards){
        // to call the constructor of the parent
        super(name, country, "Swimming", awards)
        this.lapSpeed = lapSpeed;
    }

    swim(){
        console.log("Splassssh, I'm swimming!");
        this.energyLevel -= 10;
    }
}

let s1 = new Swimmer("Michael Phelps", "USA", 9, 0);

s1.displayStats();
s1.swim();
s1.displayStats();

// ---------- Callback Functions ---------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`);
}

const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account.`);
}

const parentFunction = (callback, person, price) => {
    console.log("Welcome to the store; how can I help you?");
    callback(person, price)
}

parentFunction(makingPurchase, "David", 1000);
parentFunction(returningItem, "David", 1000);