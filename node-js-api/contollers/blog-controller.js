const blogspot = require('../models/blog-model');
const publishpost =((req,res,next)=>{
    const newblog= new blog(req.body);
        newblog.save((err,blog)=>{
            if(err)
            {
               return res.JSON({'message':'cant publish the post' });
            }
            else{
               return res.status(200).JSON({'message':'blog is published'});
            }
        });
    

});
 exports.publishpost=publishpost;