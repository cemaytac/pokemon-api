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
  Pokemon.findById(req.params.id)
    .then((pokemon) => {
      res.status(200).json(pokemon)
    })
}

function create(req, res) {
  Pokemon.create(req.body)
    .then((pokemon) => {
      res.status(201).json(pokemon)
    })
}

function deleteOne(req, res) {
  Pokemon.findByIdAndRemove(req.params.id)
    .then((pokemon) => {
      res.status(200).json(pokemon)
    })
}

function update(req, res) {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then((pokemon) => {
      res.status(200).json(pokemon)
    })
}