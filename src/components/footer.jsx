import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import ContainerFooter from '../styles/footer';

const Footer = () => (
  <ContainerFooter className="FooterPags" data-testid="footer">
    <Link to="/bebidas">
      <img
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Icone de bebida"
      />
    </Link>
    <Link to="/comidas">
      <img
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="Icone de comidas"
      />
    </Link>
    <Link to="/explorar">
      <img
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Icone de explorar"
      />
    </Link>
  </ContainerFooter>
);

export default Footer;
