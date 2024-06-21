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

/*
exports.create = (req, res) => {
   let form = new formidable.IncomingForm()
   form.keepExtensions = true
   form.parse(req, (err, fields, files) => {
     if(err){
       return res.status(400).json({
         error:'Image could not be uploaded'
       });
     }

     //check for fields
     const { name } = fields
     if(!name){
       return res.status(400).json({
         error:'All fields are required'
       });
     }

     let ingredient = new Ingredient(fields)

     //1kb is = 1000
     //1mb is = 1000000

     if(files.photo){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo.size > 9000000){
         return res.status(400).json({
           error:'Image should be less than 9MB size'
         });
       }
       ingredient.photo.data = fs.readFileSync(files.photo.path)
       ingredient.photo.contentType = files.photo.type
     }


     ingredient.save((err, result)=>{
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
*/

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
