// understanding the inteface in ts
interface User {
    firstname:string,
    lastname:string,
    age:number
}


// legal
function isLegal (user:User) {
    if(user.age>=18) console.log("legal")
    else console.log("notlegal")
}

function Greet(user:User) {
    console.log("hello " + user.firstname)
}
const user: User = {
    firstname: "username",
    lastname: "lastname",
    age: 40
};

isLegal(user)