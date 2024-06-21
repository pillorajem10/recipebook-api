const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        price: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Ingredient", IngredientSchema);
