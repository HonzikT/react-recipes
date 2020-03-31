import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RecipeList from './components/recipe-list/RecipeList';
import RecipeEdit from './components/recipe-edit/RecipeEdit'

import './app.scss';

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'New',
    servings: 1,
    cookTime: '1:00',
    instructions: 'Instr.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Name',
        amount: '1Tbs'
      }
    ]
  }
];

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON) setRecipes(JSON.parse(recipeJSON))
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  },[recipes]);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  };

  const handleDeleteRecipe = (id) => {
    if (selectedRecipeId != null && selectedRecipeId === id){
      setSelectedRecipeId(null)
    }

    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id)
  }

  const handleChangeRecipe = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes)
  }

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleSelectRecipe,
    handleChangeRecipe
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes ={recipes} />
      {selectedRecipe ? <RecipeEdit recipe={selectedRecipe} /> : null}
    </RecipeContext.Provider>
  )
}

export default App;
