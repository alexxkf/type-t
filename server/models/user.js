const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: String,
  Value: Number,
  category: String,
  Date: String,
  time: String,
  Notes: Number,
})

const User = mongoose.model('user', UserSchema)

module.exports = User