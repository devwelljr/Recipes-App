import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchFoods from '../services';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchFoods({
      endPoints: 'food',
      type: 'food',
      action: 'procuraComida',
    }).then((res) => setData(res.meals));
  }, []);

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
