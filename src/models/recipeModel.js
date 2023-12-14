const db = require("../configs/db")

const getAllRecipes = async () => {
    const queryRecipe = await db.query (
        `SELECT * FROM food_recipes`
    )
    return queryRecipe
}

const findIdRecipe = async (id) => {
    const queryRecipe = await db.query (
        `SELECT 
            food_recipes.*, 
            users.username AS creator, 
            TO_CHAR(food_recipes.created_at, 'DD-MM-YYYY HH24:MI:SS') AS created_at
        FROM 
            food_recipes
        LEFT JOIN 
            users
        ON 
            food_recipes.users_id = users.users_id
        WHERE 
            food_recipes.recipes_id = ${id}`
    )
    return queryRecipe
}

const createRecipe = async (body) => {
    const queryRecipe = await db.query (
        `INSERT INTO food_recipes (name_recipes, ingredients ,image, name_video, video, users_id) 
        VALUES ('${body.name_recipes}','${body.ingredients}','${body.image}','${body.name_video}','${body.video}',${body.users_id})`
    )
    return queryRecipe
}

const updateRecipe = async (body, id) => {
    const queryRecipe = await db.query (
        `UPDATE food_recipes SET name_recipes = '${body.name_recipes}', image = '${body.image}',ingredients= '${body.ingredients}',video ='${body.video}', name_video = '${body.name_video}'WHERE food_recipes.recipes_id=${id}`
    )
    return queryRecipe
}

const deleteRecipe = async (id) => {
    const queryRecipe = await db.query (
        `DELETE FROM food_recipes WHERE food_recipes.recipes_id = ${id}`
    )
    return queryRecipe
}

module.exports = {
    getAllRecipes,
    findIdRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}