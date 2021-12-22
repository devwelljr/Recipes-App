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
      <section key={ recipe.idMeal }>
        <h1>{recipe.strMeal}</h1>
        <img src={ recipe.strMealThumb } width="120" alt="recipe" />
      </section>
    ));
  };

  return (
    <>
      {createCard()}
    </>
  );
}

export default RecipeCards;
