const express = require('express');
const checkAuth = require('../middlewares/check-auth');
const adminController = require('../contollers/user-controller');
const router = express.Router();


router.post('/signup',adminController.adminSignUp);
router.post('/login',adminController.adminLogin);


  
module.exports= router;