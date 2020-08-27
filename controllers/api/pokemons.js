const Pokemon = require('../../models/pokemon')

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
}

function index(req, res) {
  Pokemon.find({})
    .then((pokemons) => {
      res.status(200).json(pokemons)
    })
}

function show(req, res) {

}

function create(req, res) {
  Pokemon.create(req.body)
    .then((pokemon) => {
      res.status(201).json(pokemon)
    })
}

function deleteOne(req, res) {

}

function update(req, res) {

}