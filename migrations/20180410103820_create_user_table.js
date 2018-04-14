
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(table){
        table.increments('user_id');
        table.string('email').notNullable();
        table.string('password');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTable('user');
};
