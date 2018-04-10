const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000; 

app.use(require('./routes'));


app.listen(PORT,()=>{
    console.log('Server is running on ' + PORT)
});