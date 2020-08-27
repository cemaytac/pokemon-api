const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../controllers/api/pokemons');

router.get('/pokemon', pokemonCtrl.index)
router.get('/pokemon/:id', pokemonCtrl.show)
router.post('/pokemon', pokemonCtrl.create)
router.put('/pokemon/:id', pokemonCtrl.update)
router.delete('/pokemon/:id', pokemonCtrl.delete)

module.exports = router;