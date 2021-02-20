const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

const {create,
        recipeById,
        read,
        remove,
        update,
        list,
        listRelated,
        listCategories,
        listBySearch,
        photo,
        photo1,
        reviews,
        nopaginatelist
      } = require('../controllers/recipe');
const { requireSignin, isAuth, isAdmin } = require('../requirements/requirements');
const { userById } = require('../controllers/user');

router.post('/create/:userId', requireSignin,isAuth,isAdmin,create);

router.get('/get/:recipeId', read)

router.delete(
    "/delete/:recipeId/:userId",
    requireSignin,
    isAdmin,
    remove
);

router.put(
    "/update/:recipeId/:userId",
    requireSignin,
    isAdmin,
    update
);

router.post('/reviews/:id', reviews, requireSignin)

router.get('/', list);

router.get('/sort', nopaginatelist);

router.get('/related/:recipeId',listRelated);
router.get('/categories',listCategories);
router.post("/by/search", listBySearch);
router.get("/photo/:recipeId", photo);
router.get("/photo1/:recipeId", photo1);

router.param('userId', userById);
router.param('recipeId', recipeById);

module.exports = router;
