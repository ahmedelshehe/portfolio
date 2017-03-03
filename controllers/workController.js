let work =require('../models/work');
let workController={
    getAllWorks:function(req,res){
        work.find(function(err,works){
            if(err){
                res.send(err.message);
            }else{
                res.render('index',{works});
            }

        })
    },
    createWork:function(req,res){
        let work=new work(req.body.description,req.body.url);
        work.save(function(err,work){
            if(err){
                res.send(err.message);
                console.log(err);
            }else{
                console.log(work);
                res.redirect('/works');
            }
        })
    }
};
module.exports=workController;
