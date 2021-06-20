const mongoose= require('mongoose');
const uniqvalidator = require('mongoose-unique-validator');
const Schema= mongoose.Schema;
const adminSchema=Schema({
    first_name:{type:String,required:true,unique:true},
    last_name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true,minLength:8},
});
adminSchema.plugin(uniqvalidator);
module.exports=mongoose.model('admin',adminSchema);