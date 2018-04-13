
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {cart_id: 1,  user_id: 1,product_id: 1 },
        {cart_id: 2,  user_id: 2,product_id: 2 },
        {cart_id: 3,  user_id: 3,product_id: 3 }
      ]);
    });
};
