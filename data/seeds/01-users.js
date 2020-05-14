
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Ben', email: "ben@aol.com"},
        { id: 2, username: 'Kelli', email: "kelli@askjeeves.com" },
      ]);
    });
};
