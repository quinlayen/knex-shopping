
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {user_id: 1, email: 'pfaso@mylandhawaii.com', password:'Boardgamer'},
        {user_id: 2, email: 'quinlayen@gmail.com', password:'Boardgamer'},
        {user_id: 3, email: 'peterfasore@gmail.com', password:'Boardgamer'}
      ]);
    });
};
