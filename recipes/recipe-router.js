const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get the recipes.' });
        });
});
router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
        .then(shoppinglist => {
            res.json(shoppinglist);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get the shopping list.' });
        });
});
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
        .then(inst => {
            res.json(inst);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get the instructions.' });
        });
});


module.exports = router;