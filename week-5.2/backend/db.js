const mangoose = require('mangoose');
//mangodb url handy
// paste ur url here
// create .env file not paste your url
mangoose.connect("url")
const todoSchema = mangoose.Schema({
    title:String,
    description: String,
    completed: boolean
})
const todo = mangoose.model('todos',todoSchema);
module.exports = {
    todo:todo
}