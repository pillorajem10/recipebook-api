const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const CommentSchema = new mongoose.Schema (
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, default: 0 },
    userRole: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const RecipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 100
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        recipeBy: {
            type: String,
            required: true,
            maxlength: 100
        },
        ingredients: {
            type: String,
            required: true,
            maxlength: 2000
        },
        ingredients1: {
            type: String,
            maxlength: 2000
        },
        ingredients2: {
            type: String,
            maxlength: 2000
        },
        ingredients3: {
            type: String,
            maxlength: 2000
        },
        ingredients4: {
            type: String,
            maxlength: 2000
        },
        ingredients5: {
            type: String,
            maxlength: 2000
        },
        ingredients6: {
            type: String,
            maxlength: 2000
        },
        ingredients7: {
            type: String,
            maxlength: 2000
        },
        ingredients8: {
            type: String,
            maxlength: 2000
        },
        ingredients9: {
            type: String,
            maxlength: 2000
        },
        ingredients10: {
            type: String,
            maxlength: 2000
        },
        ingredients11: {
            type: String,
            maxlength: 2000
        },
        ingredients12: {
            type: String,
            maxlength: 2000
        },
        ingredients13: {
            type: String,
            maxlength: 2000
        },
        ingredients14: {
            type: String,
            maxlength: 2000
        },
        ingredients15: {
            type: String,
            maxlength: 2000
        },
        ingredients16: {
            type: String,
            maxlength: 2000
        },
        ingredients17: {
            type: String,
            maxlength: 2000
        },
        ingredients18: {
            type: String,
            maxlength: 2000
        },
        ingredients19: {
            type: String,
            maxlength: 2000
        },
        ingredients20: {
            type: String,
            maxlength: 2000
        },
        ingredients21: {
            type: String,
            maxlength: 2000
        },
        ingredients22: {
            type: String,
            maxlength: 2000
        },
        ingredients23: {
            type: String,
            maxlength: 2000
        },
        ingredients24: {
            type: String,
            maxlength: 2000
        },
        ingredients25: {
            type: String,
            maxlength: 2000
        },
        measurement: {
            type: String,
            required: true,
            default: ''
        },
        measurement1: {
            type: String,
            default: ''
        },
        measurement2: {
            type: String,
            default: ''
        },
        measurement3: {
            type: String,
            default: ''
        },
        measurement4: {
            type: String,
            default: ''
        },
        measurement5: {
            type: String,
            default: ''
        },
        measurement6: {
            type: String,
            default: ''
        },
        measurement7: {
            type: String,
            default: ''
        },
        measurement8: {
            type: String,
            default: ''
        },
        measurement9: {
            type: String,
            default: ''
        },
        measurement10: {
            type: String,
            default: ''
        },
        measurement11: {
            type: String,
            default: ''
        },
        measurement12: {
            type: String,
            default: ''
        },
        measurement13: {
            type: String,
            default: ''
        },
        measurement14: {
            type: String,
            default: ''
        },
        measurement15: {
            type: String,
            default: ''
        },
        measurement16: {
            type: String,
            default: ''
        },
        measurement17: {
            type: String,
            default: ''
        },
        measurement18: {
            type: String,
            default: ''
        },
        measurement19: {
            type: String,
            default: ''
        },
        measurement20: {
            type: String,
            default: ''
        },
        measurement21: {
            type: String,
            default: ''
        },
        measurement22: {
            type: String,
            default: ''
        },
        measurement23: {
            type: String,
            default: ''
        },
        measurement24: {
            type: String,
            default: ''
        },
        measurement25: {
            type: String,
            default: ''
        },        
        instruction: {
            type: String,
            required: true,
            maxlength: 2000
        },
        instruction1: {
            type: String,
            maxlength: 2000
        },
        instruction2: {
            type: String,
            maxlength: 2000
        },
        instruction3: {
            type: String,
            maxlength: 2000
        },
        instruction4: {
            type: String,
            maxlength: 2000
        },
        instruction5: {
            type: String,
            maxlength: 2000
        },
        instruction6: {
            type: String,
            maxlength: 2000
        },
        instruction7: {
            type: String,
            maxlength: 2000
        },
        instruction8: {
            type: String,
            maxlength: 2000
        },
        instruction9: {
            type: String,
            maxlength: 2000
        },
        instruction10: {
            type: String,
            maxlength: 2000
        },
        instruction11: {
            type: String,
            maxlength: 2000
        },
        instruction12: {
            type: String,
            maxlength: 2000
        },
        instruction13: {
            type: String,
            maxlength: 2000
        },
        instruction14: {
            type: String,
            maxlength: 2000
        },
        instruction15: {
            type: String,
            maxlength: 2000
        },
        instruction16: {
            type: String,
            maxlength: 2000
        },
        instruction17: {
            type: String,
            maxlength: 2000
        },
        instruction18: {
            type: String,
            maxlength: 2000
        },
        instruction19: {
            type: String,
            maxlength: 2000
        },
        instruction20: {
            type: String,
            maxlength: 2000
        },
        instruction21: {
            type: String,
            maxlength: 2000
        },
        instruction22: {
            type: String,
            maxlength: 2000
        },
        instruction23: {
            type: String,
            maxlength: 2000
        },
        instruction24: {
            type: String,
            maxlength: 2000
        },
        instruction25: {
            type: String,
            maxlength: 2000
        },
        category: [{
            type: ObjectId,
            ref: "Category",
            required: true
        }],
        reviews: [ CommentSchema ],
        rating: { type: Number,
          default: 0,
          required: true
        },
        finalRating: { type: Number,
          default: 0,
          required: true
        },
        numReviews: {
          type: Number,
          default: 0,
          required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        photo1: {
            data: Buffer,
            contentType: String
        },
    },
    { timestamps: true }
);

RecipeSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Recipe", RecipeSchema);
