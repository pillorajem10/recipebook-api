const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dbErrorHandler');
const formidable = require ('formidable');
const _ = require ('lodash');
const fs = require ('fs');

exports.categoryById = (req,res,next,id)=>{
  Category.findById(id).exec((err,category)=>{
    if(err || !category){
      return res.status(400).json({
          error: 'Category does not exist'
      });
    }
    req.category = category;
    next();
  })
}

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

     let category = new Category(fields)

     //1kb is = 1000
     //1mb is = 1000000

     if(files.photo){
       //console.log("FILES PHOTO: ", files.photo);
       if(files.photo.size > 9000000){
         return res.status(400).json({
           error:'Image should be less than 9MB size'
         });
       }
       category.photo.data = fs.readFileSync(files.photo.path)
       category.photo.contentType = files.photo.type
     }


     category.save((err, result)=>{
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

exports.photo = (req, res, next) => {
  if(req.category.photo.data){
    res.set('Content-Type', req.category.photo.contentType)
    return res.send(req.category.photo.data)
  }
  next();
};


exports.read = (req,res) =>{
  return res.json(req.category);
};

exports.update = (req,res) => {
  const category = req.category
  category.name = req.body.name
  category.save((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json(data);
  })
}

exports.remove = (req,res) => {
  const category = req.category
  category.remove((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json({
      message:"Category removed"
    });
  })
}

exports.list = (req,res) => {
  Category.find().exec((err, data)=>{
    if(err){
      return res.status(400).json({
        error:errorHandler(err)
      });
    }
    res.json(data);
  });
};
