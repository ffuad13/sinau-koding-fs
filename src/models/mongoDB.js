const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const todoSchema = new Schema({
	userId: Number,
	task: String,
	completed: String
})

const historySchema = new Schema({
	userId: Number,
	task: String,
	completed: String
})

const todoDB = mongoose.model('todo', todoSchema)
const historyDb = mongoose.model('history', historySchema)

module.exports = {todoDB, historyDb}