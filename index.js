// Importing all the necessary modules
const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');


// Setting View Engine to EJS
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('./assets'));


// ROUTES
app.use('/',require('./routes/home'));


// SERVER LISTINING
app.listen(port,function(err){
    if(err){
        console.log("The server is Running");
    }
    console.log("The Server is Running Successfully");

});

