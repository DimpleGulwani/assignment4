const mongoose= require('mongoose')
const blogspotSchema = new mongoose.Schema({
    url:{type:String,required:true,unique:true},
    title:{type:String,required:true,unique:true},
    body:{type:String,required:true},
    date:{type:Date,required:true,default:Date.now},

});
module.exports=mongoose.model('blog',blogspotSchema)