// express
const express =  require('express');
const { createTodo, updateTodo } = require('./type');
const app = express();
app.use(express.json());
//post function 
app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createTodo);
    if(parsedPayload.success) {
        res.status(411).json( {
            msg:"You sent the wrong input"
        })
        return;
    }
    // put in mongodb

})
//get function 
app.get("/todos", function(req, res) {

})
//put function 
app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(parsedPayload.success) {
        res.status(411).json({
            msg:"You have send wrong input"
        })
        return ;
    }

})