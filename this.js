class Vehicle {
    #tin;
    constructor (type, brand,  price){
        
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '154521665FKHAB '
    }

    getTin(){
        this.#tin
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1 = new Vehicle('car', 'Honda',  500000000)
const car2 = new Vehicle('Car', 'Toyota', 400000000)
// car1.getThis()

// console.log(car1.getPrice())
// console.log(car2.getPrice())


const student  = {
    name: 'Arman Mir ',
    score: 10000,

    getScore: function(){
        console.log(this)
    },

    getScoreArrow: () => {
        console.log(this)
    }
}



student.getScore();
student.getScoreArrow();

console.log('ultimate this' , this)