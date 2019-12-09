const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: String,
  bglValue: Number,
  category: String,
  date: Date,
  time: Date,
  insulinTaken: Number,
})

const User = mongoose.model('user', UserSchema)

module.exports = User