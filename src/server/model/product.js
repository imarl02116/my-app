const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    coverImage: String,
    name: { type: String, required: true },
    price: String,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    heading1: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
});

module.exports = mongoose.model('Product', Product);
