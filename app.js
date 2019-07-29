const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); 
const app = express();



// // Set up mongoose connection
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://hiteshpr:hitesh12345@ds111562.mlab.com:11562/products';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', product);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log('Server is up and running on port ${ PORT }');
});