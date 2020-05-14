
exports.seed = function (knex) {
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { 
          id: 1, 
          recipe_id: 1, 
          step_number: 1, 
          instructions: "Crack eggs into bowl" 
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          instructions: "Add milk"
        },        
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          instructions: "Scramble"
        },
        {
          id: 4,
          recipe_id: 1,
          step_number: 4,
          instructions: "Cook"
        },
        {
          id: 5,
          recipe_id: 2,
          step_number: 1,
          instructions: "Butter bread"
        },
        {
          id: 6,
          recipe_id: 2,
          step_number: 2,
          instructions: "Add cheese"
        },
        {
          id: 7,
          recipe_id: 2,
          step_number: 3,
          instructions: "Cook that grilled cheese!"
        },
        {
          id: 8,
          recipe_id: 3,
          step_number: 1,
          instructions: "Make toast."
        },
        {
          id: 9,
          recipe_id: 3,
          step_number: 2,
          instructions: "French it."
        }
      ]);
    });
};
