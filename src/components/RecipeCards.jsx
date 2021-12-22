import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Loading from './Loading';

function RecipeCards() {
  const { data } = useContext(MyContext);
  const PT = 13;

  const createCard = () => {
    if (data.length === 0) {
      return (<Loading />);
    }
    return data.slice(PT).map((recipe) => (
      <span key={ recipe.idMeal || recipe.idDrink }>
        <h1>{recipe.strMeal || recipe.strDrink }</h1>
        <img
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          width="120"
          alt="recipe"
        />
      </span>
    ));
  };

  return (
    <>
      {createCard()}
    </>
  );
}

export default RecipeCards;
