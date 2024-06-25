const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredientName: { type: String, required: true },
    dropdownnn: { type: String, required: true },
    ingredientImage: { type: String, required: true } // Field for the image filename
});

const Mydata = mongoose.model('Mydata', ingredientSchema);

module.exports = Mydata;
//`