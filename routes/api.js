const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../controllers/api/pokemons');

router.get('/pokemons', pokemonCtrl.index)
router.get('/pokemons/:id', pokemonCtrl.show)
router.post('/pokemons', pokemonCtrl.create)
router.put('/pokemons/:id', pokemonCtrl.update)
router.delete('/pokemons/:id', pokemonCtrl.delete)

module.exports = router;