const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/FastifyCrud')
     .then(() => console.log('mongoDB Conected'))
     .catch(err => console.log(err));