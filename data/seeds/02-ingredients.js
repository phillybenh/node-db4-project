exports.seed = function (knex) {
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'eggs' },
        { id: 2, name: 'milk' },
        { id: 3, name: 'butter' },
        { id: 4, name: 'bread' },
        { id: 5, name: 'chedder cheese' }
      ]);
    });
};
