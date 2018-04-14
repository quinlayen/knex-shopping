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
      } else {
        return knex('user').insert({ email: email, password: password });
      }
    })
    .then(data => {
      return data;
    });
  };
  const newPassword = id => {
    return knex('user')
      .update({password: 'Boardgamer'})
      .where({ user_id: id })
      .then(data => {
        return data;
      })
  }


module.exports = {
  getUserByID,
  loginUser,
  registerUser,
  newPassword
};
