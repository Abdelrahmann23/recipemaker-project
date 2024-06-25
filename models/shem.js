const mongoose = require('mongoose');
const Schem = mongoose.Schema;

const recipeSchema = new Schem({
    recipeName: { type: String, required: true },
    dropdownnnr: { type: String, required: true },
    newIngredient: { type: String, required: true },
    recipe: { type: String, required: true },
    recipeImage: { type: String, required: true } // Correct field name for the image filename
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;