const express = require('express');//for express
const app = express();
//session
const session = require("express-session");
const {v4:uuidv4} = require("uuid");
const bodyParser = require('body-parser');//body Parser
require("dotenv").config(); //env
//router
const mongoose = require('mongoose');
const auth = require('./routes/login');
const users = require('./routes/signup');
const logout = require('./routes/logout');
const dashboard = require('./routes/dashboard');
const addmoney = require('./routes/addmoney');
// const getmoney = require('./routes/getMoney');

//mongodb connection
const url = process.env.URL;
mongoose.connect(url)
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//create session for logout
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

//for ejs engin
app.set('view engine', 'ejs');
app.set('views',__dirname+'/public/views' );

app.use(express.static('public'))
app.use(express.json());
//route
app.use('/signup', users);
app.use('/login', auth);
app.use('/', dashboard);
app.use('/logout', logout);
app.use('/addmoney', addmoney);

//server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
 
