const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwtPassword = "123456";
mongoose.connect(
  "mongodb+srv://user:Userid@cluster0.7pbjx.mongodb.net/"
)
const User = mongoose.model('Users', {name:String, email:String, password:String});
const user = new User({
  name: "Shubham Yadav",
  email: "shubham@gmail.com",
  password: "234"
})
user.save();

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // try hard - find in js
  let userExists = false;
  for(let i = 0; i < ALL_USERS.length; i++) {
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  console.log("Received token:", token); // 🔍 debug log

  if (!token) {
    return res.status(403).json({ msg: "Token missing in headers" });
  }
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users:ALL_USERS.filter(function(value) {
        if(value.username == username) {
          return false
        } else {
          return true
        }
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000 , () => {
  console.log(`server is listening at ${3000}`)
})
