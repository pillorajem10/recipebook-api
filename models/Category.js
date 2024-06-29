const mongoose = require("mongoose");

const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
    },
    { timestamps: true }
);

CategorySchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Category", CategorySchema);
