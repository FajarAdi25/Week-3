const { response, responseError } = require("../helpers/response")
const { getAllRecipes, createRecipe, findIdRecipe, updateRecipe, deleteRecipe } = require("../models/recipeModel")

const recipeController = {
    getAllRecipes: async (req, res) => {
        try {
            const recipes = await getAllRecipes()
            response(res, recipes.rows, 200, "get data successful")
        } catch (error) {
            responseError(res, 404, "recipes not found")
        }
    },

    addRecipe: async (req, res) => {
        try {
            const {body} = req;
            for (let key in body) {
                if (!body[key]) {
                    throw new Error("some field are blank")
                }
              }
            await createRecipe(body)
            response(res, body, 201, "create successful")
        } catch (error) {
            responseError(res, 400, error.message)
        }
    },

    editRecipe: async (req, res) => {
        try {
            const id = req.params.recipes_id
            const recipeId = await findIdRecipe(id)
            if (!recipeId.rowCount) {
                throw new Error("user id not found")
            }
            const recipeData = recipeId.rows[0]
            // console.log(recipeData);

            const { body } = req
            let newRecipeData = {
                name_recipes: body.name_recipes || recipeData.name_recipes,
                ingredients: body.ingredients || recipeData.ingredients,
                image: body.image || recipeData.image,
                name_video: body.name_video || recipeData.name_video,
                video: null || recipeData.video,
              };
              await updateRecipe(newRecipeData, id)
              response(res, newRecipeData, 200, "update successful")
        } catch (error) {
            responseError(res, 400, error.message)
        }
    },

    deleteRecipe: async (req, res) => {
        try {
            const id = req.params.recipes_id;
            const recipeId = await findIdRecipe(id)
            if (!recipeId.rowCount) {
                throw new Error("recipe id is not found")
            }
            await deleteRecipe(id)
            response(res, null, 200, "delete successful")
        } catch (error) {
            responseError(res, 400, error.message)
        }
    }

}

module.exports = recipeController