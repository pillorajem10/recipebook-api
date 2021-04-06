const Recipe = require('../models/Recipe');
const formidable = require ('formidable');
const { errorHandler } = require('../helpers/dbErrorHandler');
const _ = require ('lodash');
const fs = require ('fs');
const mongoose = require('mongoose');

exports.recipeById = (req,res,next,id)=>{
  Recipe.findById(id).exec((err, recipe)=>{
      if(err || !recipe){
        return res.status(400).json({
          error:'Recipe not found'
        });
      }
      req.recipe = recipe;
      next();
  });
};

exports.read = (req, res) =>{
  req.recipe.photo = undefined;
  req.recipe.photo1 = undefined;
  return res.json(req.recipe);
};

exports.reviews = async (req, res, id) => {
  const recipe = await  Recipe.findById(req.params.id);
  if (recipe) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
      userRole: req.body.userRole
    };

    if (review.comment.includes('tite')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tite')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tite')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Pepe')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('pepe')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Suso')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('suso')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Kantot')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('kantot')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Kantutan')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('kantutan')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Puta')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('puta')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Gago')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('gago')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Eut')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('eut')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Iyot')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('iyot')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tanginamo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tanginamo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tangina')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tangina')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tarantado')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tarantado')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Pakyu')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('pakyu')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Fuck')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('fuck')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Motherfucker')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('motherfucker')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Putangina')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('putangina')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Putanginamo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('putanginamo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Bobo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('bobo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tanga')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tanga')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Kupal')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('kupal')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Puke')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('puke')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Puki')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('puki')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Bilat')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('bilat')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Kipay')) {

    } else if (review.comment.includes('kipay')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('Tit3')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('tit3')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('G@go')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('g@go')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('T@nginamo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('T@ngina mo')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('P@kyu')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.includes('p@kyu')) {
      return res.status(400).json({
        error:'Your comment is inappropriate'
      });
    } else if (review.comment.length > 300) {
      return res.status(400).json({
        error:'Your comment is too long'
      });
    } else {
      recipe.reviews.push(review);
      recipe.numReviews = recipe.reviews.length;
      recipe.rating = recipe.reviews.reduce((a, c) => c.rating + a, 0) /
      recipe.reviews.length;
      recipe.finalRating = recipe.rating + recipe.reviews.length;
      const updatedRecipe = await recipe.save();
      res.status(200).send({
        data: updatedRecipe.reviews[updatedRecipe.reviews.length - 1],
        message: 'Review saved successfully.',
      });
    }
  } else {
    res.status(404).send({ message: 'Recipe Not Found' });
  }
}

exports.create = (req, res) => {
   let form = new formidable.IncomingForm()
   form.keepExtensions = true
   form.parse(req, (err, fields, files)=>{
     if(err){
       return res.status(400).json({
         error:'Image could not be uploaded'
       });
     }

     //check for fields
     const {
            name,
            description,
            category,
            recipeBy,
            instruction,
            instruction1,
            instruction2,
            instruction3,
            instruction4,
            instruction5,
            instruction6,
            instruction7,
            instruction8,
            instruction9,
            instruction10,
            instruction11,
            instruction12,
            instruction13,
            instruction14,
            instruction15,
            instruction16,
            instruction17,
            instruction18,
            instruction19,
            instruction20,
            instruction21,
            instruction22,
            instruction23,
            instruction24,
            instruction25,
            ingredients,
            ingredients1,
            ingredients2,
            ingredients3,
            ingredients4,
            ingredients5,
            ingredients6,
            ingredients7,
            ingredients8,
            ingredients9,
            ingredients10,
            ingredients11,
            ingredients12,
            ingredients13,
            ingredients14,
            ingredients15,
            ingredients16,
            ingredients17,
            ingredients18,
            ingredients19,
            ingredients20,
            ingredients21,
            ingredients22,
            ingredients23,
            ingredients24,
            ingredients25
          } = fields
     if(!category){
       return res.status(400).json({
         error:'All fields are required'
       });
     }

     let recipe = new Recipe(fields)

     //1kb is = 1000
     //1mb is = 1000000

     if(files.photo){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo.size > 1000000){
         return res.status(400).json({
           error:'Image should be less than 1MB size'
         });
       }
       recipe.photo.data = fs.readFileSync(files.photo.path)
       recipe.photo.contentType = files.photo.type
     }

     if(files.photo1){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo1.size > 1000000){
         return res.status(400).json({
           error:'Image should be less than 1MB size'
         });
       }
       recipe.photo1.data = fs.readFileSync(files.photo1.path)
       recipe.photo1.contentType = files.photo1.type
     }

     recipe.save((err, result)=>{
       if(err){
         console.log('ERROR', err)
         return res.status(400).json({
           error: errorHandler(err)
         })
       }

       res.json(result);

     })
   });
};

exports.remove = (req,res) => {
  let recipe = req.recipe;
  Recipe.findByIdAndRemove(recipe, function(err, deletedRecipe){
    if(err){
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message:"recipe deleted"
    });
  });
};

