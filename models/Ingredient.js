const mongoose = require("mongoose");

const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const IngredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        measurementCosting: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        price: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

IngredientSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Ingredient", IngredientSchema);
