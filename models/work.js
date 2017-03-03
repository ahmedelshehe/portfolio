var mongoose = require('mongoose');
var workSchema= new mongoose.Schema(
    {
        description:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true

        }
    }
);
var work = mongoose.model("work", workSchema);
module.exports=work;
