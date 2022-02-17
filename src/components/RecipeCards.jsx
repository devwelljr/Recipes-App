import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Loading from './Loading';

function RecipeCards() {
  const { data, foodfilter } = useContext(MyContext);

  const NUM13 = 13;
  const NUM12 = 12;

  const createCard = (request, num) => {
    if (data.length === 0) {
      return (<Loading />);
    }
    return request.slice(0, num).map((recipe) => (
      <div key={ recipe.strMeal || recipe.strDrink }>
        <h1>{recipe.strMeal || recipe.strDrink }</h1>
        <button
          type="button"
        >
          <img
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            width="120"
            alt="recipe"
          />
        </button>
      </div>
    ));
  };

  return (
    <section>
      { foodfilter === null || foodfilter.length === 0
        ? createCard(data, NUM13) : createCard(foodfilter, NUM12)}
    </section>
  );
}

export default RecipeCards;
