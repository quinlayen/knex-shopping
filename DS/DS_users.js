const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'knex_shopping_user',
    database: 'knex_shopping'
  }
});

const getUserByID = id => {
  return knex('user')
    .where({ user_id: id })
    .select()
    .then(data => {
      return data;
    });
};

const loginUser = (email, password) => {
  return knex('user')
    .where({ email: email })
    .then(data => {
      if (data.length === 0) {
        return 'Email does not exist';
      } else if (data[0].password !== password) {
        return 'Wrong password';
      } else {
        return data;
      }
    });
};

const registerUser = (email, password) => {
  return knex('user')
    .where({ email: email })
    .then(data => {
      if (data.length !== 0) {
        return 'Email already exists';
      }else{
        return knex('user').insert({ email: email, password: password });
      }
    })
    
    .then(data => {
      return data;
    });

  // return knex('user')
  //   .insert({ email: email, password: password })
  //   .whereNotExists(knex.select('user').where({ email: email }))
  //   .then(data =>{
  //     console.log('data', data.rows);
  //   })
};

module.exports = {
  getUserByID,
  loginUser,
  registerUser
};
