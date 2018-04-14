
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', function(table){
        table.increments('product_id');
        table.string('product_title').notNullable();
        table.text('product_description').notNullable();
        table.integer('inventory').notNullable();
        table.decimal('price', 8, 2).notNullable();
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product');
};
