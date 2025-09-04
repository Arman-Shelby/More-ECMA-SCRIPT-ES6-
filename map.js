const numbers = [4, 8 , 2 , 3 , 5];


// const  doubled = []
// for( const num of numbers){
//     const result = num*2 ;
//     doubled.push(result);

// }

// const doubleIt = x => x*2;
// const doubled = numbers.map(doubleIt);


const doubled = numbers.map(x=> x*2);
const fiveTimes = numbers.map(num => num * 5  );
const squared = numbers.map( a => a * a);


console.log(squared)
console.log(fiveTimes)
console.log(doubled)



const friends = [ 'Noman', 'Sayem', 'Ridoy', 'Ratul'];
const nameLength = friends.map(name => name.length)
const firstLetter = friends.map(name=> name[0].toLocaleLowerCase());


const result = numbers.map((num , index) => {
    console.log(num*index);
    return num*index;
})

console.log(result)

// console.log(firstLetter)
// console.log(nameLength)
