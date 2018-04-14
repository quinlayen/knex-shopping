const express = require('express');
const router = express.Router();
const DS_users = require('../DS/DS_users');

router.get('/users', (req, res) => {
  res.send('Users Working');
});
//retrieves a user by its ID
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
//allows a user to log in.  Checks if user email and password match
router.post('/users/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  DS_users.loginUser(email, password).then(data => {
    res.send(data);
  });
});
//allows a user to register a new email.  Checks if the email already exists first.
router.post('/users/register', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    DS_users.registerUser(email, password).then(data =>{
        res.send(data);
    })
})
//allows a user to change a forgotten password
router.put('/users/:user_id/forgot-password', (req,res)=>{
  DS_users.newPassword(req.params.user_id).then(data=>{
    res.send('Password has been updated')
  })
})
//allows a user to delete an existing user
router.delete('/users/:user_id', (req,res)=>{
  DS_users.deleteUser(req.params.user_id).then(data=>{
    res.send('User has been deleted')
  })
})


module.exports = router;
