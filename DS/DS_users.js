const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'knex_shopping_user',
        database:'knex_shopping'
    }
  });

  const getUserByID = (id)=>{
     return knex('user')
        .where({user_id: id})
        .select()
        .then( (data)=>{
            return data;
        })
        
  }

  module.exports = {
      getUserByID
  }