# Recipes CRUD API Documentation
backend api endpoint - https://recipes-backend-5mp6.onrender.com

get - https://recipes-backend-5mp6.onrender.com/api/recipes?security=valid
delete - https://recipes-backend-5mp6.onrender.com/api/recipe/:id?security=valid
put  - https://recipes-backend-5mp6.onrender.comapi/recipe/:id?security=valid
{
name : "butter chicken"
}
post -https://recipes-backend-5mp6.onrender.com/api/createRecipe?security=valid
 {
   
    "name": "Grill Chicken",
    "ingredients": [
      "Chicken breast",
      "Butter",
      "Garlic",
      "Salt",
      "Pepper",
      "Parsley"
    ],
    "steps": [
      "Melt butter in a pan over medium heat.",
      "Add minced garlic and sauté until fragrant.",
      "Season chicken with salt and pepper, then add to the pan.",
      "Cook for 6-7 minutes per side until golden brown and cooked through.",
      "Garnish with chopped parsley and serve."
    ]
  
  }


## 1. **Create a Recipe**
- **Endpoint**: `POST /api/recipes`
- **Description**: Create a new recipe.
- **Request**:
  - **Method**: `POST`
  - **Body** (JSON):
    ```json
    {
      "name": "Pasta",
      "ingredients": ["pasta", "tomato", "cheese"],
      "instructions": "Boil the pasta. Add tomato sauce and cheese. Mix well."
    }
    ```

- **Response**:
  - **Status Code**: `201 Created`
  - **Body** (JSON):
    ```json
    {
      "message": "Recipe created successfully",
      "recipe": {
        "_id": "60a67f99f5d9b7b3d8a1f56d",
        "name": "Pasta",
        "ingredients": ["pasta", "tomato", "cheese"],
        "instructions": "Boil the pasta. Add tomato sauce and cheese. Mix well.",
        "__v": 0
      }
    }
    ```

---

## 2. **Get All Recipes**
- **Endpoint**: `GET /api/recipes`
- **Description**: Retrieve all recipes.
- **Request**:
  - **Method**: `GET`

- **Response**:
  - **Status Code**: `200 OK`
  - **Body** (JSON):
    ```json
    [
      {
        "_id": "60a67f99f5d9b7b3d8a1f56d",
        "name": "Pasta",
        "ingredients": ["pasta", "tomato", "cheese"],
        "instructions": "Boil the pasta. Add tomato sauce and cheese. Mix well.",
        "__v": 0
      },
      {
        "_id": "60a67f99f5d9b7b3d8a1f56e",
        "name": "Pizza",
        "ingredients": ["dough", "cheese", "tomato"],
        "instructions": "Prepare the dough. Add cheese and tomato. Bake."
      }
    ]
    ```

---

## 3. **Get a Recipe by ID**
- **Endpoint**: `GET /api/recipes/:id`
- **Description**: Retrieve a single recipe by its ID.
- **Request**:
  - **Method**: `GET`
  - **URL Parameters**:
    - `id`: The unique ID of the recipe.

  Example:
  - `GET /api/recipes/60a67f99f5d9b7b3d8a1f56d`

- **Response**:
  - **Status Code**: `200 OK`
  - **Body** (JSON):
    ```json
    {
      "_id": "60a67f99f5d9b7b3d8a1f56d",
      "name": "Pasta",
      "ingredients": ["pasta", "tomato", "cheese"],
      "instructions": "Boil the pasta. Add tomato sauce and cheese. Mix well.",
      "__v": 0
    }
    ```

---

## 4. **Update a Recipe**
- **Endpoint**: `PUT /api/recipes/:id`
- **Description**: Update an existing recipe by its ID.
- **Request**:
  - **Method**: `PUT`
  - **URL Parameters**:
    - `id`: The unique ID of the recipe.
  - **Body** (JSON):
    ```json
    {
      "name": "Updated Pasta",
      "ingredients": ["pasta", "tomato", "cheese", "basil"],
      "instructions": "Boil the pasta. Add tomato sauce, cheese, and basil. Mix well."
    }
    ```

- **Response**:
  - **Status Code**: `200 OK`
  - **Body** (JSON):
    ```json
    {
      "message": "Recipe updated successfully",
      "recipe": {
        "_id": "60a67f99f5d9b7b3d8a1f56d",
        "name": "Updated Pasta",
        "ingredients": ["pasta", "tomato", "cheese", "basil"],
        "instructions": "Boil the pasta. Add tomato sauce, cheese, and basil. Mix well.",
        "__v": 0
      }
    }
    ```

---

## 5. **Delete a Recipe**
- **Endpoint**: `DELETE /api/recipes/:id`
- **Description**: Delete a recipe by its ID.
- **Request**:
  - **Method**: `DELETE`
  - **URL Parameters**:
    - `id`: The unique ID of the recipe.

  Example:
  - `DELETE /api/recipes/60a67f99f5d9b7b3d8a1f56d`

- **Response**:
  - **Status Code**: `200 OK`
  - **Body** (JSON):
    ```json
    {
      "message": "Recipe deleted successfully"
    }
    ```

---


