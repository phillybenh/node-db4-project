const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes");
}

/*
SELECT ri.quantity, ri.unit, i.name
FROM recipe_ingredients as ri
JOIN ingredients as i
ON ri.ingredient_id = i.id
WHERE ri.recipe_id = 2;
*/
function getShoppingList(recipe_id) {
    return db("recipe_ingredients as ri")
        .where("ri.recipe_id", recipe_id)
        .join("ingredients as i", 'ri.ingredient_id', '=', 'i.id')
        .select("ri.quantity", "ri.unit", "i.name");
}

/*
SELECT * FROM steps as s
WHERE s.recipe_id = 1
ORDER BY s.step_number
*/
function getInstructions(recipe_id) {
    return db("steps as s")
        .select('s.step_number', 's.instructions')
        .where("s.recipe_id", recipe_id)
        .orderBy('s.step_number')
}