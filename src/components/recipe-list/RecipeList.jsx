import React, { useContext } from 'react';

import Recipe from '../recipe/Recipe';

import { RecipeContext } from '../../App';

import './RecipeList.styles.scss';

const RecipeList = ({ recipes }) => {
  const { handleAddRecipe } = useContext(RecipeContext)

  return(
    <div className='recipe-list'>
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
            />
          )
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button 
          className='btn btn--primary'
          onClick={handleAddRecipe}
        >
          Add recipe
        </button>
      </div>
    </div>
  )

};

export default RecipeList;
