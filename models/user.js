const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  value: Number,
  category: String,
  date: Date,
  time: Date,
  insulinNotes: String,
})

const User = mongoose.model('user', UserSchema)

module.exports = User