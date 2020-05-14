
exports.seed = function (knex) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          id: 1,
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 2,
          unit: "eggs"
        },
        {
          id: 2,
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 1,
          unit: "splash"
        },
        {
          id: 3,
          recipe_id: 2,
          ingredient_id: 3,
          quantity: 2.25,
          unit: "pats"
        },
        {
          id: 4,
          recipe_id: 2,
          ingredient_id: 4,
          quantity: 2,
          unit: "slices"
        },
        {
          id: 5,
          recipe_id: 2,
          ingredient_id: 5,
          quantity: 2,
          unit: "slices"
        },
        {
          id: 6,
          recipe_id: 3,
          ingredient_id: 1,
          quantity: 1,
          unit: "egg"
        },
        {
          id: 7,
          recipe_id: 3,
          ingredient_id: 2,
          quantity: 0.5,
          unit: "cups"
        },
        {
          id: 8,
          recipe_id: 3,
          ingredient_id: 4,
          quantity: 4,
          unit: "slices"
        },
        {
          id: 9,
          recipe_id: 3,
          ingredient_id: 3,
          quantity: 2,
          unit: "tbsp"
        },
      ]);
    });
};
