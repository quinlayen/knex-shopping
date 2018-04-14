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

router.get('/cart', (req,res)=>{
    res.send('Cart Working');
})

module.exports = router;