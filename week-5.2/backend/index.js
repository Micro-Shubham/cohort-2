// express
const express =  require('express');
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const app = express();
app.use(express.json());
//post function 
app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createTodo);
    if(parsedPayload.success) {
        res.status(411).json( {
            msg:"You sent the wrong input"
        })
        return;
    }
    // put in mongodb
   await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })

})
//get function 
app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    // console.log(todos) //promise
    res.json({
        todos
    })


})
//put function 
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(parsedPayload.success) {
        res.status(411).json({
            msg:"You have send wrong input"
        })
        return ;
    }
    await todo.update ({
        _id:req.body.id
    }, {
        completed:true
    })
    res.json({
        msg:"Marked as completed"
    })

})
app.listen(3000);