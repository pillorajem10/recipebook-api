const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin} = require('../requirements/requirements');

const {userById,read,update} = require('../controllers/user');

router.get('/secret/:userId', requireSignin,isAuth,isAdmin,(req, res)=>{
  res.json({
    user:req.profile
  });
});

router.get('/get/:userId',requireSignin);
router.put('/update/:userId',requireSignin,isAuth,update);

router.param('userId', userById)

module.exports = router;
