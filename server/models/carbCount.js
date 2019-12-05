const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carbCountSchema = new Schema({
  carbCount: []
})

const Carb = mongoose.model('carbs', carbCountSchema)

module.exports = Carb