const HttpError = require('../utils/http-error');

const adminSignUp =((req,res,next)=>{
    console.log(req.body);
    return res.JSON({'meassage':'admin signed up'});
});
const adminLogin = ((req,res,next)=>{
    console.log(req.body);
    return res.status(200).JSON({'message': 'admin logged in'});
});
 
exports.adminSignUp = adminSignUp;
exports.adminLogin = adminLogin;
