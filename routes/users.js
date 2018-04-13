const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'knex_shopping_user',
        database:'knex_shopping'
    }
  })

router.get('/users', (req,res)=>{
    res.send('Users Working')
})

router.get('/users/:user_id', (req,res)=>{
    const num = Number(req.params.user_id);
    knex.select('user_id').from('user')
    .where({
        user_id: num
    })
    .then( (data)=>{
        console.log('data', data);
    })
})

module.exports = router;