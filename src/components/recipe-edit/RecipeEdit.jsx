import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RecipeIngredientEdit from '../recipe-ingredient-edit/RecipeIngredientEdit';

import { RecipeContext } from '../../App';

import './RecipeEdit.styles.scss';

const RecipeEdit = ({ recipe }) => {
  const { handleChangeRecipe, handleSelectRecipe } = useContext(RecipeContext);

  const { name, cookTime, servings, instructions, ingredients } = recipe

  const handleChange = (changes) => {
    handleChangeRecipe(recipe.id, { ...recipe, ...changes })
  }

  const handleChangeIngredient = (id, ingredient) => {
    const newIngredients = [...ingredients];
    const index = ingredients.findIndex(i => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients })
  }

  const handleAddIngredient = () => {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    };

    handleChange({ ingredients: [...recipe.ingredients, newIngredient] })
  }

  const handleDeleteIngredient = (id) => {
    handleChange({ ingredients: recipe.ingredients.filter(i=> i.id !== id) })
  }

  return (
    <div className='recipe-edit'>
      <div className='remove-button-container'>
        <button
          className='btn remove-button'
          onClick={() => handleSelectRecipe(null)}
        >
          &times;
        </button>
      </div>
      <div className='details-grid'>
        <label className='label' htmlFor='name'>Name</label>
        <input className='input' type='text' name='name' id='name' value={name} onChange={(e) => handleChange({ name: e.target.value })} />
        <label className='label' htmlFor='cookTime'>Cook Time</label>
        <input className='input' type='text' name='cookTime' id='cookTime' value={cookTime} onChange={(e) => handleChange({ cookTime: e.target.value })} />
        <label className='label' htmlFor='servings'>Servings</label>
        <input className='input' type='number' min='1' name='servings' id='servings' value={servings} onChange={(e) => handleChange({ servings: Number(e.target.value) })} />
        <label className='label' htmlFor='instructions'>Instructions</label>
        <textarea className='input' name='instructions' id='instructions' value={instructions} onChange={(e) => handleChange({ instructions: e.target.value })} />
      </div>
      <br />
      <label className='label'>Ingredients</label>
      <div className='ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map(ingredient => <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} handleChangeIngredient={handleChangeIngredient} handleDeleteIngredient={handleDeleteIngredient} />)}
      </div>
      <div className='add-ingredient-btn-container'>
        <button 
          className='btn btn--primary'
          onClick={handleAddIngredient}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