exports.update = (req, res) => {
   let form = new formidable.IncomingForm()
   form.keepExtensions = true
   form.parse(req, (err, fields, files)=>{
     if(err){
       return res.status(400).json({
         error:'Image could not be uploaded'
       });
     }

     //check for fields
     const {
       name,
       description,
       category,
       recipeBy,
       instruction,
       instruction1,
       instruction2,
       instruction3,
       instruction4,
       instruction5,
       instruction6,
       instruction7,
       instruction8,
       instruction9,
       instruction10,
       instruction11,
       instruction12,
       instruction13,
       instruction14,
       instruction15,
       instruction16,
       instruction17,
       instruction18,
       instruction19,
       instruction20,
       instruction21,
       instruction22,
       instruction23,
       instruction24,
       instruction25,
       ingredients,
       ingredients1,
       ingredients2,
       ingredients3,
       ingredients4,
       ingredients5,
       ingredients6,
       ingredients7,
       ingredients8,
       ingredients9,
       ingredients10,
       ingredients11,
       ingredients12,
       ingredients13,
       ingredients14,
       ingredients15,
       ingredients16,
       ingredients17,
       ingredients18,
       ingredients19,
       ingredients20,
       ingredients21,
       ingredients22,
       ingredients23,
       ingredients24,
       ingredients25
     } = fields
     if(!name){
       return res.status(400).json({
         error:'All fields are required'
       });
     }

     let recipe = req.recipe
     recipe =_.extend(recipe,fields)

     //1kb is = 1000
     //1mb is = 1000000

     if(files.photo){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo.size > 1000000){
         return res.status(400).json({
           error:'Image should be less than 1MB size'
         });
       }
       recipe.photo.data = fs.readFileSync(files.photo.path)
       recipe.photo.contentType = files.photo.type
     }

     if(files.photo1){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo1.size > 1000000){
         return res.status(400).json({
           error:'Image should be less than 1MB size'
         });
       }
       recipe.photo1.data = fs.readFileSync(files.photo1.path)
       recipe.photo1.contentType = files.photo1.type
     }

     recipe.save((err, result)=>{
       if(err){
         return res.status(400).json({
           error: 'Photo is required'
         })
       }

       res.json(result);

     })
   });
};


exports.list = (req, res) => {
  //for pagination
  const { pageIndex, pageSize } = req.query;
  const page = pageIndex;
  const limit = pageSize;

  let filterSearchOptions = [];

  if (req.query.category && req.query.name) {
    filterSearchOptions = [{
      $match: {
        $text: { $search: req.query.name },
        category: new mongoose.Types.ObjectId(req.query.category),
      }
    }];
  }

  if (!req.query.category && req.query.name) {
    filterSearchOptions = [{
      $match: {
        $text: { $search: req.query.name },
      }
    }];
  }

  if (req.query.category && !req.query.name) {
    filterSearchOptions = [{
      $match: {
        category: new mongoose.Types.ObjectId(req.query.category),
      }
    }];
  }

  var aggregateQuery = Recipe.aggregate(filterSearchOptions);
  // execute recipeList
  Recipe
  .aggregatePaginate(aggregateQuery,  { page, limit },
  (
    err,
    result
  ) => {
    if (err) {
      console.err(err);
    } else {
      res.json(result)
    }
  });
};

/*
exports.listSearch = (req, res) => {
    //for pagination
    const { pageIndex, pageSize } = req.query;
    const page = pageIndex;
    const limit = pageSize;
    //for searchKeyword
    // run in mongodb terminal db.recipes.createIndex({ name: "text" })
    const searchRegex = new RegExp(req.query.name);
    const regexSearchOptions = [{ $match: { $text: { $search: req.query.name } } }];
    const aggre = req.query.name ? regexSearchOptions : [];
    var aggregateQuery = Recipe.aggregate(aggre);
    // create query object to hold search value and category value
    const query = {};
    // assign search value to query.name
    if (req.query.name) {
        // find the product based on query object with 2 properties
        // search and category
        Recipe
        .aggregatePaginate(aggregateQuery,  { page, limit },
        (
          err,
          result
        ) => {
          if (err) {
            console.err(err);
          } else {
            res.json(result)
          }
        });
    }
};
*/

//for New recipes and Most popular recipes
exports.nopaginatelist = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 0;

  Recipe.find()
      .select(['-photo', '-photo1'])
      .populate('category')
      .sort([[sortBy, order]])
      .limit(limit)
      .exec((err, recipes) => {
          if (err) {
              return res.status(400).json({
                  error: 'Recipes not found'
              });
          }
          res.json(recipes);
          console.log('recipes', recipes);
      });
};

exports.listRelated = (req, res) => {
 let limit = req.query.limit ? parseInt(req.query.limit) : 6;

 Recipe.find({ _id: { $ne: req.recipe }, category: req.recipe.category })
 .limit(limit)
 .populate('category','_id name')
 .exec((err,recipes)=>{
   if (err) {
       return res.status(400).json({
           error: 'Recipes not found'
       });
   }
   res.json(recipes)
 })
}

exports.listCategories = (req, res) =>{
  Recipe.distinct("category",{},(err, categories)=>{
    if (err) {
        return res.status(400).json({
            error: 'Recipes not found'
        });
    }
    res.json(categories)
  });
}

exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === 'price') {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Recipe.find(findArgs)
        .select('-photo')
        .populate('category')
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Recipes not found'
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

// for recipe thumbnail photos
exports.photo = (req, res, next) => {
  if(req.recipe.photo.data){
    res.set('Content-Type', req.recipe.photo.contentType)
    return res.send(req.recipe.photo.data)
  }
  next();
};
// for recipe details photos
exports.photo1 = (req, res, next) => {
  if(req.recipe.photo1.data){
    res.set('Content-Type', req.recipe.photo1.contentType)
    return res.send(req.recipe.photo1.data)
  }
  next();
};
