const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HttpError = require("../utils/http-error");
const usermodel = require("../models/user-model");


const userSignup = async (req, res, next) => {
  const { first_name, last_name, email, password, DateofBirth } = req.body;
  let userExist;
  try {
    userExist = await user.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("sign up failed", 500);
    return next(error);
  }
  if (userExist) {
    const error = new HttpError("user already in use", 500);
    return next(error);
  }
  let hashpassword;
  try {
    hashpassword = bcrypt.hash(password, 10);
  } catch (err) {
    console.log(err);
    const error = new HttpError("sign up failed", 500);
    return next(error);
  }
  const creatUser = new User({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: hashpassword,
    DateofBirth: DateofBirth,
  });
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let userExist;
  try {
    userExist = await User.findOne({
      email: email,
    });
  } catch (err) {
    const error = new HttpError("Login failed, Please try later", 500);
    return next(error);
  }

  if (!userExist) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, userExist.password);
  } catch (err) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: userExist.id,
        email: userExist.email,
      },
      "userSecretKey",
      { expiresIn: "3m" }
    );

    // console.log(token);
  } catch (err) {
    const error = new HttpError("Login Failed, Please try later", 403);
    return next(error);
  }

  res.status(200).json({
    email: userExist.email,

    token: token,
  });
};
const userGetInfo = (req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  res.json({
    user:{
      email:userExist.email,
      
    }
  })
    
  
};

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;
