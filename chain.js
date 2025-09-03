const student = {
    name: 'Satul',
    1: 50,
    family:{
        title: 'Mir',
        // mother:{
        //     name: 'Parul Begum',
        //     age: 45
        // }

    },
    'home-address': 'Heaven',
    marks: 99
}
//normal nested object
// console.log(student.family.mother.age)

//if object is undefiend
console.log(student.family.mother?.age)