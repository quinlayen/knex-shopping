const express = require('express');
const router = express.Router();
const DS_users = require('../DS/DS_users')

router.get('/users', (req,res)=>{
    res.send('Users Working')
})

router.get('/users/:user_id', (req,res)=>{
    const num = Number(req.params.user_id);
    DS_users.getUserByID(num)
    .then( (data)=>{
        if (data.user_id == undefined){
            res.send('This user does not exist');
        }else{
       res.send(data)
        }
    })
        
    
})

module.exports = router;