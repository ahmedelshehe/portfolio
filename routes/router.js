var express=require('express');
var router=express.Router();
var fs=require('fs');
var path=require('path');
var passport=require('passport');
var LocalStrategy = require('passport-local').Strategy;
var workController=require('../controllers/workController');
var portfolioController=require('../controllers/portfolioController');
var studentController=require('../controllers/studentController');
var clientController=require('../controllers/clientController');

var path = require('path');


router.use(function(req,res,next){
    
    console.log("Ahmed")
    console.log("working");
    
    
    next();
})

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '', 'index.html'));
});
router.get('/create', function(req,res){
    res.sendFile(path.join(__dirname, '', 'create.html'));
    
});
passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getStudentByUsername(username, function(err, student){
   	if(err) throw err;
   	if(!student){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

router.post('/', studentController.createStudents);
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.redirect('/works');
  });

router.get('/works', function(req,res){
    res.sendFile(path.join(__dirname, '', 'works.html'));
});

module.exports=router;



