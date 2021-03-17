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
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/category', category);
app.use('/api/recipe', recipe);

//mongoose || mongodb
mongoose.connect(config.database, { useNewUrlParser: true });
connection.once('open', function() {
    console.log("connected to database");
})


app.get('/api', (req, res) => {
  res.send('レシピブック')
})

//listener
app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
});
