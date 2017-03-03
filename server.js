var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var route=require('./routes/router');
var DB_URI = "mongodb://localhost:27017/app";
var path=require('path');
var morgan = require('morgan');
var app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

// configure app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
app.use(morgan('dev'));
mongoose.connect(DB_URI);
app.use(route);





// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
app.models=require('./models/student');

