const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carbCountSchema = require('./carbCount').schema

const UserSchema = new Schema({
  bglValue: Number,
  category: String,
  date: Date,
  time: Date,
  insulinTaken: Number,
  carbCount: [{ type: Schema.Types.ObjectId, ref: 'carb' }]
})

const User = mongoose.model('user', UserSchema)

module.exports = User