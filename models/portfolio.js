var mongoose=require('mongoose');
module.exports={
    work:require('./work')
};
var portfolioSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    works:[{
        work:{
            type:Array
        },
    img: { data: Buffer, contentType: String }    
    }

    ]
});
var portfolio = mongoose.model("portfolio", portfolioSchema);
module.exports=portfolio;
