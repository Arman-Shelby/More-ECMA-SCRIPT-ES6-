// clss --> trmplate **      properties   ***** method ( a special type of function inside a class without the function keyword )
//  object 

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'


        // console.log('calling the constructor method',name)
    }

    goal (){
        console.log('score a goal')
    }
    getTeamName(){
        return 'barsa'
    }

}

const player1 = new Player('Tom Brady', 45)
const player2 = new Player('Arman Mir', 15)

console.log(player1,'\n', player2 )
// player1.getTeamName()
// player1.goal()
// console.log(player1)