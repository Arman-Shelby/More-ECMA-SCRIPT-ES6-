const student  = [
    {id: 1 , name: 'Abuul', marks: 50},
    {id: 1 , name: 'babuul', marks: 70},
    {id: 1 , name: 'kabuul', marks: 85},
    {id: 1 , name: 'sabuul', marks: 95},
    {id: 1 , name: 'dAbuul', marks: 55},
    {id: 1 , name: 'mokbuul', marks: 100}
]
const names = student.map(student => student.marks*1.5)

const goodStudents = student.filter(student => student.marks > 80)
const goodStudentsOne = student.find(student => student.marks > 80)


console.log(goodStudentsOne)
console.log(goodStudents)
console.log(names)