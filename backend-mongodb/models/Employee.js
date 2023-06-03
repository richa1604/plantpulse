const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeschema = new Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    avatar:{
        type:String
    }
    /*
    age:{
        type:Number
    },*/
},{timestamps:true})
const Employee=mongoose.model('Employee',employeeschema)
module.exports=Employee