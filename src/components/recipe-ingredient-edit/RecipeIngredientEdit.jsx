import React from 'react'

const RecipeIngredientEdit = ({ ingredient, handleChangeIngredient, handleDeleteIngredient }) => {
  const { id, name, amount } = ingredient;

  const handleChange = (changes) => {
    handleChangeIngredient(id, { ...ingredient, ...changes })
  }

  return (
    <>
      <input className='input' type='text' value={name} onChange={(e) => handleChange({ name: e.target.value })} />
      <input className='input' type='text' value={amount} onChange={(e) => handleChange({ amount: e.target.value })} />
      <button 
        className='btn btn--danger'
        onClick={() => handleDeleteIngredient(id)}
      >
        &times;
      </button>
    </>
  )
};

export default RecipeIngredientEdit;
