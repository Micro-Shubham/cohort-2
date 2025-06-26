"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const total = sumOfAge({ name: "shubham", age: 22 }, { name: "harkirat", age: 29 });
console.log(total);
