//var ke talak diye disi ..-- kokhonoi use korbo na 

const tax = 5000;

let eta  = 5;

eta = 2;


const student = {
 
    name: 'Nayeem',
    marks: 50
}

const friends  = ['abull', 'babul', 'rabul', 'mabul']

//default params 
function add(num1, num2=0 ){

}


//template string

const dynamicText= `
my tax ${tax} and marks ${ student.marks*1.2} has friend ${friends[1]}
`

const innerHtml = `
<div>
    <h1>
    Hello: ${friends.length} </h1>
    <p> this is a paragraph </p>  </div>
`


// arrow function

const add2 = (num1 , num2 = 0) => num1 + num2;
const tenTimes = x => x*10;

// spread operator 

const newFriends  = [ ...friends, 'kobil ' , 'khoobil']


//distructuring

const  { marks: totalMarks , age = 0 } = student
console.log(totalMarks, age )

const [firstFriends] = friends;