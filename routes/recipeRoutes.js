const express = require("express");
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/createRecipe", auth, createRecipe);
router.get("/recipes", auth, getRecipes);
router.get("/recipe/:id", auth, getRecipeById);
router.put("/recipe/:id", auth, updateRecipe);
router.delete("/recipe/:id", auth, deleteRecipe);

module.exports = router;
