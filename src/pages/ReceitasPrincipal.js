import React from 'react';
import Footer from '../components/footer';

import RecipeCards from '../components/RecipeCards';
import CategorotyBtn from '../components/CategoryBtn';

function ReceitasPrincipal() {
  return (
    <>
      <h1> ReceitasPrincipal </h1>
      <CategorotyBtn />
      <RecipeCards />
      <Footer />
    </>
  );
}

export default ReceitasPrincipal;
