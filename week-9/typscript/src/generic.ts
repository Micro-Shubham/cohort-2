// Generics are a language independent concept (exist in C++ as well)
// Let’s learn it via an example
 
// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?
// function firstEle(arr:(string|number)[]) {
//     return arr[0]
// }

// const val1 = firstEle(["shubham","Yadav"])
// const val2 = firstEle([2,4,5,5]);


// the solution is generic . Let's see it in a action 

function firstEle<T>(arr:T[]) {
    return arr[0]
}
const val1 = firstEle<string>(["shubham","Yadav"])
const val2 = firstEle<number>([2,4,5,5,]);