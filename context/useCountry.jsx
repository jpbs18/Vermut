import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState(
    localStorage.getItem('language') || 'pt'
  );

  const changeCountry = () => {
    setCountry((previousCountry) => {
      const newCountry = previousCountry === 'pt' ? 'uk' : 'pt';
      localStorage.setItem('language', newCountry)
      return newCountry
    });
  };

  return (
    <CountryContext.Provider value={{ country, changeCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('You need to use this hook inside Country Provider.');
  }

  return context;
};

CountryProvider.propTypes = {
  children: PropTypes.node,
};

export { CountryProvider, useCountry };
