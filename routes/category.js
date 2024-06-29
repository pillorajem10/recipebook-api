const express = require('express');
const router = express.Router();

const {create, categoryById, read, update, remove, list, photo, listWithPaginate} = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../requirements/requirements');
const { userById } = require('../controllers/user');

router.get('/get/:categoryId',read)
router.post('/create/:userId', requireSignin,isAuth,isAdmin,create);
router.put('/update/:categoryId/:userId', requireSignin,isAuth,isAdmin,update);
router.delete('/delete/:categoryId/:userId', requireSignin,isAuth,isAdmin,remove);
router.get("/photo/:categoryId", photo);
router.get('/',list)
router.get('/listpaginate', listWithPaginate)

router.param('categoryId', categoryById)
router.param('userId', userById);

module.exports = router;
