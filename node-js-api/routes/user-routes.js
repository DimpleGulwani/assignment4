const express = require('express');
const checkAuth = require('../middlewares/check-auth');
const userController = require('../contollers/user-controller');
const BlogController = require('../contollers/blog-controller');
const router = express.Router();


router.post('/signup',userController.userSignup);
router.post('/login',userController.userLogin);


router.use(checkAuth);


router.get('/getinfo/:userName/:userAge',userController.userInfo);
router.post('/publishPost',BlogController.publishpost);//post blog
  
module.exports= router;