let client=require('../models/client');
let clientController={
    createClient:function(req,res){
        let client=new client(req.body.name,req.body.password);
        client.save(function(err,client){
            if(err){
                res.send(err.message);
                console.log(err);
            }else{
                console.log(student);
                res.redirect('/');
            }
        })
    }
}
module.exports=clientController;