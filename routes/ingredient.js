const express = require('express');
const router = express.Router();

const {create, ingredientById, read, update, remove, list, photo, listWithPaginate} = require('../controllers/ingredient');
const { requireSignin, isAuth, isAdmin } = require('../requirements/requirements');
const { userById } = require('../controllers/user');

router.get('/get/:ingredientId',read)
router.post('/create/:userId', requireSignin,isAuth,isAdmin,create);
router.put('/update/:ingredientId/:userId', requireSignin,isAuth,isAdmin,update);
router.delete('/delete/:ingredientId/:userId', requireSignin,isAuth,isAdmin,remove);
router.get("/photo/:ingredientId", photo);
router.get('/', list)
router.get('/listpaginate', listWithPaginate)

router.param('ingredientId', ingredientById)
router.param('userId', userById);

module.exports = router;
