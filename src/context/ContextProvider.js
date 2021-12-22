import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchFoods from '../services';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const type = window.location.pathname === '/comidas' ? 'meals' : 'drinks';
  const action = window.location.pathname === '/comidas'
    ? 'procuraComida' : 'procuraBebida';

  useEffect(() => {
    fetchFoods({
      type,
      action,
    }).then((res) => setData(res[type]));
  }, []);

  console.log(data);

  const contextValue = { data };

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
