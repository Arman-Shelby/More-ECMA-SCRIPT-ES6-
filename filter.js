const numbers= [12541, 1 , 5 , 6 , 10 , 54, 445, 25145]


const greaterThan10 = numbers.filter(x => x>10)
const evenNumbers = numbers.filter(num => num % 2 === 0)



console.log(evenNumbers)
console.log(greaterThan10)