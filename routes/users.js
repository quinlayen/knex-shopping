const express = require('express');
const router = express.Router();
const DS_users = require('../DS/DS_users');

router.get('/users', (req, res) => {
  res.send('Users Working');
});

router.get('/users/:user_id', (req, res) => {
  const num = Number(req.params.user_id);
  DS_users.getUserByID(num).then(data => {
    if (data[0].user_id === undefined) {
      res.JSON('This user does not exist');
    } else {
      res.JSON(data);
    }
  });
});

router.post('/users/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  DS_users.loginUser(email, password).then(data => {
    res.send(data);
  });
});

router.post('/users/register', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    DS_users.registerUser(email, password).then(data =>{
        res.send(data);
    })
})

module.exports = router;
