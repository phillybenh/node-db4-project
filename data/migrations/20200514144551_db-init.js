
exports.up = function (knex) {
    return knex.schema
        .createTable('users', users => {
            users.increments();
            users.string('username', 255).notNullable();
            users.string('email', 255);
        })
        .createTable('ingredients', ingred => {
            ingred.increments();
            ingred.string('name', 255).notNullable();
        })
        .createTable('recipes', recipes => {
            recipes.increments();
            recipes.string('name', 255).notNullable;
            recipes.string('time', 255);
            recipes
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })
        .createTable('steps', steps => {
            steps.increments();
            steps
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            steps.integer('step_number');
            steps.string('instructions', 510).notNullable();
        })
        .createTable('recipe_ingredients', recipe_ingredients => {
            recipe_ingredients.increments();
            recipe_ingredients
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            recipe_ingredients
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            recipe_ingredients.float('quantity').notNullable();
            recipe_ingredients.string('unit', 128).notNullable;
        })
};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('users')

};
