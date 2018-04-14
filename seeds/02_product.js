
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        { product_title: 'Hairy Ipsum', product_description:'Mark lawrenson educated yeoman farmer Milkshake issues doctor strange will you do the fandango off-piste mexican', inventory:2, price:50},
        { product_title: 'Bacon Ipsum', product_description:'Spicy jalapeno short ribs short loin sirloin burgdoggen hamburger pancetta. Capicola frankfurter ground round ham doner salami pig ball tip.', inventory:4, price:200},
        { product_title: 'Hodor Ipsum', product_description:'Hodor hodor - hodor - hodor. Hodor hodor HODOR hodor, hodor hodor - hodor. Hodor. Hodor. Hodor hodor hodor...', inventory:1, price:0}
      ]);
    });
};
