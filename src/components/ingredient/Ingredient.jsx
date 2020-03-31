import React from 'react';

const Ingredient = ({ name, amount }) => (
  <>
    <span>{name}</span>
    <span>{amount}</span>
  </>
);

export default Ingredient