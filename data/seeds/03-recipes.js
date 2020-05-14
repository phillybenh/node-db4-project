
exports.seed = function (knex) {
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'Scrambled Eggs',
          time: "5 min",
          user_id: 1
        },
        {
          id: 2,
          name: 'Grilled Cheese',
          time: "15 min",
          user_id: 2
        }, {
          id: 3,
          name: 'French Toast',
          time: "18 min",
          user_id: 1
        },
      ]);
    });
};
