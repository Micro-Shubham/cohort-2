const mangoose = require('mangoose');
//mangodb url handy
// paste ur url here
// create .env file not paste your url
mangoose.connect('mongodb+srv://admin:Shubham@cluster0.7pbjx.mongodb.net/')
const todoSchema = mangoose.Schema({
    title:String,
    description: String,
    completed: boolean
})
const todo = mangoose.model('todos',todoSchema);
module.exports = {
    todo:todo
}