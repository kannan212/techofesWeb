const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const nodemailer = require('../utils/nodemailer');

exports.getMe = (req, res, next) => {
  console.log('me');
  req.params.id = req.user.id;
  console.log('me');
  next();
};

// exports.register = (req,res,next) => {
//   res.render('pages/events');
//   console.log("working");
//
// }

// exports.check = (req,res,next) => {
//   res.send("got it");
// }

exports.register = catchAsync(async (req, res, next) => {
  // console.log("got it");
  const userData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    college: req.body.college,
    year: req.body.year,
    department: req.body.department,
    rollno: req.body.rollno
  };
  console.log("got it");

  const userexist = await User.findOne({email: userData.email});

  console.log(userexist);
  if(userexist){
    console.log("Existing user");

    var message = "Already an account registered with this email id."
  }

  const newUser = await User.create(userData);

  nodemailer.sendConfirmationEmail(
    req.body.name,
    req.body.email,
    newUser.uid
  );

message = "Your registration has been successful. Thanks for registering !! Your unique Techofes ID will be sent to your email.";

  createSendToken({uid: newUser.uid}, 201, res);

  res.redirect("pages/result",{msg: message});
});
