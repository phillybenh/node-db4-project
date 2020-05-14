const db = require('../data/db-config.js')

module.exports = {
    getRecipesForIngred,
}

function getRecipesForIngred(ingredient_id) {
    return db('ingredients as i')
        .where('i.id', ingredient_id)
        .join('recipe_ingredients as ri', 'ri.ingredient_id', '=', 'i.id')
        .join('recipes as r', 'ri.recipe_id', '=', 'r.id')
        .select('r.name as Recipe', 'i.name as Ingredient');
}

