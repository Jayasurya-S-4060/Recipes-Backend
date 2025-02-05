const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema, "Recipes");

module.exports = Recipe;
