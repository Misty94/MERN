class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`Hello, my name is ${this.name}!`);
    }

    showStats(){
        console.log(`Stats for ${this.name}: Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake(){
        console.log("I am drinking Sake... yum!");
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Misty", 100, 5, 7);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

console.log("******Inheritance Below*******")

class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Imagine I am telling you a wise message...");
    }
}

const sensei1 = new Sensei("Elijah", 20);
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();