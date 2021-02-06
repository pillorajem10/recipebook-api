const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

//mongoose connection
const connection = mongoose.connection;

//port
const port = 8000;

//middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(morgan('dev'));

//import routes
const auth = require('./routes/auth');
const user = require('./routes/user');
const category = require('./routes/category');
const recipe = require('./routes/recipe');

//routes middlewares
app.use('/auth', auth);
app.use('/user', user);
app.use('/category', category);
app.use('/recipe', recipe);

//mongoose || mongodb
mongoose.connect(config.database, { useNewUrlParser: true });
connection.once('open', function() {
    console.log("connected to database");
})


//listener
app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
});
