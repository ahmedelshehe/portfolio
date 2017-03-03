var student=require('../models/student');
let studentController={
    getAllStudents:function(req,res){
        student.find(function(err,students){
            if(err){
                res.send(err.message);
            }else{
                res.render('index',{students});
            }
        })
    },
    createStudents:function(req,res){
        var s=new student(req.body);
        req.body.pname=s.studentPortfolio.name;
        s.save(function(err,s){
            if(err){
                res.send(err.message);
            }else{
                console.log(s);
                res.redirect('/');
                

            }
        })
    },
    getStudentByUsername:function(username, callback){
	var query = {username: username};
	student.findOne(query, callback);
},

    getStudentById:function(id, callback){
	student.findById(id, callback);
},

    comparePassword:function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
};



module.exports=studentController;

