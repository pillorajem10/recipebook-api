const Ingredient = require('../models/Ingredient');
const { errorHandler } = require('../helpers/dbErrorHandler');
const formidable = require ('formidable');
const _ = require ('lodash');
const fs = require ('fs');

exports.ingredientById = (req,res,next,id)=>{
  Ingredient.findById(id).exec((err,ingredient)=>{
    if(err || !ingredient){
      return res.status(400).json({
          error: 'Ingredient does not exist'
      });
    }
    req.ingredient = ingredient;
    next();
  })
}

exports.create = (req, res) => {  
    Ingredient.create(req.body, function (err, cat) {
        console.log('REQQQQQQQQQQQQQQQQ', req.body)
        if (err) {
            console.log('ERROR', err)
            return res.status(400).json({
                error: errorHandler(err)
            })
        } else {
            res.json(cat);
        }
    });
  }

exports.photo = (req, res, next) => {
  if(req.ingredient.photo.data){
    res.set('Content-Type', req.ingredient.photo.contentType)
    return res.send(req.ingredient.photo.data)
  }
  next();
};


exports.read = (req,res) =>{
  return res.json(req.ingredient);
};

exports.update = (req,res) => {
  const ingredient = req.ingredient
  ingredient.name = req.body.name
  ingredient.measurementCosting = req.body.measurementCosting
  ingredient.price = req.body.price
  ingredient.save((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json(data);
  })
}

exports.remove = (req,res) => {
  const ingredient = req.ingredient
  ingredient.remove((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json({
      message:"Ingredient removed"
    });
  })
}

exports.list = (req,res) => {
  Ingredient.find().exec((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json(data);
  });
};


exports.listWithPaginate = async (req, res) => {
  try {
    const { pageIndex, pageSize, name } = req.query;
    const page = parseInt(pageIndex, 10) || 1;
    const limit = parseInt(pageSize, 10) || 10;

    let filterSearchOptions = [];

    if (name) {
      filterSearchOptions.push({
        $match: {
          $text: { $search: name },
        },
      });
    }

    const aggregateQuery = Ingredient.aggregate(filterSearchOptions);

    const options = {
      page,
      limit,
    };

    Ingredient.aggregatePaginate(aggregateQuery, options, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred while fetching recipes.' });
      }

      res.json(result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
};