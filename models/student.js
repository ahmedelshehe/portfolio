var mongoose=require('mongoose');
module.exports={
    portfolio:require('./portfolio.js')};
var studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    studentPortfolio:{
        name:{
            type:String
        },
        img:{ data: Buffer, contentType: String }

    }

})
var student=mongoose.model("student",studentSchema);  
module.exports=student;