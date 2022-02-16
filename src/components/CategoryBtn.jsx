import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

function CategorotyBtn() {
  const { category, handleClick } = useContext(MyContext);
  const NUMBER = 5;

  const generateCategory = () => category.slice(0, NUMBER).map((cate) => (
    <button
      data-testid="categoryName}-category-filter"
      type="button"
      value={ cate.strCategory }
      onClick={ (e) => handleClick(e) }
      key={ cate.strCategory }
    >
      {cate.strCategory}
    </button>
  ));

  return (
    <>
      { generateCategory() }
      <input
        type="button"
        value="clear"
        onClick={ (e) => handleClick(e) }
      />
    </>
  );
}

export default CategorotyBtn;
