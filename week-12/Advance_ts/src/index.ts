interface User {
 name:string,
 age: number
}

function sumOfAge(user1:User, user2:User) {
    return user1.age+user2.age;
}

const total = sumOfAge({name:"shubham",age:22},{name:"harkirat",age:29})
console.log(total);