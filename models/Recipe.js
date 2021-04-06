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
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
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
