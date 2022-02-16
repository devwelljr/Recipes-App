import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchFoods from '../services';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [foodfilter, setFoodFilter] = useState([]);

  const type = window.location.pathname === '/comidas' ? 'meals' : 'drinks';
  const action = window.location.pathname === '/comidas'
    ? 'procuraComida' : 'procuraBebida';

  const handleClick = (event) => {
    setFoodFilter([]);
    fetchFoods({
      value: `${event.target.value}`,
      type,
      action: event.target.value !== 'clear' ? 'filterCategory' : `${action}`,
    }).then((res) => setFoodFilter(res[type]));
  };

  useEffect(() => {
    fetchFoods({
      type,
      action,
    }).then((res) => setData(res[type]));
  }, []);

  useEffect(() => {
    fetchFoods({
      type,
      action: 'categories',
    }).then((res) => setCategory(res[type]));
  }, []);

  const contextValue = { data, category, handleClick, foodfilter };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
