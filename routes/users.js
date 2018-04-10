const express = require('express');
const router = express.Router();

router.get('/users', (req,res)=>{
    res.send('Users Working')
})


module.exports = router;