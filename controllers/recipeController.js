const Recipe = require("../models/Recipe");

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe successfully created", recipe: newRecipe });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating recipe", error: err.message });
  }
};

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching recipes", error: err.message });
  }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching recipe", error: err.message });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedRecipe) {
      res
        .status(200)
        .json({ message: "Successfully updated", recipe: updatedRecipe });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating recipe", error: err.message });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const result = await Recipe.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting recipe", error: err.message });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
