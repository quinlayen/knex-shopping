
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart', (table)=>{
      table.increments('cart_id');
      table.integer('user_id').references('user_id').inTable('user');
      table.integer('product_id').references('product_id').inTable('product');
      table.timestamps(true,true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart');
};
