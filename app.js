const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); 
const config = require('./config');
const app = express();



// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://' + config.dbUsername + ':' + config.dbPassword + '@ds151007.mlab.com:51007/comment_app';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', product);

const PORT = process.env.PORT || config.port;

app.listen(PORT, () => {
    console.log('Server is up and running on port', PORT);
});