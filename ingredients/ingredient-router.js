const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params
    Ingredients.getRecipesForIngred(id)
        .then(rec => {
            res.json(rec);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get the recipes.' });
        });
});


module.exports = router;