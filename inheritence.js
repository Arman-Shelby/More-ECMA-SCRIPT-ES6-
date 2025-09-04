class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}



class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age)
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}


class Cat extends Animal {
    constructor(name, color, age) {
       super(name,age)
        this.color = color;
    }
    
    meow() {
        console.log(`${this.name} is barking`);
    }
}



class Bird extends Animal{
    constructor(name, species, age) {
       super(name, age)
        this.species = species;
     
    }

    fly() {
        console.log(`${this.name} is flying`);
    }


}


const dog1 = new Dog('Coffe', 'Deshi', 5)

dog1.eat();

console.log(dog1)



const cat1 = new Cat('Spine', 'White', 5)
cat1.eat()
console.log(cat1)




const bird1 = new Bird('kokil', 'desi', 2)
bird1.eat()
console.log(bird1)