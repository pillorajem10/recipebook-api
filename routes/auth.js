const express = require("express");
const User = require('../models/Users');
const router = express.Router();
const jwt = require('jsonwebtoken'); //to generate signed token
const config = require ('../config/config');
const { body } = require('express-validator');

const {errorHandler} = require ('../helpers/dbErrorHandler');
const {userSignupValidator} = require('../validator')

router.post('/signup',userSignupValidator, function (req, res) {
    const user = new User(req.body);
    user.save((err, user)=> {
      if(err){
        return res.status(400).json({
          error:errorHandler(err)
        })
      }
      const { _id, name, email, role } = user
      const token = jwt.sign({ _id: user._id }, config.secret);
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
         token, _id, email, name, role
      });
    });
});

router.post('/signin', function (req, res) {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User with that email does not exist. Please signup'
          });
      }
      // if user is found make sure the email and password match
      // create authenticate method in user model
      if (!user.authenticate(password)) {
          return res.status(401).json({
              error: 'Email and password dont match'
          });
      }
      // generate a signed token with user id and secret
      const token = jwt.sign({ _id: user._id }, config.secret);
      // return response with user and token to frontend client
      const { _id, name, email, role } = user;
      return res.json({ token, _id, email, name, role  });

  });
});


router.get('/signout', function (req, res) {
    res.json({ message: 'Signout success' });
})

module.exports = router;
