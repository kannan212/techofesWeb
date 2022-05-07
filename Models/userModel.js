const mongoose = require('mongoose');
const validator = require('validator');
const timezone = require('mongoose-timezone');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Provide a username.'],
    },
    email: {
        type: String,
        required: [true, 'Provide an email for your account.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, `Please provide a valid email`]
    },
    phone: {
      type: String,
      required: [true,'Provide a Phone number'],
      minlength:[10,`Please provide valid 10 digit mobile number`],
      maxlength:[10,`Please provide valid 10 digit mobile number`],
      validate: [validator.isNumeric ,`Please provide a valid number`]
    },
    college:{
      type: String,
      required: [true,'Mention your College/School Name']
    },
    year:{
      type: String,
      required: [true,'Mention your year of study in School/College'],
    },
    department:{
      type: String,
      required: [true,'Mention your department']
    },
    rollno:{
      type: String,
      required: [true,'Mention your School/College Roll Number']
    },
    uid:{
      type: String,
      default: function(){
        return 'T' + Date.now().toString(36).substring(2).toUpperCase();
      },
    },
    DateOfCreation: {
        type: Date,
        default: Date.now,
    }
});

userSchema.plugin(timezone, { paths: ['DateofCreation.default'] });


const User = mongoose.model('User', userSchema);
module.exports = User;
