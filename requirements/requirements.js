const expressJwt = require('express-jwt');//for authorization check
const config = require('../config/config')

exports.requireSignin = expressJwt({
    secret: config.secret,
    algorithms: ["HS256"], // added later
    userProperty: "auth"
});

exports.isAuth = (req,res,next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id
      if(!user){
        return res.status(403).json({
          error:"Access denied"
        });
      }
      next();
};

exports.isAdmin = (req,res,next) => {
  if(req.profile.role === 0){
    return res.status(403).json({
      error:"Admin resource! access denied"
    });
  }

  next();

}
