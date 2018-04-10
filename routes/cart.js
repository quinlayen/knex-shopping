const express = require('express');
const router = express.Router();

router.get('/cart', (req,res)=>{
    res.send('Cart Working');
})

module.exports = router;