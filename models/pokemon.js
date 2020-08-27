const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  pokemon: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Pokemon', pokemonSchema)