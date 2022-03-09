import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: String,
  status: String,
  description:String 
});
const Todo = mongoose.model('Todo',todoSchema);

export default Todo;
