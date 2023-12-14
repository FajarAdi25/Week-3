const express = require("express")
const { getAllRecipes, addRecipe, editRecipe, deleteRecipe } = require("../controllers/recipeController")
const router = express.Router()

router.get("/recipes", getAllRecipes)
router.post("/addRecipe", addRecipe)
router.put("/recipe/:recipes_id", editRecipe)
router.delete("/recipe/:recipes_id", deleteRecipe)


module.exports = router