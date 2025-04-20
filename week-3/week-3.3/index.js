const jwt =  require("jsonwebtoken")



// decode , verify and generate

const value = {
    name:"harkirat singh",
    accountnumber: 133453
}


// jwt
const token = jwt.sign(value,"secret")
// this token has been generated using this secret , and hence this token can only 
// be verified  using   this secret
console.log(token);