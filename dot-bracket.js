const student = {
    name: 'Satul',
    1: 50,
    'home-address': 'Heaven',
    marks: 99
}


//dot notation
const studentName = student.name;
console.log(studentName)



//bracket notation 
const studentOne = student['1']
console.log(student['home-address'])

for (const key in student){
    const value  = student[key]
}

const propName  = 'marks'
console.log(student[propName])